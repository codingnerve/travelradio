export const site = {
  name: "TravelStation",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.travelstation.world").replace(
    /\/$/,
    "",
  ),
  tagline: "Travel assistance for flights, booking support and more",
  description:
    "TravelStation is an independent travel assistance service. Send an enquiry for flights and booking support, or speak with our customer support team.",
  locale: "en_GB",
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Flights",
    href: "/flights",
    children: [
      {
        label: "Flight Enquiry",
        href: "/flights#enquiry",
        description: "One-way, return and multi-city requests",
      },
      {
        label: "International Flights",
        href: "/flights#international",
        description: "Long-haul and cross-border journeys",
      },
      {
        label: "Domestic Flights",
        href: "/flights#domestic",
        description: "Within-country travel assistance",
      },
      {
        label: "Changes & Cancellations",
        href: "/manage-booking",
        description: "Help with an existing booking",
      },
    ],
  },
  {
    label: "Travel Services",
    href: "/travel-services",
    children: [
      { label: "Flight Bookings", href: "/travel-services#flights" },
      { label: "Travel Assistance", href: "/travel-services#assistance" },
      { label: "Radio Services", href: "/travel-services#radio" },
    ],
  },
  {
    label: "Radio Services",
    href: "/radio-services",
    children: [
      {
        label: "Radio Activation",
        href: "/radio-services#activation",
        description: "Help getting a subscription activated",
      },
      {
        label: "Signal & Reception",
        href: "/radio-services#signal",
        description: "Troubleshooting weak or missing signal",
      },
      {
        label: "Subscriptions",
        href: "/radio-services#subscriptions",
        description: "Plan and billing enquiries",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About TravelStation", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Flights", href: "/flights" },
  { label: "Travel Services", href: "/travel-services" },
  { label: "Contact Us", href: "/contact" },
];

export const footerSupportLinks = [
  { label: "Manage Booking", href: "/manage-booking" },
  { label: "Flight Changes", href: "/manage-booking?category=flight-change#enquiry" },
  {
    label: "Cancellation Assistance",
    href: "/manage-booking?category=cancellation#enquiry",
  },
  {
    label: "Refund Enquiries",
    href: "/manage-booking?category=refund#enquiry",
  },
  { label: "Radio Services", href: "/radio-services" },
  { label: "Frequently Asked Questions", href: "/faq" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];
