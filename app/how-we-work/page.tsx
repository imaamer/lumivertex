import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How We Work | The Paradigm-Shift Process | LumiVertex",
  description:
    "Discover LumiVertex's unique Paradigm-Shift process: strategy first, transparency always, execution by choice. See how we turn business challenges into measurable growth.",
};

const phases = [
  {
    label: "Phase 1 — We Listen",
    headline: "Before we advise, we understand.",
    body:
      "Every engagement begins with deep listening. We study your business model, your competitive landscape, your data, your ambitions, and the constraints most consultants ignore. It is a diagnostic conversation led by strategists who know which questions reveal the most.",
    duration: "1–2 weeks",
    deliverable: "Comprehensive situation analysis",
  },
  {
    label: "Phase 2 — We Architect",
    headline: "The complete blueprint. Yours to keep. Regardless.",
    body:
      "We deliver a full strategic roadmap: priorities sequenced by impact, channels selected by data, budgets modeled by expected return, and timelines grounded in reality. Every recommendation is accompanied by the logic that produced it. This document is yours—even if you never hire us for a single hour of execution.",
    duration: "2–3 weeks",
    deliverable: "Strategic roadmap with data models",
  },
  {
    label: "Phase 3 — You Decide",
    headline: "Execute it yourself. Bring it to anyone. Or build it with us.",
    body:
      "This is the moment that defines our model. You have the strategy. You understand the logic. Now you choose freely, without pressure, and without obligation. Most clients choose to build with us. But the ones who don't still leave with something valuable, and that's the point.",
    duration: null,
    deliverable: null,
  },
  {
    label: "Phase 4 — We Build",
    headline: "Strategy becomes infrastructure. Ideas become systems.",
    body:
      "If you choose to build with us, execution begins with the precision the strategy demands. Dedicated teams. Clear milestones. Regular reporting. And a single unbreakable rule: nothing ships without meeting the standard the blueprint established.",
    duration: "Ongoing",
    deliverable: "Implemented systems with performance tracking",
  },
  {
    label: "Phase 5 — We Evolve",
    headline: "What got you here will not get you there. We know that.",
    body:
      "Markets shift. Competitors adapt. Your business grows. Our engagement evolves alongside all of it. Continuous measurement. Quarterly strategic reviews. And the humility to change course when the data demands it because loyalty to a plan that no longer works is not strategy. It's stubbornness.",
    duration: null,
    deliverable: null,
  },
] as const;

const phaseScrollDelayMs = [0, 60, 120, 180, 240] as const;

export default function HowWeWorkPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative border-b border-border/30">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_-10%,rgba(35,124,103,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_20%,rgba(72,229,194,0.09),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <ScrollReveal y={24} delayMs={0}>
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/90 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground shadow-sm backdrop-blur-sm">
                  <Compass className="h-3.5 w-3.5 text-primary" aria-hidden />
                  How we work · The LumiVertex process
                </p>
                <h1 className="mt-6 leading-[1.08] tracking-tight">
                  <span className="block text-[clamp(1.65rem,4vw,2.65rem)] font-semibold text-foreground">
                    We give you the blueprint before you hire the builder.
                  </span>
                  <span className="mt-4 block text-[clamp(1.75rem,4.5vw,3rem)] font-semibold tracking-[-0.04em]">
                    <span className="bg-[linear-gradient(100deg,#0b7b59_0%,#48e5c2_45%,#237c67_100%)] bg-clip-text text-transparent our-story-hero-gradient-sheen">
                      That&apos;s not a metaphor.
                    </span>
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Most agencies guard their strategy behind contracts and retainers. We do the opposite.
                  Our process begins with transparency because we believe if the thinking is sound,
                  you&apos;ll want the minds behind it to execute it. And if it isn&apos;t, you should be
                  free to walk away with everything we&apos;ve shown you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal y={24} delayMs={90}>
              <div className="relative flex min-h-72 flex-col lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-br from-primary/25 via-transparent to-accent/15 blur-2xl our-story-hero-glow-in motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-reduce:opacity-100"
                aria-hidden
              />
              <div className="our-story-hero-image-in relative flex flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-28px_rgba(35,124,103,0.3)] ring-1 ring-border/45 lg:min-h-full">
                <div className="relative aspect-4/3 w-full sm:aspect-16/11 lg:aspect-auto lg:min-h-[min(380px,48vh)]">
                  <Image
                    src="/images/how-we-work/hero.jpg"
                    alt="The LumiVertex process — strategy, transparency, and execution"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-primary/10" />
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process — zigzag timeline */}
      <section className="relative border-b border-border/30 bg-linear-to-b from-muted/20 via-background to-muted/15">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(900px,95vw)] -translate-x-1/2 bg-linear-to-b from-primary/5 to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal y={20} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">The path</p>
            <p className="mt-3 text-[clamp(1.25rem,2.8vw,1.75rem)] font-medium leading-snug tracking-tight text-foreground">
              Five phases. One spine. Transparency at every step.
            </p>
          </ScrollReveal>

          {/* Mobile: stacked timeline */}
          <div className="relative mt-14 md:hidden">
            <div
              className="absolute bottom-4 left-4.5 top-4 w-px bg-linear-to-b from-primary/20 via-primary/50 to-primary/20"
              aria-hidden
            />
            <ul className="space-y-12">
              {phases.map((phase, index) => (
                <li key={phase.label} className="relative pl-12">
                  <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold tabular-nums text-primary shadow-[0_0_0_6px_rgba(246,247,235,0.9)]">
                    {index + 1}
                  </span>
                  <ScrollReveal y={28} delayMs={phaseScrollDelayMs[index] ?? 0}>
                    <PhaseCard phase={phase} index={index} compact />
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: zigzag + center spine */}
          <div className="relative mt-16 hidden md:block">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-primary/15 via-primary/45 to-primary/15"
              aria-hidden
            />
            <div className="space-y-0">
              {phases.map((phase, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <ScrollReveal
                    key={phase.label}
                    y={36}
                    delayMs={phaseScrollDelayMs[index] ?? 0}
                    className="relative grid grid-cols-11 items-start gap-x-4 pb-16 last:pb-0 lg:gap-x-6 lg:pb-20"
                  >
                    {isLeft ? (
                      <>
                        <div className="col-span-5 col-start-1 flex justify-end">
                          <PhaseCard phase={phase} index={index} />
                        </div>
                        <div className="relative col-span-1 col-start-6 flex justify-center pt-3">
                          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold tabular-nums text-primary shadow-[0_0_0_10px_rgba(255,255,255,0.85)] ring-4 ring-primary/10">
                            {index + 1}
                          </span>
                        </div>
                        <div className="col-span-5 col-start-7" aria-hidden />
                      </>
                    ) : (
                      <>
                        <div className="col-span-5 col-start-1" aria-hidden />
                        <div className="relative col-span-1 col-start-6 flex justify-center pt-3">
                          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold tabular-nums text-primary shadow-[0_0_0_10px_rgba(255,255,255,0.85)] ring-4 ring-primary/10">
                            {index + 1}
                          </span>
                        </div>
                        <div className="col-span-5 col-start-7 flex justify-start">
                          <PhaseCard phase={phase} index={index} />
                        </div>
                      </>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-3xl bg-[#0b7b59] px-6 py-12 text-center text-[#f6f7eb] shadow-[0_28px_80px_-30px_rgba(11,123,89,0.55)] sm:px-10 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#48e5c2]/15 blur-2xl"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
            <ScrollReveal y={24} className="w-full">
              <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Curious what Phase 1 would reveal about your business?
              </h2>
            </ScrollReveal>
            <ScrollReveal y={20} delayMs={100}>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#48e5c2] px-7 py-3 text-sm font-semibold text-[#0b4f3b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#38c9aa] sm:px-9 sm:py-3.5 sm:text-base"
                >
                  Start the Discovery Conversation
                  <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}

function PhaseCard({
  phase,
  index,
  compact = false,
}: {
  phase: (typeof phases)[number];
  index: number;
  compact?: boolean;
}) {
  const accent = index % 2 === 0;
  return (
    <article
      className={cn(
        "group relative w-full max-w-xl overflow-hidden rounded-2xl border p-6 shadow-[0_22px_55px_-38px_rgba(51,51,51,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-36px_rgba(35,124,103,0.22)] sm:p-8",
        accent
          ? "border-border/60 bg-card/95 backdrop-blur-sm"
          : "border-primary/25 bg-linear-to-br from-primary/8 via-card/90 to-accent/5 backdrop-blur-sm",
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute -right-3 -top-4 font-light tabular-nums leading-none transition-opacity group-hover:opacity-100 sm:-right-2 sm:-top-6",
          compact ? "text-[4.5rem] opacity-[0.06]" : "text-[5.5rem] opacity-[0.07] sm:text-[6.5rem]",
          accent ? "text-primary/15" : "text-primary/20",
        )}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="relative text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
        {phase.label}
      </p>
      <h2 className="relative mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
        {phase.headline}
      </h2>
      <p
        className={cn(
          "relative mt-4 text-muted-foreground",
          compact ? "text-sm leading-relaxed sm:text-base" : "text-base leading-relaxed sm:text-lg",
        )}
      >
        {phase.body}
      </p>
      {(phase.duration || phase.deliverable) && (
        <div
          className={cn(
            "relative mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/50 pt-6 text-sm text-muted-foreground",
            !accent && "border-primary/15",
          )}
        >
          {phase.duration ? (
            <p>
              <span className="font-semibold text-foreground/90">Duration</span>{" "}
              <span className="italic">{phase.duration}</span>
            </p>
          ) : null}
          {phase.deliverable ? (
            <p>
              <span className="font-semibold text-foreground/90">Deliverable</span>{" "}
              <span className="italic">{phase.deliverable}</span>
            </p>
          ) : null}
        </div>
      )}
    </article>
  );
}
