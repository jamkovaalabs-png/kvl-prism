import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KVL — Under Maintenance" },
      {
        name: "description",
        content: "We're currently performing scheduled maintenance. We'll be back soon!",
      },
      { property: "og:title", content: "KVL — Under Maintenance" },
      {
        property: "og:description",
        content: "We're currently performing scheduled maintenance. We'll be back soon!",
      },
    ],
  }),
  component: Maintenance,
});

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let cx = 0,
      cy = 0,
      tx = 0,
      ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 h-[600px] w-[600px] rounded-full opacity-[0.07] mix-blend-screen"
      style={{
        background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

function Maintenance() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <CursorGlow />

      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* Nebula clouds */}
        <div
          className="absolute left-[-10%] top-[5%] h-[500px] w-[700px] rounded-full opacity-[0.35] mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, oklch(0.45 0.18 260), oklch(0.3 0.15 280) 40%, transparent 70%)",
            filter: "blur(60px)",
            animation: "breathe 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[-5%] top-[15%] h-[400px] w-[600px] rounded-full opacity-[0.28] mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, oklch(0.5 0.2 285), oklch(0.35 0.12 250) 45%, transparent 70%)",
            filter: "blur(70px)",
            animation: "breathe 8s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />

        {/* The Sun */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.5 0.2 252 / 0.35), oklch(0.4 0.14 260 / 0.1) 40%, transparent 65%)",
              animation: "sun-breathe 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.6 0.22 250 / 0.5), oklch(0.45 0.18 258 / 0.15) 50%, transparent 75%)",
              animation: "sun-breathe 6s ease-in-out infinite",
              animationDelay: "-1s",
            }}
          />
          <div
            className="relative h-[160px] w-[160px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.9 0.14 235) 0%, oklch(0.78 0.2 245) 30%, oklch(0.6 0.24 255) 60%, oklch(0.45 0.2 262) 85%, transparent 100%)",
              boxShadow:
                "0 0 40px 15px oklch(0.8 0.18 242 / 0.7), 0 0 100px 50px oklch(0.6 0.24 250 / 0.5), 0 0 200px 100px oklch(0.5 0.2 256 / 0.3), 0 0 350px 180px oklch(0.4 0.15 263 / 0.15)",
            }}
          />
        </div>
      </div>

      {/* Maintenance Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <style>{`
          @keyframes breathe {
            0%,
            100% {
              opacity: 0.45;
              filter: blur(80px);
            }
            50% {
              opacity: 0.7;
              filter: blur(100px);
            }
          }

          @keyframes sun-breathe {
            0%,
            100% {
              opacity: 0.7;
              filter: blur(0px);
            }
            50% {
              opacity: 0.85;
              filter: blur(2px);
            }
          }

          @keyframes pulse-glow {
            0%,
            100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.9;
            }
          }

          @keyframes float-text {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }
        `}</style>

        <div className="max-w-2xl text-center">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong glass px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "var(--accent-glow)",
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
              />
              <span
                className="relative h-2 w-2 rounded-full"
                style={{ background: "var(--accent-glow)" }}
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Scheduled Maintenance
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="display-xl mt-6 text-6xl text-gradient sm:text-7xl"
            style={{
              animation: "float-text 4s ease-in-out infinite",
              marginBottom: "1.5rem",
            }}
          >
            We're Under Maintenance
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            We're performing some important updates and improvements to serve you better. We'll be
            back online shortly.
          </p>

          {/* Additional Info */}
          <div className="mb-12 rounded-2xl border border-border-strong glass-strong px-6 py-8">
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to reach out to us at{" "}
              <a
                href="mailto:hello@kovaalabs.com"
                className="text-foreground transition-colors hover:text-accent-glow"
              >
                hello@kovaalabs.com
              </a>
            </p>
          </div>

          {/* Footer Message */}
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Thank you for your patience · KVL/STUDIO
          </p>
        </div>
      </div>
    </div>
  );
}
