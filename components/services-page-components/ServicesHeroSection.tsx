"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const transitionClass = "transition-all duration-700 ease-out";

export function ServicesHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-b border-border/40 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative h-[420px] sm:h-[520px] lg:h-[660px] overflow-hidden rounded-3xl text-[#f6f7eb] shadow-[0_22px_60px_rgba(0,0,0,0.25)]">
          {/* Full-bleed background image */}
          <Image
            src="/images/services/service-banner.jpg"
            alt="Lumivertex strategist reviewing work on a tablet"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 72rem"
          />

          {/* Gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0b7b59]/92 via-[#0b7b59]/80 to-[#0b7b59]/10" />

          <div className="absolute inset-0 flex items-center">
            <div className="grid w-full max-w-6xl mx-auto gap-8 px-6 sm:px-20 items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
              {/* Left: text */}
              <div className="max-w-xl">
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-1.5 text-xs font-medium text-[#f6f7eb] ${transitionClass} ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "0ms" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#48e5c2]" />
                  Lumivertex Services
                </div>

                <h1
                  className={`${plusJakarta.className} mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${transitionClass} ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "80ms" }}
                >
                  <span className="opacity-60">Eleven Disciplines,</span>
                  <br />
                  One Integrated
                  <br />
                  Intelligence.
                </h1>

                <p
                  className={`${plusJakarta.className} mt-5 text-sm text-[#e5f3f0] sm:text-base ${transitionClass} ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "160ms" }}
                >
                  Growth is not a department. It&apos;s an ecosystem. That&apos;s why we don&apos;t
                  offer isolated services—we architect interconnected systems where technology
                  informs strategy, strategy shapes content, content drives engagement, and every
                  channel speaks the same strategic language. Each discipline below is a doorway.
                  Behind it: deep expertise, custom methodology, and the data to prove every
                  decision.
                </p>

                <div
                  className={`mt-7 flex flex-nowrap items-center gap-3 ${transitionClass} ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "240ms" }}
                >
                  <Link
                    href="/contact"
                    className={`shrink-0 group relative flex h-14 w-[250px] items-center overflow-hidden rounded-full border-2 border-white bg-[#0b7b59] py-4 px-6 text-base font-semibold text-[#f6f7eb] no-underline outline-none [transition:all_0.3s_ease-out] hover:border-white hover:bg-[#095e43] hover:shadow-[0_8px_30px_rgba(11,123,89,0.35)] ${
                      inView
                        ? "animate-in fade-in zoom-in-95 duration-500 delay-300 fill-mode-both"
                        : "opacity-0"
                    }`}
                  >
                    <span
                      className={`absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-[#f6f7eb] [transition:background-color_0.3s,color_0.3s] group-hover:bg-white group-hover:text-[#0b7b59] ${
                        inView ? "animate-[cta-arrow-move-sm_1.2s_ease-out_0.4s_forwards]" : ""
                      }`}
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <ArrowRight
                        className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1 sm:h-6 sm:w-6"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </span>
                    <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
                      <span
                        className={`overflow-hidden whitespace-nowrap text-left ${
                          inView
                            ? "animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)]"
                            : ""
                        }`}
                      >
                        Talk to an Expert
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="#services-grid"
                    className="shrink-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#f6f7eb] px-10 py-3.5 font-medium text-[#0b7b59] transition-colors hover:bg-white sm:px-12"
                  >
                    Free Strategic Assessment
                  </Link>
                </div>
              </div>

              {/* Right column spacer so grid layout unchanged on lg */}
              <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]" aria-hidden />
            </div>
          </div>

          {/* Rating chip: positioned relative to hero card so it sits at bottom-right */}
          <div
            className={`absolute right-6 bottom-6 rounded-2xl bg-white px-4 py-3 text-xs text-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:right-20 sm:bottom-30 ${transitionClass} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map(
                  (src, index) => (
                    <div
                      key={src}
                      className="relative h-7 w-7 overflow-hidden rounded-full border border-white"
                    >
                      <Image
                        src={src}
                        alt={index === 0 ? "Client avatar" : ""}
                        fill
                        className="object-cover"
                        sizes="28px"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-[22px]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#ff9f1c]">
                  ★
                </span>
              ))}
            </div>
            <span className="sr-only">Rated 5 out of 5 by our clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
