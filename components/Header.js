import Image from "next/image";
import CloudSun from "../assets/CloudSun.svg";
import CloudMoon from "../assets/CloudMoon.svg";
import List from "../assets/List.svg";

export default function Header({ onModeChange, isDark }) {
  return (
    <>
      <header className="relative z-50 w-full bg-[var(--background-secondary)]">
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
            <button className="md:hidden">
              <Image
                width={32}
                height={32}
                className={isDark ? "invert" : ""}
                src={List}
                alt="A List icon"
              />
            </button>
            <ul className="hidden md:flex xl:gap-10 gap-6 items-center justify-center">
              <li>About Me</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Contact</li>
              <li>Others</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
