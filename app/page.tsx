import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LumiVertexParadigm from "@/components/LumiVertexParadigm";
import IndustrySection from "@/components/IndustrySection";
import MeasuredOutcomesSection from "@/components/MeasuredOutcomesSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <LumiVertexParadigm />
      <IndustrySection />
      <MeasuredOutcomesSection />
    </div>
  );
}
