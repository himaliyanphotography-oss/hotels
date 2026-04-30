"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Users, Wifi, Coffee, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Professional Offices",
    description: "Fully equipped private offices with high-speed internet and premium furnishings.",
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description: "State-of-the-art conference rooms for presentations and client meetings.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Dedicated fiber connectivity ensuring seamless connectivity.",
  },
  {
    icon: Coffee,
    title: "Lounge & Cafe",
    description: "Comfortable spaces to relax and network with other professionals.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Round-the-clock access to your workspace whenever you need it.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Advanced security systems and professional staff for your peace of mind.",
  },
]

export function Features() {
  const [visibleItems, setVisibleItems] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = containerRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-accent/10 rounded-full blur-3xl animate-float-up" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl animate-float-up"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-in-up">Premium Amenities</h2>
          <p
            className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Everything you need for a productive and comfortable work environment
          </p>
        </div>

        {/* Features grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`group p-8 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 transform hover:shadow-lg hover:shadow-primary/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/25 to-accent/15 rounded-lg group-hover:from-primary/40 group-hover:to-accent/25 transition-all group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

                {/* Hover line with gradient */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
