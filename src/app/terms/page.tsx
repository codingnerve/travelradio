import { LegalPage } from "@/components/shared/LegalPage";
import { company, contact } from "@/config/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that apply to using the TravelStation website and submitting travel enquiries to our customer support team.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      intro={`These terms apply when you use this website and submit enquiries to ${company.legalName}, trading as ${company.tradingName}. By using the site you agree to them.`}
      sections={[
        {
          heading: "About our service",
          body: [
            `${company.tradingName} is an independent travel assistance service. Through this website you can send enquiries about flights, hotels, car rentals, existing bookings and radio services support. Enquiries are handled by our customer support team.`,
            "This website does not display live fares or availability, does not take payments and does not issue tickets, reservations or rentals. An enquiry is a request for assistance, not a booking.",
          ],
        },
        {
          heading: "Enquiries and arrangements",
          body: [
            "Submitting an enquiry does not create a contract for travel services and does not oblige either party to proceed. Any travel arrangement is made only when our team has confirmed it with you directly and you have accepted its terms, price and conditions.",
            "Fares, rates, availability and conditions for flights, hotels and car rentals are set by the relevant suppliers, can change at any time and are not guaranteed until confirmed.",
          ],
        },
        {
          heading: "Your responsibilities",
          body: ["When you use this website you agree to:"],
          list: [
            "give accurate and complete information, including traveller names exactly as shown on identity documents;",
            "check that you hold the passports, visas, health documents and insurance needed for your journey;",
            "not use the site unlawfully, send spam or attempt to disrupt it; and",
            "not send payment card details or passwords through enquiry forms.",
          ],
        },
        {
          heading: "Third-party suppliers",
          body: [
            "Services are provided by third-party suppliers, each with their own conditions. We are not the airline, hotel or rental company and are not responsible for their acts or omissions, except where the law says otherwise.",
            "TravelStation is an independent third-party travel service provider and is not affiliated with or endorsed by any airline or other supplier unless a verified relationship is stated.",
          ],
        },
        {
          heading: "Radio services support",
          body: [
            "Radio services support offered through this website is an independent support service. It is not operated by, affiliated with or endorsed by any satellite radio provider.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The content and design of this website belong to us or our licensors. Third-party names, logos and trademarks belong to their owners and are used for identification only.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence or for fraud. Subject to that, we are not liable for losses that were not reasonably foreseeable, for business losses, or for losses caused by information you gave us that was inaccurate or incomplete. The website is provided on an as-available basis and we do not guarantee it will be uninterrupted or error-free.",
          ],
        },
        {
          heading: "Changes and governing law",
          body: [
            "We may update these terms from time to time; the version on this page applies when you use the site. These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction, without affecting any mandatory consumer rights you have in the country where you live.",
          ],
        },
        {
          heading: "Contact",
          body: [`${company.legalName}, ${company.addressInline}. Email ${contact.email}. Telephone ${contact.phoneDisplay}.`],
        },
      ]}
    />
  );
}
