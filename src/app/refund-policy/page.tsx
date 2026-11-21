import { DocPage, docBody } from "@/components/shared/DocPage";
import { EmailCareButton } from "@/components/shared/EmailCareButton";
import { PageBanner } from "@/components/shared/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Refund & Cancellation",
  description: "How refunds and cancellations are handled by Travel Station, including supplier rules and timelines.",
  path: "/refund-policy",
});

const sections = [
  {
    title: "Intermediary Role",
    text: "Travel Station acts as an intermediary between clients and service providers (airlines, hotels, tour operators). Refunds depend on the policies of these providers and are subject to their terms and conditions.",
  },
  {
    title: "Flights",
    text: "Flight refunds are subject to airline fare rules. Some tickets are non-refundable. Our service fees are non-refundable once booking is confirmed. Please review your ticket's terms before requesting a cancellation.",
  },
  {
    title: "Visa Fees",
    text: "Embassy fees and our service charges for visa assistance are non-refundable once processing begins, regardless of the outcome of the visa application.",
  },
  {
    title: "Refund Timeline",
    text: "Airline refunds typically take 7–30 working days to process and reflect in your account. The exact timeline depends on the airline and your payment provider.",
  },
];

const notes = [
  "All refund requests must be submitted to Travel Station in writing via email.",
  "Refunds are processed only after approval from the respective airline, hotel, or service provider.",
  "Our service fees and processing charges are non-refundable.",
  "Travel Station is not liable for delays in refund processing by third-party providers.",
  "Waivers may be secured from time to time from airlines or suppliers to process special refund requests.",
];

export default function RefundPolicyPage() {
  return (
    <>
      <PageBanner title="Refund & Cancellation" />
      <DocPage>
        <h2 className="text-[1.9rem] font-bold sm:text-[2.15rem]">Refund and Cancellation Policy</h2>
        <div className="mt-6 space-y-7">
          {sections.map((s) => (
            <section key={s.title}>
              <h3 className="text-[1.3rem] font-bold sm:text-[1.4rem]">{s.title}</h3>
              <p className={`mt-2 ${docBody}`}>{s.text}</p>
            </section>
          ))}
          <section>
            <h3 className="text-[1.3rem] font-bold sm:text-[1.4rem]">No-Show Policy</h3>
            <p className={`mt-2 ${docBody} font-medium text-[#4b5563]`}>
              Failure to show up for a booked service (no-show) may result in 100% cancellation
              charges as per the provider&apos;s policy.
            </p>
          </section>
        </div>

        <aside className="mt-9 rounded-2xl bg-mist p-7 sm:p-9">
          <h3 className="text-[1.3rem] font-bold">Important Notes</h3>
          <ul className={`mt-4 space-y-2.5 text-[1rem] text-[#6b7280] sm:text-[1.05rem]`}>
            {notes.map((n) => (
              <li key={n} className="flex gap-3">
                <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-6 rounded-2xl bg-orange/10 px-6 py-7 text-center">
          <p className="font-medium text-navy">Questions about your refund? Contact us.</p>
          <EmailCareButton className="mt-4" />
        </div>
      </DocPage>
    </>
  );
}
