import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader, AnimatedCard } from "@/components/ui/section";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <SectionHeader
        badge="Projects"
        title="Featured Work"
        description="A selection of projects I've shipped, from SaaS platforms to AI-powered tools."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {featuredProjects.slice(0, 2).map((project, index) => (
          <AnimatedCard key={project.id} delay={index * 0.1}>
            <Card variant="glass-hover" className="group overflow-hidden h-full">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Stats overlay */}
                {project.stats && (
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    {project.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50"
                      >
                        <div className="text-sm font-semibold text-cosmic-cyan">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="cosmic">{project.category}</Badge>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cosmic-cyan transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cosmic-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="ghost">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        ))}
      </div>

      {/* Third project - full width */}
      {featuredProjects[2] && (
        <AnimatedCard delay={0.2}>
          <Card variant="glass-hover" className="group overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-48 md:h-full min-h-[300px] overflow-hidden">
                <img
                  src={featuredProjects[2].imageUrl}
                  alt={featuredProjects[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:bg-gradient-to-l" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <Badge variant="cosmic" className="w-fit mb-4">
                  {featuredProjects[2].category}
                </Badge>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-cosmic-cyan transition-colors">
                  {featuredProjects[2].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredProjects[2].description}
                </p>
                
                {featuredProjects[2].stats && (
                  <div className="flex gap-6 mb-6">
                    {featuredProjects[2].stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-gradient-cosmic">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProjects[2].tags.map((tag) => (
                    <Badge key={tag} variant="ghost">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="cosmic-outline" className="w-fit" asChild>
                  <a
                    href={featuredProjects[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </AnimatedCard>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg" asChild>
          <Link to="/projects">
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}
