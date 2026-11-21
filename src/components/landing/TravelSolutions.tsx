import { Building2, Car, Plane, type LucideIcon } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const services: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Flight Bookings", text: "International & domestic flights at the best prices.", icon: Plane },
  { title: "Hotel Reservations", text: "Worldwide hotel bookings for every budget.", icon: Building2 },
  { title: "Car Rental", text: "Flexible car hire at airports and city centres.", icon: Car },
];

export function TravelSolutions() {
  return (
    <section aria-labelledby="solutions-title" className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <SectionTitle eyebrow="Our Services" title="Complete Travel Solutions" id="solutions-title" />
        <ul className="mx-auto mt-9 grid max-w-4xl gap-10 sm:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <li key={title} className="text-center">
              <span
                aria-hidden
                className="mx-auto flex h-[66px] w-[66px] items-center justify-center rounded-xl bg-orange/10 text-orange"
              >
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-bold">{title}</h3>
              <p className="mx-auto mt-1.5 max-w-[16rem] text-[0.9rem] leading-relaxed text-[#6b7280]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
