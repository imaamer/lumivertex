"use client";

import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBottomSlider from "./HeroBottomSlider";

export default function HeroSection3() {
  return (
    <section className="relative max-w-8xl mx-auto overflow-hidden bg-background pb-16 pt-12 min-h-[720px] md:min-h-[860px]">
      <div className="container mx-auto max-w-8xl px-4 text-center sm:px-6 lg:px-8">
        {/* Top pill */}
        <Link
          href="/about"
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#bfe7db] bg-[#f3fbf8] px-4 py-1.5 text-xs font-medium text-[#0b7b59] transition-colors hover:bg-[#e8f6f0] animate-in fade-in slide-in-from-bottom-3 duration-500 delay-75 fill-mode-both"
        >
          <Shield className="h-3.5 w-3.5" />
          ABOUT LUMIVERTEX
        </Link>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-4xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-150 fill-mode-both">
          You Didn&apos;t Build This Business On{" "}
          <span className="text-[#0b7b59]">Guesswork</span>.
        </h1>
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200 fill-mode-both">
          <span className="text-[#0b7b59]">Stop </span>Marketing On It.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base animate-in fade-in duration-500 delay-250 fill-mode-both">
          AI-powered technology. Strategy you can verify. Results you can measure before you spend.
          This is growth, engineering.
        </p>

        {/* CTA button */}
        <div className="mt-6 flex items-center justify-center animate-in fade-in zoom-in-95 duration-500 delay-300 fill-mode-both">
          <Link
            href="/contact"
            className="group relative flex h-14 w-[320px] items-center overflow-hidden rounded-full bg-transparent px-6 py-4 text-base border-2 border-primary font-semibold text-primary no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-[#095e43] hover:text-[#f6f7eb] hover:shadow-[0_8px_30px_rgba(11,123,89,0.35)]"
          >
            <span
              className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary animate-[cta-arrow-move_1.2s_ease-out_0.4s_forwards] [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary"
              style={{ transform: "translateY(-50%)" }}
            >
              <ArrowRight
                className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
            <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
              <span className="overflow-hidden whitespace-nowrap animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)] text-left">
                Start With Proof
              </span>
            </span>
          </Link>
        </div>

        {/* Hero image (contains rating + operations care inside the image) */}
        <div className="mx-auto mt-8 w-full max-w-[883px] overflow-hidden rounded-3xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-400 fill-mode-both">
          <div className="relative aspect-[2.01] w-full">
            <Image
              src="/images/hero-4.jpg"
              alt="Proof-focused marketing hero"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <HeroBottomSlider />
      </div>
    </section>
  );
}
