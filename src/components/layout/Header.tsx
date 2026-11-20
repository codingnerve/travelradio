"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { contact } from "@/config/contact";
import { mainNav, type NavItem } from "@/config/site";
import { ButtonLink } from "@/components/shared/Button";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

const stripHash = (href: string) => href.split("#")[0].split("?")[0];
const menuId = (label: string) => `menu-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function isActive(pathname: string, item: NavItem) {
  const base = stripHash(item.href);
  return base === "/" ? pathname === "/" : pathname === base || pathname.startsWith(`${base}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click / Escape.
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);
  const hoverClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);
  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(23,45,67,0.35)]" : "border-b border-line"
      }`}
    >
      <nav
        ref={navRef}
        aria-label="Main"
        className="mx-auto flex h-[4.25rem] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem] lg:px-10"
      >
        <Logo />

        {/* Desktop navigation */}
        <ul className="hidden items-center xl:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            const open = openMenu === item.label;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && hoverOpen(item.label)}
                onMouseLeave={() => item.children && hoverClose()}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeAll}
                    className={`relative whitespace-nowrap py-2 pl-2.5 text-[0.875rem] font-semibold transition-colors ${
                      item.children ? "pr-0" : "pr-2.5"
                    } ${active ? "text-navy" : "text-navy-2/80 hover:text-navy"}`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute -bottom-[1.05rem] left-2.5 h-[2px] bg-orange transition-all duration-200 ${
                        item.children ? "right-0" : "right-2.5"
                      } ${active ? "opacity-100" : "opacity-0"}`}
                    />
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`${item.label} menu`}
                      aria-expanded={open}
                      aria-controls={menuId(item.label)}
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className="rounded p-1.5 text-navy-2/70 transition-colors hover:text-navy"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    id={menuId(item.label)}
                    className={`absolute left-1/2 top-full z-10 w-[19rem] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      open
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="overflow-hidden rounded-md border border-line border-t-2 border-t-orange bg-white py-2 shadow-panel">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            onClick={closeAll}
                            tabIndex={open ? 0 : -1}
                            className="block px-5 py-2.5 transition-colors hover:bg-ivory"
                          >
                            <span className="block text-[0.9rem] font-semibold text-navy">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right-hand actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/manage-booking"
            className="hidden whitespace-nowrap px-2 text-[0.875rem] font-semibold text-navy transition-colors hover:text-orange-deep xl:block"
          >
            Manage Booking
          </Link>
          <div className="hidden xl:block">
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>

          <a
            href={contact.phoneHref}
            aria-label={`Call customer support on ${contact.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-orange text-navy transition-colors hover:bg-[#e08a52] xl:hidden"
          >
            <Phone className="h-[1.15rem] w-[1.15rem]" aria-hidden />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy transition-colors hover:bg-mist xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <MobileNavigation open={mobileOpen} onNavigate={closeAll} pathname={pathname} />
    </header>
  );
}
