import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lumivertex.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/our-story",
    "/about/our-team",
    "/about/careers",
    "/blog",
    "/contact-us",
    "/how-we-work",
    "/partnership",
    "/privacy-policy",
    "/terms",
    "/faq",
    "/services",
    "/services/ai",
    "/services/lead-generation",
    "/services/seo",
    "/services/ppc",
    "/services/social-media-marketing",
    "/services/content-marketing",
    "/services/ui-ux",
    "/services/email-marketing",
    "/services/business-intelligence",
    "/services/branding",
    "/services/reputation",
  ];

  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
