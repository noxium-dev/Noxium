import { motion } from "framer-motion";
import { Quote, Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader, AnimatedCard } from "@/components/ui/section";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="What Clients Say"
        description="Feedback from people I've had the pleasure of working with."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedCard key={testimonial.id} delay={index * 0.1}>
            <Card variant="glass" className="h-full p-6 flex flex-col relative">
              <div className="absolute top-4 right-4">
                <Pin size={20} className="text-cosmic-cyan/50 hover:text-cosmic-cyan transition-colors" />
              </div>
              <Quote
                size={24}
                className="text-cosmic-cyan/30 mb-4"
              />
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </Card>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}
