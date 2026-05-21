import bikeRoad from "@/assets/bike-road.png";
import bikeGravel from "@/assets/bike-gravel.png";
import bikeEbike from "@/assets/bike-ebike.png";
import bikeMtb from "@/assets/bike-mtb.png";

const products = [
  { name: "Aero RS-01", type: "Road", price: "€4.200", tag: "Nuovo", image: bikeRoad },
  { name: "Gravel Vento", type: "Gravel", price: "€2.890", tag: "Best seller", image: bikeGravel },
  { name: "City e-Drift", type: "E-bike urban", price: "€2.150", tag: "−15%", image: bikeEbike },
  { name: "Trail MX-9", type: "MTB", price: "€3.450", tag: "Edition", image: bikeMtb },
];

export function Showcase() {
  return (
    <section id="rent" className="relative bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div data-reveal="">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
              — Flotta 2026
            </div>
            <h2 className="font-display text-5xl md:text-7xl">
              Scegli la<br />
              <span className="italic text-primary-foreground/70">tua corsa.</span>
            </h2>
          </div>
          <a
            href="#"
            data-reveal=""
            data-delay="2"
            className="hidden text-sm font-semibold uppercase tracking-wider underline-offset-4 hover:underline md:inline"
          >
            Tutta la collezione →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary-foreground/15 md:grid-cols-4">
          {products.map((p, i) => (
            <div
              key={p.name}
              data-reveal=""
              data-delay={String(i + 1)}
              className="group relative flex flex-col gap-6 bg-primary p-8 transition hover:bg-primary-foreground hover:text-primary"
            >
              <div className="flex items-start justify-between text-xs uppercase tracking-[0.25em] opacity-70">
                <span>0{i + 1}</span>
                <span>{p.tag}</span>
              </div>
              <div className="relative my-4 aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.type}`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] opacity-70">{p.type}</div>
                <h3 className="font-display mt-1 text-3xl">{p.name}</h3>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-current/15 pt-5">
                <span className="font-display text-2xl">{p.price}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-current transition group-hover:rotate-45">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
