"use client";

import { useTheme } from "@/components/store/Context";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

import Wrap from "./ui/Wrap";
import iconX_noBg from "../assets/X_noBg.svg";
import iconLink from "../assets/Link.svg";

const projectPopover =
  "fixed top-0 left-0 z-80 w-full h-full flex justify-center items-center bg-[var(--background)]/80";

function Card({ card, setActiveCard }) {
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
                className={`border border-current text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
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
      className={`card card-active md:max-h-160`}
      style={{ borderRadius: 0 }}
    >
      <div className="card-inner">
        <motion.img
          layoutId={`image-${activeCard.id}`}
          src={activeCard.image}
          alt={activeCard.title}
          style={{ borderRadius: 0 }}
        />

        <div className="buttonBox flex justify-center items-center">
          <button
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
          </button>
        </div>

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
                  className={`border border-current text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
                >
                  {label.sort}
                </span>
              ))}
              {activeCard.link ? (
                <div className="buttonBox">
                  <a
                    className="absolute top-2 right-4 h-8 w-8 flex justify-center items-center cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={activeCard.link}
                  >
                    <Image
                      width={32}
                      height={32}
                      className={isDark ? "invert" : ""}
                      src={iconLink}
                      alt="link icon"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-4 py-2 flex-1">
        {activeCard.longDescription.map((item) => (
          <div key={item.title}>
            <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>

            {item.type === "text" &&
              item.content.map((paragraph, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  {paragraph}
                </p>
              ))}

            {item.type === "list" && (
              <ul className="list-disc pl-5">
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
  return (
    <motion.div
      layoutId={`smCard-${card.id}`}
      className="smallCard"
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCardSmall(card)}
      style={{ borderRadius: 8 }}
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
            width: "70px",
            height: "70px",
          }}
        />

        <motion.div layoutId={`smCard-content-${card.id}`} className="ml-3">
          <div className="card-text">
            <motion.h2
              layoutId={`smCard-heading-${card.id}`}
              className="text-lg/6 mb-2 font-medium"
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
                  className={`border border-current text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
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
      className={`smallCard card-active md:max-h-110`}
      style={{ borderRadius: 0 }}
    >
      <motion.div
        layoutId={`smInner-${activeCardSmall.id}`}
        className="p-3 pb-0 flex justify-start items-end"
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

        <div className="buttonBox flex justify-center items-center">
          <button
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
          </button>
        </div>

        <motion.div
          layoutId={`smCard-content-${activeCardSmall.id}`}
          className="ml-3"
        >
          <div className="relative mb-2 card-text flex justify-start items-center">
            <motion.h2
              layoutId={`smCard-heading-${activeCardSmall.id}`}
              layout
              className="text-2xl/10 font-medium"
            >
              {activeCardSmall.title}
            </motion.h2>

            {activeCardSmall.link ? (
              <div className="buttonBox flex justify-center items-center">
                <a
                  className="ml-2 cursor-pointer underline-offset-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={activeCardSmall.link}
                >
                  <Image
                    width={24}
                    height={24}
                    className={isDark ? "invert" : ""}
                    src={iconLink}
                    alt="link icon"
                  />
                </a>
              </div>
            ) : null}
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
                  className={`border border-current text-xs/6 rounded-full px-[10px] font-medium whitespace-nowrap ${label.textColor} ${label.bgClass}`}
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
            <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>

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

            {item.type === "link" && (
              <ul className="list-disc pl-5 grid grid-cols-3 gap-1">
                {item.content.map((links, index) => (
                  <li key={index}>
                    <a
                      className="hover:underline"
                      href={links.link}
                      target="_blank"
                    >
                      {links.title}
                    </a>
                  </li>
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
  const { CARDS } = useTheme();
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
          <div className="w-11/12 mt-10 flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
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
