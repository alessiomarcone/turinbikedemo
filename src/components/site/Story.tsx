import storyImg from "@/assets/adventure-story.jpg";

export function Story() {
  return (
    <section id="stories" className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone/60">Field Notes · Cap. 01</p>
            <h2 className="mt-3 font-display text-5xl md:text-7xl">
              Quattro giorni<br />sulle Alpi Cozie.
            </h2>
          </div>
          <p className="max-w-md text-bone/75">
            Una storia di vento, fango e amicizia. Il racconto di Marco, founder di Turinbike,
            partito da Porta Palazzo verso il Colle delle Finestre con una gravel e un sacco a pelo.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={storyImg}
                alt="Avventura in bici sulle Alpi"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-[520px] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-bone">
                <div className="rounded-full bg-ink/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] backdrop-blur">
                  45.0703° N · 7.6869° E
                </div>
                <div className="rounded-full bg-ink/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] backdrop-blur">
                  214 km · 4.380 m D+
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-5 text-bone/85 leading-relaxed">
              <p className="font-display text-2xl text-bone">
                "Non era una gara. Era un modo per ricordarmi perché ho aperto questa officina."
              </p>
              <p>
                Partenza alle 5:14. La città dorme, le ruote cantano sul pavé bagnato. Salgo verso Susa,
                la nebbia si rompe sopra Avigliana e il primo sole accende le creste. A Sestriere bevo un caffè
                con un pastore che mi racconta del lupo tornato in valle.
              </p>
              <p>
                Il terzo giorno il vento mi inchioda a Pian dell'Alpe. Mi siedo, mangio pane e toma, guardo
                le nuvole correre. È lì che capisco: la bici non serve ad andare lontano. Serve a stare presenti.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-bone/15 pt-6">
              <div className="size-12 rounded-full bg-bone/10 grid place-items-center font-display text-xl">M</div>
              <div>
                <p className="text-sm font-semibold">Marco Bertolino</p>
                <p className="text-xs uppercase tracking-[0.2em] text-bone/60">Founder · Mechanic · Rider</p>
              </div>
              <a
                href="#contact"
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-bone hover:text-ink"
              >
                Leggi tutto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
