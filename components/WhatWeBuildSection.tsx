import {
  Search,
  LayoutTemplate,
  Settings,
  Braces,
  Shield,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const items: {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    icon: Search,
    title: "API Ecosystems",
    description: "We dive deep into understanding your business, users, and market landscape.",
  },
  {
    step: "02",
    icon: LayoutTemplate,
    title: "Web Apps",
    description: "Clear strategy and requirements definition to align on goals and scope.",
  },
  {
    step: "03",
    icon: Settings,
    title: "ML Modeling",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
  {
    step: "04",
    icon: Braces,
    title: "Generative AI Integration",
    description:
      "Development is conducted using modern technologies and aligned with best practices, prioritizing long-term scalability.",
  },
  {
    step: "05",
    icon: Shield,
    title: "Zero-Trust Systems",
    description:
      "A smooth launch is achieved by strictly adhering to a process that incorporates thorough testing and quality assurance checks.",
  },
  {
    step: "06",
    icon: Database,
    title: "Data Warehousing",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
  {
    step: "07",
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
  {
    step: "08",
    icon: Smartphone,
    title: "Mobile",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
  {
    step: "09",
    icon: BarChart3,
    title: "BI Dashboards",
    description: "Creating beautiful, user-centered designs that solve real problems.",
  },
];

// Per-row column templates: varied widths so each row has different card sizes (wide / medium / narrow)
const rowTemplateClasses = [
  "sm:[grid-template-columns:2fr_1.4fr_1fr]", // row 1: wide, medium, narrow
  "sm:[grid-template-columns:1.2fr_2fr_1fr]", // row 2: medium, wide, narrow
  "sm:[grid-template-columns:1fr_1.3fr_2fr]", // row 3: narrow, medium, wide
];

const WhatWeBuildSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-heading text-2xl font-medium tracking-tight text-foreground md:text-5xl">
          What We Build
        </h2>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Eleven disciplines. One integrated intelligence. We don&apos;t silo our thinking because
          your growth doesn&apos;t happen in silos.
        </p>

        <div className="flex flex-col gap-6">
          {[0, 1, 2].map((rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-4 sm:gap-5 ${rowTemplateClasses[rowIndex]}`}
            >
              {items.slice(rowIndex * 3, rowIndex * 3 + 3).map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      → Step {item.step}
                    </span>
                  </div>
                  <item.icon className="mb-3 h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
