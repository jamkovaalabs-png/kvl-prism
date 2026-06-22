import { createFileRoute } from "@tanstack/react-router";
import heroOrb from "@/assets/hero-orb.jpg";
import layerShards from "@/assets/layer-shards.jpg";
import wireSphere from "@/assets/wire-sphere.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KVL — Premium digital agency for ambitious teams" },
      {
        name: "description",
        content:
          "KVL designs and builds premium websites, brand systems and social presence. A studio by Kovaa Labs.",
      },
      { property: "og:title", content: "KVL — Premium digital agency" },
      {
        property: "og:description",
        content:
          "Websites, brand systems and social media — engineered with taste. By Kovaa Labs.",
      },
    ],
  }),
  component: Home,
});

function Mark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-2xl tracking-tight ${className}`}>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-surface-elevated shadow-glow">
        <span className="text-[11px] font-sans font-semibold tracking-[0.12em] text-brand-gradient">KVL</span>
      </span>
      <span className="text-gradient">KVL</span>
    </span>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-strong flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-5">
        <a href="#" className="flex items-center gap-2">
          <Mark />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {[
            ["Work", "#work"],
            ["Services", "#services"],
            ["Process", "#process"],
            ["Studio", "#studio"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Start a project
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-32">
      {/* Layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <img
          src={heroOrb}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-x-0 top-0 mx-auto h-[760px] w-[120%] max-w-none -translate-y-10 object-cover opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_70%)]"
        />
        <div className="absolute inset-x-0 top-0 h-[800px]" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-border-strong glass px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full" style={{ background: "var(--accent-glow)" }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-glow)" }} />
          </span>
          Booking projects for Q3 — Q4 2026
        </div>

        <h1 className="animate-fade-up mt-7 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight" style={{ animationDelay: "60ms" }}>
          <span className="text-gradient block">Brands worth</span>
          <span className="block italic text-brand-gradient">looking twice</span>
          <span className="text-gradient block">at.</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-7 max-w-xl text-balance text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "120ms" }}>
          KVL is a premium digital studio building websites, brand systems and
          social presence for teams who refuse to look like everyone else.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "180ms" }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow"
          >
            <span className="relative z-10">Start a project</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            See selected work
          </a>
        </div>

        {/* Layered preview composition */}
        <div className="relative mx-auto mt-24 max-w-5xl">
          <div className="hairline absolute inset-x-10 -top-px h-px" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-strong glass-strong">
            <img
              src={heroOrb}
              alt="3D layered glass surface preview"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-left">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Case 001</div>
                <div className="mt-1 font-display text-2xl text-foreground">Aurora — Brand & site relaunch</div>
              </div>
              <div className="hidden text-right text-xs text-muted-foreground sm:block">
                <div>Strategy · Identity · Web</div>
                <div className="mt-1 font-mono">2026</div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="animate-float absolute -left-6 top-16 hidden glass-strong rounded-xl px-4 py-3 text-left text-xs sm:block">
            <div className="font-mono uppercase tracking-[0.18em] text-muted-foreground">Engagement</div>
            <div className="mt-1 text-sm font-medium text-foreground">+312% time on site</div>
          </div>
          <div
            className="animate-float absolute -right-4 bottom-12 hidden glass-strong rounded-xl px-4 py-3 text-left text-xs sm:block"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="font-mono uppercase tracking-[0.18em] text-muted-foreground">Lighthouse</div>
            <div className="mt-1 text-sm font-medium text-foreground">99 · 100 · 100 · 100</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Aurora",
    "Northbeam",
    "Helix",
    "Monogram",
    "Field Notes",
    "Parallel",
    "Foundry",
    "Lumen",
    "Sable",
    "Quanta",
  ];
  return (
    <section aria-label="Selected clients" className="relative border-y border-border py-10">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-16 pr-16">
          {[...items, ...items].map((name, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground/70">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      tag: "01",
      title: "Websites",
      body: "Marketing sites, product surfaces, landing systems. Designed in browser, engineered for speed.",
      points: ["Design systems", "Next & TanStack", "CMS-ready"],
    },
    {
      tag: "02",
      title: "Brand identity",
      body: "Marks, type, motion and the rules that hold them together. Systems that scale past launch day.",
      points: ["Naming & marks", "Type & tokens", "Guidelines"],
    },
    {
      tag: "03",
      title: "Social media",
      body: "Editorial calendars, templates and shipped content. The same craft, sized for the feed.",
      points: ["Content systems", "Motion & reels", "Always-on ops"],
    },
    {
      tag: "04",
      title: "Product UI",
      body: "Dashboards, onboarding, micro-interactions. We design the surfaces your users actually touch.",
      points: ["UX flows", "Prototypes", "Handoff"],
    },
  ];

  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              A small studio,<br />
              <span className="italic text-brand-gradient">a full stack</span> of craft.
            </>
          }
          subtitle="We work as one team across strategy, design and engineering — so the work stays coherent from first sketch to live site."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.tag}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-border-strong"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--accent-glow) 14%, transparent), transparent 40%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{s.tag}</span>
                  <span>KVL</span>
                </div>
                <h3 className="mt-6 font-display text-4xl text-gradient">{s.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-border-strong bg-surface px-3 py-1 text-xs text-foreground/80"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const cases = [
    {
      n: "001",
      name: "Aurora",
      tag: "Brand · Web",
      desc: "Repositioning a climate fintech with a system built for trust and motion.",
      img: heroOrb,
      tall: true,
    },
    {
      n: "002",
      name: "Helix Labs",
      tag: "Identity · Social",
      desc: "A monospace-driven identity for a research lab shipping into the open.",
      img: wireSphere,
    },
    {
      n: "003",
      name: "Northbeam",
      tag: "Product UI",
      desc: "A calmer dashboard for a noisy category. Less chart, more clarity.",
      img: layerShards,
    },
  ];

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Recent <span className="italic text-brand-gradient">chapters</span>.
              </>
            }
            subtitle="A short selection from the last twelve months."
            align="left"
          />
          <a
            href="#contact"
            className="hidden shrink-0 rounded-full border border-border-strong glass px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            Full archive →
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <CaseCard {...cases[0]} className="lg:row-span-2" />
          <CaseCard {...cases[1]} className="lg:col-span-2" />
          <CaseCard {...cases[2]} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  n,
  name,
  tag,
  desc,
  img,
  className = "",
}: {
  n: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={`${name} — ${tag}`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      </div>
      <div className="relative p-6">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Case {n}</span>
          <span>{tag}</span>
        </div>
        <h3 className="mt-3 font-display text-3xl text-gradient">{name}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Audit, interviews and a shared brief. We start by understanding what 'good' means for you." },
    { n: "02", t: "Define", d: "Strategy, narrative and a system of principles the work will be judged against." },
    { n: "03", t: "Design", d: "Visual direction, prototypes, motion. We design in browser, on real devices." },
    { n: "04", t: "Deliver", d: "Engineering, QA, launch and a handoff that doesn't leave the system stranded." },
  ];

  return (
    <section id="process" className="relative py-32">
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              Four <span className="italic text-brand-gradient">deliberate</span> steps.
            </>
          }
          subtitle="No theatre. Just a tight loop between thinking and shipping."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.n}</div>
              <h3 className="mt-6 font-display text-2xl text-gradient">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="hairline mt-6 h-px w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="relative py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border-strong glass-strong">
            <img
              src={wireSphere}
              alt="Studio render"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div className="font-mono uppercase tracking-[0.18em] text-muted-foreground">Kovaa Labs · est. 2023</div>
              <div className="font-mono text-muted-foreground">42.36°N · 71.05°W</div>
            </div>
          </div>
          <div className="animate-float absolute -bottom-6 -right-6 hidden glass-strong rounded-2xl p-4 sm:block">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Studio</div>
            <div className="mt-1 font-display text-xl text-gradient">Small. Senior. Slow on purpose.</div>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">The studio</div>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-gradient sm:text-6xl">
            A handful of senior people, <span className="italic text-brand-gradient">no junior layer</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            KVL is a studio inside Kovaa Labs. We take on a small number of
            engagements a year so the work stays sharp and the people on the
            page are the people on the call.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["12+", "Years on craft"],
              ["40+", "Shipped systems"],
              ["6", "Open slots / year"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-4xl text-gradient">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong glass-strong px-8 py-20 text-center sm:px-16">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 20%, color-mix(in oklab, var(--accent-glow) 30%, transparent), transparent 60%)",
            }}
          />
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Let's talk</div>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            <span className="text-gradient">Have something</span><br />
            <span className="italic text-brand-gradient">worth building?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground">
            Tell us about the project. We reply within two working days, with a
            real human and a real opinion.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Start a project →
            </button>
          </form>

          <div className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            or — hello@kovaalabs.com
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Mark />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            KVL is the studio practice of Kovaa Labs — building premium digital
            work for ambitious teams.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 text-sm">
          {[
            ["Studio", ["Work", "Services", "Process"]],
            ["Connect", ["Email", "LinkedIn", "Instagram"]],
            ["Legal", ["Imprint", "Privacy", "Terms"]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{h}</div>
              <ul className="mt-4 space-y-2">
                {(items as string[]).map((i) => (
                  <li key={i}>
                    <a href="#" className="text-foreground/80 transition-colors hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-start justify-between gap-3 px-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
        <div>© 2026 Kovaa Labs Pvt. Ltd. All rights reserved.</div>
        <div>Crafted in the dark · KVL/STUDIO</div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${a} max-w-2xl`}>
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</div>
      <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-gradient sm:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Studio />
      <CTA />
      <Footer />
    </main>
  );
}
