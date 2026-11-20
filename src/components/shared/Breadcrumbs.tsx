import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/config/site";
import { JsonLd } from "./JsonLd";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={jsonLd} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-[0.82rem] ${light ? "text-white/70" : "text-ink"}`}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className={`underline-offset-4 hover:underline ${light ? "hover:text-white" : "hover:text-navy"}`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={light ? "text-white" : "font-medium text-navy"}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
