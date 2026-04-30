"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {
  Hotel,
  Leaf,
  Users,
  Calendar,
  IndianRupeeIcon,
  CheckCircle,
  Wifi,
  WashingMachine,
  Mountain,
  Handshake,
  Home
} from "lucide-react"

const hotelMokshaContent = {
  title: "Welcome to Spellmount Resort – Kausani",
  description:
    " ",
  sections: [
    {
      heading: "What We Offer:",
      icon: Home,
      items: [
        { text: "12km from Kausani", icon: CheckCircle },
        { text: "45 spacious, well-furnished AC rooms", icon: Hotel },
        { text: "Dedicated Yoga & Meditation Hall for 50+ people", icon: Users },
        { text: "Pure vegetarian meals (group menus available)", icon: Leaf },
        { text: "Free Wi-Fi & Parking", icon: Wifi },
        { text: "Laundry & backup power", icon: WashingMachine },
      ],
    },
    {
      heading: "Perfect For:",
      icon: Calendar,
      items: [
        { text: "Yoga & Meditation Retreats", icon: CheckCircle },
        { text: "Corporate Wellness Programs", icon: CheckCircle },
        { text: "Pilgrimage Groups (Yatra)", icon: CheckCircle },
        { text: "Ayurveda & Healing Stays", icon: CheckCircle },
        { text: "Long-Stay Spiritual Tourists", icon: CheckCircle },
        { text: "Corporate offsite programs for employees", icon: CheckCircle },
      ],
    },
    {
      heading: "Why Partner With Us?",
      icon: Handshake,
      items: [
        { text: "Competitive group rates", icon: IndianRupeeIcon },
        { text: "Flexible dates for off-season occupancy", icon: Calendar },
        { text: "Fully customizable hospitality experience", icon: CheckCircle },
        { text: "Dedicated group handling team", icon: Users },
      ],
    },
  ],
}

const yogaRetreatContent = {
  title: "Host Your Next Yoga Retreat at Spellmount Resort – Kausani, India",
  description:
    "",
  sections: [
    {
      heading: "What We Offer:",
      icon: Home,
      items: [
        { text: "45 well-furnished guest rooms (AC/non-AC)", icon: Hotel },
        { text: "Rooftop yoga and meditation space (fits 30 mats)", icon: Users },
        { text: "Pure vegetarian meals tailored to retreat needs", icon: Leaf },
        { text: "Complimentary Wi-Fi, power backup, and filtered water", icon: Wifi },
      
      ],
    },
    {
      heading: "Perfect For:",
      icon: Calendar,
      items: [
        { text: "Yoga Retreats (7–21 days)", icon: CheckCircle },
        { text: "Meditation & Mindfulness Camps", icon: CheckCircle },
        { text: "Ayurveda & Wellness Programs", icon: CheckCircle },
        { text: "Women’s Retreats or Teacher Trainings", icon: CheckCircle },
        { text: "Small Corporate Detox Getaways", icon: CheckCircle },
      ],
    },
    {
      heading: "Why Partner With Us:",
      icon: Handshake,
      items: [
        { text: "Seasonal rates and flexible packages", icon: IndianRupeeIcon },
        { text: "Commission or fixed pricing models", icon: CheckCircle },
        { text: "On-site team for logistics, bookings & local support", icon: Users },
        { text: "Airport pickup, excursions, and event add-ons available", icon: CheckCircle },
      ],
    },
  ],
}

export default function PartnerWithUs() {
  const [activeTab, setActiveTab] = useState("hotel-moksha")

  return (
    <div className="dark bg-gray-950 text-gray-50 min-h-screen p-4 mt-16 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <Tabs defaultValue="hotel-moksha" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-gray-800 text-gray-300 h-16">
            <TabsTrigger
              value="hotel-moksha"
              className="data-[state=active]:bg-green-600 h-full data-[state=active]:text-white data-[state=active]:shadow-md transition-colors duration-300"
            >
              Travel Partner Brochure
            </TabsTrigger>
            <TabsTrigger
              value="yoga-retreats"
              className="data-[state=active]:bg-green-600 h-full data-[state=active]:text-white data-[state=active]:shadow-md transition-colors duration-300"
            >
              Global Retreat Brochure
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TabsContent value="hotel-moksha" className="mt-4">
                <Card className="bg-gray-800 border-gray-700 text-gray-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-2xl md:text-3xl">{hotelMokshaContent.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{hotelMokshaContent.description}</p>
                    {hotelMokshaContent.sections.map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-xl font-semibold text-green-300 flex items-center gap-2">
                          <section.icon className="w-5 h-5 text-green-500" />
                          {section.heading}
                        </h3>
                        <ul className="list-none space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                              <item.icon className="w-4 h-4 mt-1 flex-shrink-0 text-green-500" />
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yoga-retreats" className="mt-4">
                <Card className="bg-gray-800 border-gray-700 text-gray-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-2xl md:text-3xl">{yogaRetreatContent.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{yogaRetreatContent.description}</p>
                    {yogaRetreatContent.sections.map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-xl font-semibold text-green-300 flex items-center gap-2">
                          <section.icon className="w-5 h-5 text-green-500" />
                          {section.heading}
                        </h3>
                        <ul className="list-none space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                              <item.icon className="w-4 h-4 mt-1 flex-shrink-0 text-green-500" />
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  )
}
