import { motion } from "framer-motion";
import { Palette, Layers, Plug, Zap, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, AnimatedCard } from "@/components/ui/section";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Layers,
  Plug,
  Zap,
};

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader
        badge="Services"
        title="What I Can Do For You"
        description="From beautiful interfaces to scalable backends, I deliver end-to-end solutions that drive results."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedCard key={service.id} delay={index * 0.1}>
              <Card variant="glass-hover" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-cyan/20 to-cosmic-purple/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-cosmic-cyan" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
