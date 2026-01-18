"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2 } from "lucide-react"

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

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="experience" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Work Experience</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Professional Background
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block lg:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pb-12 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 hidden h-3 w-3 rounded-full border-2 border-primary bg-background lg:left-1/2 lg:block lg:-translate-x-1/2" />

              {/* Date - Left side on desktop */}
              <div className="mb-4 lg:mb-0 lg:pr-12 lg:text-right">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              {/* Content - Right side on desktop */}
              <div className="lg:pl-12">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mb-4 rounded-lg bg-muted/50 px-4 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Project: </span>
                    <span className="text-sm text-foreground">{exp.project}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
