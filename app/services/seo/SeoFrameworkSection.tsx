import { MapPin, SearchCheck, ServerCog, ShoppingBag } from "lucide-react";

export default function SeoFrameworkSection() {
  const items = [
    {
      title: "Local SEO",
      description:
        "Local search is the intersection of intent and proximity. We optimize your presence across local profiles, citations, and geo-targeted content so you show up first with authority already established.",
      icon: MapPin,
    },
    {
      title: "SEO Audits & Strategy",
      description:
        "Most SEO problems are invisible until properly diagnosed. We map technical structure, content gaps, and ranking patterns to reveal exactly where performance is leaking.",
      icon: SearchCheck,
    },
    {
      title: "Technical SEO",
      description:
        "Before content can perform, the vessel must be sound. We resolve crawl inefficiencies, repair indexation gaps, and bring Core Web Vitals into alignment so search engines trust your site.",
      icon: ServerCog,
    },
    {
      title: "E-Commerce SEO",
      description:
        "E-commerce SEO demands precise information architecture. We design category structures, filters, and product content that satisfy both search algorithms and human buyers.",
      icon: ShoppingBag,
    },
  ];

  return (
    <section className="border-y border-border/40 bg-muted/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
            The LumiVertex SEO Framework
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base animate-in fade-in delay-250 fill-mode-both">
            Every engagement begins with a complete strategic audit. You see the data, understand
            the logic, and own the roadmap. Then you decide who builds it.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl bg-background p-5 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both"
                style={{ animationDelay: `${150 + index * 120}ms` }}
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
