import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LumiVertex",
  description:
    "LumiVertex's privacy policy: how we collect, use, protect, and respect your data. Transparent practices, global compliance, no fine print.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            LEGAL
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your data is not our product. This policy is written in plain language so you know
            exactly how we handle information—and why. No fine print designed to confuse you.
          </p>
        </div>
      </section>

      <article className="border-b border-border/40 bg-muted/10">
        <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">What we collect</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Directly from you:</strong> When you use our
              contact forms, subscribe to a newsletter, or download resources, we may collect your
              name, email address, phone number, company name, and the details of your inquiry or
              request.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Automatically:</strong> We may collect anonymized
              usage data—such as pages visited, time on site, and referral source—to improve your
              experience and our website. This data is not used to build individual profiles for sale
              or unrelated marketing.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              How we use your information
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
              <li>Respond to your inquiries and provide the services you request</li>
              <li>
                Send communications you have opted into—such as our weekly newsletter—only when you
                have chosen to receive them
              </li>
              <li>Improve our website and offerings through aggregated, anonymized analytics</li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">
              We do <strong className="text-foreground">not</strong> sell, rent, or trade your
              personal data to third parties for their marketing purposes.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Data protection
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We use industry-standard safeguards—including encryption where appropriate, secure
              hosting, and access controls—to protect your information. Our practices are designed to
              align with applicable requirements under frameworks such as{" "}
              <strong className="text-foreground">GDPR</strong> and{" "}
              <strong className="text-foreground">CCPA</strong>, including respect for your rights as
              a data subject.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Your rights</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Depending on where you live, you may have the right to access, correct, or delete
              certain personal data we hold about you. You can opt out of marketing communications at
              any time—unsubscribe links are provided in our emails where applicable.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              For privacy-specific requests, contact us at{" "}
              <a
                href="mailto:privacy@lumivertex.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                privacy@lumivertex.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Cookies</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We use essential cookies required for the site to function, and we may use anonymous
              analytics cookies to understand how visitors use our pages. You can manage cookie
              preferences through your browser settings or, where available, through our cookie
              consent tool.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Contact</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Questions about this policy or your data? Email{" "}
              <a
                href="mailto:privacy@lumivertex.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                privacy@lumivertex.com
              </a>
              . We aim to respond within <strong className="text-foreground">48 hours</strong>.
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
