import { ArrowRight, BedDouble, Building2, Palmtree } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { images } from "@/config/images";

export function HotelsBand() {
  return (
    <section aria-labelledby="hotels-title" className="relative isolate overflow-hidden bg-navy py-20 sm:py-28 lg:py-36">
      <Photo image={images.hotelResort} sizes="100vw" position="50% 55%" className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" aria-hidden />
      <Container>
        <Reveal className="max-w-xl rounded-md bg-ivory p-7 shadow-panel sm:p-10">
          <Eyebrow>Hotels &amp; accommodation</Eyebrow>
          <h2 id="hotels-title" className="mt-4 text-[1.9rem] font-extrabold sm:text-4xl">
            Find a Stay That Feels Right.
          </h2>
          <p className="mt-4 leading-relaxed">
            Whether you need a city hotel close to meetings, a resort for a long break or an
            apartment for the whole family, our team helps with hotel reservation enquiries for
            destinations around the world. Tell us what matters and we&apos;ll look at what is
            available.
          </p>
          <ul className="mt-6 grid gap-3 text-sm font-semibold text-navy sm:grid-cols-3">
            {[
              { icon: Building2, t: "City hotels" },
              { icon: Palmtree, t: "Resorts" },
              { icon: BedDouble, t: "Apartments" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-2">
                <x.icon className="h-4 w-4 text-teal" aria-hidden /> {x.t}
              </li>
            ))}
          </ul>
          <ButtonLink href="/hotels#enquiry" size="lg" className="mt-8">
            Enquire About Hotels <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
