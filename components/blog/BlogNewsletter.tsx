"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogNewsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 600);
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-primary/25 bg-primary/5 px-6 py-10 text-center sm:px-10">
        <p className="text-lg font-semibold text-foreground">You&apos;re on the list.</p>
        <p className="mt-2 text-sm text-muted-foreground">We&apos;ll be in touch weekly—no spam.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border/80 bg-muted/20 px-6 py-10 sm:px-10 sm:py-12">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        One email. Once a week. Only the ideas worth your time.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        We don&apos;t spam and we don&apos;t sell through our newsletter. We share the single most
        valuable strategic insight we&apos;ve encountered that week.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <label htmlFor="blog-newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="blog-newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          className="h-12 min-w-0 flex-1 rounded-full border border-border bg-background px-5 text-base text-foreground outline-none ring-primary/30 placeholder:text-muted-foreground focus:border-primary focus:ring-4"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 shrink-0 rounded-full px-8"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
