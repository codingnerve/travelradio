"use client";

import { AlertTriangle, CheckCircle2, Loader2, Mail } from "lucide-react";
import type { RefObject } from "react";
import { contact } from "@/config/contact";
import { Button } from "@/components/shared/Button";

/** Hidden field that only bots fill in. Kept out of the tab order and accessibility tree. */
export function Honeypot({ inputRef }: { inputRef: RefObject<HTMLInputElement | null> }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
      <label>
        Website
        <input ref={inputRef} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

export function ServerError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="flex gap-3 rounded-md border border-[#b3261e]/30 bg-[#fdf1f0] p-4 text-sm text-[#7a1b15]"
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <div>
        <p>{message}</p>
        <p className="mt-1">
          You can also email us at{" "}
          <a href={contact.emailHref} className="font-semibold underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export function SubmitButton({
  submitting,
  children,
  className = "",
}: {
  submitting: boolean;
  children: string;
  className?: string;
}) {
  return (
    <Button type="submit" size="lg" variant="primary" disabled={submitting} aria-busy={submitting} className={className}>
      {submitting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export function SuccessPanel({
  reference,
  onAnother,
  title = "Thank you — your enquiry has been sent",
}: {
  reference: string | null;
  onAnother: () => void;
  title?: string;
}) {
  return (
    <div role="status" aria-live="polite" className="rounded-md border border-teal/30 bg-[#f1f6f5] p-6 sm:p-8">
      <CheckCircle2 className="h-9 w-9 text-teal" aria-hidden />
      <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
      {reference && (
        <p className="mt-3 inline-block rounded bg-white px-3 py-1.5 text-sm text-navy">
          Reference: <strong className="font-bold tracking-wider">{reference}</strong>
        </p>
      )}
      <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed">
        Our customer support team will review your request and contact you using the details you
        provided. This is an enquiry only — nothing has been booked, ticketed or charged.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={contact.emailHref}
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-2"
        >
          <Mail className="h-4 w-4" aria-hidden /> {contact.email}
        </a>
        <button
          type="button"
          onClick={onAnother}
          className="h-11 px-2 text-sm font-semibold text-navy underline underline-offset-4 hover:text-orange-deep"
        >
          Send another enquiry
        </button>
      </div>
    </div>
  );
}
