"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STAGGER_MS = 80;
const transition = "transition-all duration-700 ease-out";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1a5b4d] py-16 md:py-20"
    >
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
        {/* Left: text content */}
        <div className="flex flex-1 flex-col lg:max-w-[60%]">
          <div
            className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#1a5b4d] bg-white px-4 py-2 ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#34d399]">
              <Check className="h-3.5 w-3.5 text-[#1a5b4d]" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide text-[#1a5b4d]">
              Our Mission
            </span>
          </div>

          <h2
            className={`mb-4 font-heading text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[3.5rem] ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${STAGGER_MS}ms` }}
          >
            Every significant outcome begins with a conversation.
          </h2>

          <p
            className={`mb-8 max-w-xl text-base text-[#d1d5db] md:text-lg ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${2 * STAGGER_MS}ms` }}
          >
            Stop guessing. Start building with precision. Our strategists are ready when you are.
          </p>

          <Link
            href="/contact"
            className={`inline-flex w-fit items-center gap-2 rounded-full bg-[#34d399] px-6 py-3.5 text-base font-medium text-[#1a5b4d] shadow-sm transition-colors hover:bg-[#2dd4a0] ${transition} ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${3 * STAGGER_MS}ms` }}
          >
            Join Our Team
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Right: image with organic blob-style container */}
        <div
          className={`relative flex-1 lg:max-w-[40%] ${transition} ${
            inView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: `${4 * STAGGER_MS}ms` }}
        >
          <div className="relative aspect-4/3 w-full overflow-hidden rounded rounded-r-lg border border-white/20 bg-white/5 md:aspect-5/4 lg:aspect-4/3">
            <Image
              src="/images/cta.jpg"
              alt="Team members collaborating at a laptop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
