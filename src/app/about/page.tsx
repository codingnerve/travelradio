import { Briefcase, Building2, Car, Globe, Plane, Shield, type LucideIcon } from "lucide-react";
import { EmailCareButton } from "@/components/shared/EmailCareButton";
import { PageBanner } from "@/components/shared/PageBanner";
import { DocPage, docBody } from "@/components/shared/DocPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Travel Station is a UK-based travel company dedicated to making global travel simple, affordable, and stress-free.",
  path: "/about",
});

const services: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Flight Bookings", text: "International & Domestic Flight Bookings at competitive prices.", icon: Plane },
  { title: "Hotel Reservations", text: "Hotel Reservations Worldwide for every budget and style.", icon: Building2 },
  { title: "Holiday Packages", text: "Curated Holiday & Tour Packages for unforgettable experiences.", icon: Globe },
  { title: "Visa Assistance", text: "Expert Visa Assistance to simplify your travel paperwork.", icon: Shield },
  { title: "Travel Insurance", text: "Comprehensive Travel Insurance for peace of mind.", icon: Car },
  { title: "Corporate Travel", text: "Corporate Travel Management solutions for businesses.", icon: Briefcase },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <DocPage>
        <h2 className="text-[1.9rem] font-bold sm:text-[2.15rem]">Travel Station – Your Trusted UK Travel Partner</h2>
        <p className={`mt-4 ${docBody}`}>
          Welcome to Travel Station, a UK-based travel company dedicated to making global travel
          simple, affordable, and stress-free. We specialize in providing complete travel solutions
          tailored to the unique needs of our clients.
        </p>

        <h3 className="mt-9 text-[1.4rem] font-bold">Our Services</h3>
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-2xl bg-mist px-6 py-10 text-center">
              <span
                aria-hidden
                className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-xl bg-orange/10 text-orange"
              >
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h4 className="mt-5 text-[1.1rem] font-bold">{title}</h4>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#6b7280]">{text}</p>
            </li>
          ))}
        </ul>

        <section className="mt-6 rounded-2xl bg-mist p-7 sm:p-9">
          <h3 className="text-[1.4rem] font-bold">Our Mission</h3>
          <p className={`mt-3 ${docBody}`}>
            To provide transparent pricing, reliable booking support, and exceptional customer
            service. We believe every journey should begin with confidence and ease, and we work
            tirelessly to ensure our clients receive the best value and support at every step.
          </p>
        </section>

        <div className="mt-6 rounded-2xl bg-orange/10 px-6 py-7 text-center">
          <p className="font-medium text-navy">Ready to plan your next trip?</p>
          <EmailCareButton className="mt-4" />
        </div>
      </DocPage>
    </>
  );
}
