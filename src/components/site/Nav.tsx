import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? y / total : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/10" : ""
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-px origin-left bg-foreground/50 transition-transform duration-75"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">
            TURIN<span className="text-foreground/60">BIKE</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] md:flex">
          <a href="#shop" className="hover:opacity-70 transition">Shop</a>
          <a href="#rent" className="hover:opacity-70 transition">Noleggio</a>
          <a href="#workshop" className="hover:opacity-70 transition">Officina</a>
          <a href="#stories" className="hover:opacity-70 transition">Stories</a>
          <a href="#contact" className="hover:opacity-70 transition">Contatti</a>
        </nav>
        <a
          href="#rent"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.03] active:scale-95"
        >
          Prenota <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
