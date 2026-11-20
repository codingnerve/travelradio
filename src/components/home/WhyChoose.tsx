import { Globe2, Headset, MapPinned, Ticket } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const benefits = [
  {
    icon: MapPinned,
    title: "Personalized Travel Assistance",
    text: "A real member of our team reads your request and works from your dates, preferences and budget, not a generic script.",
  },
  {
    icon: Ticket,
    title: "Convenient Booking Support",
    text: "Flights, hotels and car rentals can all be raised in one conversation, with help available if your plans change later.",
  },
  {
    icon: Globe2,
    title: "Worldwide Travel Options",
    text: "Send an enquiry for domestic or international journeys, and we will look at the options available for your route.",
  },
  {
    icon: Headset,
    title: "Customer Support Availability",
    text: "Our telephone support line is open 24/7, so there is someone to speak to whatever the time zone.",
  },
];

export function WhyChoose() {
  return (
    <Section tone="ivory" labelledBy="why-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="Why TravelStation" title="Why Choose TravelStation?" id="why-title">
              Travel is easier with someone on your side. We keep the process clear and personal,
              and we tell you plainly what we can and cannot do.
            </SectionHeading>
          </div>

          <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <li key={b.title} className="border-t border-navy/15 py-8 sm:[&:nth-child(-n+2)]:pt-8">
                <Reveal delay={i * 0.07}>
                  <b.icon className="h-7 w-7 text-teal" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-5 text-xl font-extrabold">{b.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed">{b.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
