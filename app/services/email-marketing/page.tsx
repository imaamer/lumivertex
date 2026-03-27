import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Link2, Mail, Send, Workflow } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "Email Marketing & Automation | Intelligent Nurture Systems | LumiVertex",
  description:
    "LumiVertex builds email systems and automation workflows that nurture leads, increase retention, and integrate with your CRM. Precision at scale.",
};

const subServices = [
  {
    icon: Send,
    title: "Email Campaigns",
    url: "/services/email-marketing/campaigns",
    headline: "Every send is a strategic decision, not a calendar obligation.",
    description:
      "We design email campaigns around audience segments, behavioral triggers, and narrative arcs that build toward conversion. Subject lines tested. Copy refined. Send times optimized.",
  },
  {
    icon: Workflow,
    title: "Lead Nurturing",
    url: "/services/email-marketing/lead-nurturing",
    headline: "The space between first contact and decision is where most businesses lose.",
    description:
      "We build automated nurture sequences that guide prospects through their decision journey with the right information at the right moment. Not a drip campaign, an intelligent conversation that adapts to behavior.",
  },
  {
    icon: Link2,
    title: "CRM Integration",
    url: "/services/email-marketing/crm-integration",
    headline: "When marketing and sales share one source of truth, growth compounds.",
    description:
      "We connect your email ecosystem to your CRM infrastructure, creating unified data flows, automated handoffs, and complete visibility from first touch to closed deal.",
  },
];

export default function EmailMarketingServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Mail className="h-3.5 w-3.5 text-primary" />
              EMAIL MARKETING &amp; AUTOMATION
            </p>
            <h1 className="mt-5 leading-tight tracking-tight">
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                The inbox is intimate territory.
              </span>
              <span className="mb-5 mt-5 block text-4xl font-semibold tracking-[-0.05em] text-[#0b7b59] sm:text-5xl lg:text-5xl">
                Treat it accordingly.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Email remains the highest-ROI channel in marketing, when it&apos;s treated as a
              relationship, not a broadcast. We build intelligent email systems that know when to
              speak, what to say, and when silence serves better than another send.
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
                <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
                  <span className="overflow-hidden whitespace-nowrap text-left animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)]">
                    Build Your Email Architecture
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-1300/1249 w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/services/email-marketing/hero.jpg"
                alt="Email marketing and automation — nurture systems and workflows"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="border-y border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sub-Services
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
        lineOne="Your leads are already in the pipeline."
        lineTwo="The question is whether your system is intelligent enough to guide them through it."
        buttonLabel="Build Your Email Architecture"
      />
    </main>
  );
}
