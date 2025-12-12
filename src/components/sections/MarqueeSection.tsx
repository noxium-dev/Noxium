import { Marquee, MarqueeItem } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { skills } from "@/lib/data";
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

export function MarqueeSection() {
  return (
    <Section className="py-12 md:py-16">
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
  );
}