import { LegalPage } from "@/components/shared/LegalPage";
import { company, contact } from "@/config/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How TravelStation (TravelOpedia Ltd.) collects, uses and protects the personal information you share when you submit a travel enquiry.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      intro={`This policy explains how ${company.legalName}, trading as ${company.tradingName}, handles personal information when you use this website or contact our customer support team.`}
      sections={[
        {
          heading: "Who we are",
          body: [
            `${company.legalName} (company registration no. ${company.registrationNumber}) of ${company.addressInline} is the controller of the personal information described in this policy.`,
            `You can contact us at ${contact.email} or on ${contact.phoneDisplay}.`,
          ],
        },
        {
          heading: "Information we collect",
          body: ["When you submit an enquiry form we collect the information you enter, which may include:"],
          list: [
            "your name, email address and telephone number;",
            "trip details such as destinations, dates, number of travellers and travel class;",
            "any booking reference, travel date and message you choose to give us;",
            "the page you submitted the form from and basic technical data, including your browser type and a one-way hashed form of your IP address, used to prevent spam and abuse.",
          ],
        },
        {
          heading: "Information we ask you not to send",
          body: [
            "Please do not include payment card numbers, passwords or other highly sensitive information in enquiry forms or emails. This website does not collect payments. If a payment is ever needed, our team will explain how it works before you agree to anything.",
          ],
        },
        {
          heading: "How we use your information",
          body: ["We use your information to:"],
          list: [
            "respond to your enquiry and contact you about the travel or support you asked about;",
            "send you an acknowledgement that we received your enquiry;",
            "help with changes, cancellations or refunds on existing bookings;",
            "protect the website from spam, fraud and misuse; and",
            "meet our legal and accounting obligations.",
          ],
        },
        {
          heading: "Our legal basis",
          body: [
            "We rely on taking steps at your request before entering into an arrangement, our legitimate interests in running and protecting our service, and, where applicable, compliance with legal obligations. Where we need your consent, we will ask for it and you may withdraw it at any time.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "We share information only where needed to deal with your enquiry or run our service. This can include travel suppliers (such as airlines, hotels and car rental companies) when you ask us to arrange something with them, and service providers who host this website, store enquiry data or deliver email on our behalf. We do not sell your personal information.",
          ],
        },
        {
          heading: "International transfers",
          body: [
            "Because travel is international, and some of our providers operate outside the United Kingdom, your information may be transferred abroad. Where this happens we use appropriate safeguards required by UK data protection law.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep enquiry information only for as long as it is needed for the purposes above, including any period needed to handle follow-up questions, complaints and legal or accounting requirements, and then delete or anonymise it.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This website does not use advertising or analytics cookies. Your browser may store technical data strictly necessary for the site to work. If we add analytics or marketing tools in future, we will update this page and ask for consent where required.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under UK data protection law you have the right to access your information, have it corrected or erased, restrict or object to its use, and receive a copy in a portable format. To exercise a right, contact us using the details above.",
            "If you are unhappy with how we handle your information, you can complain to the Information Commissioner's Office (ico.org.uk).",
          ],
        },
        {
          heading: "Changes to this policy",
          body: ["We may update this policy from time to time. The date at the top of the page shows when it was last changed."],
        },
      ]}
    />
  );
}
