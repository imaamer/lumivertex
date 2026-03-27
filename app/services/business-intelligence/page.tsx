import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, GitBranch, LayoutDashboard } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "Analytics & Business Intelligence | Data That Drives Decisions | LumiVertex",
  description:
    "LumiVertex builds marketing analytics dashboards, attribution models, and BI systems that transform raw data into strategic clarity.",
};

const subServices = [
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    url: "/services/business-intelligence/marketing-analytics",
    headline: "Know exactly what's working, what isn't, and what to do about it.",
    description:
      "We build marketing measurement systems that track performance across every channel. Customer acquisition cost. Lifetime value. Channel attribution. The metrics that matter to your finance team, not just your marketing team.",
  },
  {
    icon: LayoutDashboard,
    title: "Data Visualization & Reporting",
    url: "/services/business-intelligence/data-visualization",
    headline: "A dashboard should answer a question in three seconds or fewer.",
    description:
      "We design reporting systems around decisions. Custom visualizations. Real-time data. Hierarchical dashboards for C-suite, directors, and operators; each seeing exactly what their decisions require.",
  },
  {
    icon: GitBranch,
    title: "Attribution Modeling",
    url: "/services/business-intelligence/attribution-modeling",
    headline: "The last click gets the credit. The real story is more interesting.",
    description:
      "We build multi-touch models that map the complete journey from first awareness to conversion, so you understand which investments actually drive revenue, not just which ones stand nearest when the sale closes.",
  },
];

export default function BusinessIntelligenceServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <BarChart3 className="h-3.5 w-3.5 text-primary" />
              ANALYTICS &amp; BUSINESS INTELLIGENCE
            </p>
            <h1 className="mt-5 leading-tight tracking-tight">
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                You are drowning in data.
              </span>
              <span className="mb-5 mt-5 block text-4xl font-semibold tracking-[-0.05em] text-[#0b7b59] sm:text-5xl lg:text-5xl">
                We are here to teach you to read the water.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most businesses have more data than they can interpret and less insight than they
              need. We build analytical frameworks that close that gap, transforming raw metrics
              into strategic clarity.
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
                    Request an Analytics Assessment
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-1320/1073 w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/services/bi/hero.jpg"
                alt="Analytics and business intelligence — dashboards and data clarity"
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
        lineOne="Your data already contains the answers."
        lineTwo="You just need the right architecture to ask the questions."
        buttonLabel="Request an Analytics Assessment"
        largeFirstLine={true}
      />
    </main>
  );
}
