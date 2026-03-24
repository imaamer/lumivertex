"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical offset in px when out of view */
  y?: number;
  /** Extra delay after element enters view (ms) */
  delayMs?: number;
  /** If true, stay visible after first reveal */
  once?: boolean;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Fades and slides content when it intersects the viewport while scrolling up or down.
 * Respects prefers-reduced-motion (via useSyncExternalStore, not effect state).
 */
export function ScrollReveal({
  children,
  className,
  y = 32,
  delayMs = 0,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: [0, 0.06, 0.12],
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, reducedMotion]);

  const show = reducedMotion || visible;

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[opacity,transform]",
        reducedMotion && "translate-y-0! opacity-100! transition-none!",
        className,
      )}
      style={
        reducedMotion
          ? undefined
          : {
              transitionProperty: "opacity, transform",
              transitionDuration: "0.65s",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: show ? `${delayMs}ms` : "0ms",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : `translateY(${y}px)`,
            }
      }
    >
      {children}
    </div>
  );
}
