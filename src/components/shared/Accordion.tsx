"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/config/faq";

/** Accessible accordion: one panel open at a time, keyboard and screen-reader friendly. */
export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-b${i}`;
        const panelId = `${uid}-p${i}`;
        return (
          <div key={item.q}>
            <h3 className="!text-base">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-[1.02rem] font-bold tracking-tight text-navy transition-colors hover:text-teal-deep sm:text-[1.1rem]"
              >
                {item.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? "rotate-45 border-orange bg-orange text-navy" : "border-line text-navy"
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pr-12 text-[0.98rem] leading-relaxed text-ink">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
