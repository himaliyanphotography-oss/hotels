"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./subcomponents/navbar";
import Hambar from "./subcomponents/hambar";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  fixed top-0 left-0 z-[100] flex items-center justify-between py-2 lg:py-4 px-5 lg:px-20 transition-all duration-300 ${
        isScrolled ? "" : ""
      }`}
    >
      <Link href="./">
    
      </Link>
      <div className="flex items-center gap-5">
        <div className="hidden lg:flex md:flex">
          <Navbar />
        </div>
        <Hambar />
      </div>
    </div>
  );
}
