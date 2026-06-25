import Image from "next/image";

const stack = [
  "Next.js",
  "React",
  "Supabase",
  "PostgreSQL",
  "Clerk",
  "Tailwind",
  "TypeScript",
  "Vercel",
];

export default function CaseStudyAJFits() {
  return (
    <div className="trace pl-8">
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
            Case Study — 01
          </p>
          <h3 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            AJFits
          </h3>
          <p className="mt-2 max-w-xl text-slate">
            A fashion e-commerce PWA built for OAU students — and for the
            store owner who needed it to actually run her business.
          </p>
        </div>
      </div>

      {/* hero shot */}
      <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
        <Image
          src="/images/ajfits-dashboard.jpg"
          alt="AJFits admin dashboard showing revenue, order status, and quick actions"
          width={720}
          height={1156}
          className="w-full"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <p className="mt-3 font-mono text-xs text-slate">
        The admin dashboard — live order and revenue tracking at a glance.
      </p>

      {/* stack chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/15 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate"
          >
            {s}
          </span>
        ))}
      </div>

      {/* feature: discount system */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-clay">
            The discount system
          </p>
          <h4 className="mt-2 font-serif text-2xl font-semibold text-ink">
            Discounts that feel automatic, not earned through effort
          </h4>
          <p className="mt-4 leading-relaxed text-slate">
            Site-wide promotions and coupon codes both apply at checkout,
            synced with Paystack-side amounts so the total a customer sees
            is always the total they're charged. Students shouldn't have to
            do math to trust a discount.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
          <Image
            src="/images/ajfits-checkout.jpg"
            alt="AJFits checkout screen showing order summary, coupon field, and site-wide discount applied"
            width={720}
            height={1196}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </div>

      {/* feature: notifications */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm md:order-2">
          <Image
            src="/images/ajfits-notifications.jpg"
            alt="AJFits admin notification panel with broadcast option and open-rate tracking"
            width={720}
            height={1316}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
        <div className="md:order-1">
          <p className="font-mono text-xs uppercase tracking-wider text-clay">
            Notifications, rebuilt
          </p>
          <h4 className="mt-2 font-serif text-2xl font-semibold text-ink">
            From spammy to intentional
          </h4>
          <p className="mt-4 leading-relaxed text-slate">
            The first version pushed a notification per product — noisy, and
            customers tuned it out. I replaced it with a simple
            admin-controlled broadcast: one message, an optional link to a
            specific category, and a read-rate count so the store owner can
            see what's actually landing. Tap the notification and it opens
            straight to the right page — no hunting around for what it was
            about.
          </p>
        </div>
      </div>

      {/* security audit — text only, no screenshot, plain-language */}
      <div className="mt-16 rounded-xl border border-ink/15 bg-ink p-8 text-paper">
        <p className="font-mono text-xs uppercase tracking-wider text-clay">
          Security check
        </p>
        <h4 className="mt-2 font-serif text-2xl font-semibold">
          I went looking for problems before a stranger could find them first
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-paper/70">
          Before launch, I ran a full security pass on the store — the kind
          of check most small e-commerce sites skip until something goes
          wrong.
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-paper/85">
          <li>
            <span className="font-mono text-clay">→</span> Closed a gap that
            could have let outsiders see private customer notification data
            — fixed before it was ever exposed.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Tightened the
            rules around who's allowed to create or edit discounts, so only
            the store owner ever can.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Tested whether a
            customer could view another customer's order by guessing a link
            — confirmed they can't.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Checked the
            site's behind-the-scenes safety settings end to end and
            confirmed everything's locked down correctly.
          </li>
        </ul>
      </div>

      {/* extra builds, framed by the thinking behind each one */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-wider text-slate">
          More thinking behind the build
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Make a deal feel urgent, not desperate",
              d: "A countdown banner on every page nudges shoppers to act now instead of \"maybe later\" — without ever feeling like a pushy pop-up.",
            },
            {
              t: "Meet customers where they already are",
              d: "Most students would rather send a WhatsApp message than fill out a form. One tap opens a chat directly — no extra steps between a question and an answer.",
            },
            {
              t: "Remove the trust barrier of a website",
              d: "Some shoppers trust an app icon on their home screen more than a browser tab. So the store installs like a real app, while still being the same site underneath.",
            },
            {
              t: "Never let the store quietly go offline",
              d: "Free hosting tools can fall asleep from inactivity. A background check keeps the store awake around the clock, so a customer never lands on a broken page.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-lg border border-ink/10 bg-white p-5"
            >
              <p className="font-serif text-base font-semibold text-ink">
                {item.t}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
