import { DocMeta, DocPage, DocSection, EmailLink, OrangeLink } from "@/components/shared/DocPage";
import { PageBanner } from "@/components/shared/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "The terms that apply when you use Travel Station's website and travel services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms and Conditions" />
      <DocPage>
        <DocMeta>Effective Date: February 21, 2026</DocMeta>
        <div className="mt-8">
          <DocSection title="1. Services">
            <p>
              Travel Station provides flight booking, hotel reservation, car rental, visa assistance,
              and related travel services. All services are subject to availability and the terms of
              the respective airlines, hotels, and service providers.
            </p>
          </DocSection>
          <DocSection title="2. Payments">
            <p>
              Booking is confirmed only after full or partial payment has been received. All prices
              quoted are subject to change due to airline fare adjustments, currency fluctuations, or
              changes in taxes and fees. Final pricing will be confirmed at the time of booking.
            </p>
          </DocSection>
          <DocSection title="3. Visa Disclaimer">
            <p>
              Travel Station provides visa assistance only. The approval or rejection of a visa
              application is solely at the discretion of the relevant embassy or consulate. We are
              not responsible for visa refusals, and visa processing fees are non-refundable.
            </p>
          </DocSection>
          <DocSection title="4. Cancellations & Refunds">
            <p>
              Cancellation and refund policies are governed by the terms of the respective service
              providers (airlines, hotels, etc.). Please refer to our{" "}
              <OrangeLink href="/refund-policy">Refund &amp; Cancellation Policy</OrangeLink> for
              detailed information.
            </p>
          </DocSection>
          <DocSection title="5. Limitation of Liability">
            <p>
              Travel Station acts as an intermediary between clients and travel service providers.
              We are not liable for flight delays, cancellations, accidents, loss of baggage, or any
              other issues arising from the actions or inactions of airlines, hotels, or other
              third-party providers. Our liability is limited to the service fees charged by Travel
              Station.
            </p>
          </DocSection>
          <DocSection title="6. User Responsibilities">
            <p>
              Users are responsible for ensuring the accuracy of all information provided during
              booking, including names, travel dates, and passport details. Travel Station is not
              liable for issues arising from incorrect information provided by the user.
            </p>
          </DocSection>
          <DocSection title="7. Governing Law">
            <p>
              These terms and conditions are governed by the laws of the United Kingdom. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </DocSection>
          <DocSection title="8. Contact">
            <p>
              For any questions regarding these terms, please contact us at <EmailLink />.
            </p>
          </DocSection>
        </div>
      </DocPage>
    </>
  );
}
