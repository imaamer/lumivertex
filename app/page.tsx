import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Lumivertex | AI Technology, Marketing Strategy & Lead Generation",
  description:
    "Lumivertex converges AI technology, data-driven marketing strategy, and intelligent lead generation to architect measurable business growth. Free strategic consultation.",
};

const VALUE_PILLARS = [
  {
    title: "AI-Enabled Technology",
    description:
      "Custom-built systems that think alongside your team. From intelligent automation to predictive analytics, we develop technology that doesn&apos;t just function, it anticipates.",
  },
  {
    title: "Data-Backed Strategy",
    description:
      "Every recommendation carries a number. Every number carries a rationale. We architect marketing strategies you can validate before a single cent moves.",
  },
  {
    title: "Intelligent Lead Generation",
    description:
      "Precision-engineered pipelines that attract the right conversations, not just traffic. Because volume without intent is noise.",
  },
  {
    title: "Custom Solutions",
    description:
      "Your problem is not generic. Neither is our response. From concept to deployment, we build what doesn&apos;t exist yet because your business requires what no template can provide.",
  },
];

const INDUSTRIES = [
  "SaaS",
  "E-Commerce",
  "Healthcare",
  "Finance",
  "Professional Services",
  "Real Estate",
  "Manufacturing",
];

const PROCESS_STEPS = [
  "We listen.",
  "We diagnose with data.",
  "We hand you the blueprint.",
  "You decide.",
];

const SERVICE_CATEGORIES = [
  "Strategy & Planning",
  "AI & Automation",
  "Lead Generation",
  "Marketing Analytics",
  "Technology Development",
  "Data Architecture",
  "Growth Consulting",
  "Customer Intelligence",
  "Campaign Optimization",
  "Integration & APIs",
  "Performance Measurement",
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Most businesses don&apos;t need more tools. They need clearer thinking.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Lumivertex builds the architecture between where you are and where your
          data says you should be. AI-enabled technology. Strategy with proof.
          Growth you can measure before you invest.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="#contact">Begin With a Conversation →</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">See How We Think →</Link>
          </Button>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            We don&apos;t sell services. We clarify paths.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lumivertex Paradigm */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          The Lumivertex Paradigm
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Here is what makes us unusual: we give you the strategy first.
          Complete. With numbers, logic, and a clear implementation roadmap.
          You can execute it yourself. You can bring it to anyone. Or you can
          ask us to build it. It is a statement about how we believe business
          relationships should begin; with trust, not dependency. We would
          rather you choose us freely than need us blindly.
        </p>
      </section>

      {/* Trusted Across Industries */}
      <section className="border-t border-border bg-muted/20 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-foreground sm:text-2xl">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <Link href="/testimonials" className="underline hover:text-foreground">
              View full list
            </Link>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {INDUSTRIES.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Measured Outcomes */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Measured Outcomes. Not Promises.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We don&apos;t display vanity metrics. We share the decisions we helped
          clarify—and the growth that followed.
        </p>
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/case-studies">Explore Case Studies →</Link>
        </Button>
      </section>

      {/* What We Build - Services Grid */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What We Build
          </h2>
          <p className="mt-3 text-muted-foreground">
            Eleven disciplines. One integrated intelligence. We don&apos;t silo our
            thinking because your growth doesn&apos;t happen in silos.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {SERVICE_CATEGORIES.slice(0, 11).map((service) => (
              <Link
                key={service}
                href="/services"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Paradigm-Shift Process */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          The Paradigm-Shift Process
        </h2>
        <p className="mt-4 text-muted-foreground">
          Step 1: {PROCESS_STEPS[0]} Step 2: {PROCESS_STEPS[1]} Step 3:{" "}
          {PROCESS_STEPS[2]} Step 4: {PROCESS_STEPS[3]} That&apos;s it. No
          obligations. No hidden agendas.
        </p>
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/process">See Our Full Process →</Link>
        </Button>
      </section>

      {/* Free Resources Teaser */}
      <section className="border-t border-border bg-muted/20 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Strategy You Can Use Today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Guides, frameworks, and tools built from the same methodology we use
            with clients. Yours, without condition.
          </p>
          <Button variant="outline" className="mt-6" asChild>
            <Link href="/resources">Browse Free Resources →</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Every significant outcome begins with a single, well-considered
          conversation.
        </h2>
        <p className="mt-4 text-muted-foreground">
          No pitch. No pressure. Just a clear-eyed look at your current position
          and the territory ahead.
        </p>
        <Button className="mt-8" asChild>
          <Link href="#contact">Begin With a Conversation</Link>
        </Button>
      </section>
    </div>
  );
}
