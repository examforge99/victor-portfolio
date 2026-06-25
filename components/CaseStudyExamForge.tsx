const stack = ["Next.js", "Supabase", "PostgreSQL", "Tailwind", "TypeScript"];

export default function CaseStudyExamForge() {
  return (
    <div className="trace pl-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
        Case Study — 02
      </p>
      <h3 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        ExamForge
      </h3>
      <p className="mt-2 max-w-xl text-slate">
        An AI-powered exam prep platform for Nigerian students sitting JAMB,
        WAEC, and NECO.
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
        Built on the same stack as AJFits, ExamForge generates and grades
        practice questions tuned to the syllabus students are actually
        tested on. It's an active build — the interface is still being
        tightened up for consistency across devices — but the core idea
        holds: pull the anxiety out of exam prep by making practice feel
        targeted instead of overwhelming.
      </p>
    </div>
  );
}
