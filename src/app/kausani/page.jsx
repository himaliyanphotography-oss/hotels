"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { Plane, Car, Train } from "lucide-react";

export default function Kausani() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 pb-16">
          
          {/* Hero Section */}
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/hero2.jpg"
              alt="Kausani Landscape"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
                  Kausani
                </h1>
                <p className="text-sm sm:text-lg md:text-2xl text-gray-200">
                  Switzerland of India 🌄
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              About Kausani
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-gray-300 leading-relaxed">
                Kausani is a peaceful hill station in Uttarakhand, known for
                breathtaking Himalayan views, tea gardens, and calm surroundings.
                It is perfect for a relaxing getaway away from city life.
              </p>

              <p className="text-gray-300 leading-relaxed">
                It offers panoramic views of peaks like Nanda Devi, Trishul,
                and Panchachuli. Famous for sunrise and sunset, Kausani is less
                crowded than Nainital and Mussoorie.
              </p>
            </div>
          </section>

          {/* Transport Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              How to Reach
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {TRANSPORT_INFO.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-slate-700/80 backdrop-blur-lg border border-slate-600 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      
                      <div className="flex items-center mb-4">
                        {info.icon}
                        <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">
                          {info.title}
                        </h3>
                      </div>

                      <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                        {info.points.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>

                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-5 bg-slate-900 text-gray-400 text-center text-sm">
        © 2025 Travel Guide. All Rights Reserved.
      </footer>
    </div>
  );
}

const TRANSPORT_INFO = [
  {
    title: "By Air",
    icon: <Plane className="w-6 h-6 text-sky-400" />,
    points: [
      "Nearest airport: Pantnagar (~160 km)",
      "Flights available from Delhi",
      "Taxi/bus takes 5–6 hours to Kausani",
    ],
  },
  {
    title: "By Road",
    icon: <Car className="w-6 h-6 text-green-400" />,
    points: [
      "Distance from Delhi: ~400 km",
      "Travel time: 10–11 hours",
      "Route: Haldwani → Almora → Kausani",
    ],
  },
  {
    title: "By Train",
    icon: <Train className="w-6 h-6 text-yellow-400" />,
    points: [
      "Nearest station: Kathgodam (~130 km)",
      "Connected to Delhi & Lucknow",
      "Cab/bus takes 4–5 hours",
    ],
  },
];