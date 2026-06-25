"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-ink focus-ring"
        >
          Victor<span className="text-clay">.</span>ENG
        </a>
        <nav className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-wider text-slate transition-colors hover:text-ink focus-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
      }
