"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

const SITE_DOMAIN = "lumivertex.com";

export function NotFoundSearch() {
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(`site:${SITE_DOMAIN} ${q}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Search
      </p>
      <form onSubmit={handleSubmit} className="mt-3">
        <label htmlFor="not-found-search" className="sr-only">
          Search the site
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="not-found-search"
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Looking for something specific?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full rounded-full border-2 border-border bg-background pl-12 pr-4 text-base text-foreground outline-none ring-primary/30 transition-[border-color,box-shadow] placeholder:text-muted-foreground focus:border-primary focus:ring-4"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Search
          </button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Opens a Google search scoped to {SITE_DOMAIN}.
        </p>
      </form>
    </div>
  );
}
