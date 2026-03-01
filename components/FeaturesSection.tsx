import { Cpu, BarChart3, Zap, Settings } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Enabled Tech",
    description:
      "We don't just implement AI. We integrate intelligent tools to your operations to automate decisions you didn't know could be automated.",
  },
  {
    icon: BarChart3,
    title: "Data-Backed Strategy",
    description:
      "More data points mean clarity. Our strategies align to predictive data and AI models to position you for exponential outcomes.",
  },
  {
    icon: Zap,
    title: "Intelligent Lead Gen",
    description:
      "Move beyond cold outreach. Build an intelligent pipeline that surfaces and prioritizes leads so that your team focuses on what it does best: closing.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "All the benefits. None of the complexity. We build custom business applications and tools that deliver impact from day one.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-20 flex flex-row items-center justify-center">
      <div className="container flex flex-row items-center justify-center md:w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mx-auto max-w-7xl">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-row items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 font-heading text-2xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-md leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <feature.icon className="h-12 w-12 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
