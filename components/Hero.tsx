export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
          Product Engineer
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl md:text-6xl">
          I design from how people think,
          <br />
          then build the engineering to match.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
          Full-stack builder and Electrical/Electronics Engineering student
          at Obafemi Awolowo University. I ship products that hold up under
          real users — and the security audits to prove it.
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

        {/* signature spec-tag: build constraint callout */}
        <div className="mt-14 inline-flex items-center gap-3 rounded-md border border-ink/15 bg-white px-4 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-slate">
            Built on: Termux · Phone only · No local PC
          </span>
        </div>
      </div>
    </section>
  );
}
