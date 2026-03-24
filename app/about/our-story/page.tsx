import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | How LumiVertex Became a Different Kind of Growth Partner",
  description:
    "Learn how LumiVertex was founded on the principle that strategy should precede the sale. Trust-first business, AI innovation, and measurable outcomes.",
};

export default function OurStoryPage() {
  return (
    <main className="bg-background">
      {/* Hero — Origin (image left, content right) */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-primary/10 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000 motion-reduce:opacity-100"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-500 motion-reduce:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            About LumiVertex
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12">
            {/* Image: stretches to match text column height on large screens */}
            <div className="relative flex min-h-80 flex-col lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/20 via-transparent to-accent/15 blur-2xl our-story-hero-glow-in"
                aria-hidden
              />
              <div className="our-story-hero-image-in relative flex min-h-80 flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_28px_70px_-18px_rgba(35,124,103,0.28)] ring-1 ring-border/50 lg:min-h-full">
                <Image
                  src="/images/about-us/hero2.jpg"
                  alt="LumiVertex — our story"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/45 via-transparent to-primary/10" />
                {/* Soft organic edge toward the copy — reads as “wave” without masking the asset */}
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/3 max-w-[140px] bg-linear-to-l from-background via-background/40 to-transparent sm:max-w-[180px]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:delay-150 motion-reduce:opacity-100">
                <BookOpen className="h-3.5 w-3.5 text-primary" aria-hidden />
                Our story · Origin
              </p>

              <h1 className="mt-6 max-w-xl text-balance">
                <span className="block text-[clamp(1.35rem,2.8vw,1.75rem)] font-medium leading-snug tracking-tight text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-200 motion-reduce:opacity-100">
                  We didn&apos;t start with a service to sell.
                </span>
                <span className="mt-3 block text-[clamp(1.85rem,4vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-300 motion-reduce:opacity-100">
                  We started with a{" "}
                  <span className="bg-[linear-gradient(105deg,#0b7b59_0%,#48e5c2_42%,#237c67_88%,#0b7b59_100%)] bg-clip-text text-transparent our-story-hero-gradient-sheen">
                    problem to solve
                  </span>
                  .
                </span>
              </h1>

              <div className="mt-8 space-y-5">
                <p className="border-l-[3px] border-primary/50 bg-muted/35 py-4 pl-5 pr-4 text-[0.98rem] leading-[1.75] text-muted-foreground shadow-sm sm:text-lg sm:leading-[1.7] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-[450ms] motion-reduce:opacity-100">
                  The problem was simple to name and difficult to fix: businesses were spending
                  enormous sums on agencies that couldn&apos;t explain their own recommendations.
                  Dashboards full of metrics. Decks full of jargon. And underneath it all, no
                  architecture. No logic connecting strategy to outcome.
                </p>
                <p className="rounded-2xl border border-border/70 bg-card/80 px-5 py-4 text-[0.98rem] leading-[1.75] text-muted-foreground shadow-sm backdrop-blur-sm sm:text-lg sm:leading-[1.7] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-[580ms] motion-reduce:opacity-100">
                  <span className="font-medium text-foreground">LumiVertex was founded to close that gap.</span>{" "}
                  Not with louder marketing, but with clearer thinking. We built a company where the
                  strategy is the product and the execution is a choice, not an obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="relative border-b border-border/40 bg-linear-to-b from-muted/20 via-background to-background">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,720px)] -translate-x-1/2 bg-linear-to-r from-transparent via-primary/25 to-transparent motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000 motion-reduce:opacity-100"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:delay-100 motion-reduce:opacity-100">
                Evolution
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-200 motion-reduce:opacity-100">
                From Principle to Practice
              </h2>
            </div>
            <div className="hidden h-px flex-1 translate-y-[-0.6rem] bg-border/60 sm:block lg:max-w-md motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-300 motion-reduce:opacity-100" />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
            <div className="rounded-2xl border border-border/80 bg-card/90 p-8 shadow-sm backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-[280ms] motion-reduce:opacity-100 lg:motion-safe:slide-in-from-left-6">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                What began as a strategic consultancy evolved into something more complete: a
                full-spectrum technology and growth partner, powered by artificial intelligence and
                governed by a single rule, every recommendation must be provable before it&apos;s
                profitable.
              </p>
            </div>

            <div
              className="hidden items-stretch justify-center lg:flex motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:delay-[360ms] motion-reduce:opacity-100"
              aria-hidden
            >
              <div className="w-px bg-linear-to-b from-primary/5 via-primary/40 to-primary/5" />
            </div>

            <div className="rounded-2xl bg-[#0b7b59] p-8 text-primary-foreground shadow-[0_22px_55px_-18px_rgba(11,123,89,0.42)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-[420ms] motion-reduce:opacity-100 lg:motion-safe:slide-in-from-right-6">
              <Sparkles className="mb-4 h-8 w-8 text-primary-foreground/35" aria-hidden />
              <p className="text-base leading-relaxed sm:text-lg">
                Today, we operate across continents and industries. We develop custom AI systems. We
                architect marketing infrastructure. We generate leads with surgical precision. But
                the founding conviction remains unchanged: make people smarter first. Earn their
                business second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary via-[#0d6b52] to-[#095c46] px-8 py-10 text-primary-foreground shadow-[0_30px_80px_-24px_rgba(11,123,89,0.55)] sm:px-12 sm:py-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Mission
            </p>
            <h2 className="relative mt-3 text-2xl font-semibold sm:text-3xl">Our Mission</h2>
            <p className="relative mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/95 sm:text-lg">
              To converge ideas into possibilities. To replace guesswork with architecture. To build
              business relationships that begin with transparency and compound through results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
