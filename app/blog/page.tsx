import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Strategic Insights on AI, Marketing & Growth | LumiVertex",
  description:
    "The LumiVertex blog: original thinking on SEO, PPC, social media, content strategy, AI technology, and intelligent business growth.",
};

export default function BlogPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Thinking, published.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              This is where we share perspectives that inform our strategy. Not content for
              content&apos;s sake—ideas that change how you see your market, your technology, and
              your growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <BlogListing posts={blogPosts} />
      </section>

      <section className="border-t border-border/40 bg-muted/10">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <BlogNewsletter />
        </div>
      </section>
    </main>
  );
}
