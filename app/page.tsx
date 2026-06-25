import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudyAJFits from "@/components/CaseStudyAJFits";
import CaseStudyExamForge from "@/components/CaseStudyExamForge";
import CaseStudyElite from "@/components/CaseStudyElite";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />

      <section id="work" className="border-t border-ink/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
            Work
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Three products. Real users. Real constraints.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <CaseStudyAJFits />
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <CaseStudyExamForge />
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <CaseStudyElite />
        </div>
      </section>

      <Approach />
      <Contact />
    </main>
  );
}
