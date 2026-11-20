import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { company, contact } from "@/config/contact";
import { site } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Travel assistance for flights and booking support`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} — Travel assistance`,
    description: site.description,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TravelStation — travel assistance for flights and booking support",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#172D43",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: company.legalName,
      url: site.url,
      email: contact.email,
      vatID: company.vatNumber,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, 7 Mackenzie Street",
        addressLocality: "Slough",
        postalCode: "SL1 1XQ",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: contact.phoneDisplay.replace(/[^\d+]/g, ""),
        email: contact.email,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-orange px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <div className="h-[4.5rem] bg-navy md:hidden" aria-hidden />
        <StickyCallBar />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
