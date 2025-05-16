"use client";

import { useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const sloganText = ["Simple.", "Thoughtful.", "Reliable."];

export default function Hero() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const { scrollY } = useScroll();
  const opacitySlogan = useTransform(scrollY, [0, 200, 600], [1, 1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) =>
        prevIndex < sloganText.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="heroSection"
        className="w-full h-screen flex justify-center items-center"
      >
        <motion.div
          style={{ opacity: opacitySlogan }}
          className="size-90 md:size-110 rounded-full flex flex-col justify-center items-center bg-[var(--background-secondary)]/70"
        >
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            {sloganText.map((text, index) => (
              <h2
                key={index}
                className={`absolute text-4xl md:text-5xl -mt-15 md:-mt-18 opacity-0 font-[family-name:var(--font-poppins)] transition-opacity duration-500 ease-in-out ${
                  index === currentSloganIndex ? "z-1 opacity-100" : ""
                }`}
              >
                <div className="animations-wrapper">
                  {text.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${currentSloganIndex}-${charIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: charIndex * 0.1, duration: 0.3 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </h2>
            ))}
            <p className="text-center text-sm md:text-lg mt-15 md:mt-18">
              從設計到前端，穩紮穩打，
              <br />
              渴望打造實用而有溫度的網站。
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
