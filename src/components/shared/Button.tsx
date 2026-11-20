import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "teal" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Navy text on orange keeps contrast at AA; white text would not.
  primary: "bg-orange text-navy hover:bg-[#e08a52]",
  secondary: "bg-navy text-white hover:bg-navy-2",
  teal: "bg-teal text-white hover:bg-teal-deep",
  outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/45 text-white hover:border-white hover:bg-white hover:text-navy",
  ghost: "text-navy hover:text-orange-deep",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function buttonClasses({ variant = "primary", size = "md", className = "" }: Omit<Common, "children">) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

type LinkProps = Common & Omit<ComponentProps<typeof Link>, "className" | "children">;

/** Renders a Next.js <Link>, or a plain <a> for tel:/mailto: links. */
export function ButtonLink({ variant, size, className, children, href, ...rest }: LinkProps) {
  const cls = buttonClasses({ variant, size, className });
  const h = String(href);
  if (h.startsWith("tel:") || h.startsWith("mailto:")) {
    return (
      <a href={h} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

type BtnProps = Common & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ variant, size, className, children, type = "button", ...rest }: BtnProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
