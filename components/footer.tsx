"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t border-border px-6 py-8 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Harsh Soni. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </motion.footer>
  )
}
