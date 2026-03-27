"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, Check, DraftingCompass, Handshake, TrendingUp } from "lucide-react";

const LumiVertexParadigm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const topHighlights = [
    {
      title: "Strategy First",
      description:
        "A complete roadmap with numbers, logic, and clear execution steps, before any commitment.",
    },
    {
      title: "Trust Over Dependency",
      description:
        "You are never locked in. You can execute independently, collaborate with others, or choose us by confidence, not necessity.",
    },
  ] as const;

  const bottomCards = [
    {
      step: "01",
      title: "Blueprint",
      description:
        "We define the entire strategy upfront-business logic, technical direction, and execution roadmap-giving you full visibility from day one.",
      icon: DraftingCompass,
    },
    {
      step: "02",
      title: "Architect",
      description:
        "Every component is structured with clarity and precision, ensuring the plan is not just visionary but practically executable.",
      icon: Building2,
    },
    {
      step: "03",
      title: "Empower",
      description:
        "You have full ownership of the strategy. Execute it internally, take it elsewhere, or collaborate with us-your choice remains intact.",
      icon: Handshake,
    },
    {
      step: "04",
      title: "Scale",
      description:
        "If you choose us, we build with alignment already established-accelerating execution with zero ambiguity and maximum efficiency.",
      icon: TrendingUp,
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className={`lumi-vertex-paradigm relative isolate overflow-hidden bg-linear-to-b from-[#FFFFFF] via-[#EEFFF9] to-[#BFF4E7] py-0 sm:pt-24 ${
        inView ? "lumi-vertex-paradigm-in-view" : ""
      }`}
    >
      <div className="relative z-2 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="paradigm-heading mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The LumiVertex Paradigm
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Innovation isn’t built on dependency. It’s built on clarity, trust, and informed choice.
            We begin by giving you the full strategy; complete, actionable, and transparent—so you
            decide how to move forward.
          </p>

          <div className="mb-30 mt-8 flex w-full flex-col items-center gap-3 sm:gap-4">
            {topHighlights.map((item, idx) => (
              <div
                key={item.title}
                className={`flex w-full max-w-[620px] items-start gap-3 rounded-2xl bg-[#E7F5F0] px-6 py-4 shadow-sm ring-1 ring-border/40 transition-all duration-700 ease-out ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${240 + idx * 120}ms` }}
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#48E5C2] text-white">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div className="flex flex-col text-left">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 w-full pb-10 sm:mt-20 sm:pb-12">
          <div className="paradigm-image relative mx-auto h-[528px] w-full max-w-6xl sm:h-[624px]">
            <div className="relative h-full w-full">
              <Image
                src="/images/paradigm/background.png"
                alt=""
                fill
                className={`object-contain object-bottom transition-all duration-900 ease-out ${
                  inView ? "scale-140 opacity-100" : "scale-[1.28] opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
            </div>
          </div>

          <div className="paradigm-bottom-cards absolute bottom-10 left-1/2 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {bottomCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className={`rounded-2xl border border-border/60 bg-white/95 p-5 shadow-sm ring-1 ring-border/40 backdrop-blur transition-all duration-700 ease-out ${
                      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${360 + idx * 90}ms` }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground">
                        {card.step} - {card.title}
                      </p>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumiVertexParadigm;
