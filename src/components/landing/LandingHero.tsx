import { FlightEnquiryWidget } from "@/components/forms/FlightEnquiryWidget";
import { Photo } from "@/components/shared/Photo";
import { images } from "@/config/images";

export function LandingHero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Photo image={images.wingClouds} sizes="100vw" priority position="50% 40%" />
        <div className="absolute inset-0 bg-[#1a2b3c]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b3c]/70 via-[#8a4b22]/35 to-[#1a2b3c]/85" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 pb-24 pt-20 text-center sm:px-8 lg:pb-[150px] lg:pt-[160px]">
        <h1 id="hero-title">
          <span className="block text-[1.5rem] font-bold uppercase tracking-[0.09em] text-white sm:text-[2.25rem] lg:text-[2.75rem]">
            Travel Station World
          </span>
          <span className="mt-4 block text-[2.1rem] font-bold leading-[1.1] text-white sm:text-[3.25rem] lg:mt-6 lg:text-[4.7rem]">
            Your Concierge Desk for Travel Services
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[52rem] text-[1.05rem] leading-relaxed text-white sm:text-[1.45rem]">
          We assist in making Flight, Hotel, and Car Rental bookings.
          <br />
          Easy, Fast, and Cheap.
        </p>

        <div id="enquiry" className="mx-auto mt-12 max-w-[1120px] text-left">
          <FlightEnquiryWidget />
        </div>
      </div>
    </section>
  );
}
