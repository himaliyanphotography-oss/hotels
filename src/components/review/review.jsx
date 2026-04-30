"use client";

import Script from "next/script";

export default function Reviews() {
  return (
    <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">
          <span className="bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
            Guest Experiences
          </span>
        </h2>

        {/* Elfsight Script */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        {/* Widget Container */}
        <div
          className="elfsight-app-d8219553-e368-4fe1-8267-e714679cf84f mt-10"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}