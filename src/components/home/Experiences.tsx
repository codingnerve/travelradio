import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experiences } from "@/config/destinations";

// Mixed proportions: one tall lead image, then a staggered set.
const spans = [
  "lg:col-span-7 lg:row-span-2 min-h-[22rem] lg:min-h-0",
  "lg:col-span-5 min-h-[14rem]",
  "lg:col-span-5 min-h-[14rem]",
  "lg:col-span-4 min-h-[16rem]",
  "lg:col-span-4 min-h-[16rem]",
  "lg:col-span-4 min-h-[16rem]",
];

export function Experiences() {
  return (
    <Section labelledBy="experiences-title">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading eyebrow="Travel experiences" title="Make Every Destination Worth Remembering." id="experiences-title" />
          <p className="max-w-md text-ink lg:justify-self-end">
            Beaches, old towns, neon streets and cliff-top sunsets. Pick the place that has been on
            your list and send us an enquiry. We&apos;ll help you work out the how.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-12">
          {experiences.map((e, i) => (
            <li key={e.city} className={`relative ${spans[i]} ${i === 0 ? "sm:col-span-2" : ""}`}>
              <Reveal delay={(i % 3) * 0.08} className="absolute inset-0">
                <Link
                  href={`/flights?to=${encodeURIComponent(e.city)}#enquiry`}
                  className="group relative block h-full overflow-hidden rounded-md bg-navy"
                >
                  <Photo
                    image={e.image}
                    sizes={i === 0 ? "(min-width:1024px) 58vw, 94vw" : "(min-width:1024px) 40vw, 47vw"}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-orange">{e.country}</p>
                      <h3 className="mt-1 text-xl font-extrabold !text-white sm:text-2xl">{e.city}</h3>
                      <p className="mt-1 text-sm text-white/80">{e.note}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-[2px] transition-colors group-hover:bg-orange group-hover:text-navy" aria-hidden>
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="sr-only">Enquire about travel to {e.city}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
