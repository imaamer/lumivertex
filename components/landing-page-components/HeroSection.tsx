import { ArrowRight, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: "10M+", label: "Project valuation" },
  { value: "120k+", label: "Happy clients" },
  { value: "50+", label: "Ongoing projects" },
];

const avatarSrcs = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
];

const trustLogos = ["Walmart", "LinkedIn", "Google", "Slack", "Airbnb"];

const HeroSection = () => {
  return (
    <section className="relative max-w-8xl mx-auto overflow-hidden bg-background pb-16 pt-12">
      <div className="container mx-auto max-w-8xl flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/about"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary animate-in fade-in duration-500"
        >
          <Shield className="h-3.5 w-3.5 text-primary" />
          ABOUT LUMIVERTEX
        </Link>

        <h1 className="mb-4 max-w-4xl text-center font-sans leading-tight tracking-tight text-foreground">
          <span className="block text-3xl font-normal md:text-4xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-75 fill-mode-both">
            Most businesses don&apos;t need more tools.
          </span>
          <span className="mt-2 block text-4xl font-medium md:text-4xl lg:text-6xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-150 fill-mode-both">
            They need clearer thinking.
          </span>
        </h1>

        <p className="mb-8 max-w-5xl text-center text-lg text-muted-foreground md:text-xl animate-in fade-in duration-500 delay-200 fill-mode-both">
          LumiVertex builds the architecture between where you are and where your data says you
          should be. AI-enabled technology. Strategy with proof. Growth you can measure before you
          invest.
        </p>

        <Link
          href="/contact"
          className="group relative flex h-14 w-[320px] items-center overflow-hidden rounded-full border-2 border-primary bg-transparent py-4 px-6 text-base font-semibold text-primary no-underline shadow-none outline-none [transition:all_0.3s_ease-out] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)] animate-in fade-in zoom-in-95 duration-500 delay-300 fill-mode-both"
        >
          <span
            className="absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary animate-[cta-arrow-move_1.2s_ease-out_0.4s_forwards] [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary"
            style={{ transform: "translateY(-50%)" }}
          >
            <ArrowRight
              className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1 sm:h-6 sm:w-6"
              strokeWidth={2.5}
              aria-hidden
            />
          </span>
          <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
            <span className="overflow-hidden whitespace-nowrap animate-[cta-text-reveal_1.2s_ease-out_0.4s_forwards] [clip-path:inset(0_100%_0_0)] text-left">
              Begin with a conversation
            </span>
          </span>
        </Link>

        {/* Hero Images: first image left, second image (smaller) + stats right, side by side */}
        <div className="mt-12 flex w-full max-w-6xl flex-col gap-6 md:flex-row md:gap-8">
          {/* Left: first image only */}
          <div className="w-full md:w-[60%] animate-in fade-in slide-in-from-left-6 duration-700 delay-300 fill-mode-both">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:h-104">
              <div className="absolute inset-0 origin-center animate-[hero-image-zoom-in_20s_ease-in-out_infinite]">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Team working"
                  fill
                  className="object-cover scale-x-[-1]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
          {/* Right: second image (smaller) then stats below */}
          <div className="flex w-full flex-col gap-7 items-center justify-center md:w-[40%] animate-in fade-in slide-in-from-right-6 duration-700 delay-400 fill-mode-both">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:h-80">
              <div className="absolute inset-0 origin-center animate-[hero-image-zoom-in_20s_ease-in-out_0.3s_infinite]">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Collaboration"
                  fill
                  className="object-cover scale-[2]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-center">
              {stats.map((stat, i) => (
                <AnimatedCounter
                  key={stat.value}
                  value={stat.value}
                  label={stat.label}
                  delay={i * 120}
                  className={`animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both ${i === 0 ? "delay-500" : i === 1 ? "delay-600" : "delay-700"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Avatars + Trust / Logo marquee */}
        <div className="mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {/* Left: overlapping avatars + 5 stars + "8k+ happy clients" */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500 fill-mode-both">
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

          {/* Right: logo marquee — scroll left with fade in/out */}
          <div
            className="relative flex-1 min-w-0 overflow-hidden animate-in fade-in duration-500 delay-600 fill-mode-both"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <div
              className="flex w-max items-center gap-10 sm:gap-14"
              style={{
                animation: "logo-marquee 28s linear infinite",
              }}
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
      </div>
    </section>
  );
};

export default HeroSection;
