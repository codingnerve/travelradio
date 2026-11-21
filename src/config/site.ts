export const site = {
  name: "Travel Station",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.travelstation.world").replace(
    /\/$/,
    "",
  ),
  tagline: "Your Concierge Desk for Travel Services",
  description:
    "Travel Station World is your concierge desk for travel services. We assist in making flight, hotel and car rental bookings: easy, fast and cheap.",
  locale: "en_GB",
} as const;

export type NavItem = { label: string; href: string };

/** Header navigation. Pages not listed here (flights, hotels, FAQ …) are hidden for now. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Car Rental", href: "/car-rentals" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Car Rental", href: "/car-rentals" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerImportantLinks: NavItem[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Used by the sidebar on policy pages. */
export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
];

/** Social profiles shown in the footer. Replace "#" with the real profile URLs. */
export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const;
