import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Users } from "lucide-react";

const avatarSrcs = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
];

const trustLogos = ["Walmart", "LinkedIn", "Google", "Slack", "Airbnb"];

export default function SeoHeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      {/* Top: headline, description, buttons */}
      <div className="flex flex-col gap-8">
        <div className="w-full animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="block font-[family:'Geist',sans-serif] font-normal text-[55.62px] leading-[98px] tracking-[-0.05em]">
              Visibility Is Not A Trick.
            </span>
            <span className="mt-[-20px] block font-[family:'Geist',sans-serif] font-medium text-[70.62px] leading-[98px] tracking-[-0.05em]">
              It&apos;s An Architecture.
            </span>
          </h1>
          <div className="mt-6 flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both">
            <p className="flex-1 text-base text-muted-foreground sm:text-lg">
              Search engines don&apos;t reward cleverness anymore. They reward relevance, structure,
              and authority. Our SEO methodology begins where most agencies stop: with a forensic
              understanding of your market&apos;s search behavior, your competitors&apos; structural
              advantages, and the precise gaps where your authority can be built.
            </p>
            <div className="flex flex-nowrap items-center gap-3">
              {/* Start Audit - same as Talk to an Expert (pill + arrow + text reveal) */}
              <Link
                href="/contact"
                className="group relative flex h-14 w-[250px] shrink-0 items-center overflow-hidden rounded-full border-2 border-primary bg-primary py-4 px-6 text-base font-semibold text-primary-foreground no-underline outline-none [transition:all_0.3s_ease-out] hover:bg-primary/90 hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-200 fill-mode-both"
              >
                <span
                  className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary animate-[cta-arrow-move-sm_1.2s_ease-out_0.4s_forwards]"
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
                    Start Audit
                  </span>
                </span>
              </Link>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Request A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mid: two panels */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200 fill-mode-both">
        {/* Left panel: hero1 only — content is in the image */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/images/services/seo/hero1.jpg"
            alt="SEO services"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right panel: hero2 with overlay heading + button */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/images/services/seo/hero2.jpg"
            alt="SEO trusted by"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute left-6 right-6 top-6 text-left text-foreground">
            <h2 className="text-xl font-semibold sm:text-2xl">Trusted By SEO Optimasion</h2>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              We help businesses increase visibility, attract the right customers.
            </p>
          </div>
          <Link
            href="/contact"
            className="absolute bottom-[20px] left-[20px] right-[20px] flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-base font-semibold text-background no-underline transition-opacity hover:opacity-90"
          >
            <Users className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
            Strategic Partnership Start Here
          </Link>
        </div>
      </div>

      {/* Bottom: avatars + stars + 8k+ happy clients + logo marquee (same as landing hero) */}
      <div className="mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="flex -space-x-3 sm:-space-x-4">
            {avatarSrcs.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 rounded-full border-2 border-foreground object-cover sm:h-10 sm:w-10"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-0.5 text-amber-500" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" strokeWidth={0} />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              8k+ happy clients
            </span>
          </div>
        </div>
        <div
          className="relative flex-1 min-w-0 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div
            className="flex w-max items-center gap-10 sm:gap-14"
            style={{ animation: "logo-marquee 28s linear infinite" }}
          >
            {[...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-base font-semibold tracking-tight text-muted-foreground/70 sm:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
