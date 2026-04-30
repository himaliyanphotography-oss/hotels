"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function BusinessCenterAnnouncement({ onClose }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    // <div
    //   className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
    //     isVisible ? "bg-black/50" : "bg-black/0 pointer-events-none"
    //   }`}
    //   onClick={handleClose}
    // >
    //   <div
    //     className={`relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
    //       isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    //     }`}
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     {/* Gradient background */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

    //     {/* Content */}
    //     <div className="relative p-8 text-center">
    //       {/* Close button */}
    //       <button
    //         onClick={handleClose}
    //         className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
    //       >
    //         <X className="w-5 h-5 text-foreground/60" />
    //       </button>

    //       {/* Badge */}
    //       <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
    //         <span className="text-sm font-semibold text-accent">Coming Soon</span>
    //       </div>

    //       {/* Title */}
    //       <h2 className="text-3xl font-bold text-foreground mb-3">Business Center</h2>

    //       {/* Subtitle */}
    //       <p className="text-foreground/70 mb-6 leading-relaxed">
    //         Discover premium workspace solutions at Spellmount Resort Kausani. Professional offices, meeting rooms, and
    //         networking opportunities await.
    //       </p>

    //       {/* Partner preview */}
    //       <div className="mb-6 space-y-2">
    //         <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Featured Partners</p>
    //         <div className="flex gap-2 justify-center flex-wrap">
    //           {["Astron Financial", "Vaak & Associates", "Delhi Startup Village"].map((partner) => (
    //             <span key={partner} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
    //               {partner}
    //             </span>
    //           ))}
    //         </div>
    //       </div>

    //       {/* CTA Button */}

    //       <Link href="/business-center">  
    //       <button
    //         onClick={handleClose}
    //         className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
    //       >
    //         Explore More
    //       </button>
    //         </Link>

    //       {/* Footer text */}
    //       <p className="text-xs text-foreground/50 mt-4">Launching 2025</p>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  )
}
