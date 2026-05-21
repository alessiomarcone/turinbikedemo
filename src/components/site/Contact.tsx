export function Contact() {
  return (
    <section id="contact" className="relative bg-bone py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-ink/50">
              — Contattaci
            </div>
            <h2 className="font-display text-5xl text-crimson md:text-7xl">
              Scrivici.
              <br />
              <span className="italic text-ink/60">Ti rispondiamo in giornata.</span>
            </h2>
            <p className="mt-8 max-w-md text-ink/70">
              Hai domande sui nostri tour, sul noleggio o sull'officina? Scrivici e ti aiuteremo a trovare la soluzione perfetta per te.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Non compilare questo campo: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-xs uppercase tracking-[0.25em] text-ink/50">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="border-b border-ink/30 bg-transparent pb-3 text-ink outline-none transition focus:border-ink"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.25em] text-ink/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-b border-ink/30 bg-transparent pb-3 text-ink outline-none transition focus:border-ink"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="telefono" className="text-xs uppercase tracking-[0.25em] text-ink/50">
                Telefono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className="border-b border-ink/30 bg-transparent pb-3 text-ink outline-none transition focus:border-ink"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="messaggio" className="text-xs uppercase tracking-[0.25em] text-ink/50">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                required
                rows={4}
                className="resize-none border-b border-ink/30 bg-transparent pb-3 text-ink outline-none transition focus:border-ink"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bone transition hover:scale-[1.03] active:scale-95"
            >
              Invia messaggio <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
