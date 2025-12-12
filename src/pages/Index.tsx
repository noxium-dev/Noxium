import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProjectsSection />
      <NewsletterSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
