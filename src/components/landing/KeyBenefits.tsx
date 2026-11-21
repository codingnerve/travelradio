import { Headphones, Shield, ThumbsUp, type LucideIcon } from "lucide-react";

const benefits: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Personalized Service",
    text: "Discover destinations tailored to your interests and preferences.",
    icon: ThumbsUp,
  },
  {
    title: "Best Price Guaranteed",
    text: "No surprises — just great prices, a click away.",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    text: "Experience effortless booking backed by expert guidance throughout your entire trip.",
    icon: Headphones,
  },
];

export function KeyBenefits() {
  return (
    <section aria-labelledby="benefits-title" className="bg-mist py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <p className="text-center text-[0.85rem] font-medium text-orange">Travel Station Service</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="lg:pt-3">
            <h2 id="benefits-title" className="text-[1.75rem] font-bold sm:text-[2rem]">
              Key Benefits for You
            </h2>
            <p className="mt-2 max-w-[16rem] text-[0.9rem] leading-relaxed text-[#6b7280]">
              Sit back and enjoy your trip while we take care of every detail.
            </p>
          </div>
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title}>
              <span
                aria-hidden
                className="flex h-[66px] w-[66px] items-center justify-center rounded-xl bg-orange/10 text-orange"
              >
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-bold">{title}</h3>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#6b7280]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
