"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import ContactDetail from "./subcomponents/contactDetails";

export default function ContactSlider({
  isExternallyOpened,
  setIsExternallyOpened,
}) {

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isExternallyOpened) {
      setIsOpen(true);
    }
  }, [isExternallyOpened]);

  const handleClose = () => {
    setIsOpen(false);
    if (setIsExternallyOpened) {
      setIsExternallyOpened(false);
    }
  };

  const handleWhatsAppRedirect = () => {

    const phoneNumber = "+919310708380";
    const message = "Hi";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <motion.button
        className={`fixed right-0 top-[18%] z-[50] bg-transparent border border-white rounded-l-lg shadow-lg py-6 px-2 transition-all duration-300 font-bold ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsOpen(true)}
        initial={{ x: 0 }}
        whileHover={{ x: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="mb-2 mt-[-10px]" style={{ transform: "rotate(360deg)" }}>&lt;</div>
        <span
          className="text-white font-medium text-md sm:text-sm tracking-wide"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Contact for Bookings & Reservations
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-4 top-[15vh] w-80 max-h-fit bg-gray-900 text-white z-[50] shadow-lg p-4 rounded-lg overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={handleClose}
            >
              <X size={18} />
            </button>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Contact Us
              </h2>
              <ContactDetail />

              <div className="mt-6 mb-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition-colors p-3 rounded-lg font-medium"
                >
                  <Phone size={18} />
                  Chat with us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
