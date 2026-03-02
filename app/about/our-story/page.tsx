export default function OurStoryPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ABOUT US · OUR STORY
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              We didn’t start with a service to sell. We started with a problem to solve.
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              The problem was simple to name and difficult to fix: businesses were spending enormous
              sums on agencies that couldn’t explain their own recommendations. Dashboards full of
              metrics. Decks full of jargon. And underneath it all, no architecture. No logic
              connecting strategy to outcome.
            </p>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              LumiVertex was founded to close that gap. Not with louder marketing, but with clearer
              thinking. We built a company where the strategy is the product and the execution is a
              choice, not an obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">ORIGIN</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                The problem wasn&apos;t tools. It was translation.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                LumiVertex began as a small advisory practice working with growth-stage leadership
                teams. Our remit was narrow: clarify revenue strategy and remove operational
                friction. We kept running into the same pattern — the plans were sound, but the
                systems they relied on were fragmented, slow, and impossible to measure.
              </p>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Instead of handing off a roadmap and walking away, we started staying in the room
                with product and engineering. That&apos;s where LumiVertex was born: at the
                intersection of commercial strategy, AI, and the code that activates both.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <h3 className="text-sm font-semibold text-foreground">From hypothesis to practice</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our first wins came from a handful of high-leverage experiments: AI-assisted
                underwriting, automated pipeline triage, and revenue dashboards that leaders
                actually opened every morning. Those experiments turned into playbooks. The
                playbooks turned into a repeatable architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">EVOLUTION</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                From consultancy to an AI-enabled product studio.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                What began as a strategic consultancy evolved into something more complete: a
                full-spectrum technology and growth partner, powered by artificial intelligence and
                governed by a single rule, every recommendation must be provable before it’s
                profitable.
              </p>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Today, we operate across continents and industries. We develop custom AI systems. We
                architect marketing infrastructure. We generate leads with surgical precision. But
                the founding conviction remains unchanged: make people smarter first. Earn their
                business second.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h3 className="text-sm font-semibold text-foreground">Where we focus today</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Revenue engines, customer experience platforms, and internal tools that act as the
                  &quot;brain&quot; of the business. We specialize in high-stakes systems where
                  latency, accuracy, and usability all matter at once.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <h3 className="text-sm font-semibold text-foreground">How we measure success</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  We track time-to-decision, cost-per-opportunity, win rates, and operational
                  efficiency before and after every deployment. Our benchmark is simple: if the
                  system were turned off, leadership should immediately feel the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-primary text-primary-foreground px-6 py-10 sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80">
              MISSION STATEMENT
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Turn intelligent ideas into systems that compound.
            </h2>
            <p className="mt-4 max-w-3xl text-sm sm:text-base">
              Our mission is to replace guesswork with architecture. We help teams move from
              isolated experiments to integrated, AI-enabled platforms that make every play more
              precise. The outcome we optimize for is simple: businesses that get smarter every
              quarter without getting heavier.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
