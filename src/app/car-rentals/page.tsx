import { Car, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { EmailCareButton } from "@/components/shared/EmailCareButton";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Premium Car Rentals",
  description:
    "Premium car rentals with Travel Station: unlimited mileage, flexible pick-up at major airports and city centers, and 24/7 roadside assistance.",
  path: "/car-rentals",
});

const perks: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Unlimited Mileage", text: "On most rentals to give you total freedom.", icon: Car },
  { title: "Flexible Pick-up", text: "Locations at all major airports and city centers.", icon: MapPin },
  { title: "24/7 Roadside Assistance", text: "Drive with peace of mind.", icon: ShieldCheck },
];

const rates = [
  { name: "Economy", model: "Toyota Yaris or similar", price: 29 },
  { name: "Midsize SUV", model: "Hyundai Tucson or similar", price: 49 },
  { name: "Luxury Sedan", model: "BMW 5 Series or similar", price: 89 },
  { name: "Full-Size Van", model: "Chrysler Pacifica or similar", price: 69 },
];

export default function CarRentalsPage() {
  return (
    <>
      <PageBanner title="Premium Car Rentals" subtitle="Drive Your Way" />

      <div className="bg-white pb-20 pt-14 sm:pt-[72px]">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-8 lg:px-12">
          <p className="mx-auto max-w-[62rem] text-center text-[1rem] leading-[1.85] text-[#6b7280] sm:text-[1.1rem]">
            At Travel Station, we don&apos;t just get you to the airport; we get you to your final
            destination. Whether you need a compact car for city driving, a luxury sedan for
            business, or a spacious SUV for a family road trip, we offer competitive rates through
            our global partners.
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map(({ title, text, icon: Icon }) => (
              <li key={title} className="rounded-xl border border-line bg-white px-6 py-9 text-center">
                <span
                  aria-hidden
                  className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-orange/10 text-orange"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-[1.2rem] font-bold">{title}</h2>
                <p className="mx-auto mt-1.5 max-w-[16rem] text-[0.9rem] leading-relaxed text-[#6b7280]">{text}</p>
              </li>
            ))}
          </ul>

          <section aria-labelledby="pricing-title" className="mt-20">
            <SectionTitle eyebrow="Our Rates" title="Car Rental Pricing" id="pricing-title" />
            <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rates.map((r) => (
                <li key={r.name}>
                  <article className="rounded-xl border border-line bg-white px-5 py-8 text-center">
                    <span
                      aria-hidden
                      className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-orange/10 text-orange"
                    >
                      <Car className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-[1.1rem] font-bold">{r.name}</h3>
                    <p className="text-[0.8rem] text-[#6b7280]">{r.model}</p>
                    <p className="mt-3 text-[1.75rem] font-bold leading-tight text-orange">${r.price}</p>
                    <p className="text-[0.8rem] text-[#6b7280]">per day</p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-block text-[0.9rem] text-orange hover:text-orange-deep hover:underline"
                      aria-label={`Book now: ${r.name}`}
                    >
                      book now &gt;
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="road-title"
            className="mx-auto mt-16 max-w-[840px] rounded-2xl bg-navy px-6 py-12 text-center"
          >
            <h2 id="road-title" className="text-[1.6rem] font-bold !text-white">
              Ready to Hit the Road?
            </h2>
            <p className="mt-3 text-[1rem] text-white/85">
              Our agents are standing by to find the perfect vehicle for your trip.
            </p>
            <EmailCareButton className="mt-6" />
          </section>
        </div>
      </div>
    </>
  );
}
