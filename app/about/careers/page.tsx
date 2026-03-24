import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at LumiVertex | Work Where Strategy Meets Intelligence",
  description:
    "Join LumiVertex, a remote-first, globally distributed team building AI-powered technology and growth strategies for ambitious businesses.",
};

const placeholderRoles = [
  {
    title: "Senior AI / ML Engineer",
    meta: "Remote · Product & delivery",
    blurb: "Ship models and systems that stay explainable in production.",
  },
  {
    title: "Growth Strategist",
    meta: "Remote · Client-facing",
    blurb: "Turn mandates into architectures your clients can defend.",
  },
  {
    title: "Full-Stack Engineer",
    meta: "Remote · Platform",
    blurb: "Build the interfaces and APIs that make strategy operable.",
  },
] as const;

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_20%_0%,rgba(35,124,103,0.11),transparent_50%),radial-gradient(ellipse_60%_40%_at_100%_40%,rgba(72,229,194,0.08),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-[min(400px,45vw)] w-[min(400px,45vw)] rounded-full bg-primary/10 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1200 motion-reduce:opacity-100"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8 lg:pb-32 lg:pt-16">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-500 motion-reduce:opacity-100"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          About LumiVertex
        </Link>

        {/* Hero */}
        <div className="mt-10 lg:mt-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12">
            <div className="relative flex min-h-80 flex-col lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-br from-primary/30 via-transparent to-accent/15 blur-2xl our-story-hero-glow-in motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-reduce:opacity-100"
                aria-hidden
              />
              <div className="our-story-hero-image-in relative flex min-h-80 flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-28px_rgba(35,124,103,0.32)] ring-1 ring-border/40 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-900 motion-safe:delay-100 motion-reduce:opacity-100 lg:min-h-full">
                <div className="relative aspect-4/5 w-full sm:aspect-16/11 lg:aspect-auto lg:min-h-[min(460px,56vh)]">
                  <Image
                    src="/images/about-us/hero4.jpg"
                    alt="Careers at LumiVertex — remote-first, strategy-led work"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 via-transparent to-primary/10" />
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col justify-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 motion-safe:fill-mode-both motion-safe:duration-900 motion-safe:delay-75 motion-reduce:opacity-100">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-secondary/90 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur-sm">
                <Briefcase className="h-3.5 w-3.5 text-primary" aria-hidden />
                Careers
              </p>

              <h1 className="mt-6 max-w-xl text-pretty">
                <span className="block text-[clamp(1.5rem,3.8vw,2.35rem)] font-normal italic leading-[1.2] tracking-[-0.02em] text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-200 motion-reduce:opacity-100">
                  This is not a job.
                </span>
                <span className="mt-3 block text-[clamp(1.85rem,4.5vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.035em] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-800 motion-safe:delay-300 motion-reduce:opacity-100">
                  <span className="bg-[linear-gradient(105deg,#0b7b59_0%,#48e5c2_40%,#237c67_90%,#0b7b59_100%)] bg-clip-text text-transparent our-story-hero-gradient-sheen">
                    It&apos;s an environment.
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.82] text-muted-foreground sm:text-lg sm:leading-[1.75] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-420 motion-reduce:opacity-100">
                LumiVertex is remote-first by design, not by accident. We believe the best thinking
                happens in spaces people choose for themselves—not in offices they&apos;re assigned
                to. We look for people who are unsatisfied with surface-level answers. Who
                instinctively seek the architecture beneath the appearance. Who can hold complexity
                without losing clarity.
              </p>
            </div>
          </div>
        </div>

        {/* What we offer — asymmetric panel */}
        <section
          className="relative mx-auto mt-20 max-w-6xl lg:mt-28"
          aria-labelledby="what-we-offer-heading"
        >
          <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-[2.5rem] bg-linear-to-br from-muted/40 via-transparent to-primary/5 blur-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-reduce:opacity-100" />

          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 shadow-[0_28px_70px_-40px_rgba(51,51,51,0.35)] backdrop-blur-md motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-800 motion-safe:delay-150 motion-reduce:opacity-100">
            <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
              <div className="flex flex-col justify-between border-border/50 bg-linear-to-br from-primary/12 via-primary/5 to-transparent px-6 py-10 sm:px-10 lg:min-w-[200px] lg:border-r lg:py-12 lg:pl-10 lg:pr-8">
                <div>
                  <p
                    id="what-we-offer-heading"
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:delay-200 motion-reduce:opacity-100"
                  >
                    What we offer
                  </p>
                  <div
                    className="mt-8 hidden h-32 w-px bg-linear-to-b from-primary/40 via-primary/15 to-transparent lg:block motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000 motion-safe:delay-300 motion-reduce:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="mt-10 flex items-center gap-2 text-primary lg:mt-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-400 motion-reduce:opacity-100">
                  <Compass className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
                  <span className="text-sm font-medium">Principle over policy</span>
                </div>
              </div>

              <div className="px-6 py-10 sm:px-10 lg:py-12 lg:pr-12">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-250 motion-reduce:opacity-100">
                  The LumiVertex Working Principle
                </h2>
                <p className="mt-6 text-base leading-[1.85] text-muted-foreground sm:text-lg sm:leading-[1.78] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-350 motion-reduce:opacity-100">
                  Autonomy without isolation. Collaboration without bureaucracy. Problems worth
                  solving. Colleagues worth learning from. And the rare experience of working at a
                  company where the strategy you recommend is the strategy you&apos;d actually
                  follow yourself.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-450 motion-reduce:opacity-100">
                  {["Remote-first", "Global", "Strategy-led"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section
          id="openings"
          className="relative mx-auto mt-20 max-w-6xl scroll-mt-24 lg:mt-28"
          aria-labelledby="open-positions-heading"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:delay-100 motion-reduce:opacity-100">
                Open positions
              </p>
              <h2
                id="open-positions-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-150 motion-reduce:opacity-100"
              >
                Roles we&apos;re hiring for
              </h2>
            </div>
            <Link
              href="/contact-us"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-200 motion-reduce:opacity-100"
            >
              See current openings
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderRoles.map((role, index) => (
              <article
                key={role.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-linear-to-b from-card/95 to-card/70 p-6 shadow-sm transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-[0_20px_50px_-28px_rgba(35,124,103,0.35)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-reduce:opacity-100 ${
                  index === 0
                    ? "motion-safe:delay-300"
                    : index === 1
                      ? "motion-safe:delay-400"
                      : "motion-safe:delay-500"
                }`}
              >
                <Sparkles className="mb-3 h-5 w-5 text-primary/50" aria-hidden />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {role.meta}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {role.blurb}
                </p>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Express interest
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
