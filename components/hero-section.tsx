"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:px-8">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            System Engineer at TCS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          MERN Stack Developer & <span className="text-primary">System Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl"
        >
          Building scalable, full-stack web applications with <span className="font-medium text-foreground">React</span>
          , <span className="font-medium text-foreground">Next.js</span>,{" "}
          <span className="font-medium text-foreground">Node.js</span>, and{" "}
          <span className="font-medium text-foreground">MongoDB</span>. Specialized in enterprise solutions, CRM
          systems, and admin dashboards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="/Exp.pdf" download="Exp.pdf">
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-border bg-transparent text-foreground hover:bg-muted"
            asChild
          >
            <Link href="/projects">
              <FolderOpen className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Link
            href="/about"
            className="inline-flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="mb-2 text-sm">Learn more about me</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
