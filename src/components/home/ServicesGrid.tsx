import { ArrowRight, CarFront, Hotel, Plane, Radio } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { images } from "@/config/images";

const services = [
  {
    title: "Flights",
    text: "Domestic and international flight booking assistance.",
    href: "/flights",
    icon: Plane,
    image: images.wingClouds,
    position: "70% 50%",
  },
  {
    title: "Hotels",
    text: "Hotel reservations and accommodation assistance worldwide.",
    href: "/hotels",
    icon: Hotel,
    image: images.hotelResort,
    position: "50% 50%",
  },
  {
    title: "Car Rentals",
    text: "Convenient vehicle rental arrangements for different travel requirements.",
    href: "/car-rentals",
    icon: CarFront,
    image: images.carSuv,
    position: "55% 50%",
  },
  {
    title: "Radio Services",
    text: "Assistance with satellite radio activation, signal issues and subscriptions.",
    href: "/radio-services",
    icon: Radio,
    image: images.radioMic,
    position: "55% 50%",
  },
];

export function ServicesGrid() {
  return (
    <Section tone="ivory" labelledBy="services-title">
      <Container>
        <SectionHeading eyebrow="Our travel services" title="Everything You Need for Your Next Journey" id="services-title">
          One team for the practical parts of travel, from the flight to the stay to the drive
          from the airport.
        </SectionHeading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link
                  href={s.href}
                  className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-md bg-navy"
                >
                  <Photo
                    image={s.image}
                    sizes="(min-width:1024px) 24vw, (min-width:640px) 48vw, 94vw"
                    position={s.position}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/0" aria-hidden />
                  <div className="relative p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-orange text-navy">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-2xl font-extrabold !text-white">{s.title}</h3>
                    <p className="mt-2 min-h-[4.25rem] text-[0.92rem] leading-relaxed text-white/80">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-orange pb-0.5 text-sm font-semibold text-white transition-all group-hover:gap-3">
                      Learn More <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
