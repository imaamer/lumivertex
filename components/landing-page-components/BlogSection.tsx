"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { featuredBlogPosts } from "@/data/blog-posts";

const categories = ["General", "Marketing", "Design", "Development", "Testing"];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl max-w-xl">
            Dive into the Latest
            <br />
            Trends in Our Blog
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#48e5c2] text-foreground border border-[#48e5c2] shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link
              href="/blog"
              className="group ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline transition-colors duration-300 hover:bg-primary/90"
            >
              Browse All
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.5}
                aria-hidden
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                    {post.displayCategory}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  Read More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
