"use client";

import { useTheme } from "@/components/store/Context";

import Wrap from "./ui/Wrap";

export default function Others() {
  const { sharePhoto } = useTheme();

  return (
    <>
      <Wrap areaLink="othersSection">
        <div className="outer-wrapper h-auto! px-0!">
          <h2 className="md:mt-30!">Others</h2>
          <div className="other-wrapper">
            <a
              target="_blank"
              href="https://www.instagram.com/chenshelley_6?igsh=MTByN2ZjOGF5bmd0aA=="
              className="mt-4 hover:underline decoration-2 underline-offset-4 decoration-[#00BCCF]"
            >
              Instagram
            </a>
            <p>
              喜歡寫程式，也喜歡滑雪、旅行和結交朋友！
              <br />
              去過東京、富士山、京都、北海道、長野、湯澤、沖繩、首爾、釜山、宿霧...如果沒有機會共事，說不定可以當朋友！
            </p>
          </div>
          <div className="w-full mt-10 flex flex-col items-center gap-10">
            <div className="img-wrapper">
              {sharePhoto.map((photo) => (
                <div key={photo.id} className="img-box">
                  <img key={photo.id} src={photo.image} alt={photo.title} className="opacity-transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
