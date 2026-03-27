"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const STAGGER_MS = 70;

const faqs = [
  {
    question: "How fast is your response time?",
    answer:
      "We aim to respond within minutes during business hours. For critical issues, we prioritize immediate attention to get you back on track as quickly as possible.",
  },
  {
    question: "Is remote support secure?",
    answer:
      "Yes. All remote sessions are fully encrypted, and we never access your files without permission. Your privacy and security come first.",
  },
  {
    question: "Can you fix my issue without visiting my location?",
    answer:
      "Most issues can be resolved remotely. Our team uses secure, encrypted tools to access your system with your consent and fix problems in real time.",
  },
  {
    question: "What if my issue can't be solved remotely?",
    answer:
      "If we determine that on-site support is needed, we'll guide you through the next steps and, where applicable, coordinate with local technicians.",
  },
  {
    question: "Do you provide support for both individuals and businesses?",
    answer:
      "Yes. We support individuals, small businesses, and enterprises with tailored plans to match your needs and scale.",
  },
];

export function ServicesFAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transition = "transition-all duration-600 ease-out";

  return (
    <section ref={sectionRef} className="border-b border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading (left) and intro paragraph (right) on the same row */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <h2
            className={`font-sans text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-[2.5rem] ${transition} ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            Frequently Asked
            <br />
            Questions
          </h2>
          <p
            className={`max-w-md text-left text-sm text-muted-foreground sm:text-base lg:max-w-lg lg:text-left ${transition} ${
              inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
            style={{ transitionDelay: `${STAGGER_MS}ms` }}
          >
            Getting expert help has never been easier. Here&apos;s how our process keeps your
            technology running smoothly:
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left column: image */}
          <div className="flex flex-col gap-6">
            <div
              className={`relative aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:max-w-full origin-center ${
                inView ? "animate-[seesaw-in_1.25s_ease-out_140ms_both]" : "opacity-0"
              }`}
            >
              <Image
                src="/images/services/service-faq.jpg"
                alt="Person with questioning expression, representing FAQ support"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Right column: accordion */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = index === openIndex;
                return (
                  <div
                    key={faq.question}
                    className={`transition-all duration-600 ease-out ${
                      inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${(3 + index) * STAGGER_MS}ms`,
                    }}
                  >
                    <div
                      className={`rounded-xl transition-colors duration-200 ${
                        isOpen ? "bg-primary/10" : "border border-border bg-background"
                      }`}
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <span className="text-sm font-medium text-foreground sm:text-base">
                          {faq.question}
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                            isOpen
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-background text-foreground"
                          }`}
                          aria-hidden
                        >
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5" strokeWidth={2} />
                          ) : (
                            <ChevronDown className="h-5 w-5" strokeWidth={2} />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="border-t border-border/50 px-5 pb-4 pt-2 text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
