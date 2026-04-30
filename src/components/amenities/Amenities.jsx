"use client";

import { CheckCircle } from "lucide-react";

export default function Amenities() {
  const amenities = [
    "Free Wifi",
    "Yoga Center",
    "Spa & Wellness",
    "Restaurant",
    "24/7 Front Desk",
    "Adventure Sports Desk",
    "Meditation Hall",
    "Parking*",
  ];

  return (
    <section id="amenities" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
            Hotel Amenities
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-400 hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <span className="text-base md:text-lg font-medium group-hover:text-pink-300 transition">
                {amenity}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}