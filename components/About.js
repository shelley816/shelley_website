import Image from "next/image";

import Wrap from "./ui/Wrap";

const photoCss = "xs:w-[120px] xs:h-[160px] lg:w-[150px] lg:h-[160px]";

export default function About() {
  return (
    <>
      <Wrap areaLink="aboutSection">
        <div className="outer-wrapper">
          <h2>About me</h2>
          <div className="relative w-11/12 md:w-8/12 mt-10 mx-auto">
            <div
              className={`photoWrap hidden xs:inline xs:relative xs:float-left xs:mr-4 xs:mb-2  lg:mr-6 ${photoCss}`}
            >
              <Image
                fill
                src="/assets/shelley_photo_original.jpg"
                alt="Shelley Chen"
                className="absolute rounded-md"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Image
                fill
                src="/assets/shelley_photo.jpg"
                alt="Shelley Chen"
                className="absolute rounded-md opacity-100 hover:opacity-0"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-base/7 text-justify md:text-lg/8">
              我是視覺傳達設計系背景，過去在設計公司與軟體公司擔任網頁設計師，負責網站視覺、UI
              設計與切版實作，累積了多年實務經驗，對使用者經驗與畫面細節特別重視。這段設計經驗讓我在轉職前端工程時，更能從設計角度思考畫面呈現與操作邏輯，並有效與設計、開發團隊溝通。
              <br />
              <br />
              在過往擔任網頁設計師經驗中，我逐漸對前端開發產生興趣。為了深入學習，我從
              2024 年開始全職自學前端技術，透過六角學院與 Udemy 課程系統性學習
              JavaScript、React、Next.js
              等核心技能，並實際開發作品，將所學應用於實作。
              <br />
              <br />
              近期完成的專案如《SROOTD 每日穿搭靈感網站》，結合 Unsplash 與
              OpenWeather APIs，使用物件導向、MVC
              架構開發並處理非同步資料與錯誤狀態；《usePopcorn》練習了元件拆分、狀態管理、loading
              畫面切換等邏輯；《Personal website》嘗試使用 Framer Motion
              製作互動動畫、深淺背景切換，提升使用者體驗。
              <br />
              <br />
              目前我已具備獨立建置網站的能力，能從 UI 切版、元件模組化、API
              串接到畫面錯誤處理一手包辦。未來希望持續強化 React
              生態系工具應用，結合設計專長，投身於重視 UI/UX
              與互動體驗的產品團隊中，貢獻更多價值。
            </p>
          </div>
        </div>
      </Wrap>
    </>
  );
}
