"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink } from "@/components/shared/Button";
import { contact } from "@/config/contact";

function Inner() {
  const params = useSearchParams();
  const ref = (params.get("ref") ?? "").replace(/[^A-Za-z0-9-]/g, "").slice(0, 24);

  return (
    <>
      {ref && (
        <p className="mt-5 inline-block rounded bg-ivory px-4 py-2 text-navy">
          Your reference: <strong className="tracking-wider">{ref}</strong>
        </p>
      )}
      <p className="mt-5 leading-relaxed">
        Our customer support team will review your request and contact you using the details you
        provided. This is an enquiry only: no fares have been quoted and nothing has been booked,
        ticketed or charged.
      </p>

      <ol className="mt-8 space-y-4 border-l-2 border-orange/60 pl-5 text-[0.95rem]">
        <li>
          <strong className="text-navy">1. We review your trip.</strong> The team checks the options
          available for your dates and route.
        </li>
        <li>
          <strong className="text-navy">2. We contact you.</strong> Expect a call or email from us
          using the details you gave.
        </li>
        <li>
          <strong className="text-navy">3. You decide.</strong> Nothing is arranged until you have
          confirmed it with our team.
        </li>
      </ol>

      <div className="mt-10 grid gap-3 rounded-md bg-ivory p-5 text-sm sm:grid-cols-3">
        <p className="flex items-center gap-2 font-semibold text-navy">
          <Clock className="h-4 w-4 text-teal" aria-hidden /> 24/7 Support
        </p>
        <a href={contact.phoneHref} className="flex items-center gap-2 font-semibold text-navy hover:text-orange-deep">
          <Phone className="h-4 w-4 text-teal" aria-hidden /> {contact.phoneDisplay}
        </a>
        <a href={contact.emailHref} className="flex items-center gap-2 break-all font-semibold text-navy hover:text-orange-deep">
          <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden /> {contact.email}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="secondary">
          Back to Home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact Us
        </ButtonLink>
      </div>
    </>
  );
}

export function Confirmation() {
  return (
    <Suspense fallback={<div className="min-h-[20rem] animate-pulse rounded-md bg-ivory" aria-hidden />}>
      <Inner />
    </Suspense>
  );
}
