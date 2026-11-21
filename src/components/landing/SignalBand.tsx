import { contact } from "@/config/contact";

/** Full-width gradient call-to-action ("Lost your signal between stations?"). */
export function SignalBand() {
  return (
    <section
      aria-labelledby="signal-title"
      className="bg-[radial-gradient(70%_130%_at_100%_100%,rgba(26,43,60,0.92),transparent_70%),linear-gradient(120deg,#ff9a5c_0%,#ff6600_60%)] px-4 py-14 text-center sm:px-8"
    >
      <h2 id="signal-title" className="!font-sans text-[2rem] font-bold leading-tight !text-white sm:text-[2.7rem]">
        Lost your signal between stations?
      </h2>
      <p className="mx-auto mt-3 max-w-[44rem] text-[1.05rem] leading-relaxed text-white sm:text-[1.15rem]">
        Our online troubleshooting tools are taking a quick break &mdash; but our phone lines are wide
        open. Call our specialists for instant help.
      </p>
      <a
        href={contact.phoneHref}
        className="mx-auto mt-8 block w-fit rounded-2xl bg-[#f6f8fa] px-10 py-5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5"
        aria-label={`Call ${contact.phoneDisplay}, 24/7 phone line, no hold time`}
      >
        <span className="block text-[0.82rem] text-navy">24/7 Phone Line · No Hold Time</span>
        <span className="mt-1 block text-[2rem] font-bold leading-tight text-navy sm:text-[2.6rem]">
          {contact.phoneDisplay}
        </span>
      </a>
    </section>
  );
}
