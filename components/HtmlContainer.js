"use client";

import { useState } from "react";
import useMeasure from "react-use-measure";

import { Poppins, Geist } from "next/font/google";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // 自訂要用的字重
});

export default function HtmlContainer({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [elementRef, bounds] = useMeasure();

  function handleModeChange() {
    setIsDark((prev) => !prev);
  }

  console.log(bounds.height);
  return (
    <body
      ref={elementRef}
      className={`${geistSans.variable} ${poppins.variable} ${
        isDark ? "dark" : ""
      } antialiased`}
    >
      {bounds.height > 0 && (
        <div
          className={`absolute w-full z-0 bg-cover bg-top overflow-hidden bg-[url(../assets/bg_01.jpg)] ${isDark && "invert opacity-20"}`}
          style={{ height: `${bounds.height}px` }}
        >
          <div className="circleNo1 absolute size-160  contrast-125 backdrop-blur-sm"></div>
          <div className="circleNo2 absolute size-160  contrast-125 backdrop-blur-sm"></div>
        </div>
      )}
      <Header onModeChange={handleModeChange} isDark={isDark} />
      {children}
    </body>
  );
}
