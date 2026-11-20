"use client";

import { ArrowRight, Pencil, Plane, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { Button } from "@/components/shared/Button";
import {
  flightForm,
  tripTypes,
  travelClasses,
  travelClassLabels,
  type FlightFormValues,
} from "@/lib/validation";
import { consentDefault, ConsentField, ContactFields, numberOptions, SelectField, TextAreaField, TextField } from "./fields";
import { Honeypot, ServerError, SubmitButton, SuccessPanel } from "./FormParts";
import { useEnquiryForm } from "./useEnquiryForm";

const tripLabels: Record<(typeof tripTypes)[number], string> = {
  "one-way": "One Way",
  "round-trip": "Round Trip",
  "multi-city": "Multi-City",
};

const tripFieldPaths = [
  "details.tripType",
  "details.from",
  "details.to",
  "details.departDate",
  "details.returnDate",
  "details.adults",
  "details.children",
  "details.infants",
  "details.travelClass",
  "details.legs",
] as const;

const classOptions = travelClasses.map((c) => ({ value: c, label: travelClassLabels[c] }));

const fmtDate = (iso: string) =>
  iso ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

/**
 * Flight enquiry widget. It looks like a fare search, but it never shows fares:
 * step 1 captures the trip, step 2 captures contact details, and submitting
 * creates an enquiry for the support team.
 */
export function FlightEnquiryWidget({
  variant = "panel",
  defaultTo = "",
  defaultFrom = "",
  redirect = true,
}: {
  variant?: "panel" | "card";
  defaultTo?: string;
  defaultFrom?: string;
  redirect?: boolean;
}) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  const { form, submit, submitting, success, serverError, reference, honeypot, startAnother } =
    useEnquiryForm({
      schema: flightForm,
      resolveType: () => "flight",
      defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        consent: consentDefault,
        details: {
          tripType: "round-trip",
          from: defaultFrom,
          to: defaultTo,
          departDate: "",
          returnDate: "",
          adults: "1",
          children: "0",
          infants: "0",
          travelClass: "economy",
          legs: [],
        },
      } as FlightFormValues,
      onSuccess: (ref) => {
        if (redirect) router.push(`/enquiry-confirmed?ref=${encodeURIComponent(ref)}&type=flight`);
      },
    });

  const { control, register, setValue, trigger, getValues } = form;
  const legs = useFieldArray({ control, name: "details.legs" });
  const tripType = useWatch({ control, name: "details.tripType" }) as FlightFormValues["details"]["tripType"];

  const onTripTypeChange = (next: FlightFormValues["details"]["tripType"]) => {
    if (next !== "round-trip") setValue("details.returnDate", "");
    if (next === "multi-city" && legs.fields.length === 0) legs.append({ from: "", to: "", date: "" });
    if (next !== "multi-city" && legs.fields.length > 0) legs.replace([]);
  };

  // After a failed attempt on step 1, re-check the trip fields live as they are corrected.
  const triedStep1 = useRef(false);
  useEffect(() => {
    const sub = form.watch(() => {
      if (triedStep1.current) void trigger([...tripFieldPaths]);
    });
    return () => sub.unsubscribe();
  }, [form, trigger]);

  const goToContact = async () => {
    triedStep1.current = true;
    const ok = await trigger([...tripFieldPaths]);
    if (ok) setStep(2);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (step === 1) {
      e.preventDefault();
      void goToContact();
      return;
    }
    void submit(e);
  };

  const wrapper =
    variant === "panel"
      ? "bg-white shadow-panel border-t-[3px] border-orange rounded-md"
      : "bg-white border border-line shadow-card rounded-md";

  if (success && !redirect) {
    return (
      <div className={`${wrapper} p-5 sm:p-7`}>
        <SuccessPanel reference={reference} onAnother={() => { startAnother(); setStep(1); }} />
      </div>
    );
  }

  const v = getValues("details");

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Flight enquiry" className={`relative ${wrapper}`}>
      <Honeypot inputRef={honeypot} />

      {/* Trip type */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 pt-4 sm:px-6">
        <fieldset className="flex gap-1">
          <legend className="sr-only">Trip type</legend>
          {tripTypes.map((t) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                value={t}
                className="peer sr-only"
                {...register("details.tripType", { onChange: () => onTripTypeChange(t) })}
              />
              <span className="-mb-px block border-b-2 border-transparent px-3 pb-3 pt-1 text-[0.85rem] font-semibold text-ink transition-colors hover:text-navy peer-checked:border-orange peer-checked:text-navy peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-orange sm:px-4">
                {tripLabels[t]}
              </span>
            </label>
          ))}
        </fieldset>
        <p className="mb-3 hidden items-center gap-1.5 text-[0.78rem] text-ink md:flex">
          <Plane className="h-3.5 w-3.5 text-teal" aria-hidden />
          Enquiry only — no live fares shown
        </p>
      </div>

      <div className="p-4 sm:p-6">
        {step === 1 ? (
          <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-12">
            <TextField form={form} name="details.from" label="From" placeholder="City or airport" autoComplete="off" required className="lg:col-span-3" />
            <TextField form={form} name="details.to" label="To" placeholder="City or airport" autoComplete="off" required className="lg:col-span-3" />
            <TextField form={form} name="details.departDate" label="Departure" type="date" required className="lg:col-span-3" />
            {tripType === "round-trip" ? (
              <TextField form={form} name="details.returnDate" label="Return" type="date" required className="lg:col-span-3" />
            ) : (
              <div className="lg:col-span-3">
                <span className="field-label">Return</span>
                <div className="field-control flex items-center bg-mist text-[0.85rem] !text-ink/70" aria-hidden>
                  {tripType === "multi-city" ? "Set per flight below" : "Not needed for one way"}
                </div>
              </div>
            )}

            {tripType === "multi-city" && (
              <div className="space-y-4 border-l-2 border-orange/60 pl-4 sm:col-span-2 lg:col-span-12">
                {legs.fields.map((f, i) => (
                  <div key={f.id} className="grid gap-4 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end">
                    <TextField form={form} name={`details.legs.${i}.from`} label={`Flight ${i + 2} · From`} placeholder="City or airport" autoComplete="off" required />
                    <TextField form={form} name={`details.legs.${i}.to`} label="To" placeholder="City or airport" autoComplete="off" required />
                    <TextField form={form} name={`details.legs.${i}.date`} label="Date" type="date" required />
                    <button
                      type="button"
                      onClick={() => legs.remove(i)}
                      disabled={legs.fields.length <= 1}
                      aria-label={`Remove flight ${i + 2}`}
                      className="flex h-12 w-12 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-[#b3261e] hover:text-[#b3261e] disabled:opacity-40"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                ))}
                {legs.fields.length < 4 && (
                  <button
                    type="button"
                    onClick={() => legs.append({ from: "", to: "", date: "" })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep hover:text-navy"
                  >
                    <Plus className="h-4 w-4" aria-hidden /> Add another flight
                  </button>
                )}
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 sm:col-span-2 sm:gap-4 lg:col-span-6">
              <SelectField form={form} name="details.adults" label="Adults" options={numberOptions(1, 9)} />
              <SelectField form={form} name="details.children" label="Children" options={numberOptions(0, 8)} />
              <SelectField form={form} name="details.infants" label="Infants" options={numberOptions(0, 4)} />
            </div>
            <SelectField form={form} name="details.travelClass" label="Travel class" options={classOptions} className="sm:col-span-2 lg:col-span-3" />
            <div className="flex items-end sm:col-span-2 lg:col-span-3">
              <Button type="submit" size="lg" className="w-full">
                Find Flights <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
            <p className="text-[0.78rem] leading-relaxed text-ink sm:col-span-2 lg:col-span-12">
              Next, tell us how to reach you. Our team will check options for your trip and get back
              to you — nothing is booked or charged.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-ivory px-4 py-3 text-sm">
              <p className="font-semibold text-navy">
                {v.from} <span className="font-normal text-ink">→</span> {v.to}
                <span className="ml-2 font-normal text-ink">
                  {fmtDate(v.departDate)}
                  {v.tripType === "round-trip" && v.returnDate ? ` – ${fmtDate(v.returnDate)}` : ""}
                  {v.tripType === "multi-city" ? ` · +${v.legs?.length ?? 0} more` : ""} · {v.adults}
                  {" "}adult{v.adults === "1" ? "" : "s"}
                  {Number(v.children) > 0 ? `, ${v.children} child${v.children === "1" ? "" : "ren"}` : ""}
                  {Number(v.infants) > 0 ? `, ${v.infants} infant${v.infants === "1" ? "" : "s"}` : ""}
                </span>
              </p>
              <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 font-semibold text-teal-deep hover:text-navy">
                <Pencil className="h-3.5 w-3.5" aria-hidden /> Edit trip
              </button>
            </div>

            <div>
              <h3 className="text-lg font-extrabold">Where should we send your options?</h3>
              <p className="mt-1 text-sm text-ink">
                Our customer support team will contact you about your trip. We do not display live fares online.
              </p>
            </div>

            <ContactFields form={form} />
            <TextAreaField form={form} name="message" label="Anything else we should know? (optional)" rows={3} placeholder="Flexible dates, preferred airlines, special assistance…" />
            <ConsentField form={form} />
            <ServerError message={serverError} />
            <SubmitButton submitting={submitting}>Send Flight Enquiry</SubmitButton>
          </div>
        )}
      </div>
    </form>
  );
}
