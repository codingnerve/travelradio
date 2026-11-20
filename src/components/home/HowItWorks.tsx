import { Container, Section } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Share Your Travel Requirements",
    text: "Tell us where you want to go, when, and who is travelling, using any of our enquiry forms.",
  },
  {
    n: "02",
    title: "Connect With Our Travel Team",
    text: "Your enquiry goes straight to our customer support team, who get in touch using your preferred contact details.",
  },
  {
    n: "03",
    title: "Review Available Options",
    text: "We go through the options we can arrange for your journey and answer your questions.",
  },
  {
    n: "04",
    title: "Confirm Your Travel Arrangements",
    text: "Once you are happy, we confirm the arrangements with you directly and explain every next step.",
  },
];

export function HowItWorks() {
  return (
    <Section labelledBy="how-title">
      <Container>
        <SectionHeading eyebrow="How it works" title="Four steps from idea to itinerary" id="how-title">
          Every enquiry is handled personally by our customer support team. There is no instant
          checkout, only a conversation with someone who can help.
        </SectionHeading>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-[1.55rem] hidden border-t border-dashed border-navy/25 lg:block" />
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <Reveal delay={i * 0.09}>
                <span className="relative z-10 inline-flex h-[3.1rem] min-w-[3.1rem] items-center justify-center bg-white pr-4 font-display text-[2rem] font-extrabold leading-none text-orange">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
