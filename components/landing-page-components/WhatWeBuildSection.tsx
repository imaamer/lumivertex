"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  BarChart3,
  Target,
  FileText,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    icon: Sparkles,
    title: "AI Strategy & Implementation",
    description:
      "Custom AI systems engineered to integrate with your existing workflows. From GPT integrations to full ML pipelines—technology built for your specific context.",
    url: "/services",
  },
  {
    icon: BarChart3,
    title: "Marketing Strategy",
    description:
      "Data-validated marketing architecture: every channel, every campaign backed by numbers and a rationale you can interrogate before spending a cent.",
    url: "/services",
  },
  {
    icon: Target,
    title: "Intelligent Lead Generation",
    description:
      "Precision pipelines that don't just fill the top of the funnel—they qualify intent, filter noise, and deliver conversations worth having.",
    url: "/services",
  },
  {
    icon: FileText,
    title: "Content & SEO Architecture",
    description:
      "Strategic content built to rank, convert, and compound. Not content for content's sake—content that sits inside a larger growth architecture.",
    url: "/services/seo",
  },
  {
    icon: TrendingUp,
    title: "Paid Media & Performance",
    description:
      "Media buying as a science. Every dollar tracked, every creative tested, every audience mapped to a conversion hypothesis.",
    url: "/services",
  },
];

const WhatWeBuildSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`what-we-build-section py-16 md:py-20 bg-muted ${inView ? "what-we-build-in-view" : ""}`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="what-we-build-header text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            What We Build
          </h2>
        </div>
        <p className="what-we-build-intro mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Eleven disciplines. One integrated intelligence. We don&apos;t silo our thinking because
          your growth doesn&apos;t happen in silos.
        </p>

        {/* Small screens: simple card grid, no lines or animation */}
        <div className="what-we-build-simple grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.url}
              className="what-we-build-simple-card group cursor-pointer rounded-3xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="what-we-build-icon-wrap flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Large screens: animated line + connectors + floating clouds */}
        <div className="what-we-build-clouds hidden lg:block">
          <div
            className="what-we-build-top-line h-0.5 w-full shrink-0 rounded-full bg-white/80"
            aria-hidden
          />
          <div className="mt-0 flex w-full flex-nowrap items-stretch gap-0 overflow-visible pb-2">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.url}
                className="what-we-build-card -ml-24 flex min-w-[300px] flex-1 cursor-pointer flex-col items-center first:ml-0 xl:-ml-28 xl:min-w-[320px]"
              >
                <div
                  className="what-we-build-connector w-px shrink-0 bg-white/80"
                  style={{ height: (i % 2 === 0 ? 50 : 350) + "px" }}
                  aria-hidden
                />
                <div className="what-we-build-cloud-offset w-full flex flex-1 flex-col">
                  <div className="what-we-build-cloud-float relative h-[260px] w-full flex flex-col">
                    <div className="what-we-build-cloud-body group relative flex h-[260px] flex-col p-6">
                      <div className="flex flex-1 flex-col gap-4 min-h-0">
                        <div className="what-we-build-icon-wrap flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <service.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                        </div>
                        <div className="min-w-0 flex-1 min-h-0">
                          <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground sm:text-xl line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 line-clamp-4 overflow-hidden text-ellipsis">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="what-we-build-cta mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary no-underline transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2.5}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
