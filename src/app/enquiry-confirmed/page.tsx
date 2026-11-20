import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Confirmation } from "./Confirmation";

export const metadata: Metadata = {
  title: "Enquiry received",
  description: "Your enquiry has been sent to the TravelStation customer support team.",
  robots: { index: false, follow: false },
};

export default function EnquiryConfirmedPage() {
  return (
    <div className="bg-ivory py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-md border border-line bg-white p-7 shadow-card sm:p-12">
          <CheckCircle2 className="h-12 w-12 text-teal" aria-hidden />
          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Thank you — we&apos;ve received your enquiry.
          </h1>
          <Confirmation />
        </div>
      </Container>
    </div>
  );
}
