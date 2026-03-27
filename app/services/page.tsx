import { ServicesHeroSection } from "@/components/services-page-components/ServicesHeroSection";
import { ServicesGridSection } from "@/components/services-page-components/ServicesGridSection";
import { ServicesSupportSection } from "@/components/services-page-components/ServicesSupportSection";
import { ServicesTestimonialsSection } from "@/components/services-page-components/ServicesTestimonialsSection";
import { ServicesFAQSection } from "@/components/services-page-components/ServicesFAQSection";
import CTASection from "@/components/landing-page-components/CTASection";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesSupportSection />
      <ServicesTestimonialsSection />
      <ServicesFAQSection />
      <CTASection />
    </main>
  );
}
