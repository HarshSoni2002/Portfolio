"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"
import { PageLayout } from "@/components/page-layout"

const experiences = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "2023 – Present",
    project: "Johnson & Johnson – Opcenter Manufacturing",
    responsibilities: [
      "Configuration and modeling of manufacturing execution systems",
      "Instance updates and system maintenance",
      "Enterprise system customization for client requirements",
      "Collaboration with cross-functional teams on complex integrations",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <PageLayout>
      <section className="px-6 py-32 pt-28 lg:px-8 lg:py-40 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Work Experience</span>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Professional Background
            </h1>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border lg:left-8 lg:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pb-12 last:pb-0 lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 hidden h-3 w-3 rounded-full border-2 border-primary bg-background lg:left-[26px] lg:block" />

                {/* Content */}
                <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 text-primary">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-6 rounded-lg bg-muted/50 px-4 py-3">
                    <span className="text-sm font-medium text-muted-foreground">Project: </span>
                    <span className="text-sm text-foreground">{exp.project}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
