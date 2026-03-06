import { Fragment } from "react";
import Link from "next/link";
import { Ear, Search, Handshake, ThumbsUp, ChevronRight, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Listen",
    description: "Deep immersion into your business goals and constraints.",
    icon: Ear,
  },
  {
    title: "Diagnose",
    description: "Identifying the core leverage points where tech moves the needle.",
    icon: Search,
  },
  {
    title: "Blueprint",
    description: "Designing the technical architecture and roadmap for success.",
    icon: Handshake,
  },
  {
    title: "Decide",
    description: "Final commitment to build and execute at peak velocity.",
    icon: ThumbsUp,
  },
];

const LumivertexProcessSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
          The Paradigm Shift Process
        </h2>

        <div className="process-row relative flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-center sm:gap-2 md:gap-2">
          {/* One continuous line from first to last process, behind content */}
          <div
            className="process-line absolute left-0 right-0 top-9 h-px -translate-y-1/2 bg-border sm:block hidden"
            aria-hidden
          />
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="group relative z-10 flex min-w-0 flex-1 flex-col items-center bg-background text-center sm:min-w-[140px] sm:max-w-[250px]">
                <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-[#48e5c2]">
                  <step.icon className="h-6 w-6 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="relative z-10 hidden min-w-[24px] max-w-[48px] flex-1 items-center pt-6.5 sm:flex md:max-w-[200px]"
                  aria-hidden
                >
                  <div className="process-arrow-slot  relative h-5 w-full overflow-hidden">
                    <ChevronRight
                      className={`process-arrow-in-slot absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-accent ${index === 0 ? "process-arrow-delay-0" : index === 1 ? "process-arrow-delay-1" : "process-arrow-delay-2"}`}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary no-underline transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            See Our Full Process
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2.5}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LumivertexProcessSection;
