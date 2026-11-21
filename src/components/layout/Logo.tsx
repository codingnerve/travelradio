import { Plane } from "lucide-react";
import Link from "next/link";

/** Round plane badge. Navy on white backgrounds, orange on the dark footer. */
export function LogoMark({
  className = "h-[50px] w-[50px]",
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "orange";
}) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full text-white ${
        tone === "navy" ? "bg-navy" : "bg-orange"
      } ${className}`}
    >
      <Plane className="h-[46%] w-[46%]" strokeWidth={1.75} />
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Travel Station home">
      {light ? <LogoMark className="h-[40px] w-[40px]" tone="orange" /> : <LogoMark />}
      <span
        className={
          light
            ? "text-[1.3rem] font-bold leading-none text-white"
            : "text-[1.65rem] font-bold leading-none tracking-tight text-navy"
        }
      >
        Travel Station
      </span>
    </Link>
  );
}
