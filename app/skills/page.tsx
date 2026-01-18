"use client"

import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "npm"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Technical Writing"],
  },
]

export default function SkillsPage() {
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
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Technical Skills</span>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Technologies I Work With
            </h1>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
