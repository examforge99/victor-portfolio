export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
              Product Engineer
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl md:text-6xl">
              I design from how people <em className="italic text-clay">think</em>,
              <br />
              then build the engineering to{" "}
              <em className="italic text-clay">match</em>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              Full-stack builder and Electrical/Electronics Engineering
              student at Obafemi Awolowo University. I've shipped a solar
              business's web presence, a fashion e-commerce platform, and an
              exam-prep SaaS — each one starting from how people actually
              behave.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-clay focus-ring"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/20 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-clay hover:text-clay focus-ring"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* signature: quick-stats spec panel */}
          <div className="rounded-lg border border-ink/15 bg-white p-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate/70">
              // quick_stats.json
            </p>
            <dl className="mt-4 space-y-3">
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <dt className="text-xs text-slate">Based in</dt>
                <dd className="font-mono text-sm text-ink">Oyo, NG</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <dt className="text-xs text-slate">Products shipped</dt>
                <dd className="font-mono text-sm text-ink">3</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                <dt className="text-xs text-slate">Toolkit</dt>
                <dd className="font-mono text-sm text-ink">Termux · zero-PC stack</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-xs text-slate">Status</dt>
                <dd className="flex items-center gap-1.5 font-mono text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Open for work
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
