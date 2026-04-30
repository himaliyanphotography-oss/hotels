"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background animate-gradient-shift" />

        {/* Floating gradient orbs with dark purple/blue */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/15 rounded-full blur-3xl animate-float-up" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-3xl animate-float-up"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Additional motion elements */}
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl animate-float-up"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className={`inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary/25 to-accent/15 rounded-full transform transition-all duration-700 border border-primary/40 backdrop-blur-sm ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="text-sm font-semibold text-primary">Spellmount Resort Kausani</span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight transform transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Business Center
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-rotate-gradient">
            Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience premium workspace solutions in the heart of Kausani. Connect with leading financial advisors,
          consultants, and entrepreneurs.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-300 hover:scale-105">
            Learn More
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95 duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 transform transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "3", label: "Premium Partners" },
            { number: "500+", label: "Sq Ft Workspace" },
            { number: "24/7", label: "Access Available" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center animate-slide-in-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
