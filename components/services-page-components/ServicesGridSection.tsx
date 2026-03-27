"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Layout,
  Mail,
  Megaphone,
  Palette,
  Search,
  Share2,
  Shield,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: BarChart3,
    title: "Analytics & Business Intelligence",
    href: "/services/business-intelligence",
    description:
      "We design the analytical infrastructure that transforms information into clear, confident decisions—without dashboard overwhelm.",
  },
  {
    icon: Sparkles,
    title: "AI & Custom Technology Development",
    href: "/services/ai",
    description:
      "Bespoke intelligence, engineered for your specific reality. We build the systems that don’t exist yet because your ambition requires them.",
    emphasized: false,
  },
  {
    icon: Megaphone,
    title: "PPC & Paid Advertising",
    href: "/services/ppc",
    description:
      "Precision-targeted investment. Every cent tracked to a decision, every campaign calibrated to your economics.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    href: "/services/seo",
    description:
      "Visibility engineered with intent. We don’t chase algorithms, we build the relevance that algorithms reward.",
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    href: "/services/lead-generation",
    description:
      "Precision-engineered pipelines that deliver qualified opportunities, not noise. Architecture for revenue, not vanity volume.",
  },
  {
    icon: Layout,
    title: "Web & UX Design",
    href: "/services/ui-ux",
    description:
      "Interfaces that think. Every layout, interaction, and pixel engineered for clarity, conversion, and the experience your audience deserves.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    description:
      "Presence with substance. We build social architectures that earn attention because they deserve it.",
  },
  {
    icon: BookOpen,
    title: "Content Marketing",
    href: "/services/content-marketing",
    description:
      "Words that carry weight. Strategy-driven content that educates, positions, and converts without ever sounding like it’s trying.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    href: "/services/email-marketing",
    description:
      "The most personal channel, treated with the precision it demands. Automated intelligence. Human resonance.",
  },
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    href: "/services/branding",
    description:
      "Before you can market anything, the world must understand what you mean. We architect that understanding.",
  },
  // Shown again in row 5 next to CTA (per design)
  {
    icon: Shield,
    title: "Reputation & PR Management",
    href: "/services/reputation",
    description:
      "Trust is built in public. We ensure the narrative surrounding your brand reflects the reality within it.",
  },
];

type SlideDirection = "left" | "right" | "bottom";

const directionClasses: Record<SlideDirection, { initial: string; visible: string }> = {
  left: { initial: "-translate-x-8 opacity-0", visible: "translate-x-0 opacity-100" },
  right: { initial: "translate-x-8 opacity-0", visible: "translate-x-0 opacity-100" },
  bottom: { initial: "translate-y-8 opacity-0", visible: "translate-y-0 opacity-100" },
};

function ServiceCard({
  service,
  inView,
  direction,
  delayMs,
}: {
  service: (typeof services)[number];
  inView: boolean;
  direction: SlideDirection;
  delayMs: number;
}) {
  const d = directionClasses[direction];
  const href = "href" in service && service.href ? service.href : "#services-grid";
  return (
    <Link
      href={href}
      className={`group flex h-full min-w-0 rounded-2xl border border-border bg-background p-2 text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out hover:shadow-[0_14px_44px_rgba(0,0,0,0.1)] no-underline outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        inView ? d.visible : d.initial
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Inner card: gap between outer and this border; inner border highlights on hover */}
      <div
        className={`flex h-full min-h-0 flex-col gap-4 rounded-lg border-2 border-border/80 p-6 transition-colors duration-200 group-hover:border-primary group-hover:bg-primary/10 ${
          service.emphasized ? "bg-primary/5 border-primary/30" : ""
        }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
            service.emphasized
              ? "bg-primary text-primary-foreground"
              : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
          }`}
        >
          <service.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">{service.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
            {service.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
            Read more
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}

const CARD_DIRECTIONS: SlideDirection[] = [
  "left",
  "bottom",
  "right",
  "left",
  "right",
  "left",
  "bottom",
  "right",
  "left",
  "right",
  "bottom",
];
const STAGGER_MS = 70;

export function ServicesGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 5);
  const row3 = services.slice(5, 8);
  const row4 = services.slice(8, 10);
  const lastService = services[10];

  return (
    <section
      id="services-grid"
      ref={sectionRef}
      className="border-b border-border/40 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-sans text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-[48px]">
            Comprehensive
            <br />
            Tech Services, Wherever You Are
          </h2>
          <p className="font-sans mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            From everyday glitches to advanced troubleshooting, our experts provide secure and
            reliable remote support to keep your devices running smoothly.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {/* Row 1: 3 items */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {row1.map((service, i) => (
              <ServiceCard
                key={`row1-${i}`}
                service={service}
                inView={inView}
                direction={CARD_DIRECTIONS[i]}
                delayMs={i * STAGGER_MS}
              />
            ))}
          </div>
          {/* Row 2: 2 items */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {row2.map((service, i) => (
              <ServiceCard
                key={`row2-${i}`}
                service={service}
                inView={inView}
                direction={CARD_DIRECTIONS[3 + i]}
                delayMs={(3 + i) * STAGGER_MS}
              />
            ))}
          </div>
          {/* Row 3: 3 items */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {row3.map((service, i) => (
              <ServiceCard
                key={`row3-${i}`}
                service={service}
                inView={inView}
                direction={CARD_DIRECTIONS[5 + i]}
                delayMs={(5 + i) * STAGGER_MS}
              />
            ))}
          </div>
          {/* Row 4: 2 items */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {row4.map((service, i) => (
              <ServiceCard
                key={`row4-${i}`}
                service={service}
                inView={inView}
                direction={CARD_DIRECTIONS[8 + i]}
                delayMs={(8 + i) * STAGGER_MS}
              />
            ))}
          </div>
          {/* Row 5: last service card + CTA (2 items side by side) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ServiceCard
              key="row5-service"
              service={lastService}
              inView={inView}
              direction="bottom"
              delayMs={10 * STAGGER_MS}
            />
            <div
              className={`flex flex-col justify-center text-left transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${11 * STAGGER_MS}ms` }}
            >
              <p className="font-sans text-base font-normal leading-tight text-foreground sm:text-lg">
                Not sure where to start?
              </p>
              <h2 className="mt-1 font-sans text-2xl font-normal leading-tight text-foreground sm:text-3xl lg:text-4xl">
                That&apos;s precisely where we&apos;re most useful.
              </h2>
              <Link
                href="/contact"
                className={`group relative mt-8 flex h-14 w-[320px] items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] ${
                  inView
                    ? "animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
                    : "opacity-0"
                }`}
              >
                <span
                  className={`absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary ${
                    inView ? "animate-[cta-arrow-move_1.2s_ease-out_0.4s_forwards]" : ""
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
                    Free Strategic Assessment
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
