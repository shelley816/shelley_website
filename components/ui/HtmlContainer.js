"use client";

import { useTheme } from "@/components/store/Context";

import Header from "@/components/Header";
import Background from "../background/Background";

export default function HtmlContainer({ children }) {
  const { isDark, handleModeChange, elementRef, bodyHeight, poppins } =
    useTheme();

  return (
    <body
      ref={elementRef}
      className={`${poppins.variable} ${isDark ? "dark" : ""} antialiased`}
    >
      <Background bodyHeight={bodyHeight} isDark={isDark} />
      <Header onModeChange={handleModeChange} isDark={isDark} />
      {children}
    </body>
  );
}
