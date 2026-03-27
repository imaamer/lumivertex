import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, LineChart, Workflow } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "AI & Custom Technology Development | Intelligent Systems | LumiVertex",
  description:
    "LumiVertex develops custom AI solutions, intelligent automation, and predictive analytics platforms tailored to your business. Technology built from your reality.",
};

const subServices = [
  {
    icon: Brain,
    title: "Custom AI Solutions",
    url: "/services/ai/custom-ai",
    headline: "Intelligence, tailored to the shape of your problem.",
    description:
      "We develop bespoke AI applications across machine learning, NLP, and computer vision. Every model is trained on your data, validated against your benchmarks, and integrated into your existing workflows.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    url: "/services/ai/automation",
    headline: "Your team's time is too valuable for tasks a machine should handle.",
    description:
      "We identify repetitive, error-prone processes that drain capacity and build automated systems that handle them with precision, speed, and zero fatigue. Not crude scripts. Intelligent workflows that adapt.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    url: "/services/ai/predictive-analytics",
    headline: "See the territory before you enter it.",
    description:
      "We build predictive models that analyze historical patterns, market signals, and behavioral data to forecast outcomes with statistical rigor giving you decisions based on where things are heading, not just where they've been.",
  },
];

export default function AiTechnologyServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-xl lg:text-2xl">
              <span className="text-foreground">
                The technology your business needs doesn&apos;t exist yet.
              </span>
            </h1>
            <h1 className="mx-auto mt-1 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-[#0b7b59]">That&apos;s why you need us.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Off-the-shelf tools solve off-the-shelf problems. But the challenges that define your
              growth, the ones where competitive advantage actually lives; require systems built
              from your logic, your data, and your operational reality. We develop AI-powered
              technology that thinks the way your business thinks.
            </p>
            <div className="mt-7 flex justify-center">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[370px] max-w-full items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
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
                    Explore Custom AI Development
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-2000/992 w-full overflow-hidden rounded-3xl border border-border/40 bg-muted">
              <Image
                src="/images/services/ai/hero.jpg"
                alt="AI and custom technology development"
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
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration philosophy */}
      <section className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            We Build For Your World, Not Ours
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both">
            Every solution integrates with your existing stack. We don&apos;t create dependency on
            proprietary platforms. We build systems you own, understand, and can evolve; with or
            without us.
          </p>
        </div>
      </section>

      <ServiceCallToAction
        backgroundSrc="/images/services/seo/call-to-action.jpg"
        lineOne="You have data others don't."
        lineTwo="Let's build the intelligence that turns it into an advantage no one can replicate."
        buttonLabel="Explore Custom AI Development"
        largeFirstLine
      />
    </main>
  );
}
