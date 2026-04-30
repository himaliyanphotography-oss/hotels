"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "../../lib/utils"

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-80 w-[300px] lg:h-80 lg:w-[500px]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-80 w-[300px] lg:h-80 lg:w-[500px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-evenly"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div>
              <p className="text-neutral-500 text-center font-medium lg:font-bold text-base lg:text-2xl dark:text-white">
                <Highlight>{card.name}</Highlight>
              </p>
            </div>
            <div className="font-normal text-xs lg:text-base text-neutral-700 dark:text-neutral-200 px-1 lg:px-2">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};



export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};