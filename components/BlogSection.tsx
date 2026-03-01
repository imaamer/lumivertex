"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = ["General", "Marketing", "Design", "Development", "Testing"];

const posts = [
  {
    category: "Artificial intelligence",
    date: "21, Jun, 2023",
    title: "5 Ways AI is Revolutionizing Everyday Businesses",
    href: "#",
    image: "/images/blog-1.jpg",
  },
  {
    category: "Cybersecurity",
    date: "15, Jul, 2023",
    title: "The Rising Threats and How to Stay Ahead of the Curve",
    href: "#",
    image: "/images/blog-2.jpg",
  },
  {
    category: "IT Company",
    date: "29, May, 2023",
    title: "5 Hacks for Managing Your IT Infrastructure",
    href: "#",
    image: "/images/blog-3.jpg",
  },
];

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
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-background text-foreground border border-border shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <a
              href="#"
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted shrink-0"
            >
              Browse All
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
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
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
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
