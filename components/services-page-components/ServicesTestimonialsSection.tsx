"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I had a major laptop issue before an important meeting. Their team fixed it remotely in less than 20 minutes. Absolute lifesavers!",
    name: "Sarah M.",
    title: "Small Business Owner",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote:
      "We rely on their support for our entire team. Fast, professional, and they explain everything clearly. Couldn't ask for more.",
    name: "James K.",
    title: "IT Director",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote:
      "From setup to ongoing support, the experience has been seamless. They're always there when we need them.",
    name: "Emma L.",
    title: "Operations Manager",
    avatar: "/images/avatar-3.jpg",
  },
];

const CARD_ANIMATIONS = [
  { initial: "-translate-x-8 opacity-0", visible: "translate-x-0 opacity-100" },
  { initial: "translate-y-8 opacity-0", visible: "translate-y-0 opacity-100" },
  { initial: "translate-x-8 opacity-0", visible: "translate-x-0 opacity-100" },
];

const STAGGER_MS = 90;

export function ServicesTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transition = "transition-all duration-700 ease-out";

  return (
    <section ref={sectionRef} className="border-b border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header: centered */}
        <div className="text-center">
          <h2
            className={`font-sans text-2xl font-normal leading-tight text-foreground sm:text-3xl lg:text-5xl ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            What Our Customers Say
          </h2>
          <p
            className={`mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${STAGGER_MS}ms` }}
          >
            Trusted by thousands worldwide, our clients share their experiences of hassle-free tech
            support.
          </p>
        </div>

        {/* Three testimonial cards (double border: outer + gap + inner) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => {
            const anim = CARD_ANIMATIONS[i];
            return (
              <article
                key={t.name}
                className={`group flex flex-col rounded-2xl border border-border bg-background p-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out hover:shadow-[0_14px_44px_rgba(0,0,0,0.1)] ${
                  inView ? anim.visible : anim.initial
                }`}
                style={{ transitionDelay: `${(2 + i) * STAGGER_MS}ms` }}
              >
                <div className="flex flex-1 flex-col rounded-lg border-2 border-border/40 bg-[#FAFAFA] p-6 transition-colors duration-200 group-hover:border-primary">
                  <div className="flex flex-1 flex-col">
                    <div className="mb-4 flex gap-0.5 text-[#f59e0b]" aria-hidden>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className="text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                      <Image src={t.avatar} alt="" fill className="object-cover" sizes="40px" />
                    </div>
                    <span className="text-muted-foreground" aria-hidden>
                      —
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}, {t.title}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
