"use client";

import { useEffect, useState } from "react";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./HeroSection3";

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    let id: number | undefined;

    const sync = () => {
      if (!mql.matches) {
        // Mobile: always show HeroSection1 (no rotation)
        if (id != null) window.clearInterval(id);
        id = undefined;
        setIdx(0);
        return;
      }

      // Desktop: rotate every 3 seconds
      if (id == null) {
        id = window.setInterval(() => {
          setIdx((prev) => (prev + 1) % 3);
        }, 5000);
      }
    };

    sync();

    mql.addEventListener?.("change", sync);
    return () => {
      if (id != null) window.clearInterval(id);
      mql.removeEventListener?.("change", sync);
    };
  }, []);

  return (
    <div className="relative min-h-[720px] md:min-h-[860px]">
      {/* Cross-fade the hero variants smoothly */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          idx === 0 ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={idx !== 0}
      >
        <HeroSection1 />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          idx === 1 ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={idx !== 1}
      >
        <HeroSection2 />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          idx === 2 ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={idx !== 2}
      >
        <HeroSection3 />
      </div>
    </div>
  );
}
