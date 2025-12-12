import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Mail, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section, AnimatedCard } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Contact information when you reach out via email or contact forms",
        "Usage data and analytics to improve our services",
        "Technical information like IP address and browser type",
        "Newsletter subscription data if you opt-in to our updates"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested services",
        "To send project updates and communications",
        "To improve our website and user experience",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted in transit and at rest",
        "Access to personal information is strictly limited",
        "We regularly review and update our security practices"
      ]
    },
    {
      icon: Mail,
      title: "Third-Party Services",
      content: [
        "We use analytics services to understand website usage",
        "Email services for communication and newsletters",
        "Hosting providers with strong privacy commitments",
        "All third parties are bound by strict privacy agreements"
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
              <Shield size={16} className="mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Privacy <span className="text-gradient-cosmic">Matters</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we handle your data.
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
                    <div className="w-12 h-12 rounded-lg bg-cosmic-cyan/10 flex items-center justify-center flex-shrink-0">
                      <section.icon size={24} className="text-cosmic-cyan" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{section.title}</h2>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-cosmic-cyan mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={0.5}>
            <Card variant="glass" className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us About Privacy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have questions about this privacy policy or how we handle your data? 
                We're here to help and committed to transparency.
              </p>
              <a
                href="mailto:noxiumdev@proton.me"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cosmic-cyan text-white rounded-lg hover:bg-cosmic-cyan/90 transition-colors font-medium"
              >
                <Mail size={20} />
                Contact Us
              </a>
            </Card>
          </AnimatedCard>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;