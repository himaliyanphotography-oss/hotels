"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Ota from "../otas/otas";

export default function YogaPage() {
  return (
    <>
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-[#267613] to-white bg-clip-text text-transparent">
              Embrace Inner Peace
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Unwind your mind and soul with our rejuvenating yoga experience.
          </p>
        </div>

        {/* Yoga Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Yoga Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg shadow-green-500/30"
          >
            <Image
              src="/2a.JPG"
              alt="Sunrise Yoga Deck"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Yoga Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h3 className="text-3xl font-bold">Yoga & Meditation</h3>
            <p className="text-gray-300">
              Experience the bliss of Yoga in our Sunrise Yoga Deck. Let go of stress and rejuvenate your body,
              mind, and soul.
            </p>
            {/* <ul className="list-disc pl-6 text-gray-300">
              <li>Boosts flexibility, strength, and balance</li>
              <li>Reduces stress and enhances relaxation</li>
              <li>Improves mental clarity and focus</li>
              <li>Enhances overall well-being and mindfulness</li>
            </ul> */}
          </motion.div>
        </div>

        {/* Yoga Room Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
          {/* Yoga Room Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h3 className="text-3xl font-bold">Yoga halls</h3>
            <p className="text-gray-300">
              Escape distractions and connect with your inner self in our
              peaceful yoga rooms. Designed for deep meditation and
              relaxation, our rooms provide the perfect atmosphere to practice
              yoga and mindfulness.
            </p>
            <p className="text-gray-300">
              Whether you&apos;re a beginner or an advanced yogi, our dedicated yoga
              spaces offer a serene environment for personal growth and
              well-being.
            </p>
          </motion.div>

          {/* Yoga Room Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg shadow-green-500/30"
          >
            <Image
              src="/3a.JPG"
              alt="Yoga Room"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-gray-500 to-[#267613] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Book Your Yoga Retreat Now
          </motion.a>
        </div> */}
      </div>
    </section>
    <Ota/>
    </>
  );
}
