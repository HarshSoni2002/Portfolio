"use client"

import { motion } from "framer-motion"
import { Briefcase, Code2, Database, Layers } from "lucide-react"
import { PageLayout } from "@/components/page-layout"

const highlights = [
  {
    icon: Code2,
    title: "MERN Stack Developer",
    description: "Building modern web apps with React, Node.js, Express & MongoDB",
  },
  {
    icon: Layers,
    title: "CRM & SaaS Builder",
    description: "Creating scalable CRM systems and SaaS applications",
  },
  {
    icon: Briefcase,
    title: "Admin Dashboards",
    description: "Designing intuitive admin panels and analytics dashboards",
  },
  {
    icon: Database,
    title: "REST APIs & Auth",
    description: "Implementing secure APIs with JWT authentication",
  },
]

export default function AboutPage() {
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
            <span className="text-sm font-medium uppercase tracking-widest text-primary">About Me</span>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              System Engineer at TCS
            </h1>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a{" "}
                <span className="font-medium text-foreground">
                  System Engineer at Tata Consultancy Services (TCS)
                </span>
                , currently working on the Johnson & Johnson project, specifically on{" "}
                <span className="font-medium text-foreground">Opcenter Manufacturing</span> — an enterprise-grade
                manufacturing execution system.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My passion lies in building full-stack web applications using the{" "}
                <span className="font-medium text-foreground">MERN stack</span>. I specialize in creating responsive
                user interfaces, robust APIs, and scalable architectures that solve real business problems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive on turning complex requirements into clean, maintainable code and continuously exploring new
                technologies to enhance my development toolkit.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
