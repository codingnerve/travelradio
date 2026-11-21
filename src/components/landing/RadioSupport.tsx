import { CreditCard, ListMusic, Radio, Signal, type LucideIcon } from "lucide-react";

/** Orange and navy gradients stand in for the reference's pink and purple. */
export const orangeGradient = "bg-gradient-to-br from-[#ff8a3d] to-[#ff6600]";
export const navyGradient = "bg-gradient-to-br from-[#3d556d] to-[#1a2b3c]";
export const eyebrowGradient =
  "bg-gradient-to-r from-orange to-navy-3 bg-clip-text text-transparent";

const features: { title: string; text: string; icon: LucideIcon; tone: string }[] = [
  {
    title: "Radio Activation",
    text: "Activate or reactivate your in-car satellite receiver in minutes with a live agent.",
    icon: Radio,
    tone: orangeGradient,
  },
  {
    title: "Signal & Reception",
    text: "Fix weak signal, antenna faults, and 'acquiring signal' errors on any vehicle.",
    icon: Signal,
    tone: navyGradient,
  },
  {
    title: "Channel Lineup",
    text: "Restore missing channels, refresh your lineup, and unlock premium stations.",
    icon: ListMusic,
    tone: orangeGradient,
  },
  {
    title: "Subscription Help",
    text: "Manage billing, upgrades, cancellations, and trial extensions on demand.",
    icon: CreditCard,
    tone: navyGradient,
  },
];

export function RadioSupport() {
  return (
    <section aria-labelledby="radio-support-title" className="bg-[#fff8f3] pb-20 pt-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <div className="text-center">
          <p className={`text-[0.75rem] font-bold uppercase tracking-[0.06em] ${eyebrowGradient} inline-block`}>
            Why Call Us
          </p>
          <h2
            id="radio-support-title"
            className="!font-sans mx-auto mt-1.5 max-w-[26rem] text-[1.9rem] font-bold leading-[1.15] sm:text-[2.2rem]"
          >
            Satellite radio support, made effortless
          </h2>
        </div>
        <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, icon: Icon, tone }) => (
            <li key={title}>
              <article className="flex h-full flex-col items-center rounded-xl border-2 border-[#d9d9d9] bg-white/60 px-6 py-7 text-center">
                <span
                  aria-hidden
                  className={`flex h-[50px] w-[50px] items-center justify-center rounded-full text-white ${tone}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <h3 className="!font-sans mt-3 text-[1.15rem] font-bold text-navy">{title}</h3>
                <p className="mt-2 max-w-[15rem] text-[0.9rem] leading-relaxed text-[#6b7280]">{text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
