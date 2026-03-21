import type { Metadata } from "next";
import SeoHeroSection from "./SeoHeroSection";
import SeoFrameworkSection from "./SeoFrameworkSection";
import SeoCallToActionSection from "./SeoCallToActionSection";

export const metadata: Metadata = {
  title: "SEO Services | Lumivertex",
  description:
    "Visibility is not a trick. It's an architecture. We build relevance, structure, and authority so search engines reward you.",
};

export default function SEOServicesPage() {
  return (
    <main className="bg-background">
      <SeoHeroSection />
      <SeoFrameworkSection />
      <SeoCallToActionSection />
    </main>
  );
}
