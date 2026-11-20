import { createHash, randomBytes } from "node:crypto";
import { connectDb, isDbConfigured } from "@/lib/db";
import { devFindByToken, devSave } from "@/lib/dev-store";
import { sendEnquiryEmails } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { enquiryPayloadSchema } from "@/lib/validation";
import { Enquiry } from "@/models/Enquiry";

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 2500; // humans need more than 2.5s to fill a form
const MAX_AGE_MS = 1000 * 60 * 60 * 24; // ignore forms open for >24h

const json = (body: Record<string, unknown>, status = 200, headers?: HeadersInit) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

function newReference() {
  // 8 chars from an unambiguous alphabet, e.g. TS-7K4M9QXD
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(8);
  let out = "";
  for (const b of bytes) out += alphabet[b % alphabet.length];
  return `TS-${out}`;
}

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients; other layers handle abuse
  try {
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, message: "Forbidden" }, 403);

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, message: "Unsupported content type" }, 415);
  }

  const ip = clientIp(req);
  if (!rateLimit(`enquiry:${ip}`, 8, 10 * 60 * 1000)) {
    return json(
      { ok: false, message: "Too many enquiries from this connection. Please try again shortly or call us." },
      429,
      { "Retry-After": "600" },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, message: "Request too large" }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, message: "Invalid request" }, 400);
  }

  const parsed = enquiryPayloadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      fieldErrors[key] ??= issue.message;
    }
    return json({ ok: false, message: "Please check the highlighted fields.", fieldErrors }, 422);
  }
  const data = parsed.data;

  // Spam traps. Respond as if successful so bots get no signal to adapt to.
  const age = Date.now() - data.startedAt;
  if (data.website || age < MIN_FILL_MS || age > MAX_AGE_MS) {
    return json({ ok: true, reference: newReference() });
  }

  const dbOn = isDbConfigured();
  if (!dbOn && process.env.NODE_ENV === "production") {
    console.error("[enquiries] MONGODB_URI is not configured");
    return json(
      {
        ok: false,
        message: "We could not save your enquiry right now. Please call our support team instead.",
      },
      503,
    );
  }

  const details = data.details as Record<string, unknown>;
  const category = String(details.category ?? details.issueType ?? details.topic ?? data.type);
  const ipHash = createHash("sha256")
    .update(`${ip}|${process.env.IP_HASH_SALT ?? "travelstation"}`)
    .digest("hex");
  const userAgent = (req.headers.get("user-agent") ?? "").slice(0, 300);

  const record = {
    reference: newReference(),
    clientToken: data.clientToken,
    type: data.type,
    category,
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    message: data.message,
    details,
    sourcePage: data.sourcePage,
    consent: true,
    ipHash,
    userAgent,
  };

  try {
    let reference = record.reference;
    let isDuplicate = false;

    if (dbOn) {
      await connectDb();
      try {
        await Enquiry.create(record);
      } catch (err) {
        if ((err as { code?: number }).code === 11000) {
          const existing = await Enquiry.findOne({ clientToken: data.clientToken })
            .select("reference")
            .lean();
          if (!existing) throw err;
          reference = existing.reference;
          isDuplicate = true;
        } else {
          throw err;
        }
      }
    } else {
      const existing = await devFindByToken(data.clientToken);
      if (existing) {
        reference = existing;
        isDuplicate = true;
      } else {
        await devSave(record);
      }
    }

    if (!isDuplicate) {
      const emailStatus = await sendEnquiryEmails({
        reference,
        type: data.type,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        details,
        sourcePage: data.sourcePage,
      });
      if (dbOn) {
        await Enquiry.updateOne({ reference }, { emailStatus }).catch(() => undefined);
      }
    }

    return json({ ok: true, reference });
  } catch (err) {
    console.error("[enquiries] failed to save enquiry", err);
    return json(
      {
        ok: false,
        message: "We could not save your enquiry right now. Please try again or call our support team.",
      },
      500,
    );
  }
}
