import { Fragment } from "react";
import { Ear, Search, Handshake, ThumbsUp, ChevronRight } from "lucide-react";

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
        <h2 className="mb-2 text-center font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
          The Lumivertex Process
        </h2>
        <p className="mb-14 text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          From discovery to delivery—a clear path to technical excellence.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-center sm:gap-2 md:gap-2">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:min-w-[140px] sm:max-w-[250px]">
                <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="hidden min-w-[24px] max-w-[48px] flex-1 items-center pt-7 sm:flex md:max-w-[200px]"
                  aria-hidden
                >
                  <span className="h-px flex-1 bg-border" />
                  <ChevronRight className="h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
                  <span className="h-px flex-1 bg-border" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LumivertexProcessSection;
