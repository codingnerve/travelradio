import { Mail } from "lucide-react";
import Link from "next/link";
import { company, contact } from "@/config/contact";
import { footerImportantLinks, footerQuickLinks, site, socialLinks, type NavItem } from "@/config/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

const linkCls = "inline-block py-[2px] text-[0.875rem] leading-6 text-white/90 transition-colors hover:text-orange";
const payments = ["VISA", "MC", "AMEX", "UnionPay"];

function LinkColumn({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <div>
      <h2 className="font-display text-[1.1rem] font-bold !text-white">{title}</h2>
      <ul className="mt-4">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={linkCls}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="-mt-px bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {site.name} footer
      </h2>

      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 pb-12 pt-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Logo light />
          <a
            href={contact.emailHref}
            className="mt-4 flex items-center gap-2.5 text-[0.875rem] text-white/90 transition-colors hover:text-orange"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="break-all">{contact.email}</span>
          </a>
          <ul className="mt-4 flex gap-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-white transition-colors hover:bg-orange-deep"
                >
                  <SocialIcon name={s.icon} className="h-[17px] w-[17px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn title="Quick Links" links={footerQuickLinks} />

        <div>
          <h2 className="font-display text-[1.1rem] font-bold !text-white">Customer Care</h2>
          <a
            href={contact.emailHref}
            className="mt-4 flex items-center gap-2.5 text-[0.875rem] text-white/90 transition-colors hover:text-orange"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="break-all">{contact.email}</span>
          </a>
        </div>

        <LinkColumn title="Important Links" links={footerImportantLinks} />
      </div>

      <div className="bg-[#2f4456]">
        <p className="mx-auto max-w-[1280px] px-4 py-[22px] text-[0.76rem] leading-[1.65] text-white/80 sm:px-8">
          <strong className="font-bold text-white/90">Disclaimer:</strong> {site.name} operates as a
          third-party travel service provider offering guidance and solutions for various
          flight-related needs. While we strive to ensure the accuracy and reliability of all
          information presented, we do not guarantee absolute completeness. {site.name} is not liable
          for any losses, damages, or issues arising from the use of our website or any external
          linked sites.
        </p>
      </div>

      <div className="border-t border-white/10"><div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-[18px] text-[0.76rem] text-white/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Copyright © {site.name}. All Rights Reserved. |{" "}
          <a href={site.url} className="hover:text-white">
            www.travelstation.world
          </a>
        </p>
        <div className="flex items-center gap-2">
          <span className="mr-1">We Accept:</span>
          {payments.map((p) => (
            <span
              key={p}
              className="rounded-[4px] border border-white/25 px-2.5 py-[2px] text-[0.62rem] font-bold tracking-wide text-white/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-4 py-3 text-center text-[0.76rem] leading-relaxed text-white/80 sm:px-8">
          {company.legalName} · Company Number {company.registrationNumber} · {company.addressInline}
        </p>
      </div>

      <div className="border-t border-white/10 bg-[#2f4456]">
        <p className="mx-auto max-w-[1280px] px-4 py-3 text-center text-[0.8rem] font-semibold tracking-wide text-white/90 sm:px-8">
          A Global Relocation, Expats &amp; Lifestyle Advisory / Itinerary Consulting service
        </p>
      </div>
    </footer>
  );
}
