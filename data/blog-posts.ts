/**
 * Shared blog posts — same images & core copy as the landing Blog section.
 * `filterCategory` maps posts to /blog filter tabs; `displayCategory` matches the landing labels.
 */

export const blogFilterCategories = [
  "AI & Technology",
  "SEO",
  "PPC",
  "Social Media",
  "Content",
  "Web Design",
  "Email Marketing",
  "Analytics",
  "Brand",
  "Lead Generation",
  "Industry Insights",
] as const;

export type BlogFilterCategory = (typeof blogFilterCategories)[number];

export type BlogPost = {
  id: string;
  /** Shown on cards — identical to landing section labels */
  displayCategory: string;
  /** Which filter tab includes this post */
  filterCategory: BlogFilterCategory;
  /** Exact date string from landing section */
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    displayCategory: "Artificial intelligence",
    filterCategory: "AI & Technology",
    date: "21, Jun, 2023",
    readTime: "6 min read",
    title: "5 Ways AI is Revolutionizing Everyday Businesses",
    excerpt:
      "From automation to decision support, AI is reshaping how teams operate day to day. Here are five shifts we see in the field—and what they mean for your roadmap.",
    image: "/images/blog-1.jpg",
    href: "#",
  },
  {
    id: "2",
    displayCategory: "Cybersecurity",
    filterCategory: "Industry Insights",
    date: "15, Jul, 2023",
    readTime: "8 min read",
    title: "The Rising Threats and How to Stay Ahead of the Curve",
    excerpt:
      "Threat landscapes evolve faster than quarterly planning cycles. A practical lens on risk, resilience, and where to invest before the next headline breaks.",
    image: "/images/blog-2.jpg",
    href: "#",
  },
  {
    id: "3",
    displayCategory: "IT Company",
    filterCategory: "AI & Technology",
    date: "29, May, 2023",
    readTime: "5 min read",
    title: "5 Hacks for Managing Your IT Infrastructure",
    excerpt:
      "Your stack doesn’t need more tools—it needs clearer ownership and fewer surprises. Shortcuts for diagnostics, vendors, and uptime your team can use this week.",
    image: "/images/blog-3.jpg",
    href: "#",
  },
];

/** First three posts for the home page section (same as full list for now). */
export const featuredBlogPosts = blogPosts;
