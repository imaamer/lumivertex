import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Strategists, Technologists & Architects at LumiVertex",
  description:
    "Meet the LumiVertex team, a global collective of AI engineers, data strategists, and growth architects building intelligent solutions for ambitious businesses.",
};

export default function OurTeamPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Ambient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(35,124,103,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full bg-accent/15 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1200 motion-reduce:opacity-100"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-16">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-500 motion-reduce:opacity-100"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          About LumiVertex
        </Link>

        {/* Hero — image left, headline right (stacks on small screens) */}
        <div className="mt-10 lg:mt-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12">
            <div className="relative flex min-h-80 flex-col lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-br from-primary/25 via-transparent to-accent/20 blur-2xl our-story-hero-glow-in motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-reduce:opacity-100"
                aria-hidden
              />
              <div className="our-story-hero-image-in relative flex min-h-80 flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-28px_rgba(35,124,103,0.35)] ring-1 ring-border/40 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-900 motion-safe:delay-100 motion-reduce:opacity-100 lg:min-h-full">
                <div className="relative aspect-4/5 w-full sm:aspect-16/11 lg:aspect-auto lg:min-h-[min(480px,58vh)]">
                  <Image
                    src="/images/about-us/hero3.jpg"
                    alt="LumiVertex team — strategists, technologists, and architects"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-primary/10" />
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col justify-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 motion-safe:fill-mode-both motion-safe:duration-900 motion-safe:delay-75 motion-reduce:opacity-100">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-secondary/90 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur-sm">
                <Users className="h-3.5 w-3.5 text-primary" aria-hidden />
                Our team
              </p>

              <h1 className="mt-6 w-full min-w-0">
                <span className="block whitespace-nowrap font-light leading-[0.95] tracking-[-0.04em] text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-240 motion-reduce:opacity-100 text-[clamp(1.65rem,4.2vw,4.25rem)]">
                  Quietly brilliant.
                </span>
                <span className="mt-2 block whitespace-nowrap font-semibold leading-[1.05] tracking-[-0.035em] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-800 motion-safe:delay-340 motion-reduce:opacity-100 text-[clamp(1.5rem,3.9vw,3.75rem)] sm:mt-3">
                  <span className="bg-[linear-gradient(105deg,#0b7b59_0%,#48e5c2_42%,#237c67_88%,#0b7b59_100%)] bg-clip-text text-transparent our-story-hero-gradient-sheen">
                    Relentlessly precise.
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Editorial body — two treatments */}
        <div className="relative mx-auto mt-16 max-w-4xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-800 motion-safe:delay-100 motion-reduce:opacity-100 lg:mt-20">
          <div
            className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px origin-top bg-linear-to-b from-primary/0 via-primary/35 to-primary/0 md:block our-team-editorial-rail-in"
            aria-hidden
          />

          <div className="space-y-10 md:space-y-12 md:pl-8">
            <p className="relative text-[1.05rem] leading-[1.85] text-muted-foreground sm:text-xl sm:leading-[1.75] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-[420ms] motion-reduce:opacity-100">
              <span
                className="our-team-accent-bar-in absolute -left-1 top-1 block h-[2.75em] w-1 rounded-full bg-linear-to-b from-primary via-primary/70 to-accent/80 md:-left-8 md:w-1.5"
                aria-hidden
              />
              <span className="font-medium text-foreground">
                We don&apos;t hire for credentials alone.
              </span>{" "}
              We hire for the quality of someone&apos;s thinking and the integrity of their
              instincts. Every member of LumiVertex brings a rare combination: deep technical
              fluency and genuine strategic intuition.
            </p>

            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-8 shadow-[0_24px_60px_-40px_rgba(51,51,51,0.35)] backdrop-blur-sm sm:p-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-[520ms] motion-reduce:opacity-100 lg:motion-safe:slide-in-from-right-4">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000 motion-safe:delay-[600ms] motion-reduce:opacity-100"
                aria-hidden
              />
              <p className="relative text-[1.05rem] leading-[1.85] text-muted-foreground sm:text-xl sm:leading-[1.75]">
                We are engineers who understand narrative. Strategists who read data like
                literature. Designers who think in systems.{" "}
                <span className="text-foreground">
                  A global team, connected by a shared belief that intelligence, applied with care,
                  changes outcomes.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-primary/25 bg-linear-to-br from-primary/5 via-transparent to-accent/10 px-6 py-8 sm:flex-row sm:items-center sm:px-8 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:slide-in-from-bottom-6 motion-safe:fill-mode-both motion-safe:duration-800 motion-safe:delay-[620ms] motion-reduce:opacity-100">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-3 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-700 sm:text-base motion-reduce:opacity-100">
              Interested in how we work together? Explore open roles or start a conversation.
            </p>
            <Link
              href="/about/careers"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:slide-in-from-right-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-[780ms] motion-reduce:opacity-100"
            >
              View careers
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
