import { LegalPage } from "@/components/shared/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Refund, Cancellation & Service Policy",
  description:
    "Our independent concierge service, one-time service fees, cancellation terms, 14-day satisfaction guarantee and how to request a refund.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund, Cancellation & Service Policy"
      path="/refund-policy"
      intro="This policy explains the scope of our service fees, when you can cancel, and when you are eligible for a refund."
      sections={[
        {
          heading: "Independent Service & Non-Affiliation Notice",
          body: [
            "TRAVELSTATION LTD (“Company,” “we,” “our,” or “us”) operates an independent personal concierge, technical setup, and subscription management assistance service. We are an independent third-party service provider and are not affiliated with, authorized by, endorsed by, or sponsored by SiriusXM or any other third-party media, telecom, or hardware provider.",
            "Any product names, logos, and brands mentioned during our consultations are the property of their respective owners and are used strictly for identification purposes. Customers can contact official service providers directly for standard account support at no additional concierge fee.",
          ],
        },
        {
          heading: "Scope of Fees",
          body: [
            "All payments collected by TRAVELSTATION LTD are strictly one-time service and consultation fees for hands-on concierge assistance, technical setup, account configuration, and dedicated agent time.",
          ],
          list: [
            "Our service fees are separate from, and do not include, any recurring subscription charges, hardware costs, or plan fees billed directly by third-party providers.",
            "By engaging our service, you acknowledge that you are paying for professional concierge time and technical assistance.",
          ],
        },
        {
          heading: "Cancellation Policy",
          body: [],
          list: [
            "**Before Service Begins:** You may cancel your service request at any time prior to the start of your scheduled consultation or technical setup session for a 100% full refund, with no cancellation penalty.",
            "**During Active Consultation:** If you choose to terminate a live session before completion, any refund will be calculated on a pro-rata basis depending on the time and technical work already performed, minus a standard administrative fee of [$25 / 10%].",
            "**No Recurring Billing:** Our concierge fees are one-time charges per service request. You will never be enrolled in an automatic recurring billing plan by TRAVELSTATION LTD without a separate, explicitly signed written authorization.",
          ],
        },
        {
          heading: "Refund Policy",
          body: [
            "We stand behind our concierge assistance and offer a clear 14-Day Satisfaction & Resolution Guarantee:",
            "**Full Refund (100%):** You are eligible for a full refund within 14 calendar days of payment if:",
          ],
          list: [
            "Our team is unable to complete the agreed-upon technical setup, activation assistance, or troubleshooting scope outlined in your Service Authorization.",
            "You were billed in error or without a completed Service Authorization Form.",
          ],
          after: [
            "**Partial Refund:** If a multi-device or multi-step concierge package is partially completed and you opt not to proceed with the remaining items, a partial refund will be issued for the uncompleted portion of the service.",
            "**Non-Refundable Circumstances:** Refunds will not be issued once the agreed-upon concierge setup or troubleshooting task has been successfully completed and verified with you during your session, or for issues caused by third-party provider outages, hardware defects, or changes made to your account after our session concludes.",
          ],
        },
        {
          heading: "How to Request a Cancellation or Refund",
          body: [
            "To avoid delays, please contact our billing support desk directly before initiating a payment dispute with your card issuer:",
          ],
          list: [
            "**Email:** radioservices@travelstation.world / customercare@travelstation.world",
            "**Phone:** +1 (855) 470-0315",
            "**Required Details:** Include your full name, order/invoice number, date of service, and a brief reason for your request.",
          ],
          after: [
            "**Processing Timeline:** All refund requests are reviewed within 2 business days. Approved refunds are credited back to your original payment method within 5 to 10 business days, depending on your bank or card issuer's processing times.",
          ],
        },
      ]}
    />
  );
}
