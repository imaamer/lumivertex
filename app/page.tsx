import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LumiVertexParadigm from "@/components/LumiVertexParadigm";
import IndustrySection from "@/components/IndustrySection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import LumivertexProcessSection from "@/components/LumivertexProcessSection";
import StrategicResources from "@/components/StrategicResources";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import MeasuredOutcomesSection from "@/components/MeasuredOutcomesSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <LumiVertexParadigm />
      <IndustrySection />
      <MeasuredOutcomesSection />
      <WhatWeBuildSection />
      <LumivertexProcessSection />
      <StrategicResources />
      <BlogSection />
      <CTASection />
    </div>
  );
}
