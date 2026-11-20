import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { GeneralEnquiryForm } from "@/components/forms/GeneralEnquiryForm";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import { company, contact } from "@/config/contact";
import { generalFaqs } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact TravelStation's customer support team by phone, email or enquiry form. Telephone support is available 24/7.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to our customer support team."
        image={images.support}
        imagePosition="50% 45%"
        crumbs={[{ label: "Contact Us" }]}
      >
        Call us any time, send an email or use the form below. Tell us what you need and we will
        take it from there.
      </PageHero>

      <Section tone="ivory" id="contact-form" labelledBy="contact-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Send a message" title="How can we help?" id="contact-title">
                Use this form for general questions. For flights, hotels or car rentals, the enquiry
                forms on those pages collect the details we need.
              </SectionHeading>
              <div className="mt-9 rounded-md border border-line bg-white p-5 shadow-card sm:p-8">
                <GeneralEnquiryForm />
              </div>
            </div>

            <aside aria-label="Contact details" className="space-y-4 lg:pt-[7.5rem]">
              <div className="rounded-md bg-navy p-7 text-white/80">
                <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-orange">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> Support availability
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold text-white">24/7 Customer Support</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed">{contact.availabilityNote}</p>
              </div>

              <dl className="space-y-0 divide-y divide-line rounded-md border border-line bg-white">
                <div className="flex gap-4 p-5">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink">Telephone</dt>
                    <dd><a href={contact.phoneHref} className="font-display text-lg font-extrabold text-navy hover:text-orange-deep">{contact.phoneDisplay}</a></dd>
                  </div>
                </div>
                <div className="flex gap-4 p-5">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink">Email</dt>
                    <dd><a href={contact.emailHref} className="break-all font-semibold text-navy hover:text-orange-deep">{contact.email}</a></dd>
                  </div>
                </div>
                <div className="flex gap-4 p-5">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink">Company address</dt>
                    <dd className="mt-0.5 leading-relaxed">
                      <strong className="text-navy">{company.legalName}</strong>
                      <br />
                      {company.addressLines.map((l) => (
                        <span key={l}>{l}<br /></span>
                      ))}
                      <span className="mt-1 block text-sm text-ink">Company Registration No. {company.registrationNumber}</span>
                      <span className="block text-sm text-ink">VAT No. {company.vatNumber}</span>
                    </dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <FaqSection items={generalFaqs} id="contact-faq" tone="white" />
    </>
  );
}
