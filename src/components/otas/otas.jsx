"use client";
import Image from "next/image";
import React from "react";

export default function BookingChannels() {
  const channels = [
    { name: "MMT", logo: "/mmtlogo.png" },
    { name: "Airbnb", logo: "/ab.png" },
    { name: "Agoda", logo: "/agodalogo.png" },
    { name: "Tripadvisor", logo: "/trip.png" },
    { name: "Booking.com", logo: "/booking.png" },
    { name: "Expedia", logo: "/expedia.png" },
    { name: "Yatra", logo: "/yatra.png" },
    { name: "Travelguru", logo: "/travelguru.png" },
    { name: "Google", logo: "/google.png" },
    { name: "MMT", logo: "/mmtlogo.png" },
    { name: "Airbnb", logo: "/ab.png" },
    { name: "Agoda", logo: "/agodalogo.png" },
    { name: "Tripadvisor", logo: "/trip.png" },
    { name: "Booking.com", logo: "/booking.png" },
    { name: "Expedia", logo: "/expedia.png" },
    { name: "Yatra", logo: "/yatra.png" },
    { name: "Travelguru", logo: "/travelguru.png" },
    { name: "Google", logo: "/google.png" },
  ];

  return (
    <section className="py-16 px-4 md:px-6 overflow-hidden bg-transparent">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-[100px]">
          <span className="bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
            Our Travel Partners
          </span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap">
            {[...channels, ...channels].map((channel, index) => (
              <div
                key={`${channel.name}-${index}`}
                className="mx-8 flex items-center justify-center min-w-[140px]"
              >
                <Image
                  src={channel.logo}
                  alt={`${channel.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-track {
          animation: marquee 50s linear infinite;
          min-width: fit-content;
        }
      `}</style>
    </section>
  );
}
