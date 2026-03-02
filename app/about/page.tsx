import Link from "next/link";

const sections = [
  {
    eyebrow: "PHILOSOPHY",
    title: "What we believe",
    body: "Strategy should always precede the transaction. We partner with leadership teams to clarify direction, align incentives, and design systems that compound value instead of creating more operational noise.",
  },
  {
    eyebrow: "HOW WE WORK",
    title: "Built before the invoice",
    body: "Every engagement begins with rigorous discovery: stakeholder interviews, systems mapping, and data audits. We don’t prescribe tools until we understand where intelligence will actually move the needle.",
  },
  {
    eyebrow: "OUTCOMES",
    title: "Architecture for growth",
    body: "From AI-enabled lead engines to fully custom platforms, we design architectures that remove bottlenecks, preserve optionality, and create measurable lift across your funnel and operations.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ABOUT US
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            <div>
              <h1 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                We exist because most businesses deserve better counsel than they’re getting.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                LumiVertex was built on an unfashionable conviction: that a business partner should
                make you smarter, not more dependent. We are strategists, technologists, and
                architects of growth, operating globally, thinking precisely, building what matters.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6">
              <p className="text-xs font-semibold tracking-wide text-primary">CAPABILITY SUMMARY</p>
              <p className="text-sm text-muted-foreground">
                AI-enabled technology development. Custom software built from your specific reality.
                Marketing strategy with forensic-grade data. Lead generation that respects your
                audience’s intelligence. Brand architecture that endures. Analytics that illuminate,
                not overwhelm. Eleven integrated disciplines, one coherent vision: your growth,
                architected with precision.
              </p>
              <div className="mt-2 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-xl font-semibold text-foreground">10M+</p>
                  <p className="text-xs text-muted-foreground">Project valuation managed</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">120k+</p>
                  <p className="text-xs text-muted-foreground">Customer journeys improved</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Active client relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">PHILOSOPHY</p>
          <div className="flex mt-3 flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="max-w-xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                Trust is built in the design phase, not the demo.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              Strategy should arrive before the invoice. Trust should precede the transaction. And
              every solution should be measured by the clarity it creates not the complexity it
              adds. We operate on what we call the Paradigm-Shift Model: we hand you the blueprint
              before you hire the builder. Because if the blueprint is sound, you’ll want the people
              who drew it to construct it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-background/60 p-6 transition-shadow duration-200 hover:shadow-lg"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary">
                  {section.eyebrow}
                </p>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to subpages */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">DEEPER DIVE</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Explore the people and story behind LumiVertex.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              Visit our story to see how LumiVertex evolved from a strategy consultancy into a full
              AI-enabled product studio, then meet the team that architects every engagement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/about/our-story"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-muted/40 p-6 transition-colors hover:border-primary hover:bg-background"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary">ORIGIN</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Our Story</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  From a single strategic engagement to a portfolio of long-term partnerships, learn
                  how LumiVertex was built around one idea: make complex decisions feel inevitable.
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Read the full story →
              </span>
            </Link>

            <Link
              href="/about/our-team"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-muted/40 p-6 transition-colors hover:border-primary hover:bg-background"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary">TEAM</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">Our Team</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Meet the strategists, architects, and builders who design, deploy, and iterate
                  LumiVertex systems alongside your internal team.
                </p>
              </div>
              <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Meet the team →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
