"use client";

import { radioForm, radioIssueLabels, radioIssueTypes, type RadioFormValues } from "@/lib/validation";
import { consentDefault, SelectField, TextAreaField, TextField } from "./fields";
import { FormGroup, FormShell } from "./FormShell";
import { useEnquiryForm } from "./useEnquiryForm";

const issueOptions = radioIssueTypes.map((i) => ({ value: i, label: radioIssueLabels[i] }));

export function RadioSupportForm() {
  const f = useEnquiryForm({
    schema: radioForm,
    resolveType: () => "radio-support",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: consentDefault,
      details: { issueType: "activation", vehicleOrDevice: "" },
    } as RadioFormValues,
  });

  return (
    <FormShell
      label="Radio support enquiry"
      form={f.form}
      onSubmit={f.submit}
      honeypot={f.honeypot}
      submitting={f.submitting}
      success={f.success}
      reference={f.reference}
      serverError={f.serverError}
      onAnother={f.startAnother}
      submitLabel="Request Radio Support"
      contactFirst={false}
    >
      <FormGroup title="What do you need help with?">
        <SelectField form={f.form} name="details.issueType" label="Type of help" options={issueOptions} required />
        <TextField form={f.form} name="details.vehicleOrDevice" label="Vehicle or radio model (optional)" placeholder="e.g. vehicle make/model or device name" />
        <TextAreaField form={f.form} name="message" label="Tell us what is happening" rows={4} required className="sm:col-span-2" hint="Please do not include payment card numbers or passwords." />
      </FormGroup>
    </FormShell>
  );
}
