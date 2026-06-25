export default function About() {
  return (
    <section id="about" className="border-t border-ink/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
            About
          </p>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink">
            <p>
              I think about products the way a psychologist thinks about
              behavior first, interface second. Before I write a line of
              code, I want to know what a user is anxious about, what they're
              optimizing for, and where they'll quit if the experience gets
              in their way.
            </p>
            <p>
              That instinct is backed by an engineer's discipline. I'm
              studying Electrical/Electronics Engineering at OAU, which
              shows up in how I work — systems thinking, tracing failure
              modes, and treating security as a first-class feature instead
              of an afterthought.
            </p>
            <p>
              Most of my work happens entirely on a phone — Termux, the
              GitHub web editor, and Vercel, no local machine. It's a
              constraint that forced me to get fluent fast, and it hasn't
              slowed down what I ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
