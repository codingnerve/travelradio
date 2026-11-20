import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}

type Tone = "white" | "ivory" | "mist" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  ivory: "bg-ivory",
  mist: "bg-mist",
  navy: "bg-navy text-white/80",
};

export function Section({
  children,
  tone = "white",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
