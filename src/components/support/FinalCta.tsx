import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Photo } from "@/components/shared/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { contact } from "@/config/contact";
import { images, type Img } from "@/config/images";

export function FinalCta({
  title = "Let's Make Your Next Journey Easier.",
  text = "Tell us where you want to go. Our team will help you explore the available travel options.",
  image = images.wingClouds,
  primaryHref = "/contact",
  primaryLabel = "Submit an Enquiry",
}: {
  title?: string;
  text?: string;
  image?: Img;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section aria-labelledby="final-cta-title" className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
      <Photo image={image} sizes="100vw" position="50% 40%" className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-navy/75" aria-hidden />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="final-cta-title" className="text-[2rem] font-extrabold !text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={contact.phoneHref} variant="outline-light" size="lg">
              <Phone className="h-4 w-4" aria-hidden /> Call Customer Support
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
