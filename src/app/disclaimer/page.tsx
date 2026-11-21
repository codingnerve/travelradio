import { LegalPage } from "@/components/shared/LegalPage";
import { company } from "@/config/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Travel Station is an independent third-party travel service provider, not affiliated with or endorsed by any airline, hotel group or car rental provider.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      path="/disclaimer"
      intro={`${company.tradingName} is an independent third-party travel service provider operated by ${company.legalName}.`}
      sections={[
        {
          heading: "No affiliation",
          body: [
            "Travel Station is not affiliated with, endorsed by, sponsored by or officially connected to any airline, airport, hotel group or car rental company, unless a verified relationship is stated on the relevant page.",
            "Airline, hotel and vehicle brand names, logos and trademarks mentioned on this website belong to their respective owners. They are used only to identify the services customers may ask about and do not imply any relationship.",
          ],
        },
        {
          heading: "Enquiry-based service",
          body: [
            "Information on this website is general and is not a quotation or an offer. We do not publish live fares, rates or availability. Nothing is booked, ticketed or reserved until our customer support team has confirmed it with you directly.",
          ],
        },
        {
          heading: "Travel documents and requirements",
          body: [
            "You are responsible for checking passport, visa, health and entry requirements for your destination and any countries you transit. Requirements change, so please confirm them with official government sources before you travel.",
          ],
        },
        {
          heading: "Images and content",
          body: [
            "Photographs are for illustration and may not show the exact destination, property or vehicle you arrange. Website content is provided in good faith but may contain errors or become out of date.",
          ],
        },
      ]}
    />
  );
}
