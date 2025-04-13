import "../styles/Main.css";
import { useMemo, useEffect, useRef, useState } from "react";
import { generateStars, animateStars } from "../utils/starAnimation";
import {
  animateName,
  animateImage,
  clickCharacter,
  resizeLetterSpace,
} from "../utils/animeAnimation";
import myCharacter from "../assets/myCharacter.png";
import RotateCanvas from "../components/RotateCanvas.tsx";

function HomePage() {
  const listStyling =
    "inline font-extrabold leading-25 md:leading-40 lg:leading-35 text-6xl sm:text-7xl  md:text-8xl tracking-[10px]";
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
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClicked]);

  //스크롤에 따른 텍스트 색상 변경
  const changeTextColor = (): void => {
    if (document.getElementById("on"))
      document.getElementById("on")?.removeAttribute("id");

    const ulElement = document.querySelector("ul");
    const startY = ulElement?.getBoundingClientRect().top;
    const endY = ulElement?.getBoundingClientRect().bottom;
    const listItem = document.querySelectorAll(".custom-list");
    const body = document.getElementsByClassName("body");
    const scrollY = body[0]?.scrollTop;

    if (startY && endY && scrollY) {
      if (scrollY > startY && scrollY < endY - startY) {
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
    document
      .querySelector(".body")
      ?.addEventListener("scroll", changeTextColor);
    return () => {
      document
        .querySelector(".body")
        ?.removeEventListener("scroll", changeTextColor);
    };
  }, []);

  return (
    <div className="body bg-sky-950 overflow-x-hidden h-screen z-0 overflow-hidden relative flex flex-col mx-auto">
      <header className="opacity-0 columns-3 mt-6 font-medium flex justify-between">
        <div className="text-2xl sm:text-3xl text-cyan-700">ABOUT ME</div>
        <div className="text-2xl sm:text-3xl text-cyan-700">PROJECTS</div>
        <div className="text-2xl sm:text-3xl text-cyan-700">CONTACT</div>
      </header>
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
      <div className="box mx-auto mt-20 flex flex-col items-center w-9/10 lg:w-230">
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
          <ul className="text-center explain opacity-0 w-full text-stone-50 mt-10 p-0 mb-50 mx-auto">
            <li className={`${listStyling} custom-list`}>
              {" "}
              배움이빠른
            </li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              긍정적인
            </li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              소통이잘되는
            </li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              집중력이높은
            </li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              기록을남기는
            </li>
            <li className={`${listStyling} custom-list`}>
              {" "}
              새로움에 관심이많은
            </li>
          </ul>
          <section>
            <RotateCanvas />
          </section>
          <section className="px-5 border-b-2 text-stone-50 pb-5">
            <div className="font-phudu text-stone-50 text-7xl my-10 font-extrabold">
              PROJECTS
            </div>
            <div className="pointer-events-auto font-phudu text-stone-50 text-4xl sm:text-7xl font-extrabold mb-10 mr-10 tracking-[0.069em] leading-23 opacity-100 sm:opacity-25 hover:opacity-100 transition-opacity duration-500">
              <a
                href="https://www.notion.so/16ef3b205f1e80079ce2e2f3faf613c4?v=f9b691cba218416abfec4a4555365c5b"
                target="_blank"
              >
                프로젝트 공간으로
                <br /> 이동하기
              </a>
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
    </div>
  );
}

export default HomePage;
