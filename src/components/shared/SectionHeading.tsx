import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-orange" : "text-teal-deep"
      }`}
    >
      <span className="rule-accent" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
  light = false,
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  light?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={`mt-4 text-[1.9rem] font-extrabold sm:text-4xl lg:text-[2.6rem] ${light ? "!text-white" : ""}`}
      >
        {title}
      </Tag>
      {children && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-ink"}`}>
          {children}
        </p>
      )}
    </div>
  );
}
