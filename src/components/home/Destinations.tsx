import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { destinations } from "@/config/destinations";

export function Destinations() {
  return (
    <Section labelledBy="destinations-title" className="!pt-32 sm:!pt-36 lg:!pt-44">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Popular destinations" title="Where Would You Like to Go?" id="destinations-title" />
          <p className="max-w-md text-ink">
            Cities our travel team is often asked about. Choose one to start a flight enquiry, or
            tell us somewhere new.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <li key={d.slug}>
              <Reveal delay={(i % 4) * 0.07}>
                <Link
                  href={`/flights?to=${encodeURIComponent(d.city)}#enquiry`}
                  className="group block"
                  aria-label={`Explore ${d.city}, ${d.country}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-mist">
                    <Photo
                      image={d.image}
                      sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 92vw"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent p-5 pt-20">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                        {d.country}
                      </p>
                      <h3 className="mt-1 text-2xl font-extrabold !text-white">{d.city}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-ink">{d.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-orange-deep">
                    Explore destination
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
