import { Headphones, Plane } from "lucide-react";
import { FlightEnquiryWidget } from "@/components/forms/FlightEnquiryWidget";
import { ButtonLink } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { images } from "@/config/images";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="absolute inset-0 overflow-hidden bg-navy" aria-hidden>
        <Photo image={images.heroAirport} sizes="100vw" priority position="60% 50%" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
      </div>

      <Container className="relative pb-0 pt-12 sm:pt-16 lg:pt-16">
        <div className="max-w-[44rem]">
          <Eyebrow light>Flights · Hotels · Car rentals · Support</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-[2.3rem] font-extrabold leading-[1.06] !text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Your Journey Deserves a Better Travel Experience.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            From finding the right flight to arranging your stay and getting travel assistance,
            we&apos;re here to make every step easier.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/travel-services" size="lg">
              <Plane className="h-4 w-4" aria-hidden /> Explore Travel Services
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              <Headphones className="h-4 w-4" aria-hidden /> Speak With Our Team
            </ButtonLink>
          </div>
        </div>

        <div id="enquiry" className="relative z-10 mt-10 -mb-14 sm:mt-12 sm:-mb-16">
          <FlightEnquiryWidget />
        </div>
      </Container>
    </section>
  );
}
