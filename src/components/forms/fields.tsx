"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { get, type FieldValues } from "react-hook-form";
import type { AnyForm } from "./types";

export type { AnyForm };
import type { ReactNode } from "react";


const idFor = (name: string) => `f-${name.replace(/\./g, "-")}`;

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-start gap-1.5 text-[0.8rem] font-medium text-[#b3261e]">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      {message}
    </p>
  );
}

type BaseProps = {
  form: AnyForm;
  name: string;
  label: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

function Wrap({
  form,
  name,
  label,
  hint,
  required,
  className = "",
  children,
}: BaseProps & { children: (a: { id: string; describedBy?: string; invalid: boolean }) => ReactNode }) {
  const id = idFor(name);
  const message = (get(form.formState.errors as FieldValues, name) as { message?: string } | undefined)?.message;
  const describedBy = [message ? `${id}-err` : null, hint ? `${id}-hint` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <span className="text-orange-deep" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children({ id, describedBy, invalid: Boolean(message) })}
      {hint && !message && (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.78rem] text-ink">
          {hint}
        </p>
      )}
      <FieldError id={`${id}-err`} message={message} />
    </div>
  );
}

export function TextField({
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  ...base
}: BaseProps & {
  type?: "text" | "email" | "tel" | "date";
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  maxLength?: number;
}) {
  return (
    <Wrap {...base}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          aria-required={base.required}
          className="field-control"
          {...base.form.register(base.name)}
        />
      )}
    </Wrap>
  );
}

export function SelectField({
  options,
  ...base
}: BaseProps & { options: { value: string; label: string }[] }) {
  return (
    <Wrap {...base}>
      {({ id, describedBy, invalid }) => (
        <select
          id={id}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className="field-control"
          {...base.form.register(base.name)}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </Wrap>
  );
}

export function TextAreaField({
  placeholder,
  rows = 4,
  ...base
}: BaseProps & { placeholder?: string; rows?: number }) {
  return (
    <Wrap {...base}>
      {({ id, describedBy, invalid }) => (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          aria-required={base.required}
          maxLength={2000}
          className="field-control"
          {...base.form.register(base.name)}
        />
      )}
    </Wrap>
  );
}

/** Unchecked checkbox value; the schema requires `true`, so this fails validation until ticked. */
export const consentDefault = false as unknown as true;

export const numberOptions =(from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => ({ value: String(from + i), label: String(from + i) }));

export function ContactFields({ form }: { form: AnyForm }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <TextField form={form} name="fullName" label="Full name" autoComplete="name" required className="sm:col-span-2" />
      <TextField form={form} name="email" label="Email" type="email" autoComplete="email" inputMode="email" required />
      <TextField
        form={form}
        name="phone"
        label="Telephone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="+44 20 1234 5678"
        required
      />
    </div>
  );
}

export function ConsentField({ form }: { form: AnyForm }) {
  const message = (get(form.formState.errors as FieldValues, "consent") as { message?: string } | undefined)?.message;
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-[0.85rem] leading-relaxed text-ink">
        <input
          type="checkbox"
          aria-invalid={Boolean(message)}
          aria-describedby={message ? "f-consent-err" : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[#507d7a]"
          {...form.register("consent")}
        />
        <span>
          I agree that TravelStation may contact me about this enquiry and process my details as
          described in the{" "}
          <Link href="/privacy-policy" className="font-medium text-navy underline underline-offset-2 hover:text-orange-deep">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <FieldError id="f-consent-err" message={message} />
    </div>
  );
}
