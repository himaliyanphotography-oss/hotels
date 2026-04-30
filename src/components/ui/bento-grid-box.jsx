import React from "react";
import Image from "next/image";

export default function BentoGridBox({ img, title, details, className }) {
  return (
    <div
      className={`${className} rounded-2xl border border-[#606060] p-2.5 lg:p-5 group`}
    >
      <div className="relative w-full h-2/3 rounded-2xl mb-2 lg:mb-4 overflow-hidden group-hover:translate-x-2 duration-200">
        <Image
          src={img}
          alt={title}
          fill 
          cover
          className="rounded-2xl"
        />
      </div>
      <h1 className="text-white font-semibold text-xl lg:text-2xl mb-1 lg:mb-2 group-hover:translate-x-2 duration-200">
        {title}
      </h1>
      <p className="text-white font-normal text-xs lg:text-sm group-hover:translate-x-2 duration-200">
        {details}
      </p>
    </div>
  );
}
