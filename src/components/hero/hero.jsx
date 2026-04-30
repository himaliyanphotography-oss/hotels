"use client";
import { Button } from "../../components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="Welcome to Kausani"
          fill
          className="object-cover"
          priority // Ensures the image loads as soon as possible
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-2xl text-white text-center animate-fade-in">
          {/* Heading */}
          <h1
            className="text-6xl font-bold mb-6 animate-slide-up opacity-0"
            style={{
              animation: "slideUp 0.8s ease-out forwards",
            }}
          >
            Welcome to kausani
          </h1>

          {/* Subtitle with Gradient Text */}
          <p
            className="font-bold mb-8 animate-slide-up opacity-0"
            style={{
              animation: "slideUp 0.8s ease-out 0.2s forwards",
            }}
          >
            <span className="text-5xl">Switzerland of </span>
            <span className="bg-gradient-to-r from-[#4facfe] via-[#2ecc71] via-[#00f2fe] to-[#38b6ff] bg-clip-text text-transparent animate-gradient text-6xl">
              India
            </span>
          </p>

          {/* CTA Button with Hover Effect */}
          {/* <a href="/book"> */}
            <Button
              size="xl"
              className="group relative overflow-hidden bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out shadow-lg hover:scale-105"
              style={{
                animation: "slideUp 0.8s ease-out 0.4s forwards",
              }}
              onClick={
                () => 
                window.open("http://localhost:3001/", "_blank")
              }
            >
              <span className="relative z-10">Book Your Stay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff416c] to-[#ffbd69] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          {/* </a> */}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
