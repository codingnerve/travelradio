import { Phone } from "lucide-react";
import Link from "next/link";
import { contact } from "@/config/contact";

/** Mobile-only call-to-action pinned to the bottom of the viewport. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-2 bg-navy px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={contact.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-orange text-[0.95rem] font-bold text-navy active:translate-y-px"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call 24/7 Support
        </a>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-md border border-white/35 px-5 text-[0.95rem] font-semibold text-white"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
