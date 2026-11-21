import Link from "next/link";
import type { ReactNode } from "react";
import { contact } from "@/config/contact";

/** Narrow reading column used by the policy pages. */
export function DocPage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white py-14 sm:py-[72px]">
      <div className="mx-auto max-w-[1104px] px-4 sm:px-8">{children}</div>
    </div>
  );
}

export const docBody = "text-[1.05rem] leading-[1.8] text-[#6b7280] sm:text-[1.15rem]";

export function DocMeta({ children }: { children: ReactNode }) {
  return <p className="text-[0.9rem] text-[#4b5563]">{children}</p>;
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-9 first:mt-0">
      <h2 className="text-[1.35rem] font-bold sm:text-[1.5rem]">{title}</h2>
      <div className={`mt-3 space-y-3 ${docBody}`}>{children}</div>
    </section>
  );
}

export function DocBullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6b7280]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OrangeLink({ href, children }: { href: string; children: ReactNode }) {
  const cls = "text-orange hover:text-orange-deep hover:underline";
  return href.startsWith("mailto:") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function EmailLink() {
  return <OrangeLink href={contact.emailHref}>{contact.email}</OrangeLink>;
}
