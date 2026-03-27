import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | LumiVertex",
  description:
    "LumiVertex's terms of service: clear, fair terms governing the use of our website and services. Written in language humans can understand.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            LEGAL
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            These terms govern your use of the LumiVertex website and services. We&apos;ve written
            them to be clear, fair, and free of unnecessary legal architecture. If something is
            unclear, contact us—we&apos;d rather explain than litigate.
          </p>
        </div>
      </section>

      <article className="border-b border-border/40 bg-muted/10">
        <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Use of this website</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              This website is provided for informational purposes and as a gateway to LumiVertex&apos;s
              services. You may browse, download publicly available resources, and submit inquiries
              through our contact forms. Unauthorized use, scraping, or reproduction of content is
              prohibited.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Intellectual property
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              All content on this website—including copy, design, graphics, and strategic frameworks
              in our published resources—is the intellectual property of LumiVertex unless otherwise
              stated. Free resources are licensed for personal and internal business use only.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Client work ownership
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              All work produced by LumiVertex on behalf of a client—including strategies, code,
              creative assets, and deliverables—becomes the client&apos;s intellectual property upon
              full payment. We retain no proprietary claims over client work.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Service agreements
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Specific service engagements are governed by individual proposals and statements of
              work, which take precedence over these general terms where applicable.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Limitation of liability
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              LumiVertex provides strategic advice and implementation services. While we work to
              produce measurable outcomes, we cannot guarantee specific results, as external factors
              beyond our control influence business performance. Our recommendations are based on
              data and expertise, not assurances.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Governing law</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              These terms are governed by applicable international commercial law. Any disputes will
              be resolved through good-faith negotiation first, and mediation if necessary.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Contact</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Questions about these terms? Email{" "}
              <a
                href="mailto:info@lumivertex.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                info@lumivertex.com
              </a>
              .
            </p>
            <p className="pt-4 text-sm italic text-muted-foreground">
              Last updated: February 2026
            </p>
            <p className="pt-6 text-sm">
              <Link
                href="/"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                ← Back to home
              </Link>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
