import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | LumiVertex",
  description: "Answers to common questions about working with LumiVertex.",
};

export default function FaqPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground">FAQ</h1>
        <p className="mt-4 text-muted-foreground">
          We&apos;re building this page out. In the meantime,{" "}
          <Link href="/contact-us" className="font-medium text-primary underline-offset-4 hover:underline">
            start a conversation
          </Link>{" "}
          and we&apos;ll answer anything directly.
        </p>
      </section>
    </main>
  );
}
