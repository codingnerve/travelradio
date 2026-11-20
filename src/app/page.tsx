import type { Metadata } from "next";
import { BookingAssistance } from "@/components/home/BookingAssistance";
import { CarRentalBand } from "@/components/home/CarRentalBand";
import { Destinations } from "@/components/home/Destinations";
import { Experiences } from "@/components/home/Experiences";
import { Hero } from "@/components/home/Hero";
import { HotelsBand } from "@/components/home/HotelsBand";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FaqSection } from "@/components/support/FaqSection";
import { FinalCta } from "@/components/support/FinalCta";
import { SupportBand } from "@/components/support/SupportBand";
import { generalFaqs } from "@/config/faq";

export const metadata: Metadata = {
  title: { absolute: "TravelStation — Flights, Hotels & Car Rental Assistance" },
  description:
    "Send a flight, hotel or car rental enquiry to TravelStation's customer support team, or get help with an existing booking. Telephone support 24/7.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <ServicesGrid />
      <Experiences />
      <WhyChoose />
      <HowItWorks />
      <BookingAssistance />
      <HotelsBand />
      <CarRentalBand />
      <SupportBand />
      <FaqSection items={generalFaqs} />
      <FinalCta />
    </>
  );
}
