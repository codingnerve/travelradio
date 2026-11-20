import type { Metadata } from "next";
import { BookingAssistance } from "@/components/home/BookingAssistance";
import { Destinations } from "@/components/home/Destinations";
import { Experiences } from "@/components/home/Experiences";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FaqSection } from "@/components/support/FaqSection";
import { FinalCta } from "@/components/support/FinalCta";
import { SupportBand } from "@/components/support/SupportBand";
import { generalFaqs } from "@/config/faq";

export const metadata: Metadata = {
  title: { absolute: "TravelStation — Flight & Booking Assistance" },
  description:
    "Send a flight enquiry to TravelStation's customer support team, or get help with an existing booking. Telephone support 24/7.",
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
      <SupportBand />
      <FaqSection items={generalFaqs} />
      <FinalCta />
    </>
  );
}
