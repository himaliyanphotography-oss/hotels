"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DropdownBtn({ text, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleChildClick = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        <div className="relative inline-block text-left w-auto" ref={dropdownRef}>
            <div
                className="flex items-center justify-center gap-1.5 cursor-pointer"
                onClick={toggleDropdown}
            >
                <h2 className="text-[#f7f7f7] text-base font-medium text-center">{text}</h2>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-white" />
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute mt-2 w-52 rounded-2xl shadow-xl bg-neutral-900  z-[55]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="m-5" onClick={handleChildClick}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
