import { contact } from "@/config/contact";

export function ReadyToTravel() {
  return (
    <section aria-labelledby="ready-title" className="bg-navy px-4 pb-20 pt-20 text-center">
      <h2 id="ready-title" className="text-[2.25rem] font-bold !text-white">
        Ready to Travel?
      </h2>
      <p className="mx-auto mt-4 max-w-[34rem] text-[1rem] leading-6 text-white/80 [text-wrap:wrap]">
        Contact our travel experts and get the best deals on flights, hotels, and car rentals.
      </p>
      <a
        href={contact.emailHref}
        className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-orange px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-orange-deep"
      >
        Email Customer Care
      </a>
    </section>
  );
}
