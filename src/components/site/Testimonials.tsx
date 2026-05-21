const REVIEWS = [
  {
    quote:
      "Affittato una gravel per il weekend in Langa. Bici impeccabile, consigli da locali veri. Tornerò.",
    name: "Elena R.",
    place: "Milano",
    trip: "Loop delle Langhe · 86 km",
  },
  {
    quote:
      "Officina onesta, mani esperte. Mi hanno rimesso a posto una vecchia Bianchi degli anni '80 come fosse nuova.",
    name: "Jonas K.",
    place: "Berlino",
    trip: "Restauro vintage",
  },
  {
    quote:
      "Tour guidato sulla Collina torinese: tre ore, panorama mozzafiato e un espresso finale che vale il viaggio.",
    name: "Sofia & Luca",
    place: "Torino",
    trip: "Superga Sunrise Ride",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">Voci dal manubrio</p>
            <h2 className="mt-3 font-display text-5xl md:text-7xl">Chi ha pedalato<br />con noi.</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground/70">
            <span className="inline-block size-2 rounded-full bg-foreground/80" />
            4.9 / 5 · 320+ recensioni
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className="group relative flex flex-col justify-between gap-8 rounded-3xl border border-foreground/15 bg-foreground/5 p-8 backdrop-blur-sm transition hover:border-foreground/40 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex items-center gap-1 text-foreground/80">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} aria-hidden>★</span>
                  ))}
                </div>
                <p className="font-display text-2xl leading-tight text-balance">
                  "{r.quote}"
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-foreground/15 pt-5">
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">{r.place}</p>
                </div>
                <p className="text-right font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60 max-w-[140px]">
                  {r.trip}
                </p>
              </div>
              <span className="pointer-events-none absolute right-6 top-6 font-display text-7xl leading-none text-foreground/10 transition group-hover:text-foreground/20">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
