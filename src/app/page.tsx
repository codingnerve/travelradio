import type { Metadata } from "next";
import { LandingHero } from "@/components/landing/LandingHero";
import { RadioContact } from "@/components/landing/RadioContact";
import { RadioHelpline } from "@/components/landing/RadioHelpline";
import { RadioHero } from "@/components/landing/RadioHero";
import { RadioSupport } from "@/components/landing/RadioSupport";
import { SignalBand } from "@/components/landing/SignalBand";
import { site } from "@/config/site";

// Hidden for now (components kept in src/components/landing): PopularDestinations,
// FeaturedHotels, TravelSolutions, KeyBenefits, ReadyToTravel. Re-add them here to bring them back.

export const metadata: Metadata = {
  title: { absolute: `${site.name} World — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <RadioHero />
      <SignalBand />
      <RadioSupport />
      <RadioHelpline />
      <RadioContact />
    </>
  );
}
