import { ArrowRight } from "lucide-react";

const resources = [
  {
    title: "The 2024 AI Strategy Framework",
    description: "How to integrate generative AI without compromising security.",
  },
  {
    title: "Efficiency Audit Checklist",
    description: "15 key metrics every CTO should monitor weekly.",
  },
  {
    title: "Scaling Engineering Teams",
    description: "Our proprietary method for building 10x output units.",
  },
];

const StrategicResources = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
          Strategic Resources
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group block overflow-hidden rounded-xl border border-border bg-muted p-6 transition-colors hover:bg-[#ebebeb] dark:bg-secondary dark:hover:bg-muted"
            >
              <div className="flex min-h-full flex-col text-left">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  {resource.description}
                </p>
                <span className="mt-6 flex justify-start text-foreground" aria-hidden>
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicResources;
