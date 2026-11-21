import { Mail } from "lucide-react";
import { contact } from "@/config/contact";

/** Orange pill that opens an email to customer care. */
export function EmailCareButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={contact.emailHref}
      className={`inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-orange px-8 text-[1rem] font-bold text-white transition-colors hover:bg-orange-deep ${className}`}
    >
      <Mail className="h-[18px] w-[18px]" aria-hidden /> Email Customer Care
    </a>
  );
}
