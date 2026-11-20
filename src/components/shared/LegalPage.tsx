import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import { company, contact } from "@/config/contact";
import { legalLinks } from "@/config/site";

export type LegalSection = { heading: string; body: string[]; list?: string[] };

export const LEGAL_UPDATED = "20 November 2026";

/** Shared template for policy pages. */
export function LegalPage({
  title,
  path,
  intro,
  sections,
}: {
  title: string;
  path: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <div className="bg-navy pb-14 pt-8 sm:pb-16">
        <Container>
          <Breadcrumbs items={[{ label: title }]} light />
          <div className="mt-10 max-w-3xl">
            <Eyebrow light>Legal</Eyebrow>
            <h1 className="mt-4 text-[2rem] font-extrabold !text-white sm:text-5xl">{title}</h1>
            <p className="mt-4 text-white/75">Last updated: {LEGAL_UPDATED}</p>
          </div>
        </Container>
      </div>

      <div className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
            <nav aria-label="Legal pages" className="hidden lg:block">
              <ul className="sticky top-32 space-y-1 border-l border-line">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={l.href === path ? "page" : undefined}
                      className={`-ml-px block border-l-2 py-2 pl-4 text-sm font-semibold transition-colors ${
                        l.href === path
                          ? "border-orange text-navy"
                          : "border-transparent text-ink hover:border-navy/30 hover:text-navy"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="max-w-3xl">
              <p className="text-lg leading-relaxed text-navy-2">{intro}</p>
              {sections.map((s, i) => (
                <section key={s.heading} className="mt-10" aria-labelledby={`sec-${i}`}>
                  <h2 id={`sec-${i}`} className="text-2xl font-extrabold">
                    {i + 1}. {s.heading}
                  </h2>
                  {s.body.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed marker:text-orange">
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-12 rounded-md bg-ivory p-6" aria-label="Contact about this policy">
                <h2 className="text-lg font-extrabold">Questions about this page?</h2>
                <p className="mt-2 text-[0.95rem]">
                  Contact {company.legalName} (trading as {company.tradingName}) at{" "}
                  <a href={contact.emailHref} className="font-semibold text-navy underline underline-offset-2">
                    {contact.email}
                  </a>{" "}
                  or on{" "}
                  <a href={contact.phoneHref} className="font-semibold text-navy underline underline-offset-2">
                    {contact.phoneDisplay}
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </Container>
      </div>
    </>
  );
}
