"use client";

import {
  carForm,
  vehicleCategories,
  vehicleCategoryLabels,
  type CarFormValues,
} from "@/lib/validation";
import { consentDefault, SelectField, TextAreaField, TextField } from "./fields";
import { FormGroup, FormShell } from "./FormShell";
import { useEnquiryForm } from "./useEnquiryForm";

const categoryOptions = vehicleCategories.map((c) => ({ value: c, label: vehicleCategoryLabels[c] }));

export function CarRentalEnquiryForm() {
  const f = useEnquiryForm({
    schema: carForm,
    resolveType: () => "car-rental",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: consentDefault,
      details: { pickupLocation: "", dropoffLocation: "", pickupDate: "", dropoffDate: "", vehicleCategory: "any" },
    } as CarFormValues,
  });

  return (
    <FormShell
      label="Car rental enquiry"
      form={f.form}
      onSubmit={f.submit}
      honeypot={f.honeypot}
      submitting={f.submitting}
      success={f.success}
      reference={f.reference}
      serverError={f.serverError}
      onAnother={f.startAnother}
      submitLabel="Send Car Rental Enquiry"
    >
      <FormGroup title="Your rental">
        <TextField form={f.form} name="details.pickupLocation" label="Pickup location" placeholder="Airport, city or address" required />
        <TextField form={f.form} name="details.dropoffLocation" label="Drop-off location" placeholder="Same as pickup" hint="Leave blank to return it to the pickup location." />
        <TextField form={f.form} name="details.pickupDate" label="Pickup date" type="date" required />
        <TextField form={f.form} name="details.dropoffDate" label="Return date" type="date" required />
        <SelectField form={f.form} name="details.vehicleCategory" label="Vehicle category" options={categoryOptions} className="sm:col-span-2" />
      </FormGroup>
      <TextAreaField form={f.form} name="message" label="Anything else? (optional)" rows={3} placeholder="Arrival flight number, extra drivers, child seats…" />
    </FormShell>
  );
}
