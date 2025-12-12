import { motion } from "framer-motion";
import { FileText, Users, AlertTriangle, Scale, Gavel, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section, AnimatedCard } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to update these terms at any time",
        "Continued use after changes constitutes acceptance of new terms"
      ]
    },
    {
      icon: FileText,
      title: "Use of Services",
      content: [
        "Our services are provided for informational and business purposes",
        "You may not use our services for any unlawful or prohibited activities",
        "You are responsible for maintaining the confidentiality of any account information",
        "We reserve the right to terminate access for violations of these terms"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on this website is owned by Noxium or licensed to us",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Trademarks and logos are the property of their respective owners",
        "We respect intellectual property rights and expect users to do the same"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimers & Limitations",
      content: [
        "Services are provided 'as is' without warranties of any kind",
        "We do not guarantee uninterrupted or error-free service",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount paid for our services"
      ]
    },
    {
      icon: Gavel,
      title: "Governing Law",
      content: [
        "These terms are governed by applicable local and international laws",
        "Any disputes will be resolved through binding arbitration when possible",
        "You agree to the exclusive jurisdiction of competent courts",
        "If any provision is invalid, the remainder of these terms remain in effect"
      ]
    }
  ];

  return (
    <Layout>
      <Section className="pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="cosmic" className="mb-4">
              <FileText size={16} className="mr-2" />
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms & <span className="text-gradient-cosmic">Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Clear and fair terms that govern the use of our services and protect both parties.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cosmic-cyan" />
                Last Updated: December 2024
              </div>
            </div>
          </motion.div>

          <div className="grid gap-8 mb-16">
            {sections.map((section, index) => (
              <AnimatedCard key={section.title} delay={index * 0.1}>
                <Card variant="glass" className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-cosmic-purple/10 flex items-center justify-center flex-shrink-0">
                      <section.icon size={24} className="text-cosmic-purple" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{section.title}</h2>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-cosmic-purple mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={0.6}>
            <Card variant="glass" className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please don't hesitate to contact us. 
                  We're committed to clear communication and fair business practices.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cosmic-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <FileText size={24} className="text-cosmic-cyan" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Inquiries</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For legal questions or contract discussions
                  </p>
                  <a
                    href="mailto:noxiumdev@proton.me"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-cyan text-white rounded-lg hover:bg-cosmic-cyan/90 transition-colors text-sm font-medium"
                  >
                    Contact Legal
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cosmic-purple/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={24} className="text-cosmic-purple" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">General Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For general questions about our services
                  </p>
                  <a
                    href="mailto:noxiumdev@proton.me"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-purple text-white rounded-lg hover:bg-cosmic-purple/90 transition-colors text-sm font-medium"
                  >
                    Get Support
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedCard>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;