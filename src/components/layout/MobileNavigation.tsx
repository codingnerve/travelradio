"use client";

import { ChevronDown, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/config/contact";
import { mainNav } from "@/config/site";
import { ButtonLink } from "@/components/shared/Button";

const stripHash = (href: string) => href.split("#")[0].split("?")[0];

export function MobileNavigation({
  open,
  onNavigate,
  pathname,
}: {
  open: boolean;
  onNavigate: () => void;
  pathname: string;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id="mobile-navigation"
      hidden={!open}
      className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-line bg-white pb-8 shadow-panel xl:hidden"
    >
      <ul className="mx-auto max-w-[1280px] px-5 pt-2 sm:px-8">
        {mainNav.map((item) => {
          const base = stripHash(item.href);
          const active = base === "/" ? pathname === "/" : pathname.startsWith(base);
          const isOpen = expanded === item.label;
          return (
            <li key={item.label} className="border-b border-line">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`flex-1 py-4 text-[1.05rem] font-semibold ${
                    active ? "text-orange-deep" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} links`}
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex h-11 w-11 items-center justify-center text-navy-2"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                )}
              </div>
              {item.children && isOpen && (
                <ul className="mb-3 ml-1 border-l-2 border-orange/60 pl-4">
                  {item.children.map((c) => (
                    <li key={c.href + c.label}>
                      <Link
                        href={c.href}
                        onClick={onNavigate}
                        className="block py-2.5 text-[0.95rem] text-ink hover:text-navy"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-6 grid max-w-[1280px] gap-3 px-5 sm:px-8">
        <ButtonLink href="/manage-booking" variant="outline" size="lg" onClick={onNavigate}>
          Manage Booking
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" size="lg" onClick={onNavigate}>
          Contact Us
        </ButtonLink>
        <div className="mt-2 space-y-2 rounded-md bg-ivory p-4 text-sm">
          <p className="font-semibold text-navy">24/7 Customer Support</p>
          <a href={contact.phoneHref} className="flex items-center gap-2 py-1 text-navy">
            <Phone className="h-4 w-4 text-teal" aria-hidden /> {contact.phoneDisplay}
          </a>
          <a href={contact.emailHref} className="flex items-center gap-2 py-1 text-navy">
            <Mail className="h-4 w-4 text-teal" aria-hidden /> {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
