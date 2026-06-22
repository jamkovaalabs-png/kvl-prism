import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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

/* ─────────────────────────── helpers ─────────────────────────── */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${x * 30}px`);
        el.style.setProperty("--my", `${y * 30}px`);
        el.style.setProperty("--rx", `${-y * 6}deg`);
        el.style.setProperty("--ry", `${x * 6}deg`);
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

/* ─────────────────────────── chrome ─────────────────────────── */

function Mark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-border-strong bg-surface-elevated">
        <span
          aria-hidden
          className="absolute inset-0 animate-glow-pulse"
          style={{ background: "var(--gradient-brand)", opacity: 0.4 }}
        />
        <span className="relative font-sans text-[10px] font-bold tracking-[0.16em] text-foreground">
          KVL
        </span>
      </span>
      <span className="font-sans text-base font-semibold tracking-[-0.02em] text-foreground">
        KVL<span className="text-muted-foreground">/studio</span>
      </span>
    </span>
  );
}

function TopTicker() {
  const items = [
    "BOOKING Q3 — Q4 2026",
    "SIX SLOTS OPEN",
    "BASED EVERYWHERE",
    "WORKING IN: NYC · LDN · BLR · TYO",
    "EST. 2023 BY KOVAA LABS",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="fixed inset-x-0 top-0 z-40 overflow-hidden border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="flex animate-ticker whitespace-nowrap py-2 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span
              aria-hidden
              className="inline-block h-1 w-1 rounded-full"
              style={{ background: "var(--accent-glow)" }}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-10 z-40 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-2.5 py-2 pl-5 transition-all duration-500 ${scrolled ? "glass-strong shadow-elevated" : "glass"}`}
      >
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
              className="rounded-full px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-transform hover:scale-[1.02]"
        >
          <span className="relative z-10">Start a project</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </header>
  );
}

/* ─────────────────────────── hero ─────────────────────────── */

function Hero() {
  const parallaxRef = useMouseParallax();
  return (
    <section className="relative isolate overflow-hidden pt-44 pb-32 sm:pt-52 sm:pb-40">
      {/* Aurora blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <span
          className="aurora animate-drift left-[5%] top-[8%] h-[420px] w-[420px]"
          style={{ background: "var(--accent-glow)" }}
        />
        <span
          className="aurora animate-drift-alt right-[5%] top-[12%] h-[500px] w-[500px]"
          style={{ background: "var(--accent-violet)", animationDelay: "-6s" }}
        />
        <span
          className="aurora animate-drift left-[35%] top-[40%] h-[360px] w-[360px]"
          style={{ background: "var(--accent-cyan)", animationDelay: "-12s", opacity: 0.35 }}
        />
      </div>

      <div ref={parallaxRef} className="mx-auto max-w-7xl px-6 text-center [transform-style:preserve-3d]">
        <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-border-strong glass px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full" style={{ background: "var(--accent-glow)" }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-glow)" }} />
          </span>
          A PREMIUM DIGITAL STUDIO — BY KOVAA LABS
        </div>

        <h1
          className="animate-fade-up display-xl mx-auto mt-8 max-w-[16ch] text-[clamp(3.4rem,11vw,10rem)]"
          style={{ animationDelay: "60ms", transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
        >
          <span className="block text-gradient">Engineered</span>
          <span className="block">
            <span className="text-gradient">for </span>
            <span className="font-display italic font-normal text-brand-gradient">obsession</span>
            <span className="text-gradient">.</span>
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-8 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: "140ms" }}
        >
          KVL is a small, senior studio building <span className="text-foreground">websites</span>,{" "}
          <span className="text-foreground">brand systems</span> and{" "}
          <span className="text-foreground">social presence</span> for teams who refuse
          to look like everyone else.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-glow"
          >
            <span className="relative z-10">Start a project</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong glass px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-foreground/40" />
              <span className="relative h-2 w-2 rounded-full bg-foreground" />
            </span>
            See selected work
          </a>
        </div>

        {/* Hero composition — layered, 3D */}
        <div
          className="relative mx-auto mt-24 max-w-6xl [perspective:1600px]"
          style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
        >
          <div className="hairline absolute inset-x-20 -top-px h-px" />
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border-strong glass-strong transition-transform duration-300 will-change-transform"
            style={{ transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))" }}
          >
            <img
              src={heroOrb}
              alt="Layered 3D glass composition"
              width={1920}
              height={1080}
              className="h-full w-full scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                kvl.studio / case-001
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-left">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Featured · 2026
                </div>
                <div className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                  Aurora — Brand & site relaunch
                </div>
              </div>
              <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
                <div>Strategy · Identity · Web</div>
                <div className="mt-1.5">+312% engagement</div>
              </div>
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="animate-float absolute -left-4 top-20 hidden glass-strong rounded-2xl px-4 py-3 text-left text-xs sm:block">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Lighthouse</div>
            <div className="mt-1 font-display text-xl text-foreground">99 · 100 · 100 · 100</div>
          </div>
          <div
            className="animate-float absolute -right-2 top-1/3 hidden glass-strong rounded-2xl px-4 py-3 text-left text-xs sm:block"
            style={{ animationDelay: "-2.5s" }}
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">CRAFTED IN</div>
            <div className="mt-1 font-display text-xl text-foreground">14.2kb · 1 font</div>
          </div>
          <div
            className="animate-float absolute -bottom-6 left-1/4 hidden glass-strong rounded-2xl px-4 py-3 text-left text-xs sm:block"
            style={{ animationDelay: "-5s" }}
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Engagement</div>
            <div className="mt-1 font-display text-xl text-brand-gradient">+312%</div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-border-strong">
            <span
              className="absolute inset-x-0 top-0 h-1/3 animate-[float-y_2.4s_ease-in-out_infinite]"
              style={{ background: "var(--accent-glow)" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── marquee ─────────────────────────── */

function Marquee() {
  const items = [
    "Aurora",
    "Northbeam",
    "Helix Labs",
    "Monogram",
    "Field Notes",
    "Parallel",
    "Foundry",
    "Lumen",
    "Sable",
    "Quanta",
    "Atlas",
    "Verge",
  ];
  return (
    <section aria-label="Selected clients" className="relative border-y border-border py-12">
      <div className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Trusted by teams who notice the details
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {[...items, ...items].map((name, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className="font-display text-3xl text-foreground/60 transition-colors hover:text-foreground">
                {name}
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── services ─────────────────────────── */

function Services() {
  const services = [
    {
      tag: "01",
      title: "Websites",
      body: "Marketing sites, product surfaces, landing systems. Designed in browser, engineered for speed.",
      points: ["Design systems", "TanStack & Next", "CMS-ready"],
    },
    {
      tag: "02",
      title: "Brand identity",
      body: "Marks, type, motion and the rules that hold them together. Systems that scale past launch day.",
      points: ["Naming & marks", "Type & tokens", "Guidelines"],
    },
    {
      tag: "03",
      title: "Social presence",
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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              A small studio.<br />
              <span className="font-display italic font-normal text-brand-gradient">A full stack</span> of craft.
            </>
          }
          subtitle="We work as one team across strategy, design and engineering — so the work stays coherent from first sketch to live site."
        />

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  tag,
  title,
  body,
  points,
  index,
}: {
  tag: string;
  title: string;
  body: string;
  points: string[];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reveal = useReveal<HTMLElement>();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <article
      ref={(n) => {
        ref.current = n;
        (reveal as React.MutableRefObject<HTMLElement | null>).current = n;
      }}
      data-visible="false"
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 opacity-0 transition-all duration-700 [transform:translateY(24px)] data-[visible=true]:opacity-100 data-[visible=true]:[transform:translateY(0)] hover:border-border-strong sm:p-10"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--accent-glow) 22%, transparent), transparent 45%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>— {tag}</span>
          <span>KVL/{tag}</span>
        </div>
        <h3 className="display-xl mt-8 text-5xl text-gradient sm:text-6xl">{title}</h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">{body}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {points.map((p) => (
            <li
              key={p}
              className="rounded-full border border-border-strong bg-surface/60 px-3 py-1 text-xs text-foreground/85"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ─────────────────────────── work ─────────────────────────── */

function Work() {
  const cases = [
    {
      n: "001",
      name: "Aurora",
      tag: "Brand · Web",
      desc: "Repositioning a climate fintech with a system built for trust and motion.",
      img: heroOrb,
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
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Recent <span className="font-display italic font-normal text-brand-gradient">chapters</span>.
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

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <CaseCard {...cases[0]} className="lg:row-span-2" tall />
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
  tall = false,
}: {
  n: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  className?: string;
  tall?: boolean;
}) {
  const reveal = useReveal<HTMLElement>();
  return (
    <article
      ref={reveal}
      data-visible="false"
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card opacity-0 transition-all duration-700 [transform:translateY(24px)] data-[visible=true]:opacity-100 data-[visible=true]:[transform:translateY(0)] hover:border-border-strong ${className}`}
    >
      <div className={`relative overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
        <img
          src={img}
          alt={`${name} — ${tag}`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 100%, color-mix(in oklab, var(--accent-glow) 35%, transparent), transparent 70%)",
          }}
        />
      </div>
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Case {n}</span>
          <span>{tag}</span>
        </div>
        <h3 className="display-xl mt-4 text-4xl text-gradient">{name}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-foreground/80 transition-colors group-hover:text-foreground">
          View case study
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────── process ─────────────────────────── */

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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              Four <span className="font-display italic font-normal text-brand-gradient">deliberate</span> steps.
            </>
          }
          subtitle="No theatre. Just a tight loop between thinking and shipping."
        />

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <ProcessStep key={s.n} {...s} index={i} last={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  n,
  t,
  d,
  index,
  last,
}: {
  n: string;
  t: string;
  d: string;
  index: number;
  last: boolean;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <div
      ref={reveal}
      data-visible="false"
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 opacity-0 transition-all duration-700 [transform:translateY(24px)] data-[visible=true]:opacity-100 data-[visible=true]:[transform:translateY(0)]"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>{n}</span>
        {!last && <span>↘</span>}
      </div>
      <h3 className="display-xl mt-10 text-3xl text-gradient">{t}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
      <div className="hairline mt-8 h-px w-full" />
    </div>
  );
}

/* ─────────────────────────── studio ─────────────────────────── */

function Studio() {
  return (
    <section id="studio" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
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
            <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-transparent to-transparent" />
            <span
              aria-hidden
              className="absolute -inset-12 animate-spin-slow opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--accent-glow) 40%, transparent) 90deg, transparent 180deg)",
                maskImage: "radial-gradient(circle, transparent 55%, black 60%, transparent 75%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
              <div className="text-muted-foreground">Kovaa Labs · est. 2023</div>
              <div className="text-muted-foreground">42.36°N · 71.05°W</div>
            </div>
          </div>
          <div className="animate-float absolute -bottom-6 -right-6 hidden glass-strong rounded-2xl p-4 sm:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Studio</div>
            <div className="mt-1 font-display text-xl text-gradient">Small. Senior. Slow on purpose.</div>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">— The studio</div>
          <h2 className="display-xl mt-6 text-5xl text-gradient sm:text-7xl">
            A handful of senior people.{" "}
            <span className="font-display italic font-normal text-brand-gradient">No junior layer.</span>
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            KVL is a studio inside Kovaa Labs. We take on a small number of
            engagements a year so the work stays sharp — and the people on the
            page are the people on the call.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["12+", "Years on craft"],
              ["40+", "Shipped systems"],
              ["6", "Slots / year"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="display-xl text-5xl text-gradient">{k}</dt>
                <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── cta ─────────────────────────── */

function CTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border-strong glass-strong px-8 py-24 text-center sm:px-16 sm:py-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <span
              className="aurora animate-drift left-1/4 top-0 h-[360px] w-[360px]"
              style={{ background: "var(--accent-glow)" }}
            />
            <span
              className="aurora animate-drift-alt right-1/4 bottom-0 h-[420px] w-[420px]"
              style={{ background: "var(--accent-violet)", animationDelay: "-8s" }}
            />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">— Let's talk</div>
          <h2 className="display-xl mt-6 text-[clamp(2.6rem,7vw,6.5rem)]">
            <span className="block text-gradient">Have something</span>
            <span className="block">
              <span className="font-display italic font-normal text-brand-gradient">worth building</span>
              <span className="text-gradient">?</span>
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-base text-muted-foreground">
            Tell us about the project. We reply within two working days — with a
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
              className="flex-1 rounded-full border border-border-strong bg-surface/70 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-glow"
            >
              <span className="relative z-10">Start a project →</span>
            </button>
          </form>

          <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            or — hello@kovaalabs.com
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Mark />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            KVL is the studio practice of Kovaa Labs — building premium digital
            work for ambitious teams.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 text-sm">
          {[
            ["Studio", ["Work", "Services", "Process"]],
            ["Connect", ["Email", "LinkedIn", "Instagram"]],
            ["Legal", ["Imprint", "Privacy", "Terms"]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{h}</div>
              <ul className="mt-5 space-y-2.5">
                {(items as string[]).map((i) => (
                  <li key={i}>
                    <a href="#" className="text-foreground/75 transition-colors hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant brand watermark */}
      <div className="relative mx-auto mt-16 max-w-7xl overflow-hidden px-6">
        <div
          aria-hidden
          className="display-xl select-none whitespace-nowrap text-center text-[clamp(6rem,22vw,20rem)] leading-none"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--accent-glow) 35%, transparent) 0%, transparent 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          KVL
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-start justify-between gap-3 px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center">
        <div>© 2026 Kovaa Labs Pvt. Ltd. — All rights reserved.</div>
        <div>Crafted in the dark · KVL/STUDIO</div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── section header ─────────────────────────── */

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
    <div className={`${a} max-w-3xl`}>
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        — {eyebrow}
      </div>
      <h2 className="display-xl mt-6 text-5xl text-gradient sm:text-7xl">{title}</h2>
      {subtitle && (
        <p className={`mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────── home ─────────────────────────── */

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <TopTicker />
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
