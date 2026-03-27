import HeroSection from "@/components/landing-page-components/HeroSection";
import FeaturesSection from "@/components/landing-page-components/FeaturesSection";
import LumiVertexParadigm from "@/components/landing-page-components/LumiVertexParadigm";
import IndustrySection from "@/components/landing-page-components/IndustrySection";
import WhatWeBuildSection from "@/components/landing-page-components/WhatWeBuildSection";
import LumivertexProcessSection from "@/components/landing-page-components/LumivertexProcessSection";
import StrategicResources from "@/components/landing-page-components/StrategicResources";
import BlogSection from "@/components/landing-page-components/BlogSection";
import CTASection from "@/components/landing-page-components/CTASection";
import MeasuredOutcomesSection from "@/components/landing-page-components/MeasuredOutcomesSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <LumiVertexParadigm />
      <MeasuredOutcomesSection />
      <IndustrySection />
      <WhatWeBuildSection />
      <LumivertexProcessSection />
      <StrategicResources />
      <BlogSection />
      <CTASection />
    </div>
  );
}
