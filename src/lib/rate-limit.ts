/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * Good enough as a first line of defence on a single server instance. When the
 * site is deployed across several instances/serverless regions, back this with
 * a shared store (e.g. Redis/Upstash) or put a WAF rule in front of /api.
 */
type Bucket = number[];

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    return false;
  }
  recent.push(now);
  buckets.set(key, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.every((t) => now - t >= windowMs)) buckets.delete(k);
    }
  }
  return true;
}
