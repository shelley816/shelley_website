import Image from "next/image";

import Wrap from "./ui/Wrap";

const photoCss = "w-[110px] h-[135px] lg:w-[150px] lg:h-[160px]"

export default function About() {
  return (
    <>
      <Wrap areaLink="aboutSection">
        <div className="w-full h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl text-center">About me</h2>
          <div className="relative w-11/12 md:w-8/12 mt-10 mx-auto">
            <div className={`photoWrap relative float-left mr-4 mb-2 lg:mr-6 ${photoCss}`}>
              <Image
                fill
                src="/assets/shelley_photo_original.jpg"
                alt="Shelley Chen"
                className="absolute rounded-md"
                style={{ objectFit: "cover" }}
              />
              <Image
                fill
                src="/assets/shelley_photo.jpg"
                alt="Shelley Chen"
                className="absolute rounded-md opacity-100 hover:opacity-0"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="text-base/7 text-justify md:text-lg/8">
              我是 Shelley 來自台灣，從 2012 年起就開始接觸網路產業。
              <br />
              大學時期參加的一場講座啟發了我對程式語言的好奇，這份興趣也逐漸轉化為職涯方向。
              <br /><br />
              我目前專注於製作有趣且具有互動性的網站，最近對於 React 和 Framer Motion 的應用特別感興趣。
              <br /><br />
              過去曾在設計公司擔任網頁設計師，累積了豐富的切版經驗。因為熱愛寫程式，我在工作之餘自學 HTML 和 CSS。
              <br />
              離開設計公司後，我進入軟體公司擔任視覺與網頁設計師，並持續進修 JavaScript。
              為了深化前端相關技術，在 2024 年選擇辭職，開始為轉職成為前端工程師努力。
              <br /><br />
              目前持續學習前端開發的工具，未來希望能製作出令人驚艷的互動網站。
            </p>
          </div>
        </div>
      </Wrap>
    </>
  );
}
