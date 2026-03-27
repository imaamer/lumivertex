"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  Layout,
  Mail,
  Megaphone,
  Palette,
  Search,
  Share2,
  Shield,
  UserPlus,
  Sparkles,
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
    title: "AI & Custom Technology Development",
    description:
      "Bespoke intelligence, engineered for your specific reality. We build the systems that don’t exist yet because your ambition requires them.",
    url: "/services/ai",
  },
  {
    icon: BarChart3,
    title: "Analytics & Business Intelligence",
    description:
      "We design the analytical infrastructure that transforms information into clear, confident decisions—without dashboard overwhelm.",
    url: "/services/business-intelligence",
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    description:
      "Precision-engineered pipelines that deliver qualified opportunities, not noise. Architecture for revenue, not vanity volume.",
    url: "/services/lead-generation",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Visibility engineered with intent. We don’t chase algorithms, we build the relevance that algorithms reward.",
    url: "/services/seo",
  },
  {
    icon: Megaphone,
    title: "PPC & Paid Advertising",
    description:
      "Precision-targeted investment. Every cent tracked to a decision, every campaign calibrated to your economics.",
    url: "/services/ppc",
  },
  {
    icon: Layout,
    title: "Web & UX Design",
    description:
      "Interfaces that think. Every layout, interaction, and pixel engineered for clarity, conversion, and the experience your audience deserves.",
    url: "/services/ui-ux",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Presence with substance. We build social architectures that earn attention because they deserve it.",
    url: "/services/social-media-marketing",
  },
  {
    icon: BookOpen,
    title: "Content Marketing",
    description:
      "Words that carry weight. Strategy-driven content that educates, positions, and converts without ever sounding like it’s trying.",
    url: "/services/content-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description:
      "The most personal channel, treated with the precision it demands. Automated intelligence. Human resonance.",
    url: "/services/email-marketing",
  },
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    description:
      "Before you can market anything, the world must understand what you mean. We architect that understanding.",
    url: "/services/branding",
  },
  {
    icon: Shield,
    title: "Reputation & PR Management",
    description:
      "Trust is built in public. We ensure the narrative surrounding your brand reflects the reality within it.",
    url: "/services/reputation",
  },
];

const WhatWeBuildSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesListRef = useRef<HTMLDivElement>(null);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollMetrics, setScrollMetrics] = useState({ thumbTop: 0, thumbHeight: 48 });

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

  useEffect(() => {
    const el = servicesListRef.current;
    const trackEl = servicesTrackRef.current;
    if (!el || !trackEl) return;

    const updateScrollbar = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const trackHeight = trackEl.clientHeight;
      if (clientHeight <= 0 || scrollHeight <= 0 || trackHeight <= 0) return;

      const ratio = clientHeight / scrollHeight;
      const thumbHeight = Math.max(26, trackHeight * ratio * 0.5);
      const maxThumbTop = trackHeight - thumbHeight;
      const scrollable = scrollHeight - clientHeight;
      const thumbTop = scrollable > 0 ? (scrollTop / scrollable) * maxThumbTop : 0;

      setScrollMetrics({ thumbTop, thumbHeight });
    };

    updateScrollbar();
    el.addEventListener("scroll", updateScrollbar, { passive: true });
    window.addEventListener("resize", updateScrollbar);

    return () => {
      el.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`what-we-build-section bg-[#ffffff] py-16 md:py-20 ${
        inView ? "what-we-build-in-view" : ""
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-30">
          <div
            className={`what-we-build-header transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p
              className={`inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "60ms" }}
            >
              Services
            </p>

            <div
              className={`mt-4 flex items-center gap-4 transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Lumivertex
                <br />
                Buid For You
              </h2>
              <div className="hidden -space-x-2 sm:flex">
                <Image
                  src="/images/avatar-1.jpg"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background object-cover"
                />
                <Image
                  src="/images/avatar-2.jpg"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background object-cover"
                />
                <Image
                  src="/images/avatar-3.jpg"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-background object-cover"
                />
              </div>
            </div>

            <p
              className={`what-we-build-intro mt-4 max-w-xl text-xl leading-relaxed text-muted-foreground transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              Eleven disciplines. One integrated intelligence. We don&apos;t silo our thinking
              because your growth doesn&apos;t happen in silos.
            </p>

            <div
              className={`what-we-build-cta mt-6 transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div
              className={`relative mt-8 rounded-3xl border border-border/60 p-2 shadow-sm transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <div
                ref={servicesListRef}
                className="services-list-scroll h-[390px] space-y-1 overflow-y-scroll pr-4"
              >
                {services.map((service, idx) => (
                  <Link
                    key={service.title}
                    href={service.url}
                    className={`group block rounded-2xl p-4 transition-all duration-500 ease-out hover:bg-card/70 ${
                      inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}
                    style={{ transitionDelay: `${360 + idx * 45}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <service.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[17px] font-semibold leading-tight text-foreground">
                          {service.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-base leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    {idx < services.length - 1 && (
                      <div className="mt-4 border-b border-border/70" />
                    )}
                  </Link>
                ))}
              </div>
              <div
                ref={servicesTrackRef}
                className="pointer-events-none absolute bottom-5 right-3 top-5 w-1.5"
                aria-hidden
              >
                <div
                  className="absolute left-0 w-full rounded-full bg-primary"
                  style={{
                    height: `${scrollMetrics.thumbHeight}px`,
                    transform: `translateY(${scrollMetrics.thumbTop}px)`,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className={`relative mx-auto w-full max-w-[430px] transition-all duration-800 ease-out lg:max-w-none ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <div className="relative aspect-[4/5.8] rounded-3xl w-full overflow-hidden">
              <Image
                src="/images/services_1.jpg"
                alt="Services visual"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) rounded-2xl 100vw, 42vw"
              />
            </div>

            <div
              className={`absolute -left-10 bottom-10 w-[42%] min-w-[180px] max-w-[220px] rounded-3xl border border-border/40 bg-background/95 p-2 shadow-xl transition-all duration-800 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <Image
                src="/images/services_2.jpg"
                alt="Growth stats"
                width={260}
                height={220}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Compact fallback cards on very small screens */}
        <div className="what-we-build-simple mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.title}
              href={service.url}
              className={`what-we-build-simple-card group cursor-pointer rounded-3xl bg-white p-6 shadow-lg transition-all duration-600 ease-out hover:shadow-xl ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
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
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
