import { CalendarRange, KeyRound, PlaneLanding, ShieldQuestion, Timer, UserCheck } from "lucide-react";
import { CarRentalEnquiryForm } from "@/components/forms/CarRentalEnquiryForm";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { FeatureSection, Split } from "@/components/shared/Blocks";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import { FinalCta } from "@/components/support/FinalCta";
import { carFaqs } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Car Rental Assistance",
  description:
    "Enquire about airport and city car rentals. TravelStation's customer support team helps with economy, SUV, luxury and premium vehicle rental requests.",
  path: "/car-rentals",
});

const categories = [
  { name: "Economy", text: "Compact and efficient. A sensible choice for city driving and solo or couple travel.", image: images.carEconomy },
  { name: "SUV", text: "More room and a higher seating position for families, luggage and longer routes.", image: images.carSuv },
  { name: "Premium", text: "A step up in comfort and refinement for business trips and special occasions.", image: images.carPremium },
  { name: "Luxury", text: "High-end vehicles for when the drive is part of the occasion.", image: images.carLuxury },
];

export default function CarRentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Car rentals"
        title="Your journey doesn't end at the airport."
        image={images.carRoad}
        imagePosition="50% 62%"
        crumbs={[{ label: "Car Rentals" }]}
        actions={<ButtonLink href="#enquiry" size="lg">Request a Rental</ButtonLink>}
      >
        Land, collect and go. Tell us where and when you need a vehicle, and our team will help
        arrange a rental that fits your trip.
      </PageHero>

      <EnquirySection
        eyebrow="Car rental enquiry"
        title="Tell us what you need on the road."
        intro="Share your pickup, dates and the type of vehicle you have in mind. If you aren't sure yet, choose 'Not sure yet'."
        points={[
          "Your request goes to our customer support team.",
          "We contact you to discuss the vehicle options available.",
          "Nothing is reserved or charged until you have confirmed it with us.",
        ]}
      >
        <CarRentalEnquiryForm />
      </EnquirySection>

      <Split
        id="airport"
        eyebrow="Airport rental assistance"
        title="Arrive, collect, drive."
        image={images.carDriver}
        imagePosition="50% 40%"
        tone="white"
        actions={<ButtonLink href="#enquiry" variant="secondary">Enquire about airport pickup</ButtonLink>}
      >
        <p>
          Airport collection is one of the most convenient ways to start a trip. Tell us your
          arrival airport and, if you have it, your flight details, and we&apos;ll help look at
          pickup options near the terminal.
        </p>
        <p>
          Collection arrangements, opening hours and requirements vary by location and supplier, so
          our team will explain what applies to your rental before you confirm.
        </p>
      </Split>

      <Section id="categories" tone="ivory" labelledBy="cat-title">
        <Container>
          <SectionHeading eyebrow="Vehicle categories" title="Choose the kind of car that suits the journey." id="cat-title">
            Four categories to start from. Availability depends on location and dates.
          </SectionHeading>
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <li key={c.name}>
                <Reveal delay={i * 0.07}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Photo image={c.image} sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 94vw" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">{c.name}</h3>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed">{c.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FeatureSection
        eyebrow="Rental assistance benefits"
        title="Support that goes beyond the keys."
        cols={3}
        features={[
          { icon: PlaneLanding, title: "Airport and city pickups", text: "Ask for collection at an airport or in the city, whichever suits your plans." },
          { icon: CalendarRange, title: "Short or long term", text: "From a weekend away to an extended stay, tell us how long you need the car." },
          { icon: UserCheck, title: "A person to talk to", text: "Questions about drivers, documents or collection are answered by our team, not a chatbot." },
          { icon: KeyRound, title: "Clear next steps", text: "We explain what the supplier requires before you confirm anything." },
          { icon: Timer, title: "Help if plans change", text: "Delayed flight or new dates? Contact us and we will talk through your options." },
          { icon: ShieldQuestion, title: "Honest about what we can do", text: "If we cannot help with a request, we will tell you early." },
        ]}
      />

      <FaqSection items={carFaqs} title="Car rental questions" eyebrow="Car rentals FAQ" intro="Common questions about rental enquiries." id="car-faq" tone="mist" />
      <FinalCta
        title="Need a car waiting for you?"
        text="Send us your pickup details, or call our team and tell us what you need."
        image={images.carSuv}
        primaryHref="/car-rentals#enquiry"
        primaryLabel="Request a Rental"
      />
    </>
  );
}
