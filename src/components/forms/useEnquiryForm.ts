"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState, type BaseSyntheticEvent } from "react";
import { useForm, type DefaultValues, type FieldValues, type Path } from "react-hook-form";
import type { z } from "zod";
import type { EnquiryType } from "@/lib/validation";
import type { AnyForm } from "./types";

type Status = "idle" | "submitting" | "success";

type Options<S extends z.ZodType<FieldValues>> = {
  schema: S;
  defaultValues: DefaultValues<z.infer<S>>;
  /** Maps validated values to the stored enquiry type. */
  resolveType: (values: z.infer<S>) => EnquiryType;
  onSuccess?: (reference: string) => void;
};

/**
 * Shared submit logic for every enquiry form:
 *  - client validation with the same Zod schemas the API uses
 *  - duplicate-submission guard (in-flight lock + idempotency token reused on retry)
 *  - honeypot + fill-time signals for the server's spam checks
 *  - server field errors mapped back onto the form
 */
export function useEnquiryForm<S extends z.ZodType<FieldValues>>({
  schema,
  defaultValues,
  resolveType,
  onSuccess,
}: Options<S>) {
  type Values = z.infer<S>;
  const form = useForm<Values>({
    // zod 4 + resolvers: schema type is validated by the generic constraint above
    resolver: zodResolver(schema as never) as never,
    defaultValues,
    // Validate on submit, then live. Validating on blur shifts the layout under
    // the pointer and can swallow the click on the submit button.
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const inFlight = useRef(false);
  const startedAt = useRef(0);
  const token = useRef<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onValid = async (values: Values) => {
    if (inFlight.current) return; // ignore double-clicks / rapid Enter presses
    inFlight.current = true;
    setStatus("submitting");
    setServerError(null);
    token.current ??= crypto.randomUUID();

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          type: resolveType(values),
          sourcePage: window.location.pathname,
          startedAt: startedAt.current,
          clientToken: token.current,
          website: honeypot.current?.value ?? "",
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        reference?: string;
        message?: string;
        fieldErrors?: Record<string, string>;
      } | null;

      if (res.ok && data?.ok && data.reference) {
        setReference(data.reference);
        setStatus("success");
        onSuccess?.(data.reference);
        return;
      }

      if (data?.fieldErrors) {
        for (const [path, message] of Object.entries(data.fieldErrors)) {
          form.setError(path as Path<Values>, { type: "server", message });
        }
      }
      setServerError(
        data?.message ?? "Something went wrong while sending your enquiry. Please try again or call us.",
      );
      setStatus("idle");
    } catch {
      setServerError(
        "We could not reach the server. Please check your connection and try again, or call our support team.",
      );
      setStatus("idle");
    } finally {
      inFlight.current = false;
    }
  };

  // handleSubmit is invoked inside the event handler, never during render.
  const submit = (e?: BaseSyntheticEvent) => form.handleSubmit(onValid)(e);

  const startAnother = () => {
    token.current = null;
    startedAt.current = Date.now();
    setReference(null);
    setServerError(null);
    setStatus("idle");
    form.reset();
  };

  return {
    form: form as unknown as AnyForm,
    submit,
    status,
    submitting: status === "submitting",
    success: status === "success",
    serverError,
    reference,
    honeypot,
    startAnother,
  };
}
