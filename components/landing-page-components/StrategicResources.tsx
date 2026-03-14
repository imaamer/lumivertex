"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Clock, Plus, Briefcase, type LucideIcon } from "lucide-react";

const resources: {
  title: string;
  metadata: string;
  icon: LucideIcon;
  href: string;
}[] = [
  {
    title: "AI Readiness Assessment Framework",
    metadata: "PDF · 12 pages · Free",
    icon: FileText,
    href: "#",
  },
  {
    title: "Lead Generation Audit Checklist",
    metadata: "Spreadsheet · Free",
    icon: Clock,
    href: "#",
  },
  {
    title: "Marketing Strategy Validation Template",
    metadata: "Notion Template · Free",
    icon: Plus,
    href: "#",
  },
  {
    title: "The Paradigm-Shift Playbook",
    metadata: "Guide · 28 pages · Free",
    icon: Briefcase,
    href: "#",
  },
];

const StrategicResources = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`strategic-resources-section py-16 md:py-20 bg-muted ${inView ? "strategic-resources-in-view" : ""}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left: tag, title, description, CTA */}
          <div className="flex flex-col">
            <span className="strategic-resources-tag inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-primary bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Free Resources
            </span>
            <h2 className="strategic-resources-title mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              Strategy You Can Use Today
            </h2>
            <p className="strategic-resources-desc mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Guides, frameworks, and tools built from the same methodology we use with clients.
              Yours, without condition. Because value shared freely is the only introduction worth
              making.
            </p>
            <div className="strategic-resources-cta mt-10">
              <Link
                href="/resources"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline transition-colors duration-300 hover:bg-primary/90"
              >
                Browse Free Resources
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          {/* Right: resource cards list */}
          <div className="flex flex-col gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="strategic-resources-card group flex items-center gap-4 rounded-xl border border-border bg-muted p-4 transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-secondary md:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-muted text-primary transition-colors duration-300 group-hover:bg-[#48e5c2] group-hover:border-[#48e5c2]">
                  <resource.icon
                    className="h-5 w-5 transition-colors duration-300 group-hover:text-foreground"
                    strokeWidth={2}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-semibold text-foreground">{resource.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{resource.metadata}</p>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
                  strokeWidth={2}
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicResources;
