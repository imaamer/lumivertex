import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Megaphone, Search, Target } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "PPC / Paid Ads Services | Lumivertex",
  description:
    "Paid media is not an expense. It's a hypothesis. We architect measurable PPC systems across Google, Meta, and LinkedIn to turn spend into predictable growth.",
};

const subServices = [
  {
    icon: Search,
    title: "Google Ads",
    url: "/services/ppc/google-ads",
    headline: "Capture demand at the moment of decision.",
    description:
      "We build campaign architectures with intent-mapped keyword structures, strategic bidding models, and landing page alignment that turns search intent into qualified action not just clicks.",
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    url: "/services/ppc/social-ads",
    headline: "Reach the right minds before they're searching.",
    description:
      "Social advertising is demand creation, not demand capture. We engineer campaigns with layered audience intelligence, creative that earns the pause, and attribution models that reveal the true path from impression to revenue.",
  },
  {
    icon: Target,
    title: "LinkedIn Ads",
    url: "/services/ppc/linkedin-ads",
    headline: "Place your value proposition in front of the exact decision-makers who need it.",
    description:
      "LinkedIn offers unmatched professional targeting. We leverage that precision with campaigns built around role, seniority, industry, and company size, delivering your message to the people who can act on it.",
  },
];

export default function PPCServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <BadgeDollarSign className="h-3.5 w-3.5 text-primary" />
              PPC / PAID ADS SERVICES
            </p>
            <h1 className="mt-5 leading-tight tracking-tight">
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                Paid media is not an expense.
              </span>
              <span className="mt-5 mb-5 block text-4xl font-semibold text-[#0b7b59] sm:text-5xl lg:text-6xl">
                It&apos;s a Hypothesis
              </span>
              <span className="block text-3xl font-semibold text-foreground sm:text-3xl">
                and we prove it before you scale.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most ad spend is wasted not because the platforms fail, but because the strategy was
              never precise enough. We architect paid campaigns the way engineers design systems:
              with clear inputs, measurable outputs, and decision logic at every juncture.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[320px] items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
              >
                <span
                  className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary animate-[cta-arrow-move_1.2s_ease-out_0.4s_forwards]"
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
                    Request a Paid Media Strategy Session
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-6 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-2000/1861 w-full overflow-hidden rounded-3xl border border-border/40 bg-muted">
              <Image
                src="/images/services/ppc/hero.jpg"
                alt="PPC strategy analytics dashboard and media planning"
                fill
                className="object-contain"
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
        lineOne="Ad spend without architecture is a donation to the platform."
        lineTwo="Let's make it an investment."
        buttonLabel="Request a Paid Media Strategy Session"
      />
    </main>
  );
}
