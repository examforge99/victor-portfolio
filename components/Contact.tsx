export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-ink/10 bg-ink px-6 py-24 text-paper"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
          Contact
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
          Have a product worth building well?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-paper/70">
          I'm open to freelance product engineering work — let's talk about
          what you're building.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:victordarasimi02@gmail.com"
            className="rounded-full bg-clay px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-claydim focus-ring"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/victor-darasimi-027799419"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/25 px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-clay hover:text-clay focus-ring"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-16 font-mono text-[11px] text-paper/40">
  © {new Date().getFullYear()} — Designed and engineered by Victor Darasimi.
</p>
      </div>
    </section>
  );
}
