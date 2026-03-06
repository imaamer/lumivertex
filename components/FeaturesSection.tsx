import { Cpu, BarChart3, Zap, Settings } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Enabled Technology",
    description:
      "Custom-built systems that think alongside your team. From intelligent automation to predictive analytics, we develop technology that doesn’t just function, it anticipates.",
  },
  {
    icon: BarChart3,
    title: "Data-Backed Strategy",
    description:
      "Every recommendation carries a number. Every number carries a rationale. We architect marketing strategies you can validate before a single cent moves.",
  },
  {
    icon: Zap,
    title: "Intelligent Lead Generation",
    description:
      "Precision-engineered pipelines that attract the right conversations, not just traffic. Because volume without intent is noise.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Your problem is not generic. Neither is our response. From concept to deployment, we build what doesn’t exist yet because your business requires what no template can provide.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section bg-background py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both">
            Our Approach
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] animate-in fade-in slide-in-from-bottom-4 duration-600 delay-150 fill-mode-both">
            We don’t sell services. We clarify paths.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`features-section-card-wrapper flex h-full animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both ${
                i === 0 ? "delay-300" : i === 1 ? "delay-400" : i === 2 ? "delay-500" : "delay-600"
              }`}
            >
              <div className="features-section-card group flex h-full min-h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[background-color,box-shadow] duration-300 hover:bg-[#48e5c2] hover:shadow-[0_20px_40px_-12px_rgba(35,124,103,0.15)]">
                <div className="features-section-card-inner flex flex-1 flex-col gap-4">
                  <span className="features-section-icon-wrap">
                    <span className="features-section-icon-inner">
                      <feature.icon className="h-10 w-10 shrink-0 text-primary transition-colors duration-300 group-hover:text-white" />
                    </span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
