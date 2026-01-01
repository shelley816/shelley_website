import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiSolidBookBookmark } from "react-icons/bi";

export const CARDS = [
  {
    id: "product00",
    title: "SROOTD",
    subtitle: "提供每日穿搭靈感的網站",
    description:
      "網站使用物件導向、MVC 架構開發，練習串接 OpenWeather、Unsplash APIs。",
    image: "/assets/project_00.jpg",
    link: "https://srootd-shelley.netlify.app/",
    logo: undefined, // 暫時無圖片
    label: [
      {
        sort: "JavaScript",
        bgClass: "bg-amber-100",
        textColor: "text-amber-800",
      },
      {
        sort: "MVC 開發",
        bgClass: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        sort: "物件導向開發",
        bgClass: "bg-neutral-300",
        textColor: "text-neutral-900",
      },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "網站使用物件導向、MVC 架構開發，練習串接 OpenWeather、Unsplash APIs，提供每日穿搭靈感的網站。",
        ],
      },
    ],
  },
  {
    id: "product06",
    title: "The Wild Oasis",
    subtitle: "簡易訂房網站",
    description:
      "使用 Next.js 開發的訂房管理網站，專案包含取得資料、處理畫面狀態（loading / empty），並部署至 Vercel，作為實務練習與架構理解的成果展示。",
    image: "/assets/project_06.jpg",
    link: "https://the-wild-oasis-website-demo-flame.vercel.app/",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-sky-100", textColor: "text-sky-800" },
      { sort: "Next.js", bgClass: "bg-zinc-300", textColor: "text-zinc-900" },
      {
        sort: "Tailwind CSS",
        bgClass: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        sort: "Vercel",
        bgClass: "bg-neutral-300",
        textColor: "text-neutral-900",
      },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "The Wild Oasis 是一個以度假小木屋為主題的訂房管理網站，使用 Next.js 開發，作為熟悉現代前端框架與專案架構的實務練習作品。",
          "整體專案著重於頁面結構規劃、資料取得流程，處理局部更新內容以提升使用者體驗。",
        ],
      },
      {
        title: "功能特色",
        type: "list",
        content: [
          "房型主頁面提供人數塞選功能，並顯示相關房型資訊。",
          "訂房頁面提供日期選擇、人數選擇、訂房人資訊填寫等功能。",
          "訂房完成後，顯示訂房成功頁面，並提供編輯及刪除訂單功能。",
          "使用 Google 登入功能，方便使用者快速登入。",
        ],
      },
    ],
  },
  {
    id: "product01",
    title: "Homestay Pottery",
    subtitle: "民宿與陶藝體驗網站",
    description: "整合民宿介紹、陶藝體驗與商品購買功能的品牌形象網站。",
    image: "/assets/project_01.jpg",
    link: "https://homestay-pottery-3087e.web.app/",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-sky-100", textColor: "text-sky-800" },
      { sort: "Redux", bgClass: "bg-purple-100", textColor: "text-purple-800" },
      {
        sort: "React Router",
        bgClass: "bg-rose-100",
        textColor: "text-rose-800",
      },
      {
        sort: "Tailwind CSS",
        bgClass: "bg-blue-100",
        textColor: "text-blue-800",
      },
      // {
      //   sort: "Firebase",
      //   bgClass: "bg-amber-100",
      //   textColor: "text-amber-800",
      // },
      // {
      //   sort: "Render",
      //   bgClass: "bg-fuchsia-100",
      //   textColor: "text-fuchsia-800",
      // },
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
        type: "list",
        content: [
          "從零開始實作一個完整的網站，讓我比較了解 React 開發流程、狀態管理與元件化設計思維，也使用 Tailwind CSS 練習快速設計與 RWD 調整。",
          "由於想加速開發流程， UI & UX 部分還有很多改進空間。",
          "目前不打算再最佳化此網站，原因是未來會將此網站改為使用 Next.js 開發。",
        ],
      },
    ],
  },
  {
    id: "product02",
    title: "Personal Website",
    subtitle: "個人形象網站（即此網站）",
    description: "目標展示個人作品與技能、提升求職競爭力。",
    image: "/assets/project_02.jpg",
    link: undefined,
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-sky-100", textColor: "text-sky-800" },
      { sort: "Next.js", bgClass: "bg-zinc-300", textColor: "text-zinc-900" },
      {
        sort: "Tailwind CSS",
        bgClass: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        sort: "Framer Motion",
        bgClass: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
      {
        sort: "Vercel",
        bgClass: "bg-neutral-300",
        textColor: "text-neutral-900",
      },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "這是一個以 React 與 Next.js 架構打造的個人形象網站，目標在於呈現作品集、技能與專業背景，提升在求職時的競爭力。",
          "整體設計風格走極簡路線，搭配動態效果營造專業感與互動性，並透過 RWD 響應式設計，確保在各種裝置上都能有良好的瀏覽體驗。",
          "未來若經手的專案數量增加，可將 Projects 區塊獨立為一個頁面，並搭配 Next.js 分頁功能，進一步豐富內容呈現。",
        ],
      },
      {
        title: "功能特色",
        type: "list",
        content: [
          "響應式設計，支援手機/平板/桌機瀏覽。",
          "網站具備深色、淺色模式切換功能。",
          "使用 Framer Motion 製作進場動畫與 hover 效果，提升互動感。",
        ],
      },
      {
        title: "學習收穫與檢討",
        type: "list",
        content: [
          "在這個專案中初次實作 Framer Motion，讓我更深入理解動畫如何與元件結合。",
          "Tailwind CSS 的運用還有些亂，未來需再整理與最佳化。",
        ],
      },
    ],
  },
  {
    id: "product03",
    title: "React 課堂練習",
    subtitle: "",
    description: "",
    image: (
      <FaReact className="w-full h-full m-4 text-[var(--background-secondary)]" />
    ),
    link: undefined,
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "React", bgClass: "bg-sky-100", textColor: "text-sky-800" },
      { sort: "Vite", bgClass: "bg-violet-200", textColor: "text-violet-800" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "關於如何學習 React，我是在 Udemy 購買此課程 React - The Complete Guide 2025，裡面有許多實作練習。",
          "如果有聽不懂的地方會再詢問 ChatGPT，或是在課程下方留言區也可能可以找到答案。",
        ],
      },
      {
        title: "連結資訊",
        type: "link",
        content: [
          {
            title: "Countdown",
            link: "https://shelley816.github.io/practice_01_countdown/",
          },
          {
            title: "PlacePicker",
            link: "https://shelley816.github.io/practice_02_placepicker/",
          },
          {
            title: "Quiz",
            link: "https://shelley816.github.io/practice_03_quiz/",
          },
        ],
      },
    ],
  },
  {
    id: "product05",
    title: "我的 GitHub",
    subtitle: "",
    description: "",
    image: (
      <FaGithub className="w-full h-full m-4 text-[var(--background-secondary)]" />
    ),
    link: "https://github.com/shelley816",
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "Git", bgClass: "bg-orange-100", textColor: "text-orange-800" },
      { sort: "GitHub", bgClass: "bg-slate-100", textColor: "text-slate-800" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "2024 年五月先從 Git & GitHub 開始學習，接著學習 JavaScript & jQuery，過程中也有看一些 Scss、GSAP 的教學影片，最後再學習 React，透過這些學習的過程練習 Git 的使用。",
          "但我並沒有把所有學習過程中的練習都放到 GitHub 上，因為有些練習內容較零碎，或者包含後端功能，對於還不熟悉後端的我來說，部署起來相對困難，因此只放上一些靜態網站的練習。",
        ],
      },
    ],
  },
  {
    id: "product04",
    title: "學習筆記",
    subtitle: "",
    description: "",
    image: (
      <BiSolidBookBookmark className="w-full h-full m-4 text-[var(--background-secondary)]" />
    ),
    link: undefined,
    logo: undefined, // 暫時無圖片
    label: [
      { sort: "Git", bgClass: "bg-orange-100", textColor: "text-orange-800" },
      {
        sort: "JavaScript",
        bgClass: "bg-amber-100",
        textColor: "text-amber-800",
      },
      { sort: "React", bgClass: "bg-sky-100", textColor: "text-sky-800" },
    ],
    longDescription: [
      {
        title: "簡介",
        type: "text",
        content: [
          "上課過程中的隨手筆記，主要是幫助自己記憶內容。",
          "如有興趣歡迎參考，內容較為零散可能不好閱讀，敬請見諒。",
        ],
      },
      {
        title: "連結資訊",
        type: "link",
        content: [
          {
            title: "Git & GitHub",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/B10UNV0bC",
          },
          {
            title: "JavaScript",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/S1HuiX44C",
          },
          {
            title: "jQuery",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/SygbFkmn0",
          },
          {
            title: "React 筆記一",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/Bycb5v8k1l",
          },
          {
            title: "React 筆記二",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/Hke8Cnv2kg",
          },
          {
            title: "GSAP",
            link: "https://hackmd.io/@L1iTUK9wSAuo0CXcEBBFUg/r1YcayyCA",
          },
        ],
      },
    ],
  },
];
