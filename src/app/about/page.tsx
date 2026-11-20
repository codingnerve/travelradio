import { Compass, Handshake, Headset, ListChecks } from "lucide-react";
import { FeatureSection, Split } from "@/components/shared/Blocks";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FinalCta } from "@/components/support/FinalCta";
import { company, contact } from "@/config/contact";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "TravelStation is an independent travel assistance service for flights and booking support, operated by TravelOpedia Ltd.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A travel assistance partner that stays on the line."
        image={images.traveller}
        imagePosition="50% 40%"
        crumbs={[{ label: "About Us" }]}
      >
        TravelStation helps people with the practical side of travel: flights
        and support when plans change.
      </PageHero>

      <Split
        eyebrow="Who we are"
        title="Independent, enquiry-led and personal."
        image={images.mapFlatlay}
        tone="white"
        actions={<ButtonLink href="/contact" variant="secondary">Get in touch</ButtonLink>}
      >
        <p>
          TravelStation is an independent travel service provider. We help travellers explore
          options for flights, and we support people who need help with an
          existing booking.
        </p>
        <p>
          We work through enquiries. You tell us what you need, a member of our customer support
          team gets in touch, and nothing is arranged until you have agreed it with them.
        </p>
      </Split>

      <FeatureSection
        tone="ivory"
        eyebrow="Our philosophy"
        title="How we think about travel assistance."
        cols={3}
        features={[
          { icon: Compass, title: "Start with the traveller", text: "Good plans begin with your dates, your company and your preferences, so we begin there too." },
          { icon: Handshake, title: "Say what we can do", text: "We are clear about how our service works, and we do not promise what we cannot deliver." },
          { icon: ListChecks, title: "Keep it practical", text: "We focus on the details that make a trip run smoothly, from flights and stays to the drive from the airport." },
        ]}
      />

      <Section labelledBy="about-services">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="What we do" title="Services at a glance." id="about-services" />
            <dl className="divide-y divide-line border-y border-line">
              {[
                ["Flights", "Domestic and international flight booking assistance, plus help with changes and cancellations."],
                ["Travel assistance", "Help with existing bookings, including date changes, refunds and passenger detail corrections."],
                ["Radio services", "Independent support for satellite radio activation, signal and subscriptions."],
              ].map(([t, d]) => (
                <div key={t} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <dt className="font-display font-extrabold text-navy">{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Split
        eyebrow="Customer support approach"
        title="A real person, around the clock."
        image={images.support}
        flip
        tone="mist"
        actions={<ButtonLink href={contact.phoneHref}>Call {contact.phoneDisplay}</ButtonLink>}
      >
        <p>
          Our telephone support line is available 24/7, because travel does not keep office hours.
          Online enquiries are reviewed by the customer support team and answered as soon as
          possible.
        </p>
        <p>
          We aim to explain things plainly: what the options are, what depends on the supplier, and
          what happens next.
        </p>
      </Split>

      <Section tone="navy" labelledBy="company-info">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="Company information" title="Who is behind TravelStation." id="company-info" light />
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {[
                ["Trading name", company.tradingName],
                ["Legal entity", company.legalName],
                ["Company registration no.", company.registrationNumber],
                ["VAT no.", company.vatNumber],
                ["Registered address", company.addressInline],
                ["Customer support", `${contact.phoneDisplay} · ${contact.email}`],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-white/15 pt-4">
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-orange">{k}</dt>
                  <dd className="mt-1.5 text-white">{v}</dd>
                </div>
              ))}
              <div className="flex items-start gap-3 border-t border-white/15 pt-4 text-sm text-white/70 sm:col-span-2">
                <Headset className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                TravelStation is an independent third-party travel service provider and is not
                affiliated with or endorsed by any airline unless a verified relationship is stated.
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
