import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Megaphone, PenSquare, Users } from "lucide-react";
import ServiceCallToAction from "@/components/services-page-components/ServiceCallToAction";

export const metadata: Metadata = {
  title: "Social Media Marketing | Lumivertex",
  description:
    "LumiVertex builds social media strategies that earn attention through substance, not noise.",
};

const subServices = [
  {
    icon: BadgeCheck,
    title: "Strategy & Management",
    url: "/services/social-media-marketing/strategy",
    headline: "A presence without a plan is just noise with your name on it.",
    description:
      "We develop social architectures tailored to each platform's native behavior. Strategic calendars, audience mapping, competitive positioning, and KPIs that measure actual business impact, not vanity.",
  },
  {
    icon: PenSquare,
    title: "Content Creation",
    url: "/services/social-media-marketing/content-creation",
    headline: "Content that people remember after they've stopped scrolling.",
    description:
      "We produce visual, written, and video content engineered for each platform's attention patterns. Every piece carries strategic intent: to educate, to position, to convert.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    url: "/services/social-media-marketing/influencer-marketing",
    headline: "Borrowed credibility, strategically deployed.",
    description:
      "We identify voices that your audience already trusts and engineer partnerships that feel organic, not transactional. Alignment by values, amplified by data.",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="mt-5 mx-auto max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-xl lg:text-2xl">
              <span className="text-foreground">Attention is the most expensive currency.</span>
            </h1>
            <h1 className="mt-1 mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-[#0b7b59]">Earn it with substance, not noise.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-5xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Social media has become a place where most brands sound identical. We believe the
              antidote is not louder content, but more intelligent presence. Our social strategies
              are built on audience psychology, platform-native behavior, and the rare willingness
              to say something worth remembering.
            </p>
            <div className="mt-7 flex justify-center">
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
                    Start a Conversation
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100 fill-mode-both">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border/40 bg-muted">
              <Image
                src="/images/services/social-media-marketing/hero.jpg"
                alt="Social media marketing strategy visual"
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
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
        lineOne="Your audience is already listening."
        lineTwo="Say something worth hearing."
        buttonLabel="Start a Social Strategy Conversation"
      />
    </main>
  );
}
