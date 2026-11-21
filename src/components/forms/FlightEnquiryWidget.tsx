"use client";

import { ArrowRightLeft, Pencil, PlaneTakeoff, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import {
  flightForm,
  travelClasses,
  travelClassLabels,
  type FlightFormValues,
} from "@/lib/validation";
import { consentDefault, ConsentField, ContactFields, TextAreaField } from "./fields";
import { Honeypot, ServerError, SubmitButton, SuccessPanel } from "./FormParts";
import { useEnquiryForm } from "./useEnquiryForm";

const tripFieldPaths = [
  "details.tripType",
  "details.from",
  "details.to",
  "details.departDate",
  "details.returnDate",
  "details.adults",
  "details.travelClass",
] as const;

const tripOptions = [
  { value: "round-trip", label: "Round-trip" },
  { value: "one-way", label: "One-way" },
] as const;

const classOptions = travelClasses.map((c) => ({ value: c, label: travelClassLabels[c] }));
const passengerOptions = Array.from({ length: 9 }, (_, i) => String(i + 1));

const fmtDate = (iso: string) =>
  iso ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

const control =
  "h-[52px] rounded-lg border border-line bg-white text-[1rem] text-navy transition-colors hover:border-[#c5cbd3] focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/25 aria-[invalid=true]:border-[#b3261e]";
const selectControl = `${control} select-chevron pl-4 pr-9`;
const inputControl = `${control} h-[55px] w-full pr-3 placeholder:text-[#9ca3af] disabled:bg-mist disabled:text-[#9ca3af]`;

/**
 * Hero search box. It looks like a fare search, but it never shows fares:
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

  const {
    register,
    setValue,
    trigger,
    getValues,
    control: rhfControl,
    formState: { errors },
  } = form;
  const tripType = useWatch({ control: rhfControl, name: "details.tripType" }) as FlightFormValues["details"]["tripType"];

  const onTripTypeChange = (next: FlightFormValues["details"]["tripType"]) => {
    if (next !== "round-trip") setValue("details.returnDate", "");
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
      ? "rounded-xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] sm:p-[30px]"
      : "rounded-xl border border-line bg-white p-4 shadow-sm sm:p-[30px]";

  if (success && !redirect) {
    return (
      <div className={wrapper}>
        <SuccessPanel reference={reference} onAnother={() => { startAnother(); setStep(1); }} />
      </div>
    );
  }

  const v = getValues("details");
  const detailErrors = errors.details as
    | Partial<Record<"from" | "to" | "departDate" | "returnDate", { message?: string }>>
    | undefined;
  const firstError =
    detailErrors?.from?.message ??
    detailErrors?.to?.message ??
    detailErrors?.departDate?.message ??
    detailErrors?.returnDate?.message ??
    null;

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Flight search" className={`relative ${wrapper}`}>
      <Honeypot inputRef={honeypot} />

      {step === 1 ? (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-[15px]">
            <select
              aria-label="Trip type"
              className={`${selectControl} w-[150px]`}
              {...register("details.tripType", {
                onChange: (e) => onTripTypeChange(e.target.value),
              })}
            >
              {tripOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <select aria-label="Travel class" className={`${selectControl} w-[143px]`} {...register("details.travelClass")}>
              {classOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="relative">
              <Users className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" aria-hidden />
              <select aria-label="Passengers" className={`${selectControl} w-[107px] pl-10`} {...register("details.adults")}>
                {passengerOptions.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-[15px] sm:grid-cols-2 lg:grid-cols-5">
            <div className="relative">
              <PlaneTakeoff className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" aria-hidden />
              <input
                type="text"
                aria-label="From"
                placeholder="From"
                autoComplete="off"
                aria-invalid={detailErrors?.from ? true : undefined}
                className={`${inputControl} pl-10`}
                {...register("details.from")}
              />
            </div>
            <div className="relative">
              <ArrowRightLeft className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" aria-hidden />
              <input
                type="text"
                aria-label="To"
                placeholder="To"
                autoComplete="off"
                aria-invalid={detailErrors?.to ? true : undefined}
                className={`${inputControl} pl-10`}
                {...register("details.to")}
              />
            </div>
            <input
              type="date"
              aria-label="Departure date"
              aria-invalid={detailErrors?.departDate ? true : undefined}
              className={`${inputControl} pl-4`}
              {...register("details.departDate")}
            />
            <input
              type="date"
              aria-label="Return date"
              disabled={tripType !== "round-trip"}
              aria-invalid={detailErrors?.returnDate ? true : undefined}
              className={`${inputControl} pl-4`}
              {...register("details.returnDate")}
            />
            <button
              type="submit"
              className="flex h-[55px] items-center justify-center gap-2.5 rounded-lg bg-orange px-6 text-[1rem] font-bold text-white transition-colors hover:bg-orange-deep focus-visible:outline-offset-2 sm:col-span-2 lg:col-span-1"
            >
              <Search className="h-[18px] w-[18px]" aria-hidden /> Search
            </button>
          </div>

          {firstError && (
            <p role="alert" className="text-[0.85rem] font-medium text-[#b3261e]">
              {firstError}
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-mist px-4 py-3 text-sm">
            <p className="font-semibold text-navy">
              {v.from} <span className="font-normal text-ink">→</span> {v.to}
              <span className="ml-2 font-normal text-ink">
                {fmtDate(v.departDate)}
                {v.tripType === "round-trip" && v.returnDate ? ` – ${fmtDate(v.returnDate)}` : ""} · {v.adults}{" "}
                passenger{v.adults === "1" ? "" : "s"} · {travelClassLabels[v.travelClass as keyof typeof travelClassLabels]}
              </span>
            </p>
            <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 font-semibold text-orange hover:text-orange-deep">
              <Pencil className="h-3.5 w-3.5" aria-hidden /> Edit trip
            </button>
          </div>

          <div>
            <h3 className="text-lg font-bold">Where should we send your options?</h3>
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
    </form>
  );
}
