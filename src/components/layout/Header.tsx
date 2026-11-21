"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "@/config/contact";
import { mainNav } from "@/config/site";
import { Logo } from "./Logo";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bg-white">
      <div className="h-[15px] bg-[#4a3426]" aria-hidden />

      <div className="border-b border-line">
        <div className="mx-auto flex h-[80px] max-w-[1520px] items-center gap-4 px-4 min-[1552px]:px-0">
          <Logo />
          <div className="hidden flex-1 text-center sm:block">
            <p className="text-[0.95rem] leading-snug text-[#6b7280]">Quick Questions? Email Us</p>
            <a
              href={contact.emailHref}
              className="text-[1.15rem] font-medium leading-snug text-navy transition-colors hover:text-orange"
            >
              {contact.email}
            </a>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-mist lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="site-nav"
        aria-label="Main"
        className={`${open ? "block" : "hidden"} border-b border-line lg:block lg:border-b-0`}
      >
        <ul className="mx-auto flex max-w-[1520px] flex-col px-4 min-[1552px]:px-0 lg:h-14 lg:flex-row lg:items-center lg:gap-[30px]">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block whitespace-nowrap py-3 text-[1.1rem] font-medium transition-colors hover:text-orange lg:py-0 ${
                    active ? "text-orange" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
