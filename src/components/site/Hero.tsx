import { useEffect, useRef, useState } from "react";
import heroBike from "@/assets/hero-bike.jpg";

const SPECS = [
  { id: "frame", label: "Telaio in carbonio T1000", x: "48%", y: "42%" },
  { id: "drivetrain", label: "Trasmissione 12 velocità", x: "42%", y: "72%" },
  { id: "wheels", label: "Ruote tubeless 700c", x: "78%", y: "75%" },
  { id: "cockpit", label: "Cockpit aero integrato", x: "82%", y: "30%" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      setT({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative grain overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* huge backdrop word */}
      <div className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center overflow-hidden">
        <h2 className="font-display text-[28vw] leading-none text-foreground/10 md:text-[22vw]">
          B&minus;HIKE
        </h2>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* top label row */}
        <div className="reveal mb-10 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/70">
          <span>Edizione 2026 / Torino</span>
          <span className="hidden md:inline">Scorri per esplorare ↓</span>
          <span>N° 011</span>
        </div>

        <div className="grid grid-cols-12 items-center gap-6">
          <div className="reveal col-span-12 md:col-span-5">
            <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)]">
              Ride
              <br />
              <span className="italic text-foreground/80">the city.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-foreground/80 md:text-lg">
              Bici, noleggio e officina nel cuore di Torino. A due passi da Porta Nuova,
              ti accompagniamo in ogni pedalata — dalla città alle Alpi.
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
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/10"
              >
                Esplora lo shop
              </a>
            </div>
          </div>

          {/* Bike interactive */}
          <div
            ref={ref}
            className="reveal relative col-span-12 md:col-span-7"
            onMouseLeave={() => setActive(null)}
          >
            <div
              className="relative aspect-[16/11] overflow-hidden rounded-2xl"
              style={{
                transform: `perspective(1200px) rotateY(${t.x * 6}deg) rotateX(${-t.y * 4}deg)`,
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <img
                src={heroBike}
                alt="Bici da strada in carbonio nera su sfondo rosso"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              {SPECS.map((s) => (
                <button
                  key={s.id}
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
                    className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all duration-300 ${active === s.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            {/* stats strip */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-foreground/15 rounded-2xl bg-foreground/5 backdrop-blur">
              {[
                ["7.4kg", "Peso"],
                ["12v", "Cambio"],
                ["Carbon", "Telaio"],
              ].map(([v, l]) => (
                <div key={l} className="px-4 py-4 text-center">
                  <div className="font-display text-3xl">{v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
