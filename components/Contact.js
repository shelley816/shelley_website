"use client";

import { useState } from "react";
import { useTheme } from "@/components/store/Context";
import { AnimatedState } from "./AnimatedState";
import Image from "next/image";

import Wrap from "./ui/Wrap";

import iconCopy from "../assets/Copy.svg";
import iconCheck from "../assets/CheckCircle.svg";

export default function Contact() {
  const { isDark } = useTheme();
  const [buttonState, setButtonState] = useState("idle");

  const buttonCopy = {
    idle: (
      <Image
        width={24}
        height={24}
        className={isDark ? "invert" : ""}
        src={iconCopy}
        alt="copy icon"
      />
    ),
    success: (
      <Image
        width={24}
        height={24}
        className={isDark ? "invert" : ""}
        src={iconCheck}
        alt="check icon"
      />
    ),
  };

  return (
    <>
      <Wrap areaLink="contactSection">
        <div className="w-full h-auto md:h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-20 md:mt-0 md:text-3xl text-center">
            Contact
          </h2>
          <div className="w-11/12 max-w-110 md:max-w-full lg:w-9/12 mt-10 flex flex-col items-center gap-10">
            <div className="contact-wrapper">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shelley-chen-a4b0a81a0/"
                    className="hover:underline decoration-2 underline-offset-4 decoration-[#00BCCF]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <span>Copy my e-mail</span>
                  <button
                    className="blue-button"
                    disabled={buttonState !== "idle"}
                    onClick={() => {
                      navigator.clipboard.writeText("hihishelley@gmail.com");

                      setTimeout(() => {
                        setButtonState("success");
                      }, 50);

                      setTimeout(() => {
                        setButtonState("idle");
                      }, 2000);
                    }}
                  >
                    <AnimatedState uniqueKey={buttonState}>
                      {buttonCopy[buttonState]}
                    </AnimatedState>
                  </button>
                </li>
              </ul>
              <p>若您對我的經歷有興趣，或有任何合作想法，歡迎透過 Linkedin 和 E-mail 與我聯繫，我會在收到訊息或信件幾天內盡快回覆您。</p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
