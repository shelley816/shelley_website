import { useState, useEffect } from "react";

import Image from "next/image";
import CloudSun from "../assets/CloudSun.svg";
import CloudMoon from "../assets/CloudMoon.svg";
import List from "../assets/List.svg";

export default function Header({ onModeChange, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleScroll(e, itsSection) {
    e.preventDefault();
    document.getElementById(itsSection)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed z-50 w-full bg-[var(--background-secondary)]">
        <div className="w-11/12 h-15 mx-auto flex gap-4 items-center justify-between">
          <h1 className="font-[family-name:var(--font-poppins)] font-[600]">
            Shelley Chen
          </h1>
          <nav className="flex gap-6 items-center justify-center">
            <button className="md:order-1 md:ml-2 cursor-pointer">
              <Image
                width={26}
                height={26}
                onClick={onModeChange}
                className={isDark ? "invert" : ""}
                src={isDark ? CloudMoon : CloudSun}
                alt="A CloudSun icon"
              />
            </button>
            <button onClick={handleMenuClick} className="md:hidden">
              <Image
                width={32}
                height={32}
                className={isDark ? "invert" : ""}
                src={List}
                alt="A List icon"
              />
            </button>
            <ul className="hidden md:flex xl:gap-10 gap-6 items-center justify-center">
              <li>
                <a href="#" onClick={(e) => handleScroll(e, "aboutSection")}>
                  About Me
                </a>
              </li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Contact</li>
              <li>Others</li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className="fixed top-15 z-50 w-full bg-[var(--background-secondary)]"
        style={{
          clipPath: isMenuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        }}
      >
        <ul className="py-5 flex flex-col gap-4 items-center justify-center">
          <li>
            <a href="#" onClick={(e) => handleScroll(e, "aboutSection")}>
              About Me
            </a>
          </li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
          <li>Others</li>
        </ul>
      </div>
    </>
  );
}
