"use client";

import { useSearchParams } from "next/navigation";
import {
  bookingCategories,
  bookingCategoryLabels,
  bookingCategoryToType,
  bookingForm,
  type BookingCategory,
  type BookingFormValues,
} from "@/lib/validation";
import { consentDefault, SelectField, TextAreaField, TextField } from "./fields";
import { FormGroup, FormShell } from "./FormShell";
import { useEnquiryForm } from "./useEnquiryForm";

const categoryOptions = bookingCategories.map((c) => ({ value: c, label: bookingCategoryLabels[c] }));

/**
 * Existing-booking assistance. It does not look up bookings: the reference is
 * passed to the support team, who review it manually.
 */
export function BookingAssistanceForm() {
  const raw = useSearchParams().get("category");
  const category: BookingCategory = (bookingCategories as readonly string[]).includes(raw ?? "")
    ? (raw as BookingCategory)
    : "general-support";
  // Re-mount when ?category= changes so the select pre-fills again.
  return <BookingAssistanceFormInner key={category} category={category} />;
}

function BookingAssistanceFormInner({ category }: { category: BookingCategory }) {
  const f = useEnquiryForm({
    schema: bookingForm,
    resolveType: (v) => bookingCategoryToType[v.details.category],
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: consentDefault,
      details: { category, bookingReference: "", travelDate: "" },
    } as BookingFormValues,
  });

  return (
    <FormShell
      label="Manage booking enquiry"
      form={f.form}
      onSubmit={f.submit}
      honeypot={f.honeypot}
      submitting={f.submitting}
      success={f.success}
      reference={f.reference}
      serverError={f.serverError}
      onAnother={f.startAnother}
      submitLabel="Send Booking Enquiry"
    >
      <FormGroup title="About your booking">
        <SelectField form={f.form} name="details.category" label="Enquiry category" options={categoryOptions} required className="sm:col-span-2" />
        <TextField
          form={f.form}
          name="details.bookingReference"
          label="Booking reference (optional)"
          placeholder="e.g. ABC123"
          hint="We do not look this up automatically; our team will review it with you."
          maxLength={20}
        />
        <TextField form={f.form} name="details.travelDate" label="Travel date (optional)" type="date" />
        <TextAreaField form={f.form} name="message" label="Message" rows={4} required className="sm:col-span-2" placeholder="Tell us what you would like help with." hint="Please do not include payment card numbers or passwords." />
      </FormGroup>
    </FormShell>
  );
}
