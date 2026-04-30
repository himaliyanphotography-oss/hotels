"use client";

import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const TouristMap = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      id: 1,
      name: "Baijnath Temple",
      distance: "16 km",
      travelTime: "30 mins",
      description:
        "Ancient Shiva temple on Gomti River with beautiful stone architecture.",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 2,
      name: "Anasakti Ashram",
      distance: "500 m",
      travelTime: "5 mins",
      description:
        "Peaceful ashram with Himalayan views where Mahatma Gandhi stayed.",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: 3,
      name: "Kot Bhramari Temple",
      distance: "14 km",
      travelTime: "25 mins",
      description:
        "Sacred temple surrounded by scenic hills and spiritual vibes.",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      name: "Rudradhari Falls",
      distance: "12 km",
      travelTime: "25 mins",
      description:
        "Hidden waterfall with caves and a peaceful trekking route.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 5,
      name: "Kausani Tea Estate",
      distance: "1 km",
      travelTime: "5–10 mins",
      description:
        "Tea gardens with stunning Himalayan views and fresh tea experience.",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: 6,
      name: "Kausani View Point",
      distance: "300 m",
      travelTime: "2–3 mins",
      description:
        "Best sunrise & sunset views of Nanda Devi and Trishul peaks.",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Nearby Attractions
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {attractions.map((item, index) => {
            const isActive = selectedAttraction?.id === item.id;

            return (
              <motion.div
                key={item.id}
                onClick={() => setSelectedAttraction(item)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
                className="relative group cursor-pointer"
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} blur opacity-0 group-hover:opacity-70 transition duration-500`}
                />

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl p-6 backdrop-blur-xl 
                  bg-white/5 border border-white/10 shadow-xl
                  transition-all duration-300
                  ${isActive ? "scale-105 border-white/30" : ""}
                  `}
                >
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      {item.distance}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      {item.travelTime}
                    </div>
                  </div>

                  {/* Active Glow Ring */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TouristMap;