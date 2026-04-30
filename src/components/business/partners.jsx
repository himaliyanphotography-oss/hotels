"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"




export function Partners() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h2>
      
        </motion.div>

        {/* Cards */}
       */
      </div>
    </section>
  )
}
