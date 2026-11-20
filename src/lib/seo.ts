import type { Metadata } from "next";
import { site } from "@/config/site";

/** Per-page metadata with canonical URL and Open Graph/Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: `${title} | ${site.name}`,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
