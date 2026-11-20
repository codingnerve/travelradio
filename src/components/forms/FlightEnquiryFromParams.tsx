"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FlightEnquiryWidget } from "./FlightEnquiryWidget";

function Inner({ variant }: { variant: "panel" | "card" }) {
  const sp = useSearchParams();
  const to = (sp.get("to") ?? "").slice(0, 80);
  const from = (sp.get("from") ?? "").slice(0, 80);
  // Re-key so a changed query string pre-fills afresh.
  return <FlightEnquiryWidget key={`${from}|${to}`} variant={variant} defaultFrom={from} defaultTo={to} />;
}

/** Flight widget that pre-fills From/To from ?from= and ?to= (used by destination links). */
export function FlightEnquiryFromParams({ variant = "panel" }: { variant?: "panel" | "card" }) {
  return (
    <Suspense fallback={<div className="min-h-[22rem] animate-pulse rounded-md bg-white/80" aria-hidden />}>
      <Inner variant={variant} />
    </Suspense>
  );
}
