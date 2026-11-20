import { ArrowUpRight, BedDouble, Building2, Home, MessageSquareText, Palmtree, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { FormSuspense } from "@/components/forms/FormShell";
import { HotelEnquiryForm } from "@/components/forms/HotelEnquiryForm";
import { FeatureSection } from "@/components/shared/Blocks";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import { FinalCta } from "@/components/support/FinalCta";
import { destinations } from "@/config/destinations";
import { hotelFaqs } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hotel Reservation Assistance",
  description:
    "Enquire about hotels and accommodation worldwide. TravelStation's customer support team helps with hotel reservation enquiries for city breaks, resorts and longer stays.",
  path: "/hotels",
});

const stayTypes = [
  { icon: Building2, title: "City hotels", text: "Well-located stays for business trips and city breaks.", image: images.hotelNight },
  { icon: Palmtree, title: "Resorts", text: "Pools, beaches and room to switch off for a longer holiday.", image: images.hotelPool },
  { icon: BedDouble, title: "Boutique hotels", text: "Smaller, characterful places with a sense of the destination.", image: images.hotelRoom },
  { icon: Home, title: "Serviced apartments", text: "Extra space and a kitchen for longer stays and families.", image: images.hotelPalms },
];

export default function HotelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hotels"
        title="Find a stay that feels right."
        image={images.hotelPool}
        imagePosition="50% 60%"
        crumbs={[{ label: "Hotels" }]}
        actions={<ButtonLink href="#enquiry" size="lg">Enquire About Hotels</ButtonLink>}
      >
        From city hotels to beachside resorts, tell us where you are going and what matters to you.
        Our team will look at the options they can arrange.
      </PageHero>

      <EnquirySection
        eyebrow="Hotel enquiry"
        title="Tell us about your stay."
        intro="Share your destination, dates and guests. Preferences are optional, but they help us look in the right places."
        points={[
          "Your enquiry goes to our customer support team.",
          "We contact you to discuss the accommodation options available.",
          "Nothing is reserved or charged until you have confirmed it with us.",
        ]}
      >
        <FormSuspense>
          <HotelEnquiryForm />
        </FormSuspense>
      </EnquirySection>

      <Section id="destinations" labelledBy="hotel-dest-title">
        <Container>
          <SectionHeading eyebrow="Destination suggestions" title="Where are you thinking of staying?" id="hotel-dest-title">
            Choose a city to start a hotel enquiry with the destination filled in.
          </SectionHeading>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/hotels?destination=${encodeURIComponent(d.city)}#enquiry`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-md bg-navy"
                >
                  <Photo image={d.image} sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 94vw" className="transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-orange">{d.country}</p>
                      <p className="font-display text-xl font-extrabold text-white">{d.city}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <span className="sr-only">Hotel enquiry for {d.city}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="stay-types" tone="ivory" labelledBy="stay-title">
        <Container>
          <SectionHeading eyebrow="Accommodation types" title="Whatever kind of stay you have in mind." id="stay-title">
            Tell us the style that suits your trip and we&apos;ll look for it.
          </SectionHeading>
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stayTypes.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.07}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-md">
                    <Photo image={s.image} sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 94vw" />
                  </div>
                  <s.icon className="mt-5 h-5 w-5 text-teal" aria-hidden />
                  <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FeatureSection
        eyebrow="Reservation assistance"
        title="Help from first idea to final detail."
        cols={3}
        features={[
          { icon: MessageSquareText, title: "Listening first", text: "We start with your dates, guests and preferences, not a pre-set package." },
          { icon: Users, title: "Families and groups", text: "Tell us about children, extra rooms or accessibility needs so we can look for suitable options." },
          { icon: Sparkles, title: "Support after you book", text: "If plans change, our team can talk you through your options for an existing reservation." },
        ]}
      />

      <FaqSection items={hotelFaqs} title="Hotel questions" eyebrow="Hotels FAQ" intro="Quick answers about hotel enquiries." id="hotel-faq" tone="mist" />
      <FinalCta
        title="Ready to find your stay?"
        text="Send us your destination and dates, or call our team and tell us what you are looking for."
        image={images.hotelResort}
        primaryHref="/hotels#enquiry"
        primaryLabel="Enquire About Hotels"
      />
    </>
  );
}
