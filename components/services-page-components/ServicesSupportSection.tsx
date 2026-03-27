"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STAGGER_MS = 80;
const ZOOM_DURATION_MS = 1800;

export function ServicesSupportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transition = "transition-all duration-700 ease-out";

  return (
    <section
      ref={sectionRef}
      className="border-b border-border/40 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-6 lg:items-start">
          {/* Left column: heading, paragraph, 2 feature cards */}
          <div className="flex flex-col gap-6">
            <h2
              className={`font-sans text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-[2.75rem] ${transition} ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-[3rem]">24/7</span>
              <span className="block">Remote</span>
              <span className="block">Support</span>
            </h2>
            <p
              className={`text-sm text-muted-foreground sm:text-base ${transition} ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${STAGGER_MS}ms` }}
            >
              Never wait for solutions again. Our dedicated support team is available around the
              clock to resolve technical issues whenever they arise.
            </p>
            <div className="flex flex-col gap-4">
              <div
                className={`rounded-2xl border border-border bg-background px-5 py-4 text-center ${transition} ${
                  inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${2 * STAGGER_MS}ms` }}
              >
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Instant troubleshooting by certified experts
                </p>
              </div>
              <div
                className={`rounded-2xl border border-border bg-background px-5 py-4 text-center ${transition} ${
                  inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${3 * STAGGER_MS}ms` }}
              >
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Secure and reliable remote access
                </p>
              </div>
            </div>
          </div>

          {/* Center: portrait image with turquoise V accent — slow zoom in */}
          <div
            className={`relative order-first aspect-3/4 w-full overflow-hidden rounded-2xl lg:order-0 lg:aspect-4/5 ${transition} ${
              inView ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{
              transitionDelay: `${STAGGER_MS}ms`,
              transitionDuration: `${ZOOM_DURATION_MS}ms`,
              transitionTimingFunction: "ease-out",
            }}
          >
            {/* Light turquoise V shape behind image */}
            <div
              className="absolute inset-0 z-0 bg-[#b8e6d8] opacity-70"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10 h-full w-full">
              <Image
                src="/images/services/service-support-1.jpg"
                alt="Support specialist wearing headset, ready to help"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right column: card, image, card */}
          <div className="flex flex-col gap-7">
            <div
              className={`rounded-2xl border border-border bg-background p-5 ${transition} ${
                inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <p className="font-semibold text-foreground sm:text-base">
                Fast resolution without on-site delays
              </p>
              <ul className="mt-2 space-y-0.5 text-sm text-muted-foreground">
                <li>• Troubleshooting, software installation,</li>
                <li>• performance optimization</li>
              </ul>
            </div>
            <div
              className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-border ${transition} ${
                inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${STAGGER_MS}ms` }}
            >
              <Image
                src="/images/services/service-support-2.jpg"
                alt="Diverse team of professionals in office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div
              className={`rounded-2xl border border-border bg-background px-5 py-4 ${transition} ${
                inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${2 * STAGGER_MS}ms` }}
            >
              <p className="text-sm font-semibold text-foreground sm:text-base">
                Support across multiple devices and platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
