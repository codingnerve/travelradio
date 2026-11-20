import type { Metadata } from "next";
import { ButtonLink } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { contact } from "@/config/contact";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="bg-ivory py-24 sm:py-32">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">This destination doesn&apos;t exist.</h1>
          <p className="mt-5 text-lg">
            The page you were looking for may have moved. Head back to the start, or speak to our
            team on {contact.phoneDisplay}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/" size="lg">Back to Home</ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">Contact Us</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
