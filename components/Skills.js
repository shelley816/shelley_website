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
        <div className="outer-wrapper">
          <h2>
            Skills
            <span className="block text-base mx-4 mt-2">
              顯示比例依工具熟練度調整，越熟悉的工具數值越高。
            </span>
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
              <p className="text-base/8 mt-4">
                已熟悉的基礎技能包括 HTML、Tailwind CSS、Git 與 GitHub。
                <br />
                2018 年在六角學院購買了第一門 JavaScript
                線上課程並開始自學，當時因工作繁忙而中斷學習。 2024
                年離職後重新投入學習，並在 Udemy 購買了更新版的 JavaScript
                課程，目前覺得基礎知識的部分都掌握得不錯，持續學習中。
                <br />
              </p>
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
