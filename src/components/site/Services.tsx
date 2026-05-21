import workshop from "@/assets/workshop.jpg";
import accessories from "@/assets/accessories.jpg";
import turin from "@/assets/turin-ride.jpg";

const cards = [
  {
    tag: "01 / Noleggio",
    title: "Noleggia. Esplora. Pedala.",
    body: "Scegli la bici giusta — city, e-bike, gravel — e parti alla scoperta di Torino con o senza guida.",
    img: turin,
    cta: "Prenota tour",
    href: "#rent",
  },
  {
    tag: "02 / Vendita",
    title: "Lo shop su due piani.",
    body: "Bici, abbigliamento, accessori e ricambi. I migliori brand, selezionati da chi la bici la vive davvero.",
    img: accessories,
    cta: "Entra nello shop",
    href: "#shop",
  },
  {
    tag: "03 / Officina",
    title: "Mani esperte. Servizio express.",
    body: "Tagliandi, riparazioni e tuning su misura. La tua bici torna come nuova — spesso in giornata.",
    img: workshop,
    cta: "Porta la tua bici",
    href: "#workshop",
  },
];

export function Services() {
  return (
    <section id="shop" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal="">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/70">— Cosa facciamo</div>
            <h2 className="font-display text-6xl md:text-8xl">
              Tre servizi.<br />
              <span className="italic text-foreground/80">Una passione.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/80" data-reveal="" data-delay="2">
            Dalla prima pedalata in città all'officina specializzata. Tutto quello di cui hai bisogno, in un posto solo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <a
              key={c.tag}
              href={c.href}
              data-reveal=""
              data-delay={String(i + 1)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card text-card-foreground transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-bone px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink">
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="font-display text-3xl">{c.title}</h3>
                <p className="text-sm text-card-foreground/70">{c.body}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-sm font-semibold uppercase tracking-wider">
                  <span>{c.cta}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-bone text-ink transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
