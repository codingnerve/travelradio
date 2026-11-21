import { Clock, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { PageBanner } from "@/components/shared/PageBanner";
import { contact } from "@/config/contact";
import { socialLinks } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Travel Station's customer care team by email or through the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />
      <div className="bg-white pb-24 pt-14 sm:pt-[72px]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
          <h2 className="text-center text-[1.7rem] font-bold sm:text-[2rem]">Travel Station – We&apos;re Here to Help</h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            <section aria-labelledby="talk-title">
              <h3 id="talk-title" className="mb-5 text-[1.3rem] font-bold italic">
                We&apos;re Ready, Let&apos;s Talk.
              </h3>
              <ContactForm />
            </section>

            <aside aria-labelledby="info-title">
              <h3 id="info-title" className="text-[1.3rem] font-bold">
                Contact Info
              </h3>
              <dl className="mt-5 space-y-5 text-[0.95rem]">
                <div>
                  <dt className="font-bold text-navy">Email Us</dt>
                  <dd className="mt-1.5 flex items-center gap-2.5 text-[#6b7280]">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    <a href={contact.emailHref} className="break-all hover:text-orange">
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-navy">Business Hours</dt>
                  <dd className="mt-1.5 flex items-start gap-2.5 text-[#6b7280]">
                    <Clock className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                    <span>Monday – Saturday: 9:00 AM – 6:00 PM (UK &amp; India time zones)</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-5 rounded-xl bg-orange/10 px-5 py-4 text-[0.92rem] leading-relaxed text-[#4b5563]">
                We are available via email. Our team is ready to assist you with all your travel needs.
              </p>
              <p className="mt-6 text-[0.95rem] font-bold text-navy">Follow Us</p>
              <ul className="mt-3 flex gap-3">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-orange text-white transition-colors hover:bg-orange-deep"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
