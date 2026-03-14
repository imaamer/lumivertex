"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LumiVertexParadigm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`lumi-vertex-paradigm bg-background py-20 ${inView ? "lumi-vertex-paradigm-in-view" : ""}`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-16 lg:items-start">
          {/* Left: title + paragraphs + CTA */}
          <div className="flex flex-col gap-6">
            <div className="paradigm-heading flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The LumiVertex Paradigm
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Here is what makes us unusual: we give you the strategy first. Complete. With
                  numbers, logic, and a clear implementation roadmap. You can execute it yourself.
                  You can bring it to anyone. Or you can ask us to build it.
                </p>
                <p>
                  It is a statement about how we believe business relationships should begin; with
                  trust, not dependency.
                </p>
              </div>
              <p className="border-l-4 border-primary bg-primary/5 py-4 pl-5 pr-4 text-lg font-semibold italic leading-snug text-foreground md:text-xl">
                We would rather you choose us freely than need us blindly.
              </p>
            </div>
            <div className="paradigm-cta-wrapper">
              <Link
                href="/contact"
                className="group relative flex h-14 w-[320px] items-center overflow-hidden rounded-full border-2 border-primary bg-transparent py-4 px-6 text-base font-semibold text-primary no-underline shadow-none outline-none [transition:all_0.3s_ease-out] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_8px_30px_rgba(35,124,103,0.25)]"
              >
                <span className="paradigm-cta-arrow absolute left-6 top-1/2 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary [transition:background-color_0.3s,color_0.3s] group-hover:bg-primary-foreground group-hover:text-primary">
                  <ArrowRight
                    className="h-5 w-5 [transition:transform_0.3s_ease-out] group-hover:translate-x-1 sm:h-6 sm:w-6"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </span>
                <span className="absolute inset-y-0 left-6 right-20 flex items-center justify-start">
                  <span className="paradigm-cta-text overflow-hidden whitespace-nowrap text-left">
                    Get Your Strategy
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right: large image */}
          <div className="paradigm-image relative aspect-5/3 w-full overflow-hidden rounded-2xl lg:aspect-5/4 lg:min-h-[336px]">
            <div className="absolute inset-0 animate-[float-on-water_6s_ease-in-out_infinite]">
              <Image
                src="/images/hero-1.jpg"
                alt="The LumiVertex Paradigm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumiVertexParadigm;
