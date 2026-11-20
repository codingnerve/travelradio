import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { company, contact } from "@/config/contact";
import { footerQuickLinks, footerSupportLinks, legalLinks, site } from "@/config/site";
import { Logo } from "./Logo";

const linkCls =
  "inline-block py-1 text-[0.92rem] text-white/70 transition-colors hover:text-white hover:underline hover:decoration-orange hover:underline-offset-4";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[0.78rem] font-bold uppercase tracking-[0.18em] !text-white">
        {title}
      </h2>
      <span className="rule-accent mt-3" aria-hidden />
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/70" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        TravelStation footer
      </h2>

      {/* Support strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange/60 text-orange">
              <Clock className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">24/7 Customer Support</p>
              <p className="text-sm text-white/65">
                Talk to our team about a new journey or an existing booking.
              </p>
            </div>
          </div>
          <a
            href={contact.phoneHref}
            className="font-display text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-orange sm:text-3xl"
          >
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.35fr] lg:gap-10 lg:px-10 lg:py-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
            Your travel assistance partner for flights, hotels, car rentals and travel-related
            services.
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Enquiries are handled by our customer support team. We do not take payments or issue
            tickets through this website.
          </p>
        </div>

        <Column title="Quick Links">
          <ul>
            {footerQuickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Customer Support">
          <ul>
            {footerSupportLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Column>

        <Column title="Contact Information">
          <address className="space-y-5 text-[0.92rem] not-italic">
            <div className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">Customer Support</p>
                <a href={contact.phoneHref} className="font-semibold text-white hover:text-orange">
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
                <a href={contact.emailHref} className="break-all text-white hover:text-orange">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">Company</p>
                <p className="font-semibold text-white">{company.legalName}</p>
                <p className="mt-1 leading-relaxed text-white/70">
                  {company.addressLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < company.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                  .
                </p>
                <p className="mt-2 text-white/60">Company Registration No. {company.registrationNumber}</p>
                <p className="text-white/60">VAT No. {company.vatNumber}</p>
              </div>
            </div>
          </address>
        </Column>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-1">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="py-1 text-sm text-white/75 hover:text-white hover:underline hover:underline-offset-4">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-5 max-w-4xl text-[0.8rem] leading-relaxed text-white/50">
            {site.name} is an independent third-party travel service provider. We are not
            affiliated with, endorsed by or sponsored by any airline, hotel group, car rental
            company or satellite radio provider unless a verified relationship is stated on the
            relevant page. All brand names and trademarks mentioned belong to their respective
            owners and are used for identification only.
          </p>
          <p className="mt-4 text-[0.8rem] text-white/50">
            © {company.copyrightYear} {company.legalName} trading as {company.tradingName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
