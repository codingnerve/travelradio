import { Accordion } from "@/components/shared/Accordion";
import { Container, Section } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SupportBand } from "@/components/support/SupportBand";
import { flightFaqs, generalFaqs } from "@/config/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Travel Station's flight enquiry service, and how to contact customer support.",
  path: "/faq",
});

const groups = [
  { id: "general", title: "General", items: generalFaqs },
  { id: "flights", title: "Flights", items: flightFaqs },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero eyebrow="FAQ" title="Frequently asked questions." crumbs={[{ label: "FAQ" }]}>
        How our enquiry-based travel assistance works, in plain language.
      </PageHero>

      <Section tone="white" labelledBy="faq-index">
        <Container>
          <h2 id="faq-index" className="sr-only">Questions by topic</h2>
          <nav aria-label="FAQ topics" className="mb-12 flex flex-wrap gap-3">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                {g.title}
              </a>
            ))}
          </nav>
          <div className="space-y-16">
            {groups.map((g) => (
              <div key={g.id} id={g.id} className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
                <SectionHeading title={g.title} eyebrow="Topic" as="h2" className="[&>h2]:!text-3xl" />
                <Accordion items={g.items} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SupportBand title="Didn't find your answer?" text="Our customer support team is available around the clock. Call or send us a message." />
    </>
  );
}
