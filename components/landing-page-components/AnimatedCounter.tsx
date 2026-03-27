"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(valueStr: string): { target: number; suffix: string } {
  const match = valueStr.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: valueStr };
  const target = Math.round(parseFloat(match[1]));
  const suffix = match[2] || "";
  return { target, suffix };
}

function easeOutQuart(t: number): number {
  return 1 - (1 - t) ** 4;
}

const DURATION_MS = 1800;

export function AnimatedCounter({
  value,
  label,
  className = "",
  delay = 0,
  trigger = true,
}: {
  value: string;
  label: string;
  className?: string;
  delay?: number;
  /** When false, shows 0 and does not animate. When true (default), animates from 0 to value. Use for scroll-into-view. */
  trigger?: boolean;
}) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger || target === 0) return;

    const startTime = performance.now() + delay;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);
      setDisplay(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, delay]);

  return (
    <div className={className}>
      <p className="font-heading text-2xl font-semibold text-foreground md:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
