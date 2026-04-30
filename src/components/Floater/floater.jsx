"use client";
import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Phone, Share2, X } from "lucide-react";

const FloatingSocialButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com",
      color:
        "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
    },
    {
      name: "WhatsApp",
      icon: <Phone size={20} />,
      url: "https://wa.me/", // Replace with your WhatsApp number
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-8 left-8 z-50 ">
      <div
        className={`flex flex-col-reverse items-center gap-3 mb-3 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transform transition-all duration-300 ${social.color}`}
            style={{
              transitionDelay: `${index * 75}ms`,
              transform: isOpen
                ? "scale(1) translateY(0)"
                : "scale(0.5) translateY(20px)",
            }}
            aria-label={`Visit our ${social.name} page`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-black border border-gray-300 text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none"
        aria-label={
          isOpen ? "Close social media menu" : "Open social media menu"
        }
      >
        {isOpen ? <X size={24} /> : <Share2 size={24} />}
      </button>
    </div>
  );
};

export default FloatingSocialButtons;
