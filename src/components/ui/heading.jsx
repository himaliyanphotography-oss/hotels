import React from "react";

export default function Heading({ text }) {
    return (
        <>
            <div className="text-center text-white text-3xl lg:text-5xl font-semibold lg:font-extrabold flex items-center justify-center mb-8">{text}</div>
            <div className="flex items-center justify-center"><div className="border-[0.5px] border-[#303030] w-10"></div></div>
        </>
    )
}