"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Fast React Pizza Co",
    description:
      "A modern pizza ordering web app with real-time order tracking, cart management, and a clean UI built with React.",
    tech: ["React", "Redux", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Food-Mania",
    description:
      "Full-stack food delivery application built with Next.js and the MERN stack. Features user authentication and order management.",
    tech: ["Next.js", "MongoDB", "Express", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Custom CRM System",
    description:
      "Enterprise CRM solution with contact management, deal pipelines, and analytics dashboard for sales teams.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This responsive developer portfolio showcasing projects, skills, and professional experience with smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="projects" className="bg-muted/30 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Featured Projects</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Recent Work
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border bg-transparent text-foreground hover:bg-muted"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:bg-muted hover:text-foreground"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
