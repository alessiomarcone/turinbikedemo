import { useEffect, useRef, useState } from "react";
import heroBike from "@/assets/hero-bike.jpg";
import gravelBike from "@/assets/bike-gravel.jpg";
import ebike from "@/assets/bike-ebike.jpg";
import mtbBike from "@/assets/bike-mtb.jpg";

type Bike = {
  id: string;
  name: string;
  type: string;
  price: string;
  unit: string;
  img: string;
  specs: { id: string; label: string; x: string; y: string }[];
  stats: [string, string][];
};

const BIKES: Bike[] = [
  {
    id: "aero",
    name: "Aero RS-01",
    type: "Road / Carbon",
    price: "€39",
    unit: "/ giorno",
    img: heroBike,
    specs: [
      { id: "f", label: "Telaio carbonio T1000", x: "48%", y: "42%" },
      { id: "d", label: "Trasmissione 12v", x: "42%", y: "72%" },
      { id: "w", label: "Ruote tubeless 700c", x: "78%", y: "75%" },
      { id: "c", label: "Cockpit aero", x: "82%", y: "30%" },
    ],
    stats: [["7.4kg", "Peso"], ["12v", "Cambio"], ["Carbon", "Telaio"]],
  },
  {
    id: "gravel",
    name: "Vento Gravel",
    type: "Gravel / Adventure",
    price: "€29",
    unit: "/ giorno",
    img: gravelBike,
    specs: [
      { id: "f", label: "Telaio alu hydroformato", x: "52%", y: "38%" },
      { id: "t", label: "Pneumatici 45mm", x: "78%", y: "78%" },
      { id: "d", label: "GRX 11v", x: "45%", y: "72%" },
      { id: "h", label: "Manubrio flare", x: "82%", y: "28%" },
    ],
    stats: [["9.6kg", "Peso"], ["45mm", "Gomme"], ["11v", "Cambio"]],
  },
  {
    id: "ebike",
    name: "City e-Drift",
    type: "E-bike / Urban",
    price: "€45",
    unit: "/ giorno",
    img: ebike,
    specs: [
      { id: "b", label: "Batteria 500Wh integrata", x: "50%", y: "60%" },
      { id: "m", label: "Motore 250W centrale", x: "55%", y: "78%" },
      { id: "l", label: "Luci integrate LED", x: "30%", y: "30%" },
      { id: "g", label: "Cambio Nexus 8v", x: "78%", y: "78%" },
    ],
    stats: [["80km", "Autonomia"], ["250W", "Motore"], ["25kmh", "Speed"]],
  },
  {
    id: "mtb",
    name: "Trail MX-9",
    type: "MTB / Full suspension",
    price: "€35",
    unit: "/ giorno",
    img: mtbBike,
    specs: [
      { id: "s", label: "Sospensione 140mm", x: "55%", y: "55%" },
      { id: "f", label: "Forcella Fox 36", x: "75%", y: "45%" },
      { id: "t", label: "Pneumatici 29x2.4", x: "80%", y: "78%" },
      { id: "b", label: "Freni 4 pistoncini", x: "30%", y: "75%" },
    ],
    stats: [["13.8kg", "Peso"], ["140mm", "Travel"], ["29\"", "Ruote"]],
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);

  const bike = BIKES[idx];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % BIKES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (n: number) => setIdx((n + BIKES.length) % BIKES.length);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStartX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) setIdx((prev) => (prev + 1) % BIKES.length);
    else if (diff < -50) setIdx((prev) => (prev - 1 + BIKES.length) % BIKES.length);
  };

  return (
    <section className="relative grain overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center overflow-hidden">
        <h2 className="font-display text-[28vw] leading-none text-foreground/[0.07] md:text-[22vw]">
          B&minus;HIKE
        </h2>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal mb-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/70">
          <span>Edizione 2026 / Torino</span>
          <span className="hidden md:inline">Carosello noleggio</span>
          <span>N° 0{idx + 1} / 0{BIKES.length}</span>
        </div>

        <div className="grid grid-cols-12 items-center gap-6">
          <div className="reveal col-span-12 md:col-span-5">
            <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)]">
              Ride
              <br />
              <span className="italic text-foreground/80">the city.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-foreground/85 md:text-lg">
              Dal Po alle Alpi, ogni strada racconta qualcosa. Noleggio, officina e shop
              nel cuore di Torino — dal 2019.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#rent"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.03]"
              >
                Noleggia ora
                <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground/20 transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/10"
              >
                Esplora lo shop
              </a>
            </div>
          </div>

          {/* Bike carousel */}
          <div
            ref={ref}
            className="reveal relative col-span-12 md:col-span-7"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setActive(null);
            }}
          >
            <div
              className={`relative aspect-[16/11] overflow-hidden rounded-2xl bg-card select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerLeave={() => setDragging(false)}
            >
              {BIKES.map((b, i) => (
                <img
                  key={b.id}
                  src={b.img}
                  alt={b.name}
                  width={1600}
                  height={1200}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* Bike info overlay */}
              <div className="absolute left-5 top-5 max-w-[60%] rounded-xl bg-ink/75 px-4 py-3 text-bone backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.25em] text-bone/60">
                  {bike.type}
                </div>
                <div key={bike.id} className="font-display text-2xl md:text-3xl reveal">{bike.name}</div>
              </div>
              <div className="absolute right-5 top-5 rounded-xl bg-bone px-4 py-3 text-right text-ink">
                <div className="font-display text-2xl md:text-3xl leading-none">{bike.price}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-70">{bike.unit}</div>
              </div>

              {/* Spec hotspots */}
              {bike.specs.map((s) => (
                <button
                  key={`${bike.id}-${s.id}`}
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => setActive(s.id)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: s.x, top: s.y }}
                  aria-label={s.label}
                >
                  <span className="relative grid h-4 w-4 place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-bone/70" />
                    <span className="relative h-4 w-4 rounded-full border-2 border-bone bg-ink" />
                  </span>
                  <span
                    className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-bone transition-all duration-300 ${
                      active === s.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}

              {/* Arrows */}
              <button
                onClick={() => go(idx - 1)}
                className="absolute left-4 bottom-4 grid h-11 w-11 place-items-center rounded-full border border-bone/40 bg-ink/50 text-bone backdrop-blur transition hover:bg-ink"
                aria-label="Precedente"
              >
                ←
              </button>
              <button
                onClick={() => go(idx + 1)}
                className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full border border-bone/40 bg-ink/50 text-bone backdrop-blur transition hover:bg-ink"
                aria-label="Successiva"
              >
                →
              </button>
            </div>

            {/* Stats + indicators */}
            <div className="mt-4 grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-8 grid grid-cols-3 divide-x divide-foreground/15 rounded-2xl bg-foreground/10 backdrop-blur">
                {bike.stats.map(([v, l]) => (
                  <div key={l} className="px-4 py-4 text-center">
                    <div className="font-display text-3xl">{v}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/70">{l}</div>
                  </div>
                ))}
              </div>
              <div className="col-span-12 md:col-span-4 flex items-center justify-between rounded-2xl bg-primary px-5 py-4 text-primary-foreground">
                <div className="flex items-center gap-2">
                  {BIKES.map((b, i) => (
                    <button
                      key={b.id}
                      onClick={() => setIdx(i)}
                      aria-label={`Vai a ${b.name}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx ? "w-8 bg-bone" : "w-3 bg-bone/40 hover:bg-bone/70"
                      }`}
                    />
                  ))}
                </div>
                <a href="#rent" className="text-xs font-semibold uppercase tracking-wider underline-offset-4 hover:underline">
                  Prenota →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-10 md:pt-16">
          <div className="flex flex-col items-center gap-3 text-foreground/40">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Scroll</span>
            <div className="relative h-10 w-px overflow-hidden bg-foreground/20">
              <span className="scroll-line absolute inset-x-0 top-0 h-1/2 bg-foreground/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
