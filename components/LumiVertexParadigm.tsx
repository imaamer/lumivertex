import { Check, Search, Target, MessageSquare, Code } from "lucide-react";

const differentiators = [
  {
    title: "Unbiased Audit",
    description: "Deep dive into current tech stack and workflows.",
  },
  {
    title: "Iterative Delivery",
    description: "High-velocity development cycles with weekly sprints.",
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Blueprint",
    description: "We dive deep into understanding your business, users, and market landscape.",
  },
  {
    step: "02",
    icon: Target,
    title: "Architect",
    description: "Clear strategy and requirements definition to align on goals and scope.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Converge",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
  {
    step: "04",
    icon: Code,
    title: "Scale",
    description:
      "Development is conducted using modern technologies and aligned with best practices, prioritizing long-term scalability.",
    wide: true,
  },
];

const LumiVertexParadigm = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: heading, paragraph, differentiators */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The LumiVertex Paradigm
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Innovation isn&apos;t a straight line. It&apos;s a continuous loop of diagnosis,
                execution, and optimization. We partner with firms ready to dismantle outdated
                systems and replace them with agile, scalable technology.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-border bg-secondary p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: four-step process cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className={`flex flex-col rounded-xl border border-border bg-secondary p-5 transition-shadow hover:shadow-md ${
                  step.wide ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="flex-1 text-xs font-medium text-muted-foreground">
                    → Step {step.step}
                  </span>
                  {/* <span className="text-xs font-light tracking-tight text-muted-foreground/80">
                    {step.step}
                  </span> */}
                </div>
                <step.icon className="mb-3 h-4 w-4 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumiVertexParadigm;
