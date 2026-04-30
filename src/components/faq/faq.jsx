"use client";
import React, { useState } from "react";
import Heading from "../ui/heading";
import MagicButton from "../ui/maginButton";
import Ota from "../otas/otas"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Search } from "lucide-react";
import ContactSlider from "../contact/contact";

export default function Faq() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactSlider = () => {
    setIsContactOpen(true);
  };

  const faqs = [
    {
      question: "What are the payment rules for booking a room?",
      answer: [
        "Stays of 1 month or more: Full payment at the time of booking.",
        "Shorter stays: Pay for the first night at the time of booking.",
      ],
    },
    {
      question: "What is your cancellation policy? ",
      answer: [
        "Cancel 3 or more days before check-in: Full refund. ",
        "Cancel 2 days before: 25% of total cost charged.",
        "Cancel 1 day before or no-show: No refund.",
      ],
    },
    {
      question: "What are the check-in and check-out timings? ",
      answer: [
        "Check-in: From 01:00 PM. ",
        "Check-out: By 11:00 AM. ",
        "Early check-in or late check-out may be available for an extra fee.",
        "We offer luggage storage if space is available.",
      ],
    },
    {
      question: "What ID is required to check in?",
      answer: [
        "A valid photo ID (e.g., passport, driver’s license) is required for all guests. ",
        "Visitors must show ID and they cannot stay past 9:00 PM.",
        "We may securely keep a copy of your ID for legal reasons.",
      ],
    },
    {
      question: "What if I lose my room key? ",
      answer: [
        "Please report it immediately. ",
        "Lost keys incur a replacement fee of ₹5,000.",
        "Always leave the key at the front desk when going out.",
      ],
    },
    {
      question: "Is loud music allowed in rooms?",
      answer: [
        "No loud music is allowed unless approved for a function or event.",
        "Fine: ₹5,000 or you may be asked to vacate.",
      ],
    },
    {
      question: "Can I smoke or drink in the room?",
      answer: [
        "No smoking or drinking is allowed in rooms or indoor areas. ",
        "Use the designated smoking area.",
        "Fine: ₹5,000 for violations.",
      ],
    },
    {
      question: "Are pets allowed?",
      answer: [
        "Pets are only allowed with prior approval.",
        "Unapproved pets may result in removal without refund. ",
      ],
    },
    {
      question: "What amenities are included? ",
      answer: [
        "Each room gets 2 free water bottles at check-in.",
        "Other amenities are available as per hotel rules and may involve additional charges. ",
      ],
    },
    {
      question: "How many people are allowed in one room?",
      answer: [
        "Maximum of 2 people per room.",
        "Extra guests incur additional charges or may require shifting to a different room.",
      ],
    },
    {
      question: "What if I cause any damage during my stay? ",
      answer: [
        "Guests are liable to pay for any damage caused during their stay.",
      ],
    },
    {
      question: "Is there CCTV at the hotel?",
      answer: [
        "Yes, CCTV surveillance is active in public areas for your safety.",
      ],
    },
    {
      question: "Will my personal details be safe? ",
      answer: [
        "Yes, we safely store your ID and booking details.",
        "Information is only shared when required by law.",
      ],
    },
    {
      question: " Are there any discounts or special offers?",
      answer: [
        "No discounts unless a promotional offer is announced by the hotel. ",
      ],
    },
    {
      question:
        " What if there’s an issue beyond the hotel’s control (e.g., natural disaster)?",
      answer: [
        "Refunds are not guaranteed, but we’ll help reschedule your stay where possible.",
      ],
    },
    {
      question: "Where will legal matters be handled? ",
      answer: [
        "All legal matters fall under the jurisdiction of Uttarakhand courts.",
      ],
    },
  
   
    {
      question: "Are yoga classes available at the hotel?",
      answer: ["We offer daily yoga and meditation sessions.",]
    },
  ];

  const [searchterm,setsearchterm] = useState("");

  const filteredfaqs = faqs.filter((faq) => {
    const questionMatch = faq.question
      .toLowerCase()
      .includes(searchterm.toLowerCase());

    if (typeof faq.answer === "string") {
      return (
        questionMatch ||
        faq.answer.toLowerCase().includes(searchterm.toLowerCase())
      );
    } else if (Array.isArray(faq.answer)) {
      return (
        questionMatch ||
        faq.answer.some((ans) =>
          ans.toLowerCase().includes(searchterm.toLowerCase())
        )
      );
    }

    return questionMatch;
  });


  return (
    <>
      <div className="bg-black">
        <div className="pt-20">
          <Heading text="Frequently Asked Questions" />
        </div>
        <div className="max-w-4xl mx-auto py-10 px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-white text-lg lg:text-2xl font-medium">
              Cannot find what you are looking for?
            </h2>
            <div className="mt-4">
              {/* This MagicButton will now open the contact slider */}
              <MagicButton title="Contact Us" onClick={openContactSlider} />
            </div>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search
              className="absolute left-3 top-3.5 text-gray-400"
              size={20}
            />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {filteredfaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-black rounded-lg shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-4 hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 text-white leading-relaxed">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {faq.answer.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* ContactSlider with controlled open state */}
        <ContactSlider
          isExternallyOpened={isContactOpen}
          setIsExternallyOpened={setIsContactOpen}
        />
      </div>
      <Ota />
    </>
  );
}
