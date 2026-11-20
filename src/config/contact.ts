/**
 * Centralised business, contact and legal information.
 *
 * IMPORTANT: The company details below were taken from the supplied
 * RadioTravoAssist reference. Confirm with the business owner that they are
 * authorised for use on TravelStation before publishing, and confirm the exact
 * legal-entity / trading-name relationship.
 *
 * Phone and email can be overridden per environment with
 * NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY, NEXT_PUBLIC_SUPPORT_PHONE_TEL and
 * NEXT_PUBLIC_SUPPORT_EMAIL.
 */

const phoneDisplay =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY ?? "+1 (833) 595-1923";
const phoneTel = process.env.NEXT_PUBLIC_SUPPORT_PHONE_TEL ?? "+18335951923";
const email =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "radioservices@travelstation.world";

export const contact = {
  phoneDisplay,
  phoneHref: `tel:${phoneTel}`,
  email,
  emailHref: `mailto:${email}`,
  availability: "24/7 Customer Support",
  availabilityNote:
    "Our customer support line is available around the clock. Enquiries submitted online are reviewed by the support team and answered as soon as possible.",
} as const;

export const company = {
  legalName: "TravelOpedia Ltd.",
  tradingName: "TravelStation",
  registrationNumber: "08168135",
  vatNumber: "199172856",
  addressLines: [
    "2nd Floor, 7 Mackenzie Street",
    "Slough – SL1 1XQ",
    "United Kingdom",
  ],
  addressInline: "2nd Floor, 7 Mackenzie Street, Slough – SL1 1XQ, United Kingdom",
  copyrightYear: 2026,
} as const;
