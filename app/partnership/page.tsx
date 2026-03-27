import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Database,
  Handshake,
  Layers,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships & Technology | Lumivertex",
  description:
    "LumiVertex partners with leading technology platforms and maintains certified expertise across the tools that drive growth.",
};

const technologyPartners = [
  { name: "Google Partner", icon: Search },
  { name: "Meta Business Partner", icon: Users },
  { name: "HubSpot Solutions Partner", icon: Handshake },
  { name: "Salesforce Partner", icon: Database },
  { name: "AWS Partner", icon: Cloud },
  { name: "Shopify Plus Partner", icon: ShoppingBag },
];

export default function PartnershipPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              PARTNERSHIPS &amp; TECHNOLOGY
            </p>
            <h1 className="mt-5 leading-tight tracking-tight">
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                We are platform-agnostic.
              </span>
              <span className="mb-5 mt-5 block text-4xl font-semibold tracking-[-0.05em] text-[#0b7b59] sm:text-5xl lg:text-6xl">
                We are never platform-ignorant.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The best strategy in the world fails if the technology beneath it is wrong.
              That&apos;s why we maintain deep partnerships and certified expertise across the
              platforms that matter most, so we can recommend, implement, and optimize with genuine
              authority, not vendor bias.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[400px] max-w-full shrink-0 items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
              >
                <span className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary cta-arrow-animate-partnership-hero">
                  <ArrowRight
                    className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1 sm:h-6 sm:w-6"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
                <span className="pointer-events-none absolute inset-y-0 left-5 right-16 z-0 flex min-w-0 items-center justify-start">
                  <span className="overflow-hidden whitespace-nowrap text-left animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)]">
                    Request a Technology Assessment
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-1174/1000 w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/partnership/hero.jpg"
                alt="Partnership and technology ecosystem"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="border-y border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-center text-foreground sm:text-4xl">
            Technology Partners
          </h2>
          <p className="mt-2 text-base font-normal text-center text-foreground sm:text-2xl">
            Certified. Integrated. Battle-tested.
          </p>
          <div
            className="relative mt-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div
              className="flex w-max items-center gap-7  sm:gap-10"
              style={{ animation: "logo-marquee 35s linear infinite" }}
            >
              {[
                ...technologyPartners,
                ...technologyPartners,
                ...technologyPartners,
                ...technologyPartners,
              ].map(({ name, icon: Icon }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-border/40 bg-background/80 px-4 py-3 shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-foreground sm:text-base">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership principles — image + bento-style pair */}
      <section className="relative overflow-hidden border-b border-border/40 bg-linear-to-b from-muted/25 via-background to-background">
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-primary/8 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1200 motion-reduce:opacity-100"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-[min(360px,45vw)] w-[min(360px,45vw)] rounded-full bg-accent/10 blur-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1200 motion-reduce:opacity-100"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-500 motion-reduce:opacity-100">
            How we partner
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-snug tracking-tight text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-600 motion-safe:delay-75 motion-reduce:opacity-100">
            Depth you can verify. Recommendations you can trust.
          </p>

          <div className="mt-12 grid gap-8 sm:gap-10 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
            {/* Visual column */}
            <div className="relative flex min-h-64 flex-col lg:col-span-4 lg:min-h-0">
              <div
                className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-linear-to-br from-primary/20 via-transparent to-accent/15 blur-2xl our-story-hero-glow-in motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-reduce:opacity-100"
                aria-hidden
              />
              <div className="our-story-hero-image-in relative flex flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_28px_70px_-28px_rgba(35,124,103,0.28)] ring-1 ring-border/45 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-900 motion-safe:delay-100 motion-reduce:opacity-100 lg:min-h-full">
                <div className="relative aspect-16/11 w-full min-h-[min(320px,42vh)] lg:aspect-auto lg:min-h-[min(380px,48vh)]">
                  <Image
                    src="/images/about-us/hero4.jpg"
                    alt="Partnership collaboration and technology alignment"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/55 via-transparent to-primary/15" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/90 to-transparent lg:hidden" />
                </div>
              </div>
            </div>

            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-6 shadow-[0_24px_60px_-40px_rgba(51,51,51,0.28)] backdrop-blur-sm transition-[border-color,box-shadow] hover:border-primary/25 hover:shadow-[0_28px_70px_-42px_rgba(35,124,103,0.22)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-200 motion-reduce:opacity-100 sm:p-7 lg:col-span-4 lg:motion-safe:slide-in-from-right-4">
                <span
                  className="pointer-events-none absolute -right-2 -top-6 font-light tabular-nums text-[5.5rem] leading-none text-primary/7 transition-colors group-hover:text-primary/11 sm:text-[6.5rem]"
                  aria-hidden
                >
                  01
                </span>
                <div className="relative flex items-center gap-2 text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Partnership
                  </span>
                </div>
                <h2 className="relative mt-5 text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                  What Partnership Means to Us
                </h2>
                <p className="relative mt-4 text-sm leading-[1.75] text-muted-foreground sm:text-base sm:leading-relaxed">
                  We don&apos;t display logos for decoration. Every partnership listed here reflects
                  genuine technical depth: certified teams, proven implementations, and ongoing access
                  to beta features and advanced support. When we recommend a platform, it&apos;s
                  because our team has built on it extensively—not because we have a referral
                  agreement.
                </p>
              </article>

            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/9 via-card/80 to-accent/6 p-6 shadow-[0_24px_60px_-40px_rgba(35,124,103,0.2)] backdrop-blur-sm transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-[0_28px_70px_-42px_rgba(35,124,103,0.28)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-320 motion-reduce:opacity-100 sm:p-7 lg:col-span-4 lg:motion-safe:slide-in-from-right-6">
                <span
                  className="pointer-events-none absolute -right-2 -top-6 font-light tabular-nums text-[5.5rem] leading-none text-primary/12 transition-colors group-hover:text-primary/18 sm:text-[6.5rem]"
                  aria-hidden
                >
                  02
                </span>
                <div className="relative flex items-center gap-2 text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                    <Layers className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Integration
                  </span>
                </div>
                <h2 className="relative mt-5 text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                  Integration Philosophy
                </h2>
                <p className="relative mt-4 text-sm leading-[1.75] text-muted-foreground sm:text-base sm:leading-relaxed">
                  Your technology stack should serve your strategy. Never the reverse. We evaluate,
                  recommend, and integrate technology based on one criterion: does it serve your
                  business objectives better than the alternatives? We have no exclusive arrangements
                  that bias our recommendations. Our only loyalty is to your outcome.
                </p>
              </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b7b59] px-6 py-12 text-center text-[#f6f7eb] sm:px-10 sm:py-16 lg:px-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl animate-in fade-in slide-in-from-top-4 duration-500">
              Need help evaluating your current technology stack?
            </h2>
            <p className="max-w-2xl text-base font-normal leading-relaxed text-[#f6f7eb]/90 sm:text-lg animate-in fade-in slide-in-from-top-4 duration-500 delay-100 fill-mode-both">
              We audit what you have before recommending what you need.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#48e5c2] px-7 py-3 text-sm font-semibold text-[#0b4f3b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#38c9aa] sm:px-9 sm:py-3.5 sm:text-base"
              >
                Request a Technology Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
