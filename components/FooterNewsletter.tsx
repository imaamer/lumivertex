"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterNewsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 500);
  }

  if (status === "done") {
    return (
      <p className="text-sm text-muted-foreground">Thanks — you&apos;re subscribed.</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3"
    >
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        className="h-12 min-w-0 flex-1 rounded-full border border-border/80 bg-background/80 px-5 text-sm text-foreground shadow-sm outline-none ring-primary/20 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 shrink-0 rounded-full gap-2 px-7 shadow-md"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Subscribe Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
