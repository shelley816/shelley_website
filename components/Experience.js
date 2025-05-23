import Wrap from "./ui/Wrap";

export default function Experience() {
  return (
    <>
      <Wrap areaLink="experienceSection">
        <div className="w-full h-auto md:h-screen px-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-20 md:mt-0 md:text-3xl text-center">
            Experience
          </h2>
          <div className="w-11/12 max-w-110 md:max-w-full lg:w-9/12 mt-10 flex flex-col items-center gap-10">
            <div className="ex-wrapper">
              <ul>
                <li>
                  <p className="date">2017.06 - 2024.04</p>
                  <p className="detail">
                    在<span>訊連科技</span>擔任視覺設計師近 7 年，負責設計行銷頁面主視覺、海報設計、E-dm 活動頁設計及程式撰寫。
                  </p>
                </li>
                <li>
                  <p className="date">2016.06 - 2017.03</p>
                  <p className="detail">
                    在 <span>台灣 Wisdom Garden</span> 擔任設計師，負責官網改版、展覽視覺、UI 最佳化、活動頁製作、產品使用手冊編排、教學影片剪輯、簡報美化。
                  </p>
                </li>
                <li>
                  <p className="date">2016.02 - 2016.04</p>
                  <p className="detail">
                    在 <span>Fanily</span> 分享互動擔任網頁設計師，負責行銷活動相關設計、活動網頁設計、官網改版、Banner
                    製作。
                  </p>
                </li>
                <li>
                  <p className="date">2011.06 - 2015.12</p>
                  <p className="detail">
                    在<span>想想設計</span>擔任設計助理、網頁設計師 4 年 7
                    個月，第一年設計助理時期負責代客管理樂天購物平台，第二年之後工作內容主要為網頁設計。
                  </p>
                </li>
                <li>
                  <p className="date">2010</p>
                  <p className="detail">
                    畢業於<span>崑山科技大學</span>視覺傳達設計系。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
}
