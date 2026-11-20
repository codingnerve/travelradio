"use client";

import { Suspense, type FormEventHandler, type ReactNode, type RefObject } from "react";
import { Honeypot, ServerError, SubmitButton, SuccessPanel } from "./FormParts";
import { ConsentField, ContactFields, type AnyForm } from "./fields";

/** Common frame for the single-step enquiry forms. */
export function FormShell({
  label,
  form,
  onSubmit,
  honeypot,
  submitting,
  success,
  reference,
  serverError,
  onAnother,
  submitLabel,
  children,
  contactFirst = false,
  after,
}: {
  label: string;
  form: AnyForm;
  onSubmit: FormEventHandler<HTMLFormElement>;
  honeypot: RefObject<HTMLInputElement | null>;
  submitting: boolean;
  success: boolean;
  reference: string | null;
  serverError: string | null;
  onAnother: () => void;
  submitLabel: string;
  children: ReactNode;
  contactFirst?: boolean;
  after?: ReactNode;
}) {
  if (success) return <SuccessPanel reference={reference} onAnother={onAnother} />;

  const contact = (
    <fieldset className="space-y-4">
      <legend className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-teal-deep">
        Your details
      </legend>
      <ContactFields form={form} />
    </fieldset>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-label={label} className="relative space-y-6">
      <Honeypot inputRef={honeypot} />
      {contactFirst && contact}
      {children}
      {!contactFirst && contact}
      {after}
      <ConsentField form={form} />
      <ServerError message={serverError} />
      <SubmitButton submitting={submitting}>{submitLabel}</SubmitButton>
    </form>
  );
}

export function FormGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-teal-deep">
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

/** Wrap forms that read the URL (useSearchParams) so the page shell can stay static. */
export function FormSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-[26rem] animate-pulse rounded-md bg-mist" aria-hidden />}>
      {children}
    </Suspense>
  );
}
