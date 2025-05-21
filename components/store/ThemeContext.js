"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const ThemeContext = createContext();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const elementRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const handleModeChange = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (elementRef.current) {
      setBodyHeight(elementRef.current.scrollHeight);
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, handleModeChange, elementRef, bodyHeight, poppins }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
