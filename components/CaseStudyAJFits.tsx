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
            A fashion e-commerce PWA built for OAU students — and for my
            sister, who owns the store.
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
            synced with Paystax-side amounts so the total a customer sees
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
            customers tuned it out. I replaced it with an admin-controlled
            broadcast system: one message, optional deep-link to a category,
            and open-rate tracking so my sister can see what's actually
            landing. Under the hood, a service worker handles{" "}
            <code className="rounded bg-ink/5 px-1 py-0.5 font-mono text-sm">
              notificationclick
            </code>{" "}
            to route customers straight to the right page.
          </p>
        </div>
      </div>

      {/* security audit — text only, no screenshot */}
      <div className="mt-16 rounded-xl border border-ink/15 bg-ink p-8 text-paper">
        <p className="font-mono text-xs uppercase tracking-wider text-clay">
          Security audit
        </p>
        <h4 className="mt-2 font-serif text-2xl font-semibold">
          Finding the gaps before someone else does
        </h4>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-paper/85">
          <li>
            <span className="font-mono text-clay">→</span> Found and fixed a
            row-level security leak that exposed push-subscription
            credentials to anonymous requests.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Replaced a
            structurally broken <code className="font-mono">is_admin()</code>{" "}
            discount policy with an explicit deny-by-default rule.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Investigated a
            suspected IDOR on the orders endpoint and confirmed it wasn't
            exploitable — verified, not assumed.
          </li>
          <li>
            <span className="font-mono text-clay">→</span> Audited HTTP
            security headers end to end and confirmed correct configuration.
          </li>
        </ul>
      </div>

      {/* extra builds, condensed */}
      <div className="mt-16">
        <p className="font-mono text-xs uppercase tracking-wider text-slate">
          Also shipped
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Countdown discount banner",
              d: "A site-wide banner with a live countdown timer to create urgency around active promotions.",
            },
            {
              t: "WhatsApp customer care",
              d: "One-tap deep link straight into a WhatsApp chat — no contact form, no friction.",
            },
            {
              t: "Android app via PWABuilder",
              d: "Packaged the PWA as an installable TWA APK for students who prefer an app icon over a browser tab.",
            },
            {
              t: "Always-on free tier",
              d: "A GitHub Actions cron job that pings Supabase to prevent free-tier auto-pausing.",
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
