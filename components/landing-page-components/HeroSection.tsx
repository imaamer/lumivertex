"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./HeroSection3";

export default function HeroSection() {
  const PANEL_COUNT = 3;
  const SLIDE_DURATION_MS = 1400;
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    let id: number | undefined;

    const sync = () => {
      if (!mql.matches) {
        // Mobile: always show HeroSection1 (no rotation)
        if (id != null) window.clearInterval(id);
        id = undefined;
        setIdx(0);
        setPrevIdx(null);
        setIsAnimating(false);
        return;
      }

      // Desktop: rotate every 7 seconds when not hovered/animating.
      if (!isNavHovered && !isAnimating && id == null) {
        id = window.setInterval(() => {
          setDirection(1);
          setPrevIdx(idx);
          setIdx((idx + 1) % PANEL_COUNT);
          setIsAnimating(true);
        }, 7000);
      }
    };

    sync();

    mql.addEventListener?.("change", sync);
    return () => {
      if (id != null) window.clearInterval(id);
      mql.removeEventListener?.("change", sync);
    };
  }, [idx, isAnimating, isNavHovered, PANEL_COUNT]);

  useEffect(() => {
    if (!isAnimating) return;
    const t = window.setTimeout(() => {
      setPrevIdx(null);
      setIsAnimating(false);
    }, SLIDE_DURATION_MS);
    return () => window.clearTimeout(t);
  }, [isAnimating, SLIDE_DURATION_MS]);

  const slideAnimated =
    "transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
  const slideStatic = "transition-none";
  const slideBase = "absolute inset-0 transform-gpu";

  const moveTo = (nextIdx: number, nextDirection: 1 | -1) => {
    if (nextIdx === idx || isAnimating) return;
    setDirection(nextDirection);
    setPrevIdx(idx);
    setIdx(nextIdx);
    setIsAnimating(true);
  };

  const goPrev = () => {
    moveTo((idx - 1 + PANEL_COUNT) % PANEL_COUNT, -1);
  };

  const goNext = () => {
    moveTo((idx + 1) % PANEL_COUNT, 1);
  };

  const getSlideState = (panelIdx: number) => {
    if (panelIdx === idx) {
      return `z-20 translate-x-0 ${slideAnimated}`;
    }

    if (panelIdx === prevIdx && isAnimating) {
      const exitDir = direction === 1 ? "-translate-x-full" : "translate-x-full";
      return `pointer-events-none z-10 ${exitDir} ${slideAnimated}`;
    }

    const parkedDir = direction === 1 ? "translate-x-full" : "-translate-x-full";
    return `pointer-events-none z-0 ${parkedDir} ${slideStatic}`;
  };

  return (
    <div className="relative min-h-[720px] overflow-hidden md:min-h-[860px]">
      <button
        type="button"
        onClick={goPrev}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
        aria-label="Previous hero section"
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:left-5"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={goNext}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
        aria-label="Next hero section"
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-5"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      {/* Slide transition between hero variants (left -> right) */}
      <div className={`${slideBase} ${getSlideState(0)}`} aria-hidden={idx !== 0}>
        <HeroSection1 />
      </div>
      <div className={`${slideBase} ${getSlideState(1)}`} aria-hidden={idx !== 1}>
        <HeroSection2 />
      </div>
      <div className={`${slideBase} ${getSlideState(2)}`} aria-hidden={idx !== 2}>
        <HeroSection3 />
      </div>
    </div>
  );
}
