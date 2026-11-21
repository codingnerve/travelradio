import Link from "next/link";
import { Photo } from "@/components/shared/Photo";
import { flightDeals } from "./landingData";
import { SectionTitle } from "./SectionTitle";

export function PopularDestinations() {
  return (
    <section aria-labelledby="destinations-title" className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Top Flight Deals" title="Popular Destinations" id="destinations-title" />
        <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flightDeals.map((d) => (
            <li key={d.city}>
              <article className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                <div className="relative aspect-[3/2] w-full">
                  <Photo image={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="text-[0.8rem] text-[#6b7280]">{d.from} to</p>
                  <h3 className="mt-0.5 text-[1.35rem] font-bold">{d.city}</h3>
                  <p className="mt-1 text-[1.75rem] font-bold leading-tight text-orange">${d.price}</p>
                  <p className="text-[0.8rem] text-[#6b7280]">incl. of tax</p>
                  <Link
                    href="/contact"
                    className="mt-2 inline-block text-[0.9rem] text-orange hover:text-orange-deep hover:underline"
                    aria-label={`Book now: ${d.from} to ${d.city}`}
                  >
                    book now &gt;
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
