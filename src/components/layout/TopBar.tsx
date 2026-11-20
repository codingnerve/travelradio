import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { contact } from "@/config/contact";

export function TopBar() {
  return (
    <div className="bg-[#0f2031] text-[0.8rem] text-white/80">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-2 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <span className="flex items-center gap-2 font-medium text-white">
            <Clock className="h-3.5 w-3.5 text-orange" aria-hidden />
            <span>
              <span className="sm:hidden">24/7 Support</span>
              <span className="hidden sm:inline">24/7 Customer Support</span>
            </span>
          </span>
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-orange" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <a
            href={contact.emailHref}
            className="hidden items-center gap-2 transition-colors hover:text-white lg:flex"
          >
            <Mail className="h-3.5 w-3.5 text-orange" aria-hidden />
            {contact.email}
          </a>
        </div>
        <Link
          href="/contact"
          className="hidden font-medium text-white underline-offset-4 transition-colors hover:text-orange hover:underline sm:inline"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
