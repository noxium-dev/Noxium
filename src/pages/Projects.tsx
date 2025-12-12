
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { Layout } from '@/components/layout/Layout'
import { Section, SectionHeader, AnimatedCard } from '@/components/ui/section'

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <Layout>
      <Section className="pt-32 md:pt-40">
        <SectionHeader
          badge="Projects"
          title="My Work"
          description="A comprehensive look at my featured projects and open-source contributions."
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedCard key={project.id} delay={index * 0.1}>
                <Card variant="glass-hover" className="group overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Stats overlay */}
                    {project.stats && (
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {project.stats.slice(0, 2).map((stat) => (
                          <div
                            key={stat.label}
                            className="px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border/50"
                          >
                            <div className="text-xs font-semibold text-cosmic-cyan">
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
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cosmic-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="ghost" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="ghost" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>


      </Section>
    </Layout>
  )
}