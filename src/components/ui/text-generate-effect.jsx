"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const linesArray = words.split("\n");

  useEffect(() => {
    linesArray.forEach((line, lineIndex) => {
      const wordElements = scope.current.querySelectorAll(`.line-${lineIndex} span`);
      animate(
        wordElements,
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.3),
        }
      );
    });
  }, [scope, animate, linesArray]);

  const renderWords = () => {
    return linesArray.map((line, lineIndex) => {
      const wordsArray = line.split(" ");
      return (
        <motion.div key={lineIndex} className={`line-${lineIndex}`}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`${
                idx > 4 ? "text-red-500" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      );
    });
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide" ref={scope}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
