const teamPrinciples = [
  {
    title: "Strategy-first builders",
    body: "Every engagement is led by strategists who write in SQL as comfortably as they write in slides. They translate commercial goals into technical architectures your team can actually operate.",
  },
  {
    title: "Full-stack collaboration",
    body: "Design, data, and engineering sit at the same table — from discovery to deployment. That&apos;s how we ship systems that are as usable for your team as they are powerful under the hood.",
  },
  {
    title: "Ownership over handoffs",
    body: "We stay close to the work long after launch, monitoring performance and iterating alongside your operators. Our goal is to make every handoff feel like an upgrade, not a risk.",
  },
];

const teamPods = [
  {
    label: "Strategy & Architecture",
    description:
      "Partners with executive teams to define growth mandates, prioritize opportunities, and design the technical blueprint for each engagement.",
  },
  {
    label: "Data & AI",
    description:
      "Builds the intelligence layer — from data models and pipelines to recommendation engines and generative AI workflows.",
  },
  {
    label: "Product & Experience",
    description:
      "Owns the user journey, from interface design to day-one adoption, ensuring every system feels intuitive and on-brand.",
  },
  {
    label: "Engineering",
    description:
      "Implements robust, scalable platforms using modern stacks and best practices that keep technical debt near zero.",
  },
];

export default function OurTeamPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ABOUT US · OUR TEAM
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Quietly brilliant. Relentlessly precise.
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              We don’t hire for credentials alone. We hire for the quality of someone’s thinking and
              the integrity of their instincts. Every member of LumiVertex brings a rare
              combination: deep technical fluency and genuine strategic intuition.
            </p>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              We are engineers who understand narrative. Strategists who read data like literature.
              Designers who think in systems. A global team, connected by a shared belief that
              intelligence, applied with care, changes outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">HOW WE SHOW UP</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            The principles that shape every LumiVertex engagement.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teamPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-background/70 p-6"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">TEAM STRUCTURE</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Cross-functional pods built around outcomes, not org charts.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              Each client team is composed of a dedicated pod that owns discovery, design,
              implementation, and optimization — so context never gets lost between phases.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {teamPods.map((pod) => (
              <div
                key={pod.label}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/40 p-6"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">{pod.label}</h3>
                <p className="text-sm text-muted-foreground">{pod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-dashed border-border bg-background/60 px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary">JOIN OUR TEAM</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              We&apos;re always meeting operators, builders, and thinkers who see around corners.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              If you&apos;re excited by systems thinking, AI-enabled products, and long-term client
              partnerships, we&apos;d love to stay in touch. Reach out via our contact page and
              share how you like to work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
