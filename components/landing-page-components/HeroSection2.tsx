"use client";

import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "./AnimatedCounter";
import HeroBottomSlider from "./HeroBottomSlider";

const stats = [
  { value: "10M+", label: "Project valuation" },
  { value: "120k+", label: "Happy clients" },
  { value: "50+", label: "Ongoing projects" },
];

export default function HeroSection2() {
  return (
    <section className="relative max-w-8xl mx-auto overflow-hidden bg-background pb-16 pt-12 min-h-[720px] md:min-h-[860px]">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left copy */}
          <div className="w-full md:max-w-[560px]">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary animate-in fade-in slide-in-from-bottom-3 duration-500 delay-75 fill-mode-both"
            >
              <Shield className="h-3.5 w-3.5 text-primary" />
              ABOUT LUMIVERTEX
            </Link>

            <p className="mt-10 text-lg text-foreground md:text-xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-150 fill-mode-both">
              Your competitors already have a strategy.
            </p>

            <h1 className="mt-3 text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              <span className="block animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200 fill-mode-both">
                Do you have an
              </span>
              <span className="block animate-in fade-in slide-in-from-bottom-3 duration-500 delay-250 fill-mode-both">
                Architecture?
              </span>
            </h1>

            <p className="mt-5 max-w-[480px] text-sm leading-relaxed text-muted-foreground sm:text-base animate-in fade-in duration-500 delay-300 fill-mode-both">
              The difference between businesses that grow and businesses that guess is one thing: a
              system built on evidence. We build that system.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[320px] items-center overflow-hidden rounded-full border-2 border-primary bg-transparent py-4 px-6 text-base font-semibold text-primary no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-[#095e43] hover:text-[#f6f7eb] hover:shadow-[0_8px_30px_rgba(11,123,89,0.35)] animate-in fade-in zoom-in-95 duration-500 delay-300 fill-mode-both"
              >
                <span
                  className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary [transition:background-color_0.3s,color_0.3s] group-hover:bg-white group-hover:text-[#0b7b59] animate-[cta-arrow-move_1.2s_ease-out_0.4s_forwards]"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <ArrowRight
                    className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
                <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
                  <span className="overflow-hidden whitespace-nowrap text-left animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)]">
                    See What You Are Missing
                  </span>
                </span>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-10">
              {stats.map((stat, i) => (
                <AnimatedCounter
                  key={stat.value}
                  value={stat.value}
                  label={stat.label}
                  delay={i * 120}
                  className={`text-center animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both ${
                    i === 0 ? "delay-500" : i === 1 ? "delay-600" : "delay-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex w-full justify-center md:flex-1 md:justify-end">
            <div className="relative h-[778px] w-[778px] max-w-full max-h-full overflow-hidden rounded-2xl animate-in fade-in slide-in-from-right-6 duration-700 delay-400 fill-mode-both">
              <Image
                src="/images/hero-3.jpg"
                alt="Architecture collage"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <HeroBottomSlider />
      </div>
    </section>
  );
}
