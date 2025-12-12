import { motion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section, AnimatedCard } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { Marquee, MarqueeItem } from "@/components/ui/marquee";
import { 
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, 
  SiPostgresql, SiGraphql, SiAmazonwebservices, SiDocker, SiFigma, SiGit, SiVercel 
} from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  "React": <SiReact className="w-7 h-7 text-[#61DAFB]" />,
  "TypeScript": <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
  "Next.js": <SiNextdotjs className="w-7 h-7 text-white" />,
  "Node.js": <SiNodedotjs className="w-7 h-7 text-[#339933]" />,
  "Tailwind CSS": <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
  "PostgreSQL": <SiPostgresql className="w-7 h-7 text-[#4169E1]" />,
  "GraphQL": <SiGraphql className="w-7 h-7 text-[#E10098]" />,
  "AWS": <SiAmazonwebservices className="w-7 h-7 text-[#FF9900]" />,
  "Docker": <SiDocker className="w-7 h-7 text-[#2496ED]" />,
  "Figma": <SiFigma className="w-7 h-7 text-[#F24E1E]" />,
  "Git": <SiGit className="w-7 h-7 text-[#F05032]" />,
  "Vercel": <SiVercel className="w-7 h-7 text-white" />,
};


const About = () => {
  return (
    <Layout>
      <Section className="pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="cosmic" className="mb-4">About Me</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-gradient-cosmic">Noxium</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in creating expressive front-end UIs and robust backend systems.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From concept to production, I design, code, and ship fast, accessible experiences. I believe great software is built with attention to detail, clean architecture, and a deep understanding of user needs.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cosmic-cyan" />
                Remote / Worldwide
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cosmic-cyan" />
                3+ Years Experience
              </div>
            </div>
          </motion.div>

          <AnimatedCard delay={0.2}>
            <Card variant="glass" className="p-8">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award size={20} className="text-cosmic-cyan" />
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="ghost" className="px-3 py-1.5">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </AnimatedCard>
        </div>
      </Section>

      {/* Skills Marquee */}
      <Section className="py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Technologies & <span className="text-gradient-cosmic">Frameworks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences.
          </p>
        </div>
        
        <Marquee speed="slow" className="mb-6">
          {skills.map((skill) => (
            <MarqueeItem key={skill.name}>
              <div className="flex items-center gap-3">
                {iconMap[skill.name]}
                <div className="flex flex-col">
                  <span className="text-foreground font-medium text-sm">{skill.name}</span>
                  <span className="text-muted-foreground text-xs">{skill.category}</span>
                </div>
              </div>
            </MarqueeItem>
          ))}
        </Marquee>
        
        <Marquee speed="slow" direction="right">
          {[...skills].reverse().map((skill) => (
            <MarqueeItem key={skill.name + "-2"}>
              <div className="flex items-center gap-3">
                {iconMap[skill.name]}
                <div className="flex flex-col">
                  <span className="text-foreground font-medium text-sm">{skill.name}</span>
                  <span className="text-muted-foreground text-xs">{skill.category}</span>
                </div>
              </div>
            </MarqueeItem>
          ))}
        </Marquee>
      </Section>
    </Layout>
  );
};

export default About;
