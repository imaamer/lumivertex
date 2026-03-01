import { ArrowRight, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Shield className="h-3.5 w-3.5 text-primary" />
          ABOUT LUMIVERTEX
        </div>

        <h1 className="mb-4 max-w-4xl text-center font-sans leading-tight tracking-tight text-foreground">
          <span className="block text-3xl font-normal md:text-4xl">
            Most businesses don&apos;t need more tools.
          </span>
          <span className="mt-2 block text-4xl font-medium md:text-4xl lg:text-6xl">
            They need clearer thinking.
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          LumiVertex builds the architecture for high-growth firms by converging intelligent AI
          systems with battle-tested strategic frameworks.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-primary px-2 pl-4 py-1 text-base font-medium shadow-sm transition-colors hover:bg-primary/90"
        >
          <span className="mr-3 text-primary-foreground">Begin with a conversation</span>
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-white p-2.5 m-1.5">
            <ArrowRight className="h-5 w-5 text-foreground sm:h-6 sm:w-6" strokeWidth={2.5} />
          </div>
        </Link>

        {/* Hero Images: first image left, second image (smaller) + stats right, side by side */}
        <div className="mt-12 flex w-full max-w-6xl flex-col gap-6 md:flex-row md:gap-8">
          {/* Left: first image only */}
          <div className="w-full md:w-[60%]">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:h-104">
              <Image
                src="/images/hero-1.jpg"
                alt="Team working"
                fill
                className="object-cover scale-x-[-1]"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
          {/* Right: second image (smaller) then stats below */}
          <div className="flex w-full flex-col gap-7 items-center justify-center md:w-[40%]">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:h-80">
              <Image
                src="/images/hero-2.jpg"
                alt="Collaboration"
                fill
                className="object-cover scale-[2]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-row items-center gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-heading text-2xl font-semibold text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Avatars + Trust / Logo marquee */}
        <div className="mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {/* Left: overlapping avatars + 5 stars + "8k+ happy clients" */}
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

          {/* Right: logo marquee — scroll left with fade in/out */}
          <div
            className="relative flex-1 min-w-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
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
