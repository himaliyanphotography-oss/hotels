import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../../ui/sheet";
import { Button } from "../../ui/button";
import Link from "next/link";
import PopUpBtn from "./popuoBtn";
import QROverlay from "../../../components/qr-overlay/qr-overlay";
import { useState } from "react";

export default function HamSheet() {
  const handleLinkClick = () => {
    document.querySelector('[data-state="open"]')?.click();
  };

  const [showQROverlay, setShowQROverlay] = useState(false);

  const toggleQROverlay = () => {
    setShowQROverlay(!showQROverlay);
  };

  return (
    <div className="absolute z-[100]">
      <Sheet variant="right">
        <SheetTrigger className="p-2 rounded-full hover:bg-white/20 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white hover:scale-110 transition-transform"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-black/60 backdrop-blur-lg border-l border-white/20 w-full sm:max-w-md overflow-visible">
          <SheetHeader>
            <SheetDescription className="pt-10 px-4 sm:px-6 text-white">
              {/* Logo or brand name at the top */}
              <div className="mb-8 flex justify-center">
                <h2 className="text-2xl font-bold tracking-wider text-white">
                  Spellmount Resort
                </h2>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-2 rounded-xl bg-white/10 backdrop-blur-md shadow-lg p-4 border border-white/10">
                <Link onClick={handleLinkClick} href="./">
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                  </Button>
                </Link>
                         <Link onClick={handleLinkClick} href="/blogs">
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="shrink-0"
>
  <path d="M4 4h16v16H4z" />
  <path d="M8 8h8" />
  <path d="M8 12h8" />
  <path d="M8 16h5" />
</svg>

                    Blogs
                  </Button>
                </Link>
                         <Link onClick={handleLinkClick} href="/reel">
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="shrink-0"
>
  <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
  <path d="M8 3v18" />
  <path d="M16 3v18" />
  <path d="M3 8h18" />
</svg>

                    Reels
                  </Button>
                </Link>

                <Button
                  className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                  variant="ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6z" />
                    <path d="M12 20a8 8 0 0 1-8-8h2a6 6 0 0 0 6 6v2z" />
                  </svg>
                  <PopUpBtn text={"Explore"}>
                    <div className="flex flex-col gap-2 text-white w-full px-2 py-3 bg-black/40 backdrop-blur-md rounded-lg mt-1 border border-white/10">
                      {[
                        "Kausani",
                        "activities",
                        "visit",
                        "events",
                        "careers",
                        "business-center",
                      ].map((item, index) => (
                        <Link
                          key={index}
                          onClick={handleLinkClick}
                          href={`./${item}`}
                        >
                          <Button
                            className="w-full text-sm sm:text-base flex justify-start pl-6 bg-transparent hover:bg-white/20 rounded-md transition-all"
                            variant="ghost"
                          >
                            {item.charAt(0).toUpperCase() +
                              item.slice(1).replace("-", " ")}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </PopUpBtn>
                </Button>

                <Link onClick={handleLinkClick} href="./gallery">
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                    Experience Spellmount
                  </Button>
                </Link>

                <Link
                  onClick={handleLinkClick}
                  href="./yoga"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M19 13H5v-2h14v2z" />
                      <path d="M19 6v2h-14V6h14z" />
                      <path d="M21 3v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l2 2v16l2-2h-3z" />
                    </svg>
                    Yoga & Meditation
                  </Button>
                </Link>
                 <Link
                  onClick={handleLinkClick}
                  href="./business-center"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M19 13H5v-2h14v2z" />
                      <path d="M19 6v2h-14V6h14z" />
                      <path d="M21 3v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l2 2v16l2-2h-3z" />
                    </svg>
                   Business Center
                  </Button>
                </Link>
                <Link
                  onClick={handleLinkClick}
                  href="https://booking.hotelmoksha.in/"
                  // href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 20h20V8H2v12z" />
                      <path d="M6 8v9" />
                      <path d="M18 8v9" />
                      <path d="M12 8v9" />
                      <path d="M4 4h16" />
                    </svg>
                    Book Now
                  </Button>
                </Link>

                <Button
                  className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                  variant="ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 13H5v-2h14v2z" />
                    <path d="M19 6v2h-14V6h14z" />
                    <path d="M19 20v-2h-14v2h14z" />
                  </svg>
                  <PopUpBtn text={"About Us"}>
                    <div className="flex flex-col gap-2 text-white w-full px-2 py-3 bg-black/40 backdrop-blur-md rounded-lg mt-1 border border-white/10">
                      {["services", "gallery", "careers"].map((item, index) => (
                        <Link
                          key={index}
                          onClick={handleLinkClick}
                          href={`./${item}`}
                        >
                          <Button
                            className="w-full text-sm sm:text-base flex justify-start pl-6 bg-transparent hover:bg-white/20 rounded-md transition-all"
                            variant="ghost"
                          >
                            {item.charAt(0).toLowerCase() +
                              item.slice(1).replace("-", " ")}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </PopUpBtn>
                </Button>

                <div>
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                    onClick={toggleQROverlay}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      {/* Fork and knife (utensils) icon */}
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2" />
                      <path d="M18 15V2" />
                      <path d="M18 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                    </svg>
                    Review Us
                  </Button>

                  <QROverlay
                    show={showQROverlay}
                    onClose={() => setShowQROverlay(false)}
                  />
                </div>

                {/* <Link onClick={handleLinkClick} href="./contact">
                  <Button
                    className="w-full text-base sm:text-lg font-medium flex justify-start items-center gap-3 bg-transparent hover:bg-white/20 h-12 rounded-lg transition-all duration-200"
                    variant="ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    CONTACT US
                  </Button>
                </Link> */}
              </div>

              {/* Social media links */}
              <div className="mt-8 flex justify-center gap-6">
                <a
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* <a
                  href="#"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a> */}
              </div>

              {/* Footer copyright */}
              <div className="mt-10 text-center text-xs text-white/60">
                © {new Date().getFullYear()} Spellmount Resort. All rights reserved.
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
