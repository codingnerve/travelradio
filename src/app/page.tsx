import type { Metadata } from "next";
import { FeaturedHotels } from "@/components/landing/FeaturedHotels";
import { KeyBenefits } from "@/components/landing/KeyBenefits";
import { LandingHero } from "@/components/landing/LandingHero";
import { PopularDestinations } from "@/components/landing/PopularDestinations";
import { RadioContact } from "@/components/landing/RadioContact";
import { RadioHelpline } from "@/components/landing/RadioHelpline";
import { RadioSupport } from "@/components/landing/RadioSupport";
import { ReadyToTravel } from "@/components/landing/ReadyToTravel";
import { TravelSolutions } from "@/components/landing/TravelSolutions";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} World — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <PopularDestinations />
      <FeaturedHotels />
      <TravelSolutions />
      <KeyBenefits />
      <ReadyToTravel />
      <RadioSupport />
      <RadioHelpline />
      <RadioContact />
    </>
  );
}
