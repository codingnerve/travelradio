/** Dark navy title band used at the top of every inner page. */
export function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-navy text-center">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:py-[78px]">
        <h1 className="text-[2.1rem] font-bold leading-tight !text-white sm:text-[3.75rem]">{title}</h1>
        {subtitle && <p className="mt-2 text-[1.05rem] text-white/90 sm:text-[1.15rem]">{subtitle}</p>}
      </div>
    </section>
  );
}
