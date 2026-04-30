"use client"
import { useState, useEffect } from "react";
import Heading from "../ui/heading";
import BentoGridBox from "../ui/bento-grid-box";

export default function Activities() {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size to adjust layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activities = [

    {
      id: 2,
      title: "Bird Watching",
      img: "/bird.png",
      details:
        "If you plan to do bird watching while you're with us, do not forget to carry your binoculars and cameras to capture some wondrous colours.",
      height: isMobile ? "h-80" : "h-[400px]",
    },
    {
      id: 3,
      title: "White River Rafting",
      img: "/Rafting_general.jpg",
      details:
        "If you want to try on something adventurous and exciting, then you must not miss out on this white-water river rafting experience in Kausani.",
      height: isMobile ? "h-80" : "h-[450px]",
    },
    {
      id: 4,
      title: "Trekking and Nature Trails",
      img: "/Trekking-In-Singapore_14th-nov.jpg",
      details:
        "Located at the foothills of the majestic Himayalan range, Kausani thrives with turquoiseery, wildlife and river bodies.",
      height: isMobile ? "h-80" : "h-[380px]",
    },
    {
      id: 5,
      title: "Jungle Safari",
      img: "/jungle-safari.jpeg",
      details:
        "Hotels arranges jungle jeep safaris through undulating terrain, lush turquoise valleys, river beds, and sprawling grasslands.",
      height: isMobile ? "h-80" : "h-[350px]",
    },

    {
      id: 7,
      title: "Biking",
      img: "/bike.png",
      details:
        "Guests can rent bikes from the resort, and head out to explore the rustic charm of Kausani meandering through the small streets and corners.",
      height: isMobile ? "h-80" : "h-[380px]",
    },
    // {
    //   id: 8,
    //   title: "Biking",
    //   img: "/biking.jpg",
    //   details:
    //     "Guests can rent bikes from the resort, and head out to explore the rustic charm of Kausani meandering through the small streets and corners.",
    //   height: isMobile ? "h-80" : "h-[380px]",
    // },
    // {
    //   id: 9,
    //   title: "Biking",
    //   img: "/biking.jpg",
    //   details:
    //     "Guests can rent bikes from the resort, and head out to explore the rustic charm of Kausani meandering through the small streets and corners.",
    //   height: isMobile ? "h-80" : "h-[380px]",
    // },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 mt-10">
          <Heading text={"Things to do in Kausani!"} />
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore these amazing activities during your stay at our hotel
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="break-inside-avoid">
              <BentoGridBox
                className={`${activity.height} w-full`}
                img={activity.img}
                title={activity.title}
                details={activity.details}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
