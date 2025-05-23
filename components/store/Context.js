"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";
import { Poppins } from "next/font/google";

import { CARDS } from "./Cards";
import { skills } from "./Skills";

const ContextData = createContext();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export function ContextProvider({ children }) {
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
    <ContextData.Provider
      value={{ isDark, handleModeChange, elementRef, bodyHeight, poppins, CARDS, skills }}
    >
      {children}
    </ContextData.Provider>
  );
}

export function useTheme() {
  return useContext(ContextData);
}
