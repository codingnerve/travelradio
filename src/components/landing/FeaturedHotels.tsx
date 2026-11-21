import { Building2 } from "lucide-react";
import Link from "next/link";
import { hotelDeals } from "./landingData";
import { SectionTitle } from "./SectionTitle";

export function FeaturedHotels() {
  return (
    <section aria-labelledby="hotels-title" className="bg-mist py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Best Hotel Rates" title="Featured Hotels" id="hotels-title" />
        <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotelDeals.map((h) => (
            <li key={h.name}>
              <article className="rounded-xl border border-line bg-white px-5 py-8 text-center shadow-sm">
                <span
                  aria-hidden
                  className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-full bg-orange/10 text-orange"
                >
                  <Building2 className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[1.1rem] font-bold">{h.name}</h3>
                <p className="text-[0.8rem] text-[#6b7280]">{h.location}</p>
                <p className="mt-3 text-[1.75rem] font-bold leading-tight text-orange">${h.price}</p>
                <p className="text-[0.8rem] text-[#6b7280]">per night</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-block text-[0.9rem] text-orange hover:text-orange-deep hover:underline"
                  aria-label={`Book now: ${h.name}`}
                >
                  book now &gt;
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
