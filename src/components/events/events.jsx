'use client'
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    date: "January",
    title: "Uttarayani Fair",
    description:
      "A traditional Kumaoni festival celebrated with folk music, dance, local crafts, and cultural performances in nearby Bageshwar. It reflects the rich culture of the region.",
    time: "All day",
    location: "Bageshwar (near Kausani)",
    image: "/images/uttarayani-fair.jpg",
  },
  {
    date: "March",
    title: "Holi Festival (Kumaoni Holi)",
    description:
      "A unique and musical version of Holi celebrated with classical ragas, group singing, and vibrant colors across the Kumaon region including Kausani.",
    time: "Daytime",
    location: "Kausani & nearby villages",
    image: "/images/holi-kausani.jpg",
  },
  {
    date: "April",
    title: "Bikhauti Mela",
    description:
      "A regional fair marking the harvest season with local food, cultural programs, and traditional celebrations in nearby areas.",
    time: "All day",
    location: "Kausani region",
    image: "/images/bikhauti-mela.jpg",
  },
  {
    date: "June",
    title: "International Yoga Day",
    description:
      "Celebrated at Anasakti Ashram with yoga sessions, meditation, and wellness activities in a peaceful Himalayan setting.",
    time: "Morning",
    location: "Anasakti Ashram, Kausani",
    image: "/images/yoga-day.jpg",
  },
  {
    date: "August",
    title: "Harela Festival",
    description:
      "An eco-friendly festival celebrating nature, greenery, and agriculture. Locals plant saplings and perform rituals for prosperity.",
    time: "All day",
    location: "Kausani & Uttarakhand",
    image: "/images/harela.jpg",
  },
  {
    date: "October",
    title: "Sharad Festival",
    description:
      "A cultural festival showcasing Kumaoni folk dances, music, handicrafts, and local cuisine against the backdrop of the Himalayas.",
    time: "Evening",
    location: "Kausani",
    image: "/images/sharad-festival.jpg",
  },
  {
    date: "October - November",
    title: "Diwali Festival",
    description:
      "The festival of lights celebrated with diyas, decorations, and traditional rituals in homes and temples across Kausani.",
    time: "Evening",
    location: "Kausani",
    image: "/images/diwali.jpg",
  }
];

const EventCard = ({ event }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 p-6">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Calendar className="w-5 h-5 text-indigo-400" />
          <span className="text-3xl font-bold text-white">{event.date}</span>
        </div>
      </div>
      
      <div className="lg:col-span-3 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {event.description}
        </p>
      </div>
      
      <div className="lg:col-span-1 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-400" />
          <span className="text-white">{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span className="text-white">{event.location}</span>
        </div>
      </div>
    </div>
    
    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
  </motion.div>
);

export default function Events() {
  return (
    <section className="py-20 px-4 bg-gray-900/95">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.h2>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}