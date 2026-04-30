"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom hook to detect screen size
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};

export function VisitTiles1({ img, heading, description }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="flex" ref={ref}>
            <motion.div
                className="w-1/2"
                initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isMobile ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >
                <Image className="lg:w-[600px] lg:h-[450px]" src={img} alt={heading} />
            </motion.div>
            <motion.div
                className="w-1/2 flex flex-col items-center justify-center bg-white"
                initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isMobile ? 0 : 100 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-xs lg:text-4xl font-semibold text-[#1b1b1b] pb-2 lg:pb-5">{heading}</h1>
                <h5 className="hidden px-2 lg:px-10 text-[8px] text-left lg:text-base font-normal text-[#5e5e5e]">{description}</h5>
            </motion.div>
        </div>
    );
}

export function VisitTiles2({ img, heading, description }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-row-reverse" ref={ref}>
            <motion.div
                className="w-1/2"
                initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isMobile ? 0 : 100 }}
                transition={{ duration: 0.8 }}
            >
                <Image className="lg:w-[600px] lg:h-[450px]" src={img} alt={heading} />
            </motion.div>
            <motion.div
                className="w-1/2 flex flex-col items-center justify-center bg-white"
                initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : isMobile ? 0 : -100 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-xs lg:text-4xl font-semibold text-[#1b1b1b] pb-2 lg:pb-5">{heading}</h1>
                <h5 className="hidden px-2 lg:px-10 text-[8px] text-left lg:text-base font-normal text-[#5e5e5e]">{description}</h5>
            </motion.div>
        </div>
    );
}
