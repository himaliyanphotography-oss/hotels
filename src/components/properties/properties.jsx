"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "../ui/heading";
import { CardDemo } from "../ui/propertyCard";
import moksha from "@/components/properties/assets/moksha.jpg";
import { motion } from "framer-motion";

// Custom hook to detect screen size
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default function Properties() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setIsVisible1(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setIsVisible2(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (ref1.current) {
            observer1.observe(ref1.current);
        }

        if (ref2.current) {
            observer2.observe(ref2.current);
        }

        return () => {
            if (ref1.current) {
                observer1.unobserve(ref1.current);
            }
            if (ref2.current) {
                observer2.unobserve(ref2.current);
            }
        };
    }, []);

    return (
        <>
            <div className="bg-black py-14 rounded-t-3xl">
                <Heading text={"About Moksha"} />
                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center gap-20 pt-14 px-5 lg:px-20">
                    <motion.div
                        className="flex"
                        ref={ref1}
                        initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                        animate={{ opacity: isVisible1 ? 1 : 0, x: isVisible1 ? 0 : (isMobile ? 0 : -100) }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="./services">
                            <CardDemo
                                img={moksha}
                                title={"Spellmount Resort"}
                                description={"One of the oldest hotels of Kausani. The property (previously known as Hotel Rajdeep) is strategically located in a tranquil surrounding just a short walk away from the market place to make sure our guest can relax in the peaceful environment while not being far from the main city."}
                            />
                        </Link>
                    </motion.div>
                    <motion.div
                        className="flex flex-col text-center py-5 lg:py-10 gap-2.5 lg:gap-5 lg:w-[400px] lg:ml-28"
                        ref={ref2}
                        initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                        animate={{ opacity: isVisible2 ? 1 : 0, x: isVisible2 ? 0 : (isMobile ? 0 : 100) }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-2.5 lg:pb-5">How to Reach</h1>
                        <h2 className="text-[#e2e2e2] text-base lg:text-xl">We are waiting for you to make your stay memorable!</h2>
                        <h3 className="text-[#919191] text-sm lg:text-lg">Check Out Timings - 9 am</h3>
                        <h3 className="text-[#919191] text-sm lg:text-lg">Spellmount Resort, Near Geeta Bhawan Taxi Stand, Swargashram Road, Kausani, Uttarakhand, India</h3>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
