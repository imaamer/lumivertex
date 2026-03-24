import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Compass, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About LumiVertex | The Strategic Ally Behind Intelligent Business Growth",
  description:
    "LumiVertex is a global technology and strategy firm that converges AI, data-backed marketing, and custom development to architect measurable growth for businesses worldwide.",
};

const subpages = [
  {
    href: "/about/our-story",
    title: "Our Story",
    description: "The principles that shaped how we think.",
    icon: BookOpen,
  },
  {
    href: "/about/our-team",
    title: "Our Team",
    description: "The minds behind the methodology.",
    icon: Users,
  },
  {
    href: "/about/careers",
    title: "Careers",
    description: "For those who think this way naturally.",
    icon: Briefcase,
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-primary" aria-hidden />
            About LumiVertex
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                We exist because most businesses deserve{" "}
                <span className="text-[#0b7b59]">better counsel</span> than they&apos;re getting.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                LumiVertex was built on an unfashionable conviction: that a business partner should
                make you smarter, not more dependent. We are strategists, technologists, and
                architects of growth, operating globally, thinking precisely, building what matters.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-tr from-primary/25 via-transparent to-accent/20 opacity-80 blur-2xl"
                  aria-hidden
                />
                <div className="relative aspect-16/10 overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-12px_rgba(35,124,103,0.22)] ring-1 ring-border/50">
                  <Image
                    src="/images/about-us/hero1.jpg"
                    alt="LumiVertex team and strategy leadership"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative border-b border-border/40 bg-linear-to-b from-muted/25 via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Philosophy
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              What We Believe
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-8 shadow-sm backdrop-blur-sm">
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-linear-to-b from-primary to-primary/40"
                aria-hidden
              />
              <p className="pl-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Strategy should arrive before the invoice. Trust should precede the transaction. And
                every solution should be measured by the clarity it creates, not the complexity it
                adds.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-[#0b7b59] p-8 text-primary-foreground shadow-[0_20px_50px_-15px_rgba(11,123,89,0.45)]">
              <Sparkles
                className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 text-primary-foreground/15"
                aria-hidden
              />
              <p className="relative text-base leading-relaxed sm:text-lg">
                We operate on what we call the Paradigm-Shift Model: we hand you the blueprint
                before you hire the builder. Because if the blueprint is sound, you&apos;ll want the
                people who drew it to construct it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Summary */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Capabilities
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Where Intelligence Meets Implementation
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                AI-enabled technology development. Custom software built from your specific reality.
                Marketing strategy with forensic-grade data. Lead generation that respects your
                audience&apos;s intelligence. Brand architecture that endures. Analytics that
                illuminate, not overwhelm. Eleven integrated disciplines, one coherent vision: your
                growth, architected with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to subpages */}
      <section className="bg-linear-to-b from-background to-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Explore
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Navigation to Subpages
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subpages.map(({ href, title, description, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="mt-5 text-lg font-semibold text-foreground group-hover:text-primary">
                  {title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Continue
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
