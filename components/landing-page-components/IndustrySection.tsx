"use client";

import { useEffect, useRef, useState } from "react";
import { Cloud, ShoppingCart, Heart, Landmark, Briefcase, Building2, Factory } from "lucide-react";

const industries = [
  { name: "SaaS", icon: Cloud },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Finance", icon: Landmark },
  { name: "Professional Services", icon: Briefcase },
  { name: "Real Estate", icon: Building2 },
  { name: "Manufacturing", icon: Factory },
];

const IndustrySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const repeated = [...industries, ...industries, ...industries, ...industries];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin: "50px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`industry-section bg-muted py-16 md:py-20 ${inView ? "industry-section-in-view" : ""}`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="industry-section-heading mb-12 text-center font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Trusted Across Industries
        </h2>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="flex w-max items-center gap-8 md:gap-12"
            style={{
              animation: "logo-marquee 35s linear infinite",
            }}
          >
            {repeated.map(({ name, icon: Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 flex-col items-center gap-2 rounded-xl bg-transparent px-5 py-3"
              >
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-[30px] w-[30px]" strokeWidth={2} aria-hidden />
                </div>
                <span className="whitespace-nowrap text-xl font-semibold text-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
