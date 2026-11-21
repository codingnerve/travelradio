import { Clock, Headphones, Phone, Radio, ShieldCheck, type LucideIcon } from "lucide-react";
import { contact } from "@/config/contact";
import { eyebrowGradient, orangeGradient } from "./RadioSupport";

const points: { text: string; icon: LucideIcon }[] = [
  { text: "No wait time — average pickup under 30 seconds", icon: Clock },
  { text: "No hidden charges, transparent live support", icon: ShieldCheck },
  { text: "Specialists trained for every car make and model", icon: Radio },
  { text: "24/7 phone support, 365 days a year", icon: Headphones },
];

export function RadioHelpline() {
  return (
    <section
      aria-labelledby="helpline-title"
      className="bg-[radial-gradient(60%_55%_at_100%_0%,#fdf0d2_0%,transparent_100%),linear-gradient(180deg,#d3dfee_0%,#f6e2d6_55%,#ffffff_100%)] py-24"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_37.5rem] lg:gap-12">
        <div>
          <p className={`inline-block text-[0.75rem] font-bold uppercase tracking-[0.06em] ${eyebrowGradient}`}>
            24/7 Helpline
          </p>
          <h2
            id="helpline-title"
            className="!font-sans mt-1.5 max-w-[27rem] text-[1.9rem] font-bold leading-[1.15] sm:text-[2.2rem]"
          >
            Back on the air &mdash; at lightning speed
          </h2>
          <p className="mt-4 max-w-[37rem] text-[0.84rem] leading-relaxed text-[#3b4258]">
            Drivers rely on us because we&apos;re simple and reliable. New vehicle, expired trial, or
            channels suddenly vanished &mdash; our specialists are standing by around the clock.
          </p>
          <ul className="mt-5 space-y-3.5">
            {points.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-center gap-3 text-[0.9rem] text-[#2a3150]">
                <span
                  aria-hidden
                  className={`flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full text-white ${orangeGradient}`}
                >
                  <Icon className="h-[15px] w-[15px]" strokeWidth={2.25} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-orange to-navy-2 p-[2px] shadow-[0_20px_50px_-12px_rgba(255,102,0,0.45)]">
          <div className="rounded-[10px] bg-white px-6 py-10 text-center sm:px-10">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f8ec] px-3 py-1 text-[0.7rem] font-medium text-[#1b7a43]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              Agent available now
            </p>
            <p className="mt-3 text-[0.85rem] text-[#5b6b8c]">Avg pickup under 30 seconds</p>
            <h3 className="!font-sans mx-auto mt-3 max-w-[30rem] text-[1.6rem] font-bold leading-tight sm:text-[1.9rem]">
              Call now and get your satellite radio back on the air.
            </h3>
            <p className="mx-auto mt-3 text-[0.85rem] leading-relaxed text-[#6b7280]">
              Real specialists. Every vehicle make. No bots, no hold music.
              <br className="hidden sm:block" /> Open 24 hours a day, 7 days a week.
            </p>
            <a
              href={contact.phoneHref}
              className="mt-6 inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange to-navy-2 px-9 text-[1rem] font-bold text-white shadow-[0_12px_28px_-8px_rgba(255,102,0,0.65)] transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4 fill-current" aria-hidden /> Call Now {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
