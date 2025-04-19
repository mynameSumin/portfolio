import "../styles/Main.css";
import { useMemo, useEffect, useRef, useState } from "react";
import { generateStars, animateStars } from "../utils/starAnimation";
import { useNavigate } from "react-router-dom";
import {
  animateName,
  animateImage,
  clickCharacter,
  resizeLetterSpace,
  pageTrasition,
} from "../utils/animeAnimation";
import myCharacter from "../assets/myCharacter.png";
import RotateCanvas from "../components/RotateCanvas.tsx";
import { playAudio, stopAudio, fadeOutAudio } from "../utils/audio.ts";

function HomePage() {
  const navigate = useNavigate();
  const listStyling =
    "whitespace-pre-line inline font-extrabold font-monoKorea leading-25 md:leading-40 text-4xl sm:text-7xl  md:text-[100px] tracking-[3px] xl:tracking-[1.5px]";
  const infoStyling =
    "info leading-8 opacity-0 text-xs sm:text-xl text-stone-50";
  const stars = useMemo(() => generateStars(100), []); //별 생성

  //resize 관련
  const isInitialRender = useRef(true);
  const [isClicked, setIsClicked] = useState(false);
  const handleResize = (): any => {
    const width = document.querySelector(".main-body");
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (isClicked && width) {
      resizeLetterSpace(width.clientWidth);
    }
  };

  useEffect(() => {
    if (isClicked) {
      const parent = document.querySelector(".main-body") as HTMLElement;
      const elem = document.querySelector(".image") as HTMLElement;

      if (parent && elem) {
        clickCharacter(parent.clientWidth, elem.clientWidth);
      }
    }
    
    if(isClicked) playAudio("src/assets/mainPage.mp3");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      stopAudio();
    };
  }, [isClicked]);

  //스크롤에 따른 텍스트 색상 변경
  const changeTextColor = (): void => {
    if (document.getElementById("on"))
      document.getElementById("on")?.removeAttribute("id");

    const scrollY = window.scrollY;
    const ulElement = document.querySelector("ul");
    const startY = ulElement!.getBoundingClientRect().top + scrollY - 400;
    const endY = ulElement!.getBoundingClientRect().bottom + scrollY - 400;
    const listItem = document.querySelectorAll(".custom-list");

    if (startY && endY && scrollY) {
      if (scrollY > startY && scrollY < endY) {
        const length = (endY - startY) / listItem.length; //한 요소 당 스크롤 길이
        const itemNum = Math.floor((scrollY - startY) / length);
        listItem[itemNum].id = "on";
      }
    }
  };

  useEffect(() => {
    animateStars(stars);
    animateName();
    animateImage();
    document.addEventListener("scroll", changeTextColor);

    return () => {
      document?.removeEventListener("scroll", changeTextColor);
    };
  }, []);

  return (
    <div
      className={`body overflow-x-hidden z-0 overflow-y-hidden relative flex flex-col mx-auto ${
        isClicked
          ? "h-full bg-gradient-to-b bg-[linear-gradient(to_bottom,_#082f49_75%,_#087E8B_100%)]"
          : "h-screen bg-sky-950"
      }`}
    >
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={`star star-${idx} absolute bg-amber-100 rounded-full w-2 h-2`}
          style={
            {
              "--x": star.x,
              "--y": star.y,
              opacity: 0,
            } as React.CSSProperties
          }
        />
      ))}
      <div className="box mx-auto mt-10 flex flex-col items-center w-9/10 lg:w-[920px]">
        <header className="opacity-0 columns-3 w-full px-5 mb-10 font-medium flex justify-between">
          <div className="text-2xl cursor-pointer sm:text-3xl text-white">
            ABOUT ME
          </div>
          <div
            className="text-2xl cursor-pointer sm:text-3xl text-cyan-700 hover:text-white transition-all duration-500"
            onClick={() => {
              // fadeOutAudio(1000);
                pageTrasition(0, () => navigate("/project"));
            }}
          >
            PROJECTS
          </div>
          <div className="text-2xl cursor-pointer sm:text-3xl text-cyan-700 hover:text-white transition-all duration-500">
            CONTACT
          </div>
        </header>
        <div className="name h-min my-20 flex justify-center items-center font-extrabold opacity-0">
          <div className="letter text-cyan-700 inline-block text-xs sm:text-base">
            MIN
          </div>
          <div className="letter text-middletext inline-block text-xs sm:text-base">
            SU
          </div>
          <div className="letter text-cyan-700 inline-block text-xs sm:text-base">
            MIN
          </div>
        </div>
        <div className="main-body min-h-100 pointer-events-none flex-col items-center justify-center">
          <div
            className={`flex ${
              isClicked ? "flex-row justify-between" : "justify-center"
            }`}
          >
            <img
              className="image pointer-events-auto size-1/4 hover:scale-102"
              onClick={() => {
                setIsClicked(true);
              }}
              src={myCharacter}
              alt="Character"
            />
            {isClicked && (
              <div className="info-box bg-sky-50-800 text-right font-phudu px-5 mb-30 pointer-events-none">
                <div className={`${infoStyling}`}>
                  email | msm4167@naver.com
                </div>
                <div className={`${infoStyling}`}>
                  <a
                    href="https://github.com/mynameSumin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github | mynamesumin
                  </a>
                </div>
                <div className={`${infoStyling}`}>
                  blog |{" "}
                  <a
                    href="https://velog.io/@msm4167/posts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://velog.io/@msm4167/posts
                  </a>
                </div>
                <div className={`${infoStyling}`}>phone | 010-5578-4167</div>
              </div>
            )}
          </div>
          <ul className="text-center explain opacity-0 w-full text-stone-50 mt-10 px-0 mb-50 mx-auto">
            <li className={`${listStyling} custom-list`}>배움이빠른</li>
            <li className={`${listStyling} custom-list`}> 긍정적인</li>
            <li className={`${listStyling} custom-list`}> 소통이잘되는</li>
            <li className={`${listStyling} custom-list`}> 집중력이높은</li>
            <li className={`${listStyling} custom-list`}> 기록을남기는</li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              새로움에 관심이많은
            </li>
          </ul>
          <section>
            <RotateCanvas />
          </section>
          <section className="pl-5 border-b-2 text-stone-50 pb-5">
            <div className="font-phudu text-stone-50 text-7xl my-10 font-extrabold">
              PROJECTS
            </div>
            <div
              className="pointer-events-auto cursor-pointer font-phudu text-stone-50 text-4xl sm:text-7xl font-extrabold mb-10 mr-10 tracking-[0.069em] leading-23 opacity-100 sm:opacity-25 hover:opacity-100 transition-opacity duration-500"
              onClick={(e) => {
                playAudio("src/assets/portfolioPage.mp3");
                pageTrasition(e.clientY, () => navigate("/project"));
              }}
            >
              프로젝트 공간으로
              <br /> 이동하기
            </div>
          </section>
          <section className="px-5 border-b-2 text-stone-50 pb-5 mb-50">
            <div className="font-phudu text-stone-50 text-7xl my-10 font-extrabold">
              CONTACT
            </div>
            {/* <div className="font-phudu text-stone-50 text-7xl font-extrabold mb-10 mr-10 opacity-25 tracking-[0.069em] leading-23">CONTACT 공간으로<br/> 이동하기</div> */}
            <div className="info-box font-phudu mb-10 pointer-events-auto">
              <div className="info leading-8 text-sm sm:text-xl text-stone-50">
                email | msm4167@naver.com
              </div>
              <div className="info leading-8 text-sm sm:text-xl text-stone-50">
                <a href="https://github.com/mynameSumin" target="_blank">
                  github | mynamesumin
                </a>
              </div>
              <div className="info leading-8 text-sm sm:text-xl text-stone-50">
                blog |{" "}
                <a href="https://velog.io/@msm4167/posts" target="_blank">
                  https://velog.io/@msm4167/posts
                </a>
              </div>
              <div className="info leading-8 text-sm sm:text-xl text-stone-50">
                phone | 010-5578-4167
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="move-box-up w-screen h-screen bg-black z-1 fixed translate-y-[100%]"></div>
      <div className="move-box-down w-screen h-screen bg-black z-1 fixed -translate-y-[100%]"></div>
    </div>
  );
}

export default HomePage;
