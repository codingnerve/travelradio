"use client";

import { useSearchParams } from "next/navigation";
import {
  hotelForm,
  hotelStayTypeLabels,
  hotelStayTypes,
  type HotelFormValues,
} from "@/lib/validation";
import { consentDefault, numberOptions, SelectField, TextAreaField, TextField } from "./fields";
import { FormGroup, FormShell } from "./FormShell";
import { useEnquiryForm } from "./useEnquiryForm";

const stayOptions = hotelStayTypes.map((s) => ({ value: s, label: hotelStayTypeLabels[s] }));

/** Re-mounts when ?destination= changes so the field pre-fills again. */
export function HotelEnquiryForm() {
  const destination = (useSearchParams().get("destination") ?? "").slice(0, 80);
  return <HotelEnquiryFormInner key={destination} destination={destination} />;
}

function HotelEnquiryFormInner({ destination }: { destination: string }) {
  const f = useEnquiryForm({
    schema: hotelForm,
    resolveType: () => "hotel",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: consentDefault,
      details: { destination, checkIn: "", checkOut: "", rooms: "1", adults: "2", children: "0", stayType: "any" },
    } as HotelFormValues,
  });

  return (
    <FormShell
      label="Hotel enquiry"
      form={f.form}
      onSubmit={f.submit}
      honeypot={f.honeypot}
      submitting={f.submitting}
      success={f.success}
      reference={f.reference}
      serverError={f.serverError}
      onAnother={f.startAnother}
      submitLabel="Send Hotel Enquiry"
    >
      <FormGroup title="Your stay">
        <TextField form={f.form} name="details.destination" label="Destination" placeholder="City, area or hotel name" required className="sm:col-span-2" />
        <TextField form={f.form} name="details.checkIn" label="Check-in" type="date" required />
        <TextField form={f.form} name="details.checkOut" label="Check-out" type="date" required />
        <SelectField form={f.form} name="details.rooms" label="Rooms" options={numberOptions(1, 6)} />
        <SelectField form={f.form} name="details.stayType" label="Accommodation type" options={stayOptions} />
        <SelectField form={f.form} name="details.adults" label="Adults" options={numberOptions(1, 12)} />
        <SelectField form={f.form} name="details.children" label="Children" options={numberOptions(0, 8)} />
      </FormGroup>
      <TextAreaField form={f.form} name="message" label="Preferences (optional)" rows={3} placeholder="Neighbourhood, budget range, amenities, accessibility needs…" />
    </FormShell>
  );
}
