

"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const reels = [
  
  
  { id: 3, videoUrl: "/astron.mp4" },
  { id: 4, videoUrl: "/new.mp4" },
];

export default function ReelGrid() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // ▶ Play selected reel & pause others
  const playReel = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });

    videoRefs.current[index]?.play();
    setActiveIndex(index);
  };

  // ⏸ Pause reel
  const pauseReel = (index) => {
    videoRefs.current[index]?.pause();
    setActiveIndex(null);
  };

  // 📱 Mobile tap
  const toggleReel = (index) => {
    activeIndex === index ? pauseReel(index) : playReel(index);
  };

  // 👀 Auto-play on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          const video = entry.target;

          if (entry.isIntersecting) {
            playReel(index);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Reels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {reels.map((reel, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={reel.id}
              className={clsx(
                "relative rounded-xl overflow-hidden aspect-[9/16] transition-transform duration-300 cursor-pointer",
                isActive && "scale-105 z-10"
              )}
              // 🖥 Desktop hover
              onMouseEnter={() => playReel(index)}
              onMouseLeave={() => pauseReel(index)}
              // 📱 Mobile tap
              onClick={() => toggleReel(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                data-index={index}
                src={reel.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />

              {/* ▶ Play badge */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/60 text-white px-3 py-2 rounded-full text-sm">
                    ▶ Tap to Play
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
