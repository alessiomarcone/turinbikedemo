import turin from "@/assets/turin-ride.jpg";

export function Manifesto() {
  return (
    <section id="stories" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <div className="sticky top-32">
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground/70" data-reveal="">
              — Manifesto
            </div>
            <h2 className="font-display text-5xl md:text-7xl" data-reveal="" data-delay="1">
              Passione<br />per la bici.<br />
              <span className="italic text-foreground/70">Amore per Torino.</span>
            </h2>
            <p className="mt-8 max-w-md text-foreground/80" data-reveal="" data-delay="2">
              Siamo nati nel 2019 a due passi da Porta Nuova. Da allora accompagniamo
              torinesi e viaggiatori a scoprire la città a pedali — lentamente, al ritmo
              che solo la bici sa darti.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-7">
          <div className="relative overflow-hidden rounded-2xl" data-reveal="">
            <img
              src={turin}
              alt="Ciclista a Torino al tramonto"
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-display text-2xl text-bone">"Let's b-hike."</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-bone/70">
                Il nostro motto dal 2019
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            {[
              ["2.500+", "Tour guidati ogni anno"],
              ["12k", "Bici noleggiate"],
              ["48h", "Tempo medio officina"],
              ["4.9★", "Recensioni Google"],
            ].map(([n, l], i) => (
              <div
                key={l}
                data-reveal=""
                data-delay={String(i + 1)}
                className="border-t border-foreground/20 pt-5"
              >
                <div className="font-display text-5xl">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
