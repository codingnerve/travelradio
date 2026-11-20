import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Img } from "@/config/images";
import { Container, Section } from "./Container";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Text beside a photograph; `flip` swaps the sides on large screens. */
export function Split({
  id,
  eyebrow,
  title,
  children,
  image,
  imagePosition,
  flip = false,
  tone = "white",
  aspect = "aspect-[4/3]",
  actions,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: Img;
  imagePosition?: string;
  flip?: boolean;
  tone?: "white" | "ivory" | "mist";
  aspect?: string;
  actions?: ReactNode;
}) {
  const hid = id ? `${id}-title` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={hid}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className={flip ? "lg:order-2" : ""}>
            <SectionHeading eyebrow={eyebrow} title={title} id={hid} />
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed">{children}</div>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          <Reveal className={flip ? "lg:order-1" : ""}>
            <div className={`relative ${aspect} overflow-hidden rounded-md`}>
              <Photo image={image} sizes="(min-width:1024px) 48vw, 94vw" position={imagePosition} />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export type Feature = { icon: LucideIcon; title: string; text: string };

/** Ruled, icon-led list of points. Deliberately not boxed cards. */
export function FeatureGrid({
  features,
  cols = 3,
}: {
  features: Feature[];
  cols?: 2 | 3 | 4;
}) {
  const colCls = cols === 4 ? "lg:grid-cols-4" : cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <ul className={`grid gap-x-10 sm:grid-cols-2 ${colCls}`}>
      {features.map((f, i) => (
        <li key={f.title} className="border-t border-navy/15 py-7">
          <Reveal delay={(i % cols) * 0.06}>
            <f.icon className="h-6 w-6 text-teal" strokeWidth={1.7} aria-hidden />
            <h3 className="mt-4 text-lg font-extrabold">{f.title}</h3>
            <p className="mt-2 text-[0.94rem] leading-relaxed">{f.text}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  intro,
  features,
  cols = 3,
  tone = "white",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  features: Feature[];
  cols?: 2 | 3 | 4;
  tone?: "white" | "ivory" | "mist";
}) {
  const hid = id ? `${id}-title` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={hid}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} id={hid}>
          {intro}
        </SectionHeading>
        <div className="mt-10">
          <FeatureGrid features={features} cols={cols} />
        </div>
      </Container>
    </Section>
  );
}
