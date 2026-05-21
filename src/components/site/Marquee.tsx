export function Marquee() {
  const row1 = ["Let's b-hike", "—", "Torino since 2019", "—", "Noleggio · Vendita · Officina", "—", "Saldi fino al −30%", "—"];
  const row2 = ["Esplora la città in sella", "—", "Road · Gravel · E-bike · MTB", "—", "Field Notes", "—", "Artigiani della bici", "—"];

  return (
    <section className="border-y border-foreground/15 bg-primary overflow-hidden py-5 text-primary-foreground">
      <div className="flex whitespace-nowrap ticker mb-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 px-5 font-display text-5xl md:text-7xl">
            {row1.map((t, j) => (
              <span key={`${i}-${j}`}>{t}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex whitespace-nowrap ticker-reverse">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10 px-5 font-display text-2xl md:text-3xl opacity-40">
            {row2.map((t, j) => (
              <span key={`${i}-${j}`}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
