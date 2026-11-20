import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Development-only fallback used when MONGODB_URI is not set, so forms can be
 * exercised end-to-end locally. It is never used in production builds: the API
 * route returns 503 instead if MongoDB is not configured there.
 */
const dir = path.join(process.cwd(), ".data");
const file = path.join(dir, "enquiries.jsonl");

export async function devFindByToken(clientToken: string): Promise<string | null> {
  try {
    const raw = await readFile(file, "utf8");
    for (const line of raw.split("\n")) {
      if (!line) continue;
      const rec = JSON.parse(line) as { clientToken: string; reference: string };
      if (rec.clientToken === clientToken) return rec.reference;
    }
  } catch {
    /* file does not exist yet */
  }
  return null;
}

export async function devSave(record: Record<string, unknown>): Promise<void> {
  await mkdir(dir, { recursive: true });
  await appendFile(file, JSON.stringify({ ...record, createdAt: new Date().toISOString() }) + "\n");
}
