"use client";

import { useState } from "react";
import useMeasure from "react-use-measure";

import { Poppins, Geist } from "next/font/google";

import Header from "@/components/Header";
import Background from "./background/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function HtmlContainer({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [elementRef, bounds] = useMeasure();
  const bodyHeight = bounds.height;

  function handleModeChange() {
    setIsDark((prev) => !prev);
  }

  return (
    <body
      ref={elementRef}
      className={`${geistSans.variable} ${poppins.variable} ${
        isDark ? "dark" : ""
      } antialiased`}
    >
      <Background bodyHeight={bodyHeight} isDark={isDark} />
      <Header onModeChange={handleModeChange} isDark={isDark} />
      {children}
    </body>
  );
}
