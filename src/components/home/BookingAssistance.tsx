import Link from "next/link";
import { ArrowRight, CalendarClock, CircleHelp, Receipt, Armchair, UserPen, XCircle } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { images } from "@/config/images";

const items = [
  { icon: CalendarClock, label: "Flight Date Changes", href: "flight-change" },
  { icon: XCircle, label: "Flight Cancellation Assistance", href: "cancellation" },
  { icon: Receipt, label: "Refund Enquiries", href: "refund" },
  { icon: UserPen, label: "Passenger Information Corrections", href: "passenger-correction" },
  { icon: Armchair, label: "Seat Selection Assistance", href: "general-support" },
  { icon: CircleHelp, label: "General Booking Enquiries", href: "general-support" },
];

export function BookingAssistance() {
  return (
    <Section tone="mist" labelledBy="booking-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Already booked?" title="Help With an Existing Booking" id="booking-title">
              If your plans have changed or something does not look right on your booking, tell our
              team. We will explain the options, which depend on your ticket or reservation
              conditions.
            </SectionHeading>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {items.map((it, i) => (
                <li key={it.label}>
                  <Reveal delay={i * 0.05}>
                    <Link
                      href={`/manage-booking?category=${it.href}#enquiry`}
                      className="group flex items-center gap-3.5 rounded-md border border-line bg-white px-4 py-3.5 transition-all hover:border-teal hover:shadow-card"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-mist text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                        <it.icon className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                      </span>
                      <span className="text-[0.93rem] font-semibold leading-snug text-navy">{it.label}</span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/manage-booking#enquiry" size="lg">
                Get Booking Assistance <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <p className="max-w-xs text-[0.82rem] leading-snug text-ink">
                We do not retrieve bookings automatically. Our team reviews your request manually.
              </p>
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Photo image={images.lounge} sizes="(min-width:1024px) 42vw, 94vw" position="72% 30%" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-md bg-navy px-5 py-4 text-sm text-white/85 shadow-panel sm:left-auto sm:max-w-xs">
              <p className="font-display font-bold text-white">Plans changed?</p>
              <p className="mt-1">Have your booking reference to hand, if you have one, and we&apos;ll take it from there.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
