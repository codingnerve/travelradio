import { Armchair, CalendarClock, CircleHelp, Plane, Receipt, UserPen, XCircle } from "lucide-react";
import Link from "next/link";
import { BookingAssistanceForm } from "@/components/forms/BookingAssistanceForm";
import { EnquirySection } from "@/components/forms/EnquirySection";
import { FormSuspense } from "@/components/forms/FormShell";
import { Container, Section } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/support/FaqSection";
import type { Faq } from "@/config/faq";
import { images } from "@/config/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Manage Booking",
  description:
    "Need help with an existing booking? Ask TravelStation's customer support team about flight changes, cancellations, refunds and passenger detail corrections.",
  path: "/manage-booking",
});

const categories = [
  { key: "new-booking", icon: Plane, title: "New Booking", text: "Start a new travel request." },
  { key: "flight-change", icon: CalendarClock, title: "Flight Change", text: "Move a date or adjust an itinerary." },
  { key: "cancellation", icon: XCircle, title: "Cancellation", text: "Ask about cancelling a booking." },
  { key: "refund", icon: Receipt, title: "Refund Enquiry", text: "Ask whether a refund is possible." },
  { key: "passenger-correction", icon: UserPen, title: "Passenger Details Correction", text: "Fix a name or detail on a booking." },
  { key: "general-support", icon: CircleHelp, title: "General Support", text: "Seat selection and anything else." },
];

const faqs: Faq[] = [
  {
    q: "Can I look up my booking on this page?",
    a: "No. This site does not retrieve booking details automatically. You send us your enquiry and, if you have one, your booking reference, and our team reviews it manually and contacts you.",
  },
  {
    q: "Will I be told straight away if I can change or cancel?",
    a: "Our team will review your request and explain your options. Whether a change, cancellation or refund is possible depends on the fare or rate conditions of your booking and the supplier's rules.",
  },
  {
    q: "Do I need a booking reference?",
    a: "It is optional but helpful. If you do not have one, tell us the traveller names, travel dates and where the booking was made, and our team will take it from there.",
  },
  {
    q: "What if my trip is very soon?",
    a: "Please call customer support rather than waiting for a reply to a form. Our telephone line is available 24/7.",
  },
];

export default function ManageBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manage booking"
        title="Help with an existing booking."
        image={images.lounge}
        imagePosition="72% 30%"
        crumbs={[{ label: "Manage Booking" }]}
      >
        Plans change. Tell us what you need, whether that is a new date, a correction or a
        cancellation, and our team will explain your options.
      </PageHero>

      <Section labelledBy="mb-cats">
        <Container>
          <SectionHeading eyebrow="What do you need?" title="Choose the kind of help you need." id="mb-cats" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <li key={c.key}>
                <Link
                  href={`/manage-booking?category=${c.key}#enquiry`}
                  scroll
                  className="group flex h-full gap-4 rounded-md border border-line bg-white p-5 transition-all hover:border-teal hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                    <c.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-base font-extrabold text-navy">{c.title}</span>
                    <span className="mt-0.5 block text-[0.9rem] leading-snug">{c.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm">
            <Armchair className="h-4 w-4 text-teal" aria-hidden /> Seat selection and other small requests can go under General Support.
          </p>
        </Container>
      </Section>

      <EnquirySection
        eyebrow="Booking enquiry"
        title="Tell us about your booking."
        intro="We do not look up bookings automatically. Share what you can and our team will review it and contact you."
        tone="ivory"
        points={[
          "Our customer support team reviews your request manually.",
          "We contact you to explain the options available.",
          "Changes and refunds depend on the conditions of your booking.",
          "For trips leaving soon, please call us rather than wait.",
        ]}
      >
        <FormSuspense>
          <BookingAssistanceForm />
        </FormSuspense>
      </EnquirySection>

      <FaqSection items={faqs} title="Managing a booking" eyebrow="Booking FAQ" intro="What to expect when you ask us for help." id="mb-faq" tone="white" />
    </>
  );
}
