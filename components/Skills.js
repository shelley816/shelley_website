"use client";

import { useTheme } from "@/components/store/Context";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Wrap from "./ui/Wrap";

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <li>
      <p>
        <span>{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        >
          {level}%
        </motion.span>
      </p>
      <div className="level-bar">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  const { skills } = useTheme();

  return (
    <>
      <Wrap areaLink="skillsSection">
        <div className="w-full h-auto md:h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-20 md:mt-0 md:text-3xl text-center">
            Skills
            <span className="block text-base mt-2">顯示比例依工具熟練度調整，越熟悉的工具數值越高</span>
          </h2>
          <div className="w-11/12 max-w-110 md:max-w-full lg:w-9/12 mt-10 flex flex-col items-center gap-10">
            <div className="skills-wrapper">
              <h3>Frontend</h3>
              <ul>
                {skills
                  .filter((item) => item.sort === "frontend")
                  .map((item, index) => (
                    <SkillBar key={index} name={item.name} level={item.level} />
                  ))}
              </ul>
            </div>
            <div className="skills-wrapper">
              <h3>Design</h3>
              <ul>
                {skills
                  .filter((item) => item.sort === "design")
                  .map((item, index) => (
                    <SkillBar key={index} name={item.name} level={item.level} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
