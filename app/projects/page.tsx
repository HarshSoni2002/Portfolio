"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

const projects = [
  {
    title: "Supply Sense",
    description:
      "CRMS along with interactive dashboard for financial data visualization, inventory management system and analysis, helping executives make data-driven decisions.",
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "https://supply-sense.vercel.app/",
    githubUrl: "https://github.com/HarshSoni2002/supply-sense",
    image: "/supplysense.png",
  },
  {
    title: "Customer Relationship Management System",
    description:
      "A custom CRM solution that improved sales team productivity and customer satisfaction for a financial services company.",
    tech: ["React.js", "MongoDB", "Express", "Node.js"],
    liveUrl: "https://crm.gomaterial.in/login",
    githubUrl: "https://github.com/housebanao-main/gomaterial-crm-client",
    image: "/crm.png",
  },
  {
    title: "House Banao Web App",
    description:
      "A web application that connects homeowners with contractors for home renovation projects, featuring project management tools and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://www.housebanao.com/",
    githubUrl: "https://github.com/housebanao-main/housebanao-v2",
    image: "/housebanao.png",
  },
  {
    title: "GoMaterial E-Commerce Platform",
    description:
      "A scalable e-commerce platform with advanced product filtering, user authentication, and payment processing integration.",
    tech: ["Next.js", "Tailwind CSS", "React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://www.gomaterial.in/",
    githubUrl: "https://github.com/housebanao-main/goMaterial-Website",
    image: "/gomaterial.png",
  },
]

export default function ProjectsPage() {
  return (
    <PageLayout>
      <section className="bg-muted/30 px-6 py-32 pt-28 lg:px-8 lg:py-40 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Featured Projects</span>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Recent Work
            </h1>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image - Fixed width on left */}
                  <div className="h-48 w-full shrink-0 overflow-hidden bg-muted sm:h-auto sm:w-40 lg:w-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content - Takes remaining space */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-4 lg:p-5">
                    <h3 className="mb-2 truncate text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 border-border bg-transparent px-3 text-xs text-foreground hover:bg-muted"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-3 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
