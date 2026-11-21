"use client";

import Link from "next/link";
import { get, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { generalDetails, generalForm, type GeneralFormValues } from "@/lib/validation";
import { FieldError } from "./fields";
import { Honeypot, ServerError, SubmitButton, SuccessPanel } from "./FormParts";
import { useEnquiryForm } from "./useEnquiryForm";

/** Contact-page form: same API and checks as the other enquiry forms, plus a subject line. */
const contactSchema = generalForm.extend({
  details: generalDetails.extend({
    subject: z.string().trim().min(2, "Please add a subject").max(120, "Please keep the subject under 120 characters"),
  }),
});

const control =
  "w-full rounded-lg border border-line bg-white px-4 text-[0.95rem] text-navy transition-colors placeholder:text-[#9ca3af] hover:border-[#c5cbd3] focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/25 aria-[invalid=true]:border-[#b3261e]";

export function ContactForm() {
  const f = useEnquiryForm({
    schema: contactSchema,
    resolveType: () => "general",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      // Agreement is stated beneath the button instead of a checkbox.
      consent: true,
      details: { topic: "other", subject: "" },
    } as GeneralFormValues,
  });

  const { form } = f;
  const err = (name: string) =>
    (get(form.formState.errors as FieldValues, name) as { message?: string } | undefined)?.message;
  const field = (name: string, label: string, placeholder: string, extra: Record<string, string> = {}) => (
    <div>
      <input
        aria-label={label}
        placeholder={placeholder}
        aria-invalid={err(name) ? true : undefined}
        aria-describedby={err(name) ? `c-${name}-err` : undefined}
        className={`${control} h-[46px]`}
        {...extra}
        {...form.register(name)}
      />
      <FieldError id={`c-${name}-err`} message={err(name)} />
    </div>
  );

  if (f.success) {
    return <SuccessPanel reference={f.reference} onAnother={f.startAnother} title="Thank you — your message has been sent" />;
  }

  return (
    <form onSubmit={f.submit} noValidate aria-label="Contact form" className="relative space-y-3">
      <Honeypot inputRef={f.honeypot} />
      <div className="grid gap-3 sm:grid-cols-2">
        {field("fullName", "Your name", "Your Name", { autoComplete: "name" })}
        {field("email", "Your email", "Your Email", { type: "email", autoComplete: "email", inputMode: "email" })}
        {field("phone", "Phone number", "Phone Number", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
        {field("details.subject", "Subject", "Subject")}
      </div>
      <div>
        <textarea
          aria-label="Your message"
          placeholder="Your Message"
          rows={5}
          aria-invalid={err("message") ? true : undefined}
          aria-describedby={err("message") ? "c-message-err" : undefined}
          className={`${control} min-h-[130px] resize-y py-3`}
          {...form.register("message")}
        />
        <FieldError id="c-message-err" message={err("message")} />
      </div>
      <ServerError message={f.serverError} />
      <SubmitButton submitting={f.submitting} className="!h-[46px] !px-7 !text-[0.9rem]">
        Send Message
      </SubmitButton>
      <p className="text-[0.78rem] leading-relaxed text-[#6b7280]">
        By sending this message you agree that we may contact you about your enquiry, as described
        in our{" "}
        <Link href="/privacy-policy" className="text-orange hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
