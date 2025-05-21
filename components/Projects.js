"use client";

import { useTheme } from "@/components/store/ThemeContext";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

import Wrap from "./ui/Wrap";
import iconX_noBg from "../assets/X_noBg.svg";

const projectPopover =
  "fixed top-0 left-0 z-80 w-full h-full flex justify-center items-center bg-[var(--background)]/80";

function Card({ card, setActiveCard }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      layoutId={`card-${card.id}`}
      className="card"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(card)}
      style={{ borderRadius: 8 }}
    >
      <motion.img
        layoutId={`image-${card.id}`}
        src={card.image}
        alt={card.title}
        style={{ borderRadius: 8 }}
      />
      <motion.button
        aria-hidden
        tabIndex={-1}
        layoutId={`close-button-${card.id}`}
        className="close-button"
        style={{ opacity: 0 }}
      >
        <Image
          width={32}
          height={32}
          className={isDark ? "invert" : ""}
          src={iconX_noBg}
          alt="close icon"
        />
      </motion.button>

      <motion.div layoutId={`card-content-${card.id}`} className="card-content">
        <div className="card-text">
          <motion.h2
            layoutId={`card-heading-${card.id}`}
            className="card-heading"
          >
            {card.title}
          </motion.h2>
        </div>
        <motion.div
          layoutId={`card-extra-info-${card.id}`}
          className="extra-info"
          style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
        >
          <motion.h3>{card.subtitle}</motion.h3>
          <div className="flex flex-wrap gap-2">
            {card.label.map((label, labelIndex) => (
              <span
                key={labelIndex}
                className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
              >
                {label.sort}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ActiveCard({ activeCard, setActiveCard }) {
  const { isDark } = useTheme();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${activeCard.id}`}
      className={`card card-active`}
      style={{ borderRadius: 0 }}
    >
      <div className="card-inner">
        <motion.img
          layoutId={`image-${activeCard.id}`}
          src={activeCard.image}
          alt={activeCard.title}
          style={{ borderRadius: 0 }}
        />
        <motion.button
          layoutId={`close-button-${activeCard.title}`}
          className="close-button"
          aria-label="Close button"
          onClick={() => setActiveCard(null)}
        >
          <Image
            width={32}
            height={32}
            className={isDark ? "invert" : ""}
            src={iconX_noBg}
            alt="close icon"
          />
        </motion.button>

        <motion.div
          layoutId={`card-content-${activeCard.id}`}
          className="card-content"
        >
          <div className="card-text">
            <motion.h2
              layoutId={`card-heading-${activeCard.id}`}
              layout
              className="card-heading"
            >
              {activeCard.title}
            </motion.h2>
          </div>

          <motion.div
            layoutId={`card-extra-info-${activeCard.id}`}
            className="extra-info"
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <motion.h3>{activeCard.subtitle}</motion.h3>
            <div className="flex flex-wrap gap-2">
              {activeCard.label.map((label, labelIndex) => (
                <span
                  key={labelIndex}
                  className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
                >
                  {label.sort}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-4 py-2 flex-1">
        {activeCard.longDescription.map((item) => (
          <div key={item.title}>
            <h4 className="text-lg font-bold mt-4 mb-2">{item.title}</h4>

            {item.type === "text" &&
              item.content.map((paragraph, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  {paragraph}
                </p>
              ))}

            {item.type === "list" && (
              <ul className="list-disc pl-5 space-y-1">
                {item.content.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SmallCard({ card, setActiveCardSmall }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      layoutId={`smCard-${card.id}`}
      className="smallCard"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCardSmall(card)}
      style={{ borderRadius: 0 }}
    >
      <motion.div
        layoutId={`smInner-${card.id}`}
        className="p-3 flex justify-start items-center"
      >
        <motion.img
          layoutId={`smImage-${card.id}`}
          src={card.image}
          alt={card.title}
          style={{
            borderRadius: 8,
            width: "80px",
            height: "80px",
          }}
        />
        <motion.button
          aria-hidden
          tabIndex={-1}
          layoutId={`smClose-button-${card.id}`}
          className="close-button"
          style={{ opacity: 0 }}
        >
          <Image
            width={32}
            height={32}
            className={isDark ? "invert" : ""}
            src={iconX_noBg}
            alt="close icon"
          />
        </motion.button>

        <motion.div layoutId={`smCard-content-${card.id}`} className="ml-3">
          <div className="card-text">
            <motion.h2
              layoutId={`smCard-heading-${card.id}`}
              className="text-lg/10 font-medium"
            >
              {card.title}
            </motion.h2>
          </div>

          <motion.div
            layoutId={`smCard-extra-info-${card.id}`}
            className="smallCard-extra-info"
            style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
          >
            <div className="flex flex-wrap gap-2">
              {card.label.map((label, labelIndex) => (
                <span
                  key={labelIndex}
                  className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
                >
                  {label.sort}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ActiveCardSmall({ activeCardSmall, setActiveCardSmall }) {
  const { isDark } = useTheme();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCardSmall(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`smCard-${activeCardSmall.id}`}
      className={`smallCard card-active`}
      style={{ borderRadius: 0 }}
    >
      <motion.div
        layoutId={`smInner-${activeCardSmall.id}`}
        className="p-3 flex flex-col justify-start items-start"
      >
        <motion.img
          layoutId={`smImage-${activeCardSmall.id}`}
          src={activeCardSmall.image}
          alt={activeCardSmall.title}
          style={{
            borderRadius: 8,
            width: "160px",
            height: "160px",
          }}
        />
        <motion.button
          layoutId={`smClose-button-${activeCardSmall.title}`}
          className="close-button"
          aria-label="Close button"
          onClick={() => setActiveCardSmall(null)}
        >
          <Image
            width={32}
            height={32}
            className={isDark ? "invert" : ""}
            src={iconX_noBg}
            alt="close icon"
          />
        </motion.button>

        <motion.div layoutId={`smCard-content-${activeCardSmall.id}`}>
          <div className="card-text">
            <motion.h2
              layoutId={`smCard-heading-${activeCardSmall.id}`}
              layout
              className="mt-3 text-2xl/12 font-medium"
            >
              {activeCardSmall.title}
            </motion.h2>
          </div>

          <motion.div
            layoutId={`smCard-extra-info-${activeCardSmall.id}`}
            className="smCardextra-info"
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <div className="flex flex-wrap gap-2">
              {activeCardSmall.label.map((label, labelIndex) => (
                <span
                  key={labelIndex}
                  className={`text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
                >
                  {label.sort}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="px-4 py-2 flex-1">
        {activeCardSmall.longDescription.map((item) => (
          <div key={item.title}>
            <h4 className="text-lg font-bold mt-4 mb-2">{item.title}</h4>

            {item.type === "text" &&
              item.content.map((paragraph, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  {paragraph}
                </p>
              ))}

            {item.type === "list" && (
              <ul className="list-disc pl-5 space-y-1">
                {item.content.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeCardSmall, setActiveCardSmall] = useState(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(null);
        setActiveCardSmall(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Wrap areaLink="projectsSection">
        <div className="w-full h-auto md:h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-20 md:mt-0 md:text-3xl text-center">
            Projects
          </h2>
          <div className="w-11/12 mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {CARDS.slice(0, 2).map((card) => (
              <Card key={card.id} card={card} setActiveCard={setActiveCard} />
            ))}
            <div className="smallCardWrap">
              {CARDS.slice(2).map((card) => (
                <SmallCard
                  key={card.id}
                  card={card}
                  setActiveCardSmall={setActiveCardSmall}
                />
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {activeCard ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={projectPopover}
            >
              <ActiveCard
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            </motion.div>
          ) : null}
          {activeCardSmall ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={projectPopover}
            >
              <ActiveCardSmall
                activeCardSmall={activeCardSmall}
                setActiveCardSmall={setActiveCardSmall}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Wrap>
    </>
  );
}

const CARDS = [
  {
    id: "product01",
    title: "Homestay Pottery",
    subtitle: "民宿與陶藝體驗網站",
    description: "整合民宿介紹、陶藝體驗與商品購買功能的品牌形象網站。",
    image: "/assets/project_01.jpg",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-gray-500", textColor: "text-white" },
      { sort: "Redux", bgClass: "bg-purple-500", textColor: "text-white" },
      { sort: "React Router", bgClass: "bg-red-500", textColor: "text-white" },
      { sort: "Tailwind CSS", bgClass: "bg-blue-600", textColor: "text-white" },
      { sort: "Firebase", bgClass: "bg-orange-500", textColor: "text-white" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是我第一個完整開發的 React 作品，從網站架構規劃、視覺設計到程式撰寫皆由我獨立完成。",
          "由於這個專案主要目的是熟悉 React 與前端開發流程，因此在視覺上沒有過多著墨。色塊與插圖部分則是運用 AI 工具輔助生成，以加快設計流程。",
        ],
      },
      {
        title: "功能特色",
        type: "list",
        content: [
          "首頁導覽清楚，快速傳達服務內容與品牌印象",
          "商品商店功能：加入購物車、提交訂單（前端模擬）",
          "響應式設計，支援手機/平板/桌機瀏覽",
          "Redux 管理購物車狀態，確保資料一致性",
        ],
      },
      {
        title: "學習收穫與檢討",
        type: "text",
        content: [
          "從零開始實作一個完整的網站，讓我比較了解 React 開發流程、狀態管理與元件化設計思維，也使用 Tailwind CSS 練習快速設計與 RWD 調整。",
          "由於想加速開發流程， UI & UX 部分還有很多改進空間。",
        ],
      },
    ],
  },
  {
    id: "product02",
    title: "Personal Website",
    subtitle: "個人形象網站",
    description: "目標展示個人作品與技能、提升求職競爭力。",
    image: "/assets/project_02.jpg",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-gray-500", textColor: "text-white" },
      { sort: "Next.js", bgClass: "bg-gray-200", textColor: "text-black" },
      { sort: "Tailwind CSS", bgClass: "bg-blue-600", textColor: "text-white" },
      { sort: "Framer Motion", bgClass: "bg-[#F8ED2E]", textColor: "text-black" },
      { sort: "Vercel", bgClass: "bg-black", textColor: "text-white" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是一個以 React 與 Next.js 架構打造的個人形象網站，目標在於呈現作品集、技能與專業背景，提升在求職或接案時的競爭力。",
          "整體設計風格走極簡路線，搭配動態效果營造專業感與互動性，並透過 RWD 響應式設計，確保在各種裝置上都能有良好的瀏覽體驗。",
        ],
      },
      {
        title: "功能特色",
        type: "list",
        content: [
          "響應式設計，支援手機/平板/桌機瀏覽",
          "網站具備深色、淺色模式切換功能",
          "使用 Framer Motion 製作進場動畫與 hover 效果，提升互動感",
        ],
      },
      {
        title: "學習收穫與檢討",
        type: "text",
        content: [
          "在這個專案中初次實作 Framer Motion，讓我更深入理解動畫如何與元件結合。",
          "Tailwind CSS 的運用還有些亂，未來需再整理與最佳化。",
        ],
      },
    ],
  },
  {
    id: "product03",
    title: "Project 3",
    subtitle: "Project 3 description",
    description: "Project 3 description",
    image: "/assets/logo.jpg",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-gray-500", textColor: "text-white" },
      { sort: "Next.js", bgClass: "bg-gray-200", textColor: "text-black" },
      { sort: "Tailwind CSS", bgClass: "bg-blue-600", textColor: "text-white" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是我第一個完整開發的 React 作品，從網站架構規劃、視覺設計到程式撰寫皆由我獨立完成。",
          "由於這個專案主要目的是熟悉 React 與前端開發流程，因此在視覺上沒有過多著墨。色塊與插圖部分則是運用 AI 工具輔助生成，以加快設計流程。",
        ],
      },
    ],
  },
  {
    id: "product04",
    title: "Project 4",
    subtitle: "Project 4 description",
    description: "Project 4 description",
    image: "/assets/logo.jpg",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-gray-500", textColor: "text-white" },
      { sort: "Next.js", bgClass: "bg-gray-200", textColor: "text-black" },
      { sort: "Tailwind CSS", bgClass: "bg-blue-600", textColor: "text-white" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是我第一個完整開發的 React 作品，從網站架構規劃、視覺設計到程式撰寫皆由我獨立完成。",
          "由於這個專案主要目的是熟悉 React 與前端開發流程，因此在視覺上沒有過多著墨。色塊與插圖部分則是運用 AI 工具輔助生成，以加快設計流程。",
        ],
      },
    ],
  },
  {
    id: "product05",
    title: "Project 5",
    subtitle: "Project 5 description",
    description: "Project 5 description",
    image: "/assets/logo.jpg",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-gray-500", textColor: "text-white" },
      { sort: "Next.js", bgClass: "bg-gray-200", textColor: "text-black" },
      { sort: "Tailwind CSS", bgClass: "bg-blue-600", textColor: "text-white" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是我第一個完整開發的 React 作品，從網站架構規劃、視覺設計到程式撰寫皆由我獨立完成。",
          "由於這個專案主要目的是熟悉 React 與前端開發流程，因此在視覺上沒有過多著墨。色塊與插圖部分則是運用 AI 工具輔助生成，以加快設計流程。",
        ],
      },
    ],
  },
];
