export function Footer() {
  return (
    <footer id="workshop" className="relative bg-ink text-bone">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6" data-reveal="">
            <h2 className="font-display text-6xl md:text-[10rem] leading-[0.85]">
              Vieni a<br />
              <span className="italic text-bone/60">trovarci.</span>
            </h2>
            <p className="mt-8 max-w-xs text-sm text-bone/50 leading-relaxed">
              A due passi dalla stazione di Porta Nuova. La porta è sempre aperta.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-8 text-sm md:col-span-6" data-reveal="" data-delay="2">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-bone/50">Indirizzo</div>
              <p>Via Alessandro Volta 11/a<br />10121 Torino, IT</p>
              <p className="mt-3 text-bone/60">A 2 minuti da Porta Nuova</p>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-bone/50">Orari</div>
              <p>
                Lun &mdash; Sab<br />
                09:00 / 13:00<br />
                15:00 / 19:30
              </p>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-bone/50">Contatti</div>
              <a href="mailto:info@turinbike.com" className="block hover:opacity-70 transition">
                info@turinbike.com
              </a>
              <a href="tel:+390110000000" className="block hover:opacity-70 transition">
                +39 011 000 0000
              </a>
            </div>
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-bone/50">Social</div>
              <a className="block hover:opacity-70 transition" href="#">Instagram</a>
              <a className="block hover:opacity-70 transition" href="#">Facebook</a>
              <a className="block hover:opacity-70 transition" href="#">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-8 text-xs uppercase tracking-[0.25em] text-bone/50 md:flex-row md:items-center">
          <span>© 2026 Turinbike — Let's b-hike</span>
          <span className="font-mono">45°03'53.3" N · 7°40'40.9" E</span>
        </div>
      </div>
    </footer>
  );
}
