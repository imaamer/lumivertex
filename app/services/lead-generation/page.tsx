import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, Inbox, Send, UserPlus } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "Lead Generation Services | Qualified Pipeline Architecture | LumiVertex",
  description:
    "LumiVertex builds precision lead generation systems — inbound funnels, outbound infrastructure, and ABM programs that deliver qualified pipeline, not just contacts.",
};

const subServices = [
  {
    icon: Inbox,
    title: "Inbound Lead Generation",
    url: "/services/lead-generation/inbound",
    headline: "Attract the people who are already looking for what you know.",
    description:
      "We build inbound systems that position your expertise at the exact moment of need: SEO-driven content, strategic lead magnets, conversion-optimized landing pages, and nurture sequences that turn anonymous visitors into qualified prospects, at a fraction of the cost of outbound.",
  },
  {
    icon: Send,
    title: "Outbound Lead Generation",
    url: "/services/lead-generation/outbound",
    headline: "Reach the right person with the right message at the right moment.",
    description:
      "We architect outbound systems built on precision targeting: enriched data, multi-channel sequencing, personalization at scale, and response optimization. Not spray-and-pray. Surgical outreach that earns replies because it deserves them.",
  },
  {
    icon: Crosshair,
    title: "Account-Based Marketing (ABM)",
    url: "/services/lead-generation/abm",
    headline: "When your best clients aren't found in bulk. They're won one at a time.",
    description:
      "For high-value B2B environments, we build ABM programs that treat each target account as a market of one. Custom messaging. Coordinated multi-channel engagement. Sales and marketing aligned around shared intelligence. The patience of strategy. The precision of data.",
  },
];

export default function LeadGenerationServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <UserPlus className="h-3.5 w-3.5 text-primary" />
              LEAD GENERATION SERVICES
            </p>
            <h1 className="mt-5 leading-tight tracking-tight">
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                A lead is not a name on a list.
              </span>
              <span className="mb-5 mt-5 block text-4xl font-semibold tracking-[-0.05em] text-[#0b7b59] sm:text-5xl lg:text-6xl">
                It is a conversation waiting to happen.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most lead generation is a numbers game played badly: high volume, low intent, wasted
              follow-up. We engineer the opposite. Targeted systems that identify, attract, and
              qualify the exact people who have both the problem you solve and the authority to act
              on it. Fewer leads. Better conversations. Faster revenue.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[360px] max-w-full shrink-0 items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
              >
                <span
                  className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground cta-arrow-animate-wide [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <ArrowRight
                    className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1 sm:h-6 sm:w-6"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
                <span className="absolute inset-y-0 left-6 right-15 flex items-center justify-start">
                  <span className="overflow-hidden whitespace-nowrap text-left animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)]">
                    Build Your Lead Generation System
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-2000/2031 w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/services/lead-generation/hero.jpg"
                alt="Lead generation — pipeline architecture and qualified conversations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            Architecture Over Volume
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
            We build lead generation as infrastructure, not as a campaign. That means systems that
            compound over time, where every touchpoint, every piece of content, every ad, and every
            automation works together to move the right people from awareness to action with minimal
            friction and maximum relevance.
          </p>
        </div>
      </section>

      {/* Sub-services */}
      <section className="border-y border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sub Services
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border/50 bg-background p-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${120 + index * 120}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-snug text-foreground">
                    {service.headline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceCallToAction
        backgroundSrc="/images/services/seo/call-to-action.jpg"
        lineOne="Your next best client already exists."
        lineTwo="The question is whether your system is designed to find them or waiting for them to find you."
        buttonLabel="Build Your Lead Generation System"
        largeFirstLine
      />
    </main>
  );
}
