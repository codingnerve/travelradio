import { company, contact } from "@/config/contact";
import { eyebrowGradient } from "./RadioSupport";

/** Radio support brand and inbox, as on the original radio site. */
const radioBrand = "RadioTuneAssist";
const radioEmail = "radioservices@travelstation.world";

const label = "text-[0.75rem] font-medium uppercase tracking-[0.04em] text-[#6b7280]";
const card = "rounded-xl border-2 border-[#d9d9d9] bg-white/60 px-5 py-4";

export function RadioContact() {
  return (
    <section aria-labelledby="radio-contact-title" className="bg-[#fff8f3] py-16">
      <div className="mx-auto max-w-[940px] px-4 sm:px-8">
        <p className={`inline-block text-[0.75rem] font-bold uppercase tracking-[0.06em] ${eyebrowGradient}`}>
          Contact Information
        </p>
        <h2 id="radio-contact-title" className="!font-sans mt-1 text-[2rem] font-bold leading-tight sm:text-[2.3rem]">
          {radioBrand}
        </h2>
        <p className="mt-2 text-[0.85rem] text-[#2a3150]">An independent car satellite radio support service</p>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <div className={card}>
            <p className={label}>Our Address</p>
            <address className="mt-2 text-[0.8rem] not-italic leading-relaxed text-[#2a3150]">
              {company.legalName}
              <br />
              {company.addressLines[0]}
              <br />
              <span className="text-[#6b7280]">
                {company.addressLines[1]}, {company.addressLines[2]}
              </span>
            </address>
          </div>
          <div className={card}>
            <p className={label}>Customer Service</p>
            <a
              href={`mailto:${radioEmail}`}
              className="mt-2 block break-all text-[0.8rem] text-[#2a3150] hover:text-orange"
            >
              {radioEmail}
            </a>
          </div>
          <div className={card}>
            <p className={label}>Customer Support</p>
            <a
              href={contact.phoneHref}
              className="mt-2 block text-[1.1rem] font-bold text-orange hover:text-orange-deep"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
