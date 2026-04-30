"use client"
import { useState } from "react"
import BusinessCenterAnnouncement from "../../components/business/business-center-announcement"
import { Features } from "../../components/business/features"
import { Hero } from "../../components/business/hero"
import { Partners } from "../../components/business/partners"

export default function Home() {
 const [showAnnouncement, setShowAnnouncement] = useState(true)
  return (
    <main className="min-h-screen bg-background">
        {showAnnouncement && <BusinessCenterAnnouncement onClose={() => setShowAnnouncement(false)} />}
      <Hero />
      <Features />
      <Partners />
    </main>
  )
}
