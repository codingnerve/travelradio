import { DocBullets, DocMeta, DocPage, DocSection, EmailLink } from "@/components/shared/DocPage";
import { PageBanner } from "@/components/shared/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Travel Station collects, uses and protects the personal information you share with us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <DocPage>
        <DocMeta>Effective Date: February 21, 2026</DocMeta>
        <p className="mt-4 text-[1.05rem] leading-[1.8] text-[#6b7280] sm:text-[1.15rem]">
          At Travel Station, we are committed to protecting your privacy. This policy explains how we
          collect and use your data.
        </p>
        <div className="mt-8">
          <DocSection title="1. Information We Collect">
            <p>We collect the following types of information:</p>
            <DocBullets
              items={[
                <>
                  <strong className="font-bold text-[#4b5563]">Personal Data:</strong> Name, Email,
                  Phone, Passport details, Payment information.
                </>,
                <>
                  <strong className="font-bold text-[#4b5563]">Non-Personal Data:</strong> IP Address,
                  Browser type, Device information.
                </>,
              ]}
            />
          </DocSection>
          <DocSection title="2. How We Use Your Information">
            <p>Your data is used strictly to:</p>
            <DocBullets
              items={[
                "Process and confirm flight, hotel, and car rental bookings.",
                "Provide visa assistance and travel insurance services.",
                "Facilitate rescheduling, name changes, or cancellations.",
                "Respond to customer support requests.",
                "Send essential travel updates and itinerary changes.",
              ]}
            />
          </DocSection>
          <DocSection title="3. Cookies">
            <p>
              We use cookies to remember your preferences and analyze website traffic. You can manage
              cookie preferences through your browser settings.
            </p>
          </DocSection>
          <DocSection title="4. Data Sharing & Third Parties">
            <p>
              We share your information with third-party service providers (airlines, hotels, GDS
              systems, and payment processors) only to the extent necessary to complete your travel
              requests. We do not sell your personal data to marketers.
            </p>
          </DocSection>
          <DocSection title="5. Security">
            <p>
              We implement technical measures to protect your data, though no transmission over the
              internet is 100% secure. We continuously work to safeguard your information during
              transmission and storage.
            </p>
          </DocSection>
          <DocSection title="6. Children's Privacy">
            <p>
              Our services are not directed toward individuals under 18. We do not knowingly collect
              personal data from children.
            </p>
          </DocSection>
          <DocSection title="7. Contact Us">
            <p>
              For any privacy-related inquiries, please contact us at <EmailLink />.
            </p>
          </DocSection>
        </div>
      </DocPage>
    </>
  );
}
