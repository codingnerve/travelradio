import {
  ArrowRight,
  CalendarClock,
  Globe2,
  MapPinned,
  Plane,
  PlaneTakeoff,
  Repeat,
  Route,
  Shuffle,
} from "lucide-react";
import Link from "next/link";
import { FlightEnquiryFromParams } from "@/components/forms/FlightEnquiryFromParams";
import { ButtonLink } from "@/components/shared/Button";
import { Split, FeatureSection } from "@/components/shared/Blocks";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import { SupportBand } from "@/components/support/SupportBand";
import { flightFaqs } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Flight Booking Assistance",
  description:
    "Send a one-way, round-trip or multi-city flight enquiry to TravelStation. Our customer support team helps with domestic and international flights, changes and cancellations.",
  path: "/flights",
});

const routes = [
  ["London", "New York"],
  ["Dubai", "Singapore"],
  ["Toronto", "London"],
  ["Paris", "Rome"],
  ["Sydney", "Singapore"],
  ["New York", "Dubai"],
  ["Singapore", "Tokyo"],
  ["London", "Sydney"],
];

// Names shown as plain text for identification only; no logos, no affiliation implied.
const airlineExamples = [
  "Air Canada",
  "Air France",
  "British Airways",
  "Delta Air Lines",
  "Emirates",
  "Lufthansa",
  "Qantas",
  "Qatar Airways",
  "Singapore Airlines",
  "Turkish Airlines",
  "United Airlines",
  "Virgin Atlantic",
];

export default function FlightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flights"
        title="Flight assistance from people who pick up the phone."
        image={images.flightsHero}
        imagePosition="50% 55%"
        crumbs={[{ label: "Flights" }]}
        padBottom="pb-28 sm:pb-32"
      >
        Tell us where you want to fly and when. Our team will look at the options and come back to
        you. We don&apos;t show live fares online, so you always speak to a person first.
      </PageHero>

      <div id="enquiry" className="relative z-10 -mt-20 sm:-mt-24">
        <Container>
          <FlightEnquiryFromParams />
        </Container>
      </div>

      <Split
        id="international"
        eyebrow="International flights"
        title="Crossing borders, one conversation."
        image={images.windowWing}
        imagePosition="50% 45%"
        tone="white"
        actions={
          <ButtonLink href="#enquiry" variant="secondary">
            Start an international enquiry <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        }
      >
        <p>
          Long-haul journeys, connections through major hubs, or a one-way trip to start a new
          chapter. Share the route and your preferred dates, and our team will discuss the options
          they can arrange.
        </p>
        <p>
          We&apos;ll ask about the things that matter on a longer trip, such as baggage, travel class
          and flexibility, so the plan suits you and not only the timetable.
        </p>
      </Split>

      <Split
        id="domestic"
        eyebrow="Domestic flights"
        title="Closer to home, just as carefully."
        image={images.landing}
        imagePosition="50% 50%"
        flip
        tone="ivory"
      >
        <p>
          Business trips, family visits and weekend breaks within one country are just as welcome.
          Send us your route and dates and we&apos;ll help you look at the options.
        </p>
        <p>
          If your plans are still moving, say so in your message. Flexible dates can open up more
          choice, and our team can talk it through.
        </p>
      </Split>

      <FeatureSection
        eyebrow="Trip types"
        title="One way, return or multi-city."
        intro="Pick the shape of your journey in the enquiry form. Everything you enter goes to our team, not to a search engine."
        cols={3}
        features={[
          {
            icon: Plane,
            title: "One-way",
            text: "A single flight from A to B. Useful for relocations, open-ended travel or when you will return another way.",
          },
          {
            icon: Repeat,
            title: "Round trip",
            text: "Out and back with fixed dates. Add the return date and passenger numbers and we will take it from there.",
          },
          {
            icon: Shuffle,
            title: "Multi-city",
            text: "Several stops on one journey. Add each leg to the form and our team will review the whole itinerary.",
          },
        ]}
      />

      <Section tone="mist" labelledBy="routes-title">
        <Container>
          <SectionHeading eyebrow="Popular international routes" title="Routes people ask about." id="routes-title">
            Choose a route to pre-fill the enquiry form. These are examples only; no fares or
            availability are shown.
          </SectionHeading>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map(([from, to]) => (
              <li key={`${from}-${to}`}>
                <Link
                  href={`/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}#enquiry`}
                  className="group flex items-center justify-between gap-3 rounded-md border border-line bg-white px-5 py-4 transition-all hover:border-teal hover:shadow-card"
                >
                  <span className="flex items-center gap-3 font-display font-bold text-navy">
                    {from}
                    <Route className="h-4 w-4 text-orange" aria-hidden />
                    {to}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5" aria-hidden />
                  <span className="sr-only">Enquire about flights from {from} to {to}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="airlines-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="Airlines" title="Have an airline in mind?" id="airlines-title">
              Mention it in your enquiry and our team will do their best to take your preference
              into account.
            </SectionHeading>
            <div>
              <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3" aria-label="Examples of well-known airlines">
                {airlineExamples.map((a) => (
                  <li key={a} className="border-t border-navy/15 py-4 font-display text-[1.02rem] font-bold tracking-tight text-navy-2">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl border-l-2 border-orange pl-4 text-[0.88rem] leading-relaxed">
                Airline names are shown as plain text for identification only. TravelStation is an
                independent third-party travel service provider and is not affiliated with or
                endorsed by any airline. Availability depends on route, date and fare conditions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy" labelledBy="changes-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionHeading eyebrow="Already booked?" title="Booking changes and cancellations." id="changes-title" light>
              Need to move a date, correct a name or cancel? Tell us about your booking and we will
              explain the options. What is possible depends on your fare conditions.
            </SectionHeading>
            <ul className="grid gap-3 text-sm font-semibold text-white sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: CalendarClock, t: "Flight date changes" },
                { icon: MapPinned, t: "Passenger detail corrections" },
                { icon: Globe2, t: "Cancellations and refund enquiries" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-3 rounded-md border border-white/15 bg-white/[0.04] px-4 py-3.5">
                  <x.icon className="h-4 w-4 text-orange" aria-hidden /> {x.t}
                </li>
              ))}
              <li className="sm:col-span-2 lg:col-span-1">
                <ButtonLink href="/manage-booking#enquiry" size="lg" className="w-full">
                  <PlaneTakeoff className="h-4 w-4" aria-hidden /> Manage Booking
                </ButtonLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <FaqSection
        items={flightFaqs}
        title="Flight booking questions"
        eyebrow="Flights FAQ"
        intro="How our flight enquiry service works, in plain language."
        tone="ivory"
        id="flight-faq"
      />
      <SupportBand title="Prefer to talk it through?" text="Call our support team any time. We can take your flight details over the phone." />
    </>
  );
}
