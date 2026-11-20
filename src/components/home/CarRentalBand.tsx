import { ArrowRight, CalendarDays, CalendarRange, MapPin, PlaneLanding } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { images } from "@/config/images";

const options = [
  { icon: PlaneLanding, title: "Airport pickups", text: "Collect a vehicle shortly after you land." },
  { icon: MapPin, title: "City car rentals", text: "Flexible options for exploring urban areas." },
  { icon: CalendarDays, title: "Short-term rentals", text: "For weekends, trips and short stays." },
  { icon: CalendarRange, title: "Long-term rentals", text: "For extended stays and longer projects." },
];

export function CarRentalBand() {
  return (
    <Section labelledBy="cars-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow="Car rentals" title="Your Journey Doesn't End at the Airport." id="cars-title">
              Land, collect and go. Tell us where you&apos;re arriving and how long you need a
              vehicle, and we&apos;ll help arrange a rental that fits the trip.
            </SectionHeading>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {options.map((o, i) => (
                <li key={o.title}>
                  <Reveal delay={i * 0.06} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-teal-deep">
                      <o.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold">{o.title}</h3>
                      <p className="mt-0.5 text-[0.9rem] leading-snug">{o.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <ButtonLink href="/car-rentals" size="lg" className="mt-9">
              Explore Car Rentals <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>

          <Reveal className="order-1 lg:order-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-md">
              <Photo image={images.carRoad} sizes="(min-width:1024px) 52vw, 94vw" position="50% 60%" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
