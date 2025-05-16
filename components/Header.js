import { useState, useEffect } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import Image from "next/image";
import CloudSun from "../assets/CloudSun.svg";
import CloudMoon from "../assets/CloudMoon.svg";
import iconList from "../assets/List.svg";
import iconX from "../assets/X.svg";

const menuList = [
  { title: "About Me", link: "aboutSection" },
  { title: "Projects", link: "projectsSection" },
  { title: "Skills", link: "skillsSection" },
  { title: "Experience", link: "experienceSection" },
  { title: "Contact", link: "contactSection" },
  { title: "Others", link: "othersSection" },
];

export default function Header({ onModeChange, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(true);
  }
  function handleMenuClose() {
    setIsMenuOpen(false);
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
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`color-transition fixed z-50 w-full ${
          isMenuOpen
            ? "bg-[var(--background-secondary)]"
            : "bg-[var(--background-secondary)]/0"
        }`}
      >
        <div className="w-11/12 h-15 mx-auto flex gap-4 items-center justify-between">
          <h1 className="text-xl font-[family-name:var(--font-poppins)] font-[600]">
            <Link href="/">Shelley Chen</Link>
          </h1>
          <nav className="flex gap-6 items-center justify-center">
            <div className="buttonBox flex justify-center items-center md:order-1">
              <button>
                <Image
                  width={26}
                  height={26}
                  onClick={onModeChange}
                  className={isDark ? "invert" : ""}
                  src={isDark ? CloudMoon : CloudSun}
                  alt="A CloudSun icon"
                />
              </button>
            </div>
            {isMenuOpen ? (
              <div className="buttonBox flex justify-center items-center md:hidden">
                <button onClick={handleMenuClose}>
                  <Image
                    width={32}
                    height={32}
                    className={isDark ? "invert" : ""}
                    src={iconX}
                    alt="A close icon"
                  />
                </button>
              </div>
            ) : (
              <div className="buttonBox flex justify-center items-center md:hidden">
                <button onClick={handleMenuClick}>
                  <Image
                    width={32}
                    height={32}
                    className={isDark ? "invert" : ""}
                    src={iconList}
                    alt="A List icon"
                  />
                </button>
              </div>
            )}
            <ul className="menuList hidden gap-2 md:flex xl:gap-0 items-center justify-center">
              {menuList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href="#"
                    onClick={(e) => handleScroll(e, item.link)}
                    className="color-transition block md:px-2 xl:px-5 py-1 rounded-full"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="relative clip-transition color-transition mobileMenu z-50 w-full"
          style={{
            clipPath: isMenuOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          }}
        >
          <ul className="py-5 flex flex-col gap-4 items-center justify-center">
            {menuList.map((item, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => handleScroll(e, item.link)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.header>
    </>
  );
}
