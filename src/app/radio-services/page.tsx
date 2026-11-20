import { AudioLines, CreditCard, Headset, ListMusic, Power, SignalHigh } from "lucide-react";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { RadioSupportForm } from "@/components/forms/RadioSupportForm";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import { SupportBand } from "@/components/support/SupportBand";
import { contact } from "@/config/contact";
import { radioFaqs } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Radio Services Support",
  description:
    "Independent support for satellite radio activation, signal and reception problems, missing channels and subscription enquiries. Not affiliated with any radio provider.",
  path: "/radio-services",
});

const services = [
  {
    id: "activation",
    icon: Power,
    title: "Radio activation assistance",
    text: "Not sure how to get a subscription started, or waiting on a radio to come to life? Our team talks you through the activation steps.",
  },
  {
    id: "signal",
    icon: SignalHigh,
    title: "Signal and reception troubleshooting",
    text: "Dropouts, weak signal or no signal at all. We help you work through the common causes, from antenna position to receiver settings.",
  },
  {
    id: "channels",
    icon: ListMusic,
    title: "Missing channel assistance",
    text: "If channels you expect are not showing up, we can help you check your plan and your device before you go further.",
  },
  {
    id: "subscriptions",
    icon: CreditCard,
    title: "Subscription enquiries",
    text: "Questions about plans, renewals or what your subscription includes? Ask us and we will point you in the right direction.",
  },
  {
    id: "support",
    icon: Headset,
    title: "Radio-related customer support",
    text: "For anything else radio-related, our customer support team is on the phone 24/7.",
  },
];

export default function RadioServicesPage() {
  return (
    <>
      {/* Distinct treatment: deep teal-navy stage with a sound-wave motif */}
      <div className="relative isolate overflow-hidden bg-[#0f2a2c]">
        <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block">
          <Photo image={images.radioMic} sizes="46vw" position="50% 50%" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a2c] via-[#0f2a2c]/45 to-transparent" />
        </div>
        <div aria-hidden className="absolute bottom-0 left-0 -z-10 flex h-24 w-full items-end gap-[5px] px-5 opacity-20 sm:px-8">
          {Array.from({ length: 80 }, (_, i) => (
            <span
              key={i}
              className="w-1 flex-1 rounded-t bg-teal"
              style={{ height: `${18 + ((i * 37) % 70)}%` }}
            />
          ))}
        </div>
        <Container className="relative pb-24 pt-8 lg:pb-28 lg:pt-10">
          <Breadcrumbs items={[{ label: "Radio Services" }]} light />
          <div className="mt-12 max-w-2xl lg:mt-16">
            <Eyebrow light>Radio services</Eyebrow>
            <h1 className="mt-5 text-[2.1rem] font-extrabold !text-white sm:text-5xl lg:text-[3.4rem]">
              Satellite radio support, when the music stops.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Help with activation, signal and reception, missing channels and subscription
              questions from a team that answers the phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#enquiry" size="lg">Request Radio Support</ButtonLink>
              <ButtonLink href={contact.phoneHref} variant="outline-light" size="lg">Call Support</ButtonLink>
            </div>
          </div>
        </Container>
      </div>

      <Section tone="ivory" className="!py-8 sm:!py-10" labelledBy="independent-title">
        <Container>
          <div className="flex gap-4 border-l-4 border-orange bg-white p-5 sm:p-6">
            <AudioLines className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden />
            <div>
              <h2 id="independent-title" className="font-display text-lg font-extrabold">An independent support service</h2>
              <p className="mt-1.5 max-w-3xl text-[0.95rem] leading-relaxed">
                Radio services support offered through TravelStation is an independent service. It
                is not operated by, affiliated with or endorsed by any satellite radio provider, and
                it is not their official customer service.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="radio-services-title">
        <Container>
          <SectionHeading eyebrow="What we help with" title="Five ways our radio team can help." id="radio-services-title" />
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.id} id={s.id}>
                <Reveal className="grid gap-4 py-8 md:grid-cols-[4rem_1fr_1.4fr] md:items-start md:gap-8">
                  <span className="font-display text-3xl font-extrabold text-teal/70">0{i + 1}</span>
                  <h3 className="flex items-center gap-3 text-xl font-extrabold">
                    <s.icon className="h-5 w-5 shrink-0 text-teal" aria-hidden />
                    {s.title}
                  </h3>
                  <p className="leading-relaxed">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <EnquirySection
        eyebrow="Radio support request"
        title="Tell us what is happening."
        intro="Describe the problem or question and our radio support team will get back to you."
        tone="mist"
        points={[
          "Your request goes to our customer support team.",
          "We contact you using the details you provide.",
          "Never share card numbers or passwords in this form.",
        ]}
      >
        <RadioSupportForm />
      </EnquirySection>

      <FaqSection items={radioFaqs} title="Radio services questions" eyebrow="Radio FAQ" intro="What this service is, and what it is not." id="radio-faq" tone="ivory" />
      <SupportBand title="Talk to a person about your radio." text="Our customer support team is available around the clock. Call us and explain what is going on." />
    </>
  );
}
