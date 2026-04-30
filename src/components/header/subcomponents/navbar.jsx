  "use client";

  import React, { useState } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { Menu, X, ChevronDown } from "lucide-react";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
      setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
      <nav className="fixed top-0 left-0 w-full z-50  border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">

          {/* ✅ Logo FIXED */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>

            {/* Experience */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                Experience <ChevronDown size={16} />
              </button>

              <div className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-black rounded-xl shadow-xl p-4 min-w-[200px]">
                <div className="flex flex-col gap-3">
                  <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
                  <Link href="/reel" className="hover:text-gray-300">Reels</Link>
                  <Link href="/partnerwithus" className="hover:text-gray-300">Partner with Us</Link>
                </div>
              </div>
            </div>

            {/* Explore */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                Explore <ChevronDown size={16} />
              </button>

              <div className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-black rounded-xl shadow-xl p-4 min-w-[220px]">
                <div className="flex flex-col gap-3">
                  <Link href="/kausani" className="hover:text-gray-300">About Kausani</Link>
                  <Link href="/activities" className="hover:text-gray-300">Activities</Link>
                  <Link href="/visit" className="hover:text-gray-300">Places to Visit</Link>
                  <Link href="/events" className="hover:text-gray-300">Events</Link>
                  <Link href="/careers" className="hover:text-gray-300">Careers</Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-300">
                About Us <ChevronDown size={16} />
              </button>

              <div className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-black rounded-xl shadow-xl p-4 min-w-[220px]">
                <div className="flex flex-col gap-3">
                   <Link href="/aboutsection">About Spellmount</Link>
                  <Link href="/services" className="hover:text-gray-300">Amenities & Services</Link>
                  <Link href="/faq" className="hover:text-gray-300">FAQs</Link>
                  <Link href="/policy" className="hover:text-gray-300">Guest Policy</Link>
                </div>
              </div>
            </div>



            <Link
              href="http://localhost:3001/"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
            >
              Book Now
            </Link>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            className="md:hidden mt-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ✅ Mobile Menu (Full Screen Style) */}
        {isOpen && (
          <div className="md:hidden  text-white px-6 py-6 space-y-5 min-h-screen">
          <h1 className="text-black text-3xl md:text-5xl font-bold z-10">
  Spellmount Hotel
</h1>
            <Link href="/" className="block text-lg">Home</Link>

            {/* Experience */}
            <div>
              <button
                onClick={() => toggleDropdown("exp")}
                className="flex justify-between w-full text-lg"
              >
                Experience <ChevronDown />
              </button>

              {openDropdown === "exp" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link href="/gallery">Gallery</Link>
                  <Link href="/reel">Reels</Link>
                  <Link href="/yoga">Yoga & Meditation</Link>
                  <Link href="/partnerwithus">Partner with Us</Link>
                </div>
              )}
            </div>

            {/* Explore */}
            <div>
              <button
                onClick={() => toggleDropdown("explore")}
                className="flex justify-between w-full text-lg"
              >
                Explore <ChevronDown />
              </button>

              {openDropdown === "explore" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link href="/kausani">About Kausani</Link>
                  <Link href="/blogs">Blogs</Link>
                  <Link href="/activities">Activities</Link>
                  <Link href="/visit">Places</Link>
                  <Link href="/events">Events</Link>
                  <Link href="/careers">Careers</Link>
                </div>
              )}
            </div>

            {/* About */}
            <div>
              <button
                onClick={() => toggleDropdown("about")}
                className="flex justify-between w-full text-lg"
              >
                About Us <ChevronDown />
              </button>

              {openDropdown === "about" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link href="/aboutsection">About Spellmount</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/faq">FAQs</Link>
                  <Link href="/policy">Policy</Link>
                </div>
              )}
            </div>

        

            <Link
              href="http://localhost:3001/"
              target="_blank"
              className="block text-center bg-white text-black py-3 rounded-full mt-4"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    );
  }