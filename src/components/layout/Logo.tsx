import Link from "next/link";

/** Original wordmark: a route arc leaving a waypoint, set in a navy tile. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="7" fill="#243e56" />
      <path
        d="M9 27c4-11 12-16 22-15"
        fill="none"
        stroke="#d77c42"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="0.1 5"
      />
      <path d="M26.5 8.5 33 12l-5.4 5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="28" r="3.2" fill="#fff" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="TravelStation home">
      <LogoMark />
      <span
        className={`font-display text-[1.3rem] leading-none tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        <span className="font-extrabold">Travel</span>
        <span className="font-medium">Station</span>
      </span>
    </Link>
  );
}
