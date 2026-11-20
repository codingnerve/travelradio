import nodemailer, { type Transporter } from "nodemailer";
import { contact } from "@/config/contact";
import { site } from "@/config/site";
import { enquiryTypeLabels, type EnquiryType } from "./validation";

export type EmailResult = "sent" | "failed" | "skipped";

export type EnquiryEmailData = {
  reference: string;
  type: EnquiryType;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  details: Record<string, unknown>;
  sourcePage: string;
};

const escapeHtml = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

let transporter: Transporter | null = null;
function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

function flattenDetails(details: Record<string, unknown>): [string, string][] {
  const rows: [string, string][] = [];
  const walk = (obj: Record<string, unknown>, prefix = "") => {
    for (const [k, v] of Object.entries(obj)) {
      if (v === "" || v === undefined || v === null) continue;
      const label = `${prefix}${k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase())}`;
      if (Array.isArray(v)) {
        v.forEach((item, i) => {
          if (item && typeof item === "object") walk(item as Record<string, unknown>, `${label} ${i + 1} · `);
          else rows.push([`${label} ${i + 1}`, String(item)]);
        });
      } else if (typeof v === "object") {
        walk(v as Record<string, unknown>, `${label} · `);
      } else {
        rows.push([label, String(v)]);
      }
    }
  };
  walk(details);
  return rows;
}

function staffEmail(d: EnquiryEmailData) {
  const label = enquiryTypeLabels[d.type];
  const rows: [string, string][] = [
    ["Reference", d.reference],
    ["Type", label],
    ["Name", d.fullName],
    ["Email", d.email],
    ["Telephone", d.phone],
    ...flattenDetails(d.details),
    ["Message", d.message || "—"],
    ["Submitted from", d.sourcePage],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#172D43"><h2 style="margin:0 0 12px">New ${escapeHtml(label)} — ${escapeHtml(d.reference)}</h2><table cellpadding="6" style="border-collapse:collapse;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="border-bottom:1px solid #e4e8eb;color:#536170;vertical-align:top">${escapeHtml(k)}</td><td style="border-bottom:1px solid #e4e8eb;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table></div>`;
  return { subject: `[${site.name}] New ${label} — ${d.reference}`, text, html };
}

function customerEmail(d: EnquiryEmailData) {
  const text = `Hello ${d.fullName},

Thank you for contacting ${site.name}. We have received your ${enquiryTypeLabels[d.type].toLowerCase()} and our customer support team will be in touch using the details you gave us.

Your reference: ${d.reference}

This message confirms we received your enquiry only. It is not a booking confirmation, and no tickets, reservations or rentals have been issued.

If your matter is urgent, call us 24/7 on ${contact.phoneDisplay}.

${site.name} Customer Support
${contact.email}`;
  const html = `<div style="font-family:Arial,sans-serif;color:#172D43;max-width:560px;line-height:1.55"><p>Hello ${escapeHtml(d.fullName)},</p><p>Thank you for contacting ${escapeHtml(site.name)}. We have received your ${escapeHtml(enquiryTypeLabels[d.type].toLowerCase())} and our customer support team will be in touch using the details you gave us.</p><p style="background:#FAF8F3;padding:12px 16px;border-left:3px solid #D77C42"><strong>Your reference:</strong> ${escapeHtml(d.reference)}</p><p style="color:#536170;font-size:14px">This message confirms we received your enquiry only. It is not a booking confirmation, and no tickets, reservations or rentals have been issued.</p><p>If your matter is urgent, call us 24/7 on <a href="${escapeHtml(contact.phoneHref)}">${escapeHtml(contact.phoneDisplay)}</a>.</p><p>${escapeHtml(site.name)} Customer Support<br>${escapeHtml(contact.email)}</p></div>`;
  return { subject: `We received your enquiry — ${d.reference}`, text, html };
}

/**
 * Sends the staff notification (and, unless disabled, a customer
 * acknowledgement). Never throws: an email failure must not lose an enquiry
 * that has already been stored.
 */
export async function sendEnquiryEmails(d: EnquiryEmailData): Promise<EmailResult> {
  if (!smtpConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        `[email] SMTP not configured — skipped notification for ${d.reference} (${d.type})`,
      );
    }
    return "skipped";
  }
  const from = process.env.EMAIL_FROM ?? `${site.name} <${contact.email}>`;
  const notifyTo = process.env.ENQUIRY_NOTIFY_TO ?? contact.email;
  try {
    const t = getTransporter();
    const staff = staffEmail(d);
    await t.sendMail({ from, to: notifyTo, replyTo: d.email, ...staff });
    if (process.env.SEND_CUSTOMER_CONFIRMATION !== "false") {
      const cust = customerEmail(d);
      await t.sendMail({ from, to: d.email, replyTo: contact.email, ...cust });
    }
    return "sent";
  } catch (err) {
    console.error("[email] failed to send enquiry email", d.reference, err);
    return "failed";
  }
}
