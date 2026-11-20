import type { ReactNode } from "react";
import type { Img } from "@/config/images";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import { Photo } from "./Photo";

/**
 * Hero used by inner pages. With an image it becomes a photographic band;
 * without one it is a quiet navy header.
 */
export function PageHero({
  eyebrow,
  title,
  children,
  image,
  crumbs,
  actions,
  imagePosition,
  padBottom = "pb-16 sm:pb-20 lg:pb-24",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  image?: Img;
  crumbs: Crumb[];
  actions?: ReactNode;
  imagePosition?: string;
  padBottom?: string;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-navy">
      {image && (
        <>
          <Photo image={image} sizes="100vw" priority position={imagePosition} className="-z-20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/35 sm:via-navy/75" aria-hidden />
        </>
      )}
      <Container className={`relative pt-8 lg:pt-10 ${padBottom}`}>
        <Breadcrumbs items={crumbs} light />
        <div className="mt-10 max-w-2xl sm:mt-14 lg:mt-16">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2.1rem] font-extrabold !text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {children && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{children}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </Container>
    </div>
  );
}
