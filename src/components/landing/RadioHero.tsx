import { CreditCard, ListMusic, Phone, Radio, Signal, Zap, type LucideIcon } from "lucide-react";
import { contact } from "@/config/contact";

const features: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Radio", text: "Crystal clear audio", icon: Radio },
  { title: "Signal", text: "Strong & Stable", icon: Signal },
  { title: "Channels", text: "All your favourites", icon: ListMusic },
  { title: "Subscription", text: "Easy management", icon: CreditCard },
];

const stats = [
  { value: "<30s", label: "Average Pickup" },
  { value: "24/7", label: "Availability" },
  { value: "All", label: "Vehicle Makes" },
];

const dial = ["87.5", "90.1", "93.1", "97.5", "101.1", "104.1", "108.0"];

/** Dark "radio support" hero. The background is pure CSS: navy, orange glows and soft bokeh. */
export function RadioHero() {
  return (
    <section
      aria-labelledby="radio-hero-title"
      className="relative isolate overflow-hidden bg-[#0f1b29] px-4 pb-14 pt-6 text-center sm:px-8"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_80%_20%,rgba(255,102,0,0.28),transparent),radial-gradient(50%_55%_at_15%_70%,rgba(255,138,61,0.18),transparent),linear-gradient(180deg,#14233a_0%,#0f1b29_100%)]" />
        {/* bokeh */}
        <div className="absolute -right-10 top-4 h-28 w-28 rounded-full bg-orange/30 blur-2xl" />
        <div className="absolute right-[18%] top-0 h-14 w-14 rounded-full bg-[#ffb27a]/30 blur-xl" />
        <div className="absolute left-[28%] top-3 h-10 w-10 rounded-full bg-orange/25 blur-xl" />
        <div className="absolute left-[8%] top-[45%] h-24 w-24 rounded-full bg-orange/15 blur-2xl" />
        {/* faint tuner dial */}
        <div className="absolute inset-x-0 top-[74%] hidden justify-center gap-[7vw] text-[1.05rem] font-medium text-white/10 lg:flex">
          {dial.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="absolute inset-x-[18%] top-[70%] hidden h-px bg-white/10 lg:block" />
      </div>

      <div className="mx-auto max-w-[1240px]">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.04em] shadow-lg">
          <Zap className="h-3.5 w-3.5 fill-orange text-orange" aria-hidden />
          <span className="bg-gradient-to-r from-orange to-navy-3 bg-clip-text text-transparent">
            Live Specialists · 24/7
          </span>
        </p>

        <h2
          id="radio-hero-title"
          className="!font-sans mx-auto mt-5 max-w-[74rem] !text-wrap text-[2.4rem] font-bold leading-[1.08] !text-white sm:text-[3.4rem] lg:text-[4.3rem]"
        >
          Get your car{" "}
          <span className="bg-gradient-to-r from-[#ffb27a] via-orange to-[#d9480f] bg-clip-text text-transparent">
            satellite radio
          </span>{" "}
          playing again.
        </h2>

        <p className="mx-auto mt-5 max-w-[40rem] text-[1.05rem] leading-relaxed text-white/90 sm:text-[1.15rem]">
          Activation trouble, missing channels, weak signal or subscription questions? Speak with a
          real specialist and get back on the air fast.
        </p>

        <a
          href={contact.phoneHref}
          className="mt-8 inline-flex h-[60px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#ff8a3d] via-orange to-[#e5390d] px-9 text-[1.1rem] font-bold text-white shadow-[0_14px_40px_-8px_rgba(255,102,0,0.75)] transition-opacity hover:opacity-90"
        >
          <Phone className="h-[18px] w-[18px] fill-current" aria-hidden /> Call Now {contact.phoneDisplay}
        </a>
        <p className="mt-3 flex items-center justify-center gap-2 text-[0.9rem] text-white/90">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#4ade80]" /> Agent available now
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-8 backdrop-blur-md sm:px-8">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, text, icon: Icon }) => (
              <li key={title} className="flex flex-col items-center">
                <span
                  aria-hidden
                  className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff8a3d] to-[#e5390d] text-white"
                >
                  <Icon className="h-7 w-7" strokeWidth={2.25} />
                </span>
                <h3 className="!font-sans mt-3 text-[1.3rem] font-bold !text-white">{title}</h3>
                <p className="mt-0.5 text-[0.95rem] text-white/75">{text}</p>
              </li>
            ))}
          </ul>
          <hr className="mx-auto my-7 border-white/10" />
          <ul className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <li key={s.label}>
                <p className="text-[1.9rem] font-bold leading-none text-white">{s.value}</p>
                <p className="mt-2 text-[0.85rem] font-medium text-white">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
