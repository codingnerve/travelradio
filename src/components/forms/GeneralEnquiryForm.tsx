"use client";

import { generalForm, generalTopicLabels, type GeneralFormValues } from "@/lib/validation";
import { consentDefault, SelectField, TextAreaField } from "./fields";
import { FormGroup, FormShell } from "./FormShell";
import { useEnquiryForm } from "./useEnquiryForm";

const topicOptions = Object.entries(generalTopicLabels).map(([value, label]) => ({ value, label }));

export function GeneralEnquiryForm() {
  const f = useEnquiryForm({
    schema: generalForm,
    resolveType: () => "general",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: consentDefault,
      details: { topic: "travel" },
    } as GeneralFormValues,
  });

  return (
    <FormShell
      label="Contact form"
      form={f.form}
      onSubmit={f.submit}
      honeypot={f.honeypot}
      submitting={f.submitting}
      success={f.success}
      reference={f.reference}
      serverError={f.serverError}
      onAnother={f.startAnother}
      submitLabel="Send Message"
      contactFirst
    >
      <FormGroup title="Your message">
        <SelectField form={f.form} name="details.topic" label="Topic" options={topicOptions} required className="sm:col-span-2" />
        <TextAreaField form={f.form} name="message" label="How can we help?" rows={5} required className="sm:col-span-2" />
      </FormGroup>
    </FormShell>
  );
}
