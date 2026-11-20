import { LegalPage } from "@/components/shared/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Refund Policy",
  description:
    "How refund enquiries are handled by TravelStation, including supplier rules and what information to give our customer support team.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      path="/refund-policy"
      intro="This page explains how refund enquiries work. Whether a refund is possible, and how much, depends on the conditions of the arrangement you made."
      sections={[
        {
          heading: "Enquiries are free",
          body: [
            "Sending an enquiry through this website costs nothing and no payment is taken, so there is nothing to refund for an enquiry on its own.",
          ],
        },
        {
          heading: "Refunds on confirmed arrangements",
          body: [
            "If you have confirmed an arrangement through our team, any refund is governed by the conditions of that fare, rate or rental, which you were given at the time. Some are fully refundable, some partly and some not at all.",
            "Where a supplier agrees to a refund, it is returned to the original payment method. Processing times depend on the supplier and on your bank or card provider.",
          ],
        },
        {
          heading: "Requesting a refund",
          body: ["Use the Manage Booking page and choose Refund Enquiry, or call customer support. Please have ready:"],
          list: [
            "the name(s) on the booking and your booking reference;",
            "the service concerned and your travel dates; and",
            "the reason for your request and any supporting documents.",
          ],
        },
        {
          heading: "What happens next",
          body: [
            "Our team reviews your request, checks the conditions that apply and explains what is possible. We will tell you if a refund is not available and why. Submitting a form is a request for assistance and is not a guarantee of a refund.",
          ],
        },
        {
          heading: "Your statutory rights",
          body: ["Nothing in this policy affects any rights you have under the law that cannot be excluded."],
        },
      ]}
    />
  );
}
