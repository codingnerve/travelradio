import { Phone } from "lucide-react";
import { Accordion } from "@/components/shared/Accordion";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact } from "@/config/contact";
import type { Faq } from "@/config/faq";

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  intro = "Straight answers about how our enquiry-based service works.",
  tone = "ivory",
  id = "faq",
  withSchema = true,
}: {
  items: Faq[];
  title?: string;
  eyebrow?: string;
  intro?: string;
  tone?: "ivory" | "white" | "mist";
  id?: string;
  withSchema?: boolean;
}) {
  const headingId = `${id}-title`;
  return (
    <Section tone={tone} id={id} labelledBy={headingId}>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} id={headingId}>
              {intro}
            </SectionHeading>
            <div className="mt-8 hidden rounded-md border border-navy/10 bg-white p-6 lg:block">
              <p className="font-display text-lg font-extrabold text-navy">Still have a question?</p>
              <p className="mt-2 text-[0.92rem]">Our team is on the phone around the clock.</p>
              <ButtonLink href={contact.phoneHref} variant="secondary" className="mt-4">
                <Phone className="h-4 w-4" aria-hidden /> {contact.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
