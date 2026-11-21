export function SectionTitle({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <div className="text-center">
      <p className="text-[0.85rem] font-medium text-orange">{eyebrow}</p>
      <h2 id={id} className="mt-1 text-[1.75rem] font-bold sm:text-[2rem]">
        {title}
      </h2>
    </div>
  );
}
