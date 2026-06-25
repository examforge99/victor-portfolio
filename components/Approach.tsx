const groups = [
  {
    title: "Product thinking",
    items: [
      "User psychology before UI",
      "Reframing features around behavior, not just function",
      "Designing for the moment a user almost quits",
    ],
  },
  {
    title: "Full-stack build",
    items: ["Next.js & React", "Supabase / PostgreSQL", "TypeScript", "Tailwind CSS", "Clerk auth", "Vercel"],
  },
  {
    title: "Security mindset",
    items: [
      "RLS policy auditing",
      "SQL injection & XSS surface checks",
      "Treating every endpoint as guilty until proven safe",
    ],
  },
  {
    title: "Lean, mobile-first workflow",
    items: [
      "Full production stack run from Termux",
      "GitHub web editor as primary IDE",
      "API testing in-terminal with curl & jq",
    ],
  },
];

export default function Approach() {
  return (
    <section className="border-t border-ink/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
          Approach
        </p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-serif text-xl font-semibold text-ink">
                {g.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-slate"
                  >
                    <span className="text-clay">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
