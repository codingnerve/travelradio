import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact } from "@/config/contact";

/** Form on the left, reassurance and contact options on the right. */
export function EnquirySection({
  id = "enquiry",
  eyebrow,
  title,
  intro,
  children,
  points,
  tone = "ivory",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  points: string[];
  tone?: "white" | "ivory" | "mist";
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-title`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} id={`${id}-title`}>
              {intro}
            </SectionHeading>
            <div className="mt-9 rounded-md border border-line bg-white p-5 shadow-card sm:p-8">{children}</div>
          </div>

          <aside aria-label="Enquiry information" className="lg:pt-[7.5rem]">
            <div className="rounded-md bg-navy p-7 text-white/80">
              <h3 className="text-lg font-extrabold !text-white">What happens next</h3>
              <ul className="mt-5 space-y-3.5 text-[0.93rem]">
                {points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7 space-y-3 border-t border-white/15 pt-6 text-sm">
                <p className="flex items-center gap-2.5 font-semibold text-white">
                  <Clock className="h-4 w-4 text-orange" aria-hidden /> 24/7 Customer Support
                </p>
                <a href={contact.phoneHref} className="flex items-center gap-2.5 text-white hover:text-orange">
                  <Phone className="h-4 w-4 text-orange" aria-hidden /> {contact.phoneDisplay}
                </a>
                <a href={contact.emailHref} className="flex items-center gap-2.5 break-all text-white hover:text-orange">
                  <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden /> {contact.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
