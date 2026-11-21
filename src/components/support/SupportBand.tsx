import { Clock, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { Container, Section } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact } from "@/config/contact";
import { images } from "@/config/images";

/** Deep-navy customer support section. */
export function SupportBand({
  title = "Need Assistance? We're Just a Call Away.",
  text = "Whether you're planning a journey or need help with an existing travel arrangement, our customer support team is here to assist.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="navy" labelledBy="support-title" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full border border-white/[0.06]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Customer support" title={title} id="support-title" light>
              {text}
            </SectionHeading>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-white/15 bg-white/[0.04] p-5 sm:col-span-2">
                <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-orange">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> 24/7 Customer Support
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-2 block font-display text-3xl font-extrabold tracking-tight text-white transition-colors hover:text-orange sm:text-4xl"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="rounded-md border border-white/15 bg-white/[0.04] p-5 sm:col-span-2">
                <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-orange">
                  <Mail className="h-3.5 w-3.5" aria-hidden /> Email
                </p>
                <a href={contact.emailHref} className="mt-2 block break-all text-lg font-semibold text-white hover:text-orange">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contact.phoneHref} size="lg">
                <Phone className="h-4 w-4" aria-hidden /> Call Our Support Team
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light" size="lg">
                Send a Message
              </ButtonLink>
            </div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-[5/4] lg:aspect-[4/5]">
              <Photo image={images.support} sizes="(min-width:1024px) 40vw, 94vw" position="50% 45%" />
              <div className="absolute inset-0 bg-navy/10" aria-hidden />
            </div>
            <div aria-hidden className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-md border-2 border-orange/70" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
