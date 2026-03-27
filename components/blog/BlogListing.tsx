"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogFilterCategory, BlogPost } from "@/data/blog-posts";
import { blogFilterCategories } from "@/data/blog-posts";

type Props = {
  posts: BlogPost[];
};

export function BlogListing({ posts }: Props) {
  const [active, setActive] = useState<BlogFilterCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.filterCategory === active);
  }, [posts, active]);

  return (
    <div>
      <div className="mb-10 -mx-1 flex gap-1.5 overflow-x-auto pb-2 sm:mx-0 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
            active === "All"
              ? "border border-[#48e5c2] bg-[#48e5c2] text-foreground shadow-sm"
              : "border border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {blogFilterCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
              active === cat
                ? "border border-[#48e5c2] bg-[#48e5c2] text-foreground shadow-sm"
                : "border border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center text-muted-foreground">
          No posts in this category yet. Try another filter or view all.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <Link href={post.href} className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{post.displayCategory}</span>
                  <span className="mx-1.5 text-border" aria-hidden>
                    |
                  </span>
                  {post.date}
                  <span className="mx-1.5 text-border" aria-hidden>
                    |
                  </span>
                  {post.readTime}
                </p>
                <h2 className="mt-3 font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Read
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
