const stack = [
  "HTML & CSS",
  "JavaScript",
  "Supabase",
  "SEO",
  "GitHub Pages",
  "Responsive Design",
];

export default function CaseStudyElite() {
  return (
    <div className="trace pl-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
        Case Study — 03
      </p>
      <h3 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Elite Solution Tech World
      </h3>
      <p className="mt-2 max-w-xl text-slate">
        A full business website and web presence for my own solar
        installation company in Oyo State — design, SEO, and backend, end to
        end.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/15 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate"
          >
            {s}
          </span>
        ))}
      </div>

      <p className="mt-6 max-w-2xl leading-relaxed text-slate">
        Before AJFits and ExamForge, I built and shipped this one alone —
        from the ground up. A live contact form backed by a real Supabase
        database means no enquiry gets lost, with a WhatsApp deep link for
        customers who'd rather just message directly. I also handled SEO
        and metadata myself, since a solar installer in Oyo State only
        matters if people searching locally can actually find it.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-slate">
        It's the project that taught me a website is never just the
        frontend — it's the whole system a small business runs on.
      </p>

      <a
        href="https://elitesolutiontechworld.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-clay underline-offset-4 hover:underline focus-ring"
      >
        View live ↗
      </a>
    </div>
  );
}
