"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const outcomes = [
  {
    metric: "312%",
    description: "Avg. increase in operational efficiency within 6 months.",
    bars: [1, 2, 3, 4], // progressive: 4th filled
    progressive: true,
  },
  {
    metric: "14x",
    description: "ROI on custom automated lead acquisition engines.",
    bars: [1, 2, 3, 4],
    progressive: true,
  },
  {
    metric: "0%",
    description: "Technical debt on LumiVertex deployed architectures.",
    bars: [1, 2, 3, 4],
    progressive: false, // all filled, equal length
  },
];

const MeasuredOutcomesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`measured-outcomes-section py-16 md:py-20 ${inView ? "measured-outcomes-in-view" : ""}`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="measured-outcomes-title mb-12 text-center font-heading text-2xl font-medium tracking-tight text-foreground md:text-5xl">
          Measured Outcomes
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {outcomes.map((item, i) => (
            <div
              key={item.metric}
              className="measured-outcomes-card flex flex-col gap-4 rounded-lg p-4"
            >
              <AnimatedCounter
                value={item.metric}
                label={item.description}
                delay={i * 150}
                trigger={inView}
                className="[&>p:first-child]:text-3xl [&>p:first-child]:font-bold [&>p:first-child]:tracking-tight [&>p:first-child]:md:text-4xl [&>p:last-child]:leading-relaxed [&>p:last-child]:md:text-base"
              />
              <div className="mt-2 flex h-8 items-end gap-1.5">
                {item.bars.map((_, barIndex) => {
                  const isFilled = item.progressive ? barIndex === item.bars.length - 1 : true;
                  const flexRatio = item.progressive ? barIndex + 1 : 1;
                  const heightPercent = item.progressive
                    ? ((barIndex + 1) / item.bars.length) * 100
                    : 100;
                  const targetHeight = item.metric === "0%" ? 25 : heightPercent;
                  const barDelay = inView ? i * 100 + barIndex * 80 : 0;
                  return (
                    <div
                      key={barIndex}
                      className="flex h-full min-w-[8px] flex-col justify-end rounded-md"
                      style={{ flex: flexRatio }}
                    >
                      <div
                        className="w-full rounded-md transition-[height] duration-700 ease-out"
                        style={{
                          height: inView ? `${targetHeight}%` : "0%",
                          backgroundColor: isFilled ? "var(--primary)" : "var(--muted-foreground)",
                          opacity: isFilled ? 1 : 0.35,
                          transitionDelay: `${barDelay}ms`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeasuredOutcomesSection;
