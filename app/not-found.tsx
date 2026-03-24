import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NotFoundSearch } from "@/components/NotFoundSearch";

const links = [
  { href: "/", label: "Go Home" },
  { href: "/services", label: "Explore Our Services" },
  { href: "/blog", label: "Read the Blog" },
  { href: "/contact", label: "Start a Conversation" },
] as const;

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-secondary/40 via-background to-background">
      {/* Soft brand wash */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/[0.12] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Left: message */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Page not found
            </p>

            <div className="relative mt-6">
              <span
                className="select-none font-semibold text-[clamp(5rem,18vw,10rem)] leading-none tracking-tighter text-primary/[0.12]"
                aria-hidden
              >
                404
              </span>
              <div className="relative -mt-2 max-w-xl">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                  This page doesn&apos;t exist.{" "}
                  <span className="text-[#0b7b59]">But your next step does.</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Whatever brought you here took a wrong turn. It happens, even to strategists. The
                  good news: everything you&apos;re looking for is still within reach.
                </p>
              </div>
            </div>
          </div>

          {/* Right: actions */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Where to next
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card/80 px-5 py-4 text-base font-medium text-foreground shadow-sm backdrop-blur-sm transition-[border-color,background-color,box-shadow] hover:border-primary/35 hover:bg-card hover:shadow-md"
                  >
                    <span>{item.label}</span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <NotFoundSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
