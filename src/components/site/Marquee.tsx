export function Marquee() {
  const items = ["Let's b-hike", "★", "Torino since 2019", "★", "Noleggio · Vendita · Officina", "★", "Saldi −30%", "★"];
  return (
    <section className="border-y border-foreground/15 bg-primary py-6 text-primary-foreground overflow-hidden">
      <div className="flex whitespace-nowrap ticker">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 px-5 font-display text-4xl md:text-6xl">
            {items.map((t, j) => (
              <span key={`${i}-${j}`}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
