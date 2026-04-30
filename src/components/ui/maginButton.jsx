import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className="relative inlinr-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none active:scale-80 transition-transform duration-200"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <div
        className={`inline-flex uppercase h-[42px] w-full cursor-pointer items-center justify-center rounded-full
        bg-[#1b1b1b] text-sm lg:text-base font-medium backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
