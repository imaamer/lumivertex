"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const avatarSrcs = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
];

const trustLogos = ["Walmart", "LinkedIn", "Google", "Slack", "Airbnb"];

export default function HeroBottomSlider() {
  return (
    <div className="mt-10 mx-auto flex max-w-6xl flex-nowrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
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
  );
}
