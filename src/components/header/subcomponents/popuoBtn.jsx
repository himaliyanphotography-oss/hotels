"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopUpBtn({ text, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleChildClick = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={popupRef}>
            <div
                className="flex items-center justify-start gap-1.5 cursor-pointer"
                onClick={toggleDropdown}
            >
                <h2 className="text-lg flex bg-clip-padding backdrop-filter">{text}</h2>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-2xl backdrop-blur-xl ring-1 ring-black ring-opacity-20 z-[55] overflow-hidden bg-black/60"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    >
                        <div className="p-5" onClick={handleChildClick}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
