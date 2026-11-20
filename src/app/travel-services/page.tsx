import { Check } from "lucide-react";
import { Split } from "@/components/shared/Blocks";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FinalCta } from "@/components/support/FinalCta";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Travel Services",
  description:
    "Flight bookings, hotel reservations, car rentals, travel assistance and radio services support, all handled through one customer support team at TravelStation.",
  path: "/travel-services",
});

const bullets = (items: string[]) => (
  <ul className="mt-2 space-y-2">
    {items.map((i) => (
      <li key={i} className="flex gap-3">
        <Check className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

export default function TravelServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel services"
        title="Everything for the journey, in one place."
        image={images.mapFlatlay}
        imagePosition="50% 50%"
        crumbs={[{ label: "Travel Services" }]}
      >
        Flights, hotels, car rentals and the practical support that surrounds them. Every service
        starts with an enquiry and a conversation with our customer support team.
      </PageHero>

      <Section tone="ivory" className="!py-10 sm:!py-12" labelledBy="ts-overview">
        <Container>
          <h2 id="ts-overview" className="sr-only">Our services</h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-display text-sm font-bold text-navy">
            {[
              ["Flight bookings", "#flights"],
              ["Hotel reservations", "#hotels"],
              ["Car rentals", "#car-rentals"],
              ["Travel assistance", "#assistance"],
              ["Radio services", "#radio"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="border-b-2 border-orange pb-1 hover:text-orange-deep">{l}</a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Split
        id="flights"
        eyebrow="01 · Flight bookings"
        title="Flights, arranged with a person."
        image={images.wingClouds}
        tone="white"
        actions={<ButtonLink href="/flights#enquiry">Send a Flight Enquiry</ButtonLink>}
      >
        <p>Domestic and international flight booking assistance. Tell us your route and dates; we will look at the options and talk you through them.</p>
        {bullets(["One-way, round-trip and multi-city enquiries", "Help with changes, cancellations and refund questions", "Telephone support 24/7"])}
      </Split>

      <Split
        id="hotels"
        eyebrow="02 · Hotel reservations"
        title="Accommodation worldwide."
        image={images.hotelResort}
        flip
        tone="ivory"
        actions={<ButtonLink href="/hotels#enquiry">Enquire About Hotels</ButtonLink>}
      >
        <p>From city hotels to resorts and apartments, we help with reservation enquiries for the places you are going.</p>
        {bullets(["City hotels, resorts, boutique stays and apartments", "Room, guest and date requirements taken into account", "Support if your plans change"])}
      </Split>

      <Split
        id="car-rentals"
        eyebrow="03 · Car rentals"
        title="Wheels for when you land."
        image={images.carSuv}
        tone="white"
        actions={<ButtonLink href="/car-rentals#enquiry">Explore Car Rentals</ButtonLink>}
      >
        <p>Convenient vehicle rental arrangements for different travel requirements, from airport pickups to longer stays.</p>
        {bullets(["Economy, SUV, premium and luxury categories", "Airport and city pickups", "Short-term and long-term rentals"])}
      </Split>

      <Split
        id="assistance"
        eyebrow="04 · Travel assistance"
        title="Help when you need it most."
        image={images.lounge}
        imagePosition="72% 30%"
        flip
        tone="ivory"
        actions={<ButtonLink href="/manage-booking#enquiry">Get Booking Assistance</ButtonLink>}
      >
        <p>Already have a booking? Our team can help you understand your options when something changes or needs correcting.</p>
        {bullets(["Flight date changes and cancellation assistance", "Refund enquiries and passenger information corrections", "General booking questions"])}
      </Split>

      <Split
        id="radio"
        eyebrow="05 · Radio services"
        title="Support for satellite radio."
        image={images.radioMic}
        tone="white"
        actions={<ButtonLink href="/radio-services">About Radio Services</ButtonLink>}
      >
        <p>Independent support for satellite radio activation, signal and reception issues, missing channels and subscription questions.</p>
        <p className="text-sm">This is an independent support service and is not affiliated with any satellite radio provider.</p>
      </Split>

      <Section tone="mist" labelledBy="ts-how">
        <Container>
          <SectionHeading eyebrow="Good to know" title="How every service works." id="ts-how">
            All of our services are enquiry-based. You send a request or call us, our customer
            support team gets in touch, and nothing is arranged until you have confirmed it with
            them. We do not take payments or issue tickets through this website.
          </SectionHeading>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
