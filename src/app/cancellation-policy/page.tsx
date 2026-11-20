import { LegalPage } from "@/components/shared/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cancellation Policy",
  description:
    "How cancellations work when you enquire or book through TravelStation, and how to ask our customer support team for help.",
  path: "/cancellation-policy",
});

export default function CancellationPolicyPage() {
  return (
    <LegalPage
      title="Cancellation Policy"
      path="/cancellation-policy"
      intro="This page explains how cancellation requests are handled. Because TravelStation works through enquiries and third-party suppliers, the rules that apply depend on what you have arranged."
      sections={[
        {
          heading: "Withdrawing an enquiry",
          body: [
            "You can withdraw an enquiry at any time before you confirm an arrangement with our team. Contact customer support and tell us your enquiry reference. No charge applies to an enquiry.",
          ],
        },
        {
          heading: "Cancelling a confirmed arrangement",
          body: [
            "Once an arrangement has been confirmed, the cancellation rules are set by the supplier of that service, such as the airline, hotel or car rental company, and are shown in the conditions given to you when you confirmed.",
            "Depending on the fare or rate, a cancellation may be refundable, partly refundable or non-refundable, and the supplier may charge a cancellation fee.",
          ],
        },
        {
          heading: "How to request a cancellation",
          body: ["To ask for help cancelling, use the Manage Booking page or contact customer support. Please provide:"],
          list: [
            "your full name and the contact details used for the booking;",
            "your booking reference, if you have one;",
            "the travel dates and the service you want to cancel; and",
            "the reason for cancelling, if you are happy to share it.",
          ],
        },
        {
          heading: "Timing",
          body: [
            "Supplier deadlines can be strict, so please contact us as early as possible. Our telephone support line is available 24/7. Submitting a form does not cancel anything until our team has confirmed the cancellation with you.",
          ],
        },
        {
          heading: "Any service fees",
          body: [
            "If any service fee applies to handling a cancellation, our team will tell you the amount before you agree to proceed.",
          ],
        },
        {
          heading: "Refunds",
          body: ["Refunds after a cancellation are described in our Refund Policy."],
        },
      ]}
    />
  );
}
