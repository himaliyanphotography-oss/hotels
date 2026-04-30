"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Phone,
  Star,
  Clock,
  Mountain,
} from "lucide-react";

export default function LocationCard() {
  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-2xl">

      {/* 🌄 Background */}
      <motion.img
        src="/kausani.jpg"
        alt="Kausani"
        className="w-full h-[360px] object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />

      {/* 🌌 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* 📍 Floating Pin */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-5 right-5 bg-red-500 p-3 rounded-full shadow-lg"
      >
        <MapPin className="text-white" />
      </motion.div>

      {/* ⭐ Badge */}
      <div className="absolute top-5 left-5 bg-white/10 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm">
        <Star className="text-yellow-400 w-4 h-4" />
        4.8 Rating
      </div>

      {/* 📍 Content */}
      <div className="absolute bottom-0 p-6 text-white w-full space-y-4">

        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold">
            Spellmount Resort
          </h3>
          <p className="text-gray-300 text-sm">
            Tea Garden Road, Kausani, Uttarakhand
          </p>
        </div>

        {/* 🧭 Info Chips */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <Clock size={12} /> 5 min from center
          </span>
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <Mountain size={12} /> Himalayan View
          </span>
        </div>

        {/* 📞 Contact */}
        <div className="flex items-center justify-between">

          <a
            href="tel:+918279677141"
            className="flex items-center gap-2 text-sm bg-green-600 px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <Phone size={14} />
            Call Now
          </a>

          <div className="flex gap-2">

            <a
              href="https://www.google.com/maps?q=Spellmount+Resort+Kausani"
              target="_blank"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
              bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
            >
              <Navigation size={14} />
              Directions
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
            >
              Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}