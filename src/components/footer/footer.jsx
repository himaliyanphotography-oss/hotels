"use client";

import Link from "next/link";
import { useState } from "react";
import QROverlay from "../qr-overlay/qr-overlay";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showQROverlay, setShowQROverlay] = useState(false);

  return (
    <footer className="relative text-white py-16 overflow-hidden">

      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950" />

      {/* ✨ Glow Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 🏨 About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Spellmount Resort
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Experience tranquility in the spiritual heart of Kausani with
              breathtaking Himalayan views.
            </p>
          </motion.div>

          {/* 🔗 Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-lg text-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Rooms", link: "/gallery" },
                { name: "Amenities", link: "#amenities" },
                { name: "Gallery", link: "/gallery" },
                { name: "Guest Policy", link: "/policy" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}

              <li>
                {/* <button
                  onClick={() => setShowQROverlay(true)}
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm hover:scale-105 transition"
                >
                  ⭐ Review Us
                </button> */}
              </li>
            </ul>
          </motion.div>

          {/* 🌐 Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-lg text-purple-300">
              Connect With Us
            </h4>

            <div className="space-y-4">

              {[
                {
                  name: "Facebook",
                  icon: "/facebook.png",
                  link: "https://www.facebook.com/",
                },
                {
                  name: "Instagram",
                  icon: "/instagram.png",
                  link: "https://www.instagram.com/",
                },
                {
                  name: "Email",
                  icon: "/gmail.png",
                  link: "mailto:spellmountresort@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-3 group"
                >
                  <Image
                    src={item.icon}
                    height={28}
                    width={28}
                    alt={item.name}
                    className="group-hover:scale-110 transition"
                  />
                  <span className="text-gray-300 group-hover:text-white transition">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* 📞 Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-purple-300">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <a
                href="tel:+918279677141"
                className="flex items-center gap-3 group hover:text-white"
              >
                <PhoneCall className="text-green-400 group-hover:scale-110 transition" />
                +91 82796 77141
              </a>

              <a
                href="mailto:spellmountresort@gmail.com"
                className="flex items-center gap-3 group hover:text-white"
              >
                <Mail className="text-purple-400 group-hover:scale-110 transition" />
                spellmountresort@gmail.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="text-pink-400 mt-1" />
                <div>
                  <p className="font-medium">Spellmount Resort</p>
                  <p className="text-sm">
                    Kausani, Uttarakhand - 263641
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2025 Spellmount Resort. All rights reserved.
        </div>
      </div>

      {/* QR Overlay */}
      <QROverlay show={showQROverlay} onClose={() => setShowQROverlay(false)} />
    </footer>
  );
}