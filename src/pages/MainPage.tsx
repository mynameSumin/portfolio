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

function HomePage() {
  const stars = useMemo(() => generateStars(80), []);
  const isInitialRender = useRef(true);
  const [isClicked, setIsClicked] = useState(false);
  const handleResize = (): any => {
    const width = window.innerWidth;
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (isClicked) {
      console.log("resize!");
      resizeLetterSpace(width);
    }
  };

  useEffect(() => {
    animateStars(stars);
    animateName();
    animateImage();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClicked]);

  return (
    <div className="bg-sky-950 h-screen z-0 overflow-hidden relative px-4 md:px-[7%] lg:px-[20%]">
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
      <div>
        <div className="name h-40 flex justify-center items-center font-extrabold opacity-0 xs:font-medium">
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
        <img
          className="image pointer-events-auto absolute bottom-1/2 left-1/2 translate-x-1/2 translate-y-1/2  opacity-0 w-1/60 sm:w-1/60 md:w-1/70 lg:w-1/100 hover:scale-102"
          onClick={() => {
            clickCharacter(window.innerWidth);
            setIsClicked(true);
          }}
          src={myCharacter}
          alt="Character"
        />
        <div className="min-h-100 pointer-events-none relative flex-col  justify-center">
          <div className="text-right  mt-10 mb-60 pointer-events-auto">
            <div className="info leading-8 opacity-0 text-sm sm:text-xl text-stone-50">
              email | msm4167@naver.com
            </div>
            <div className="info leading-8 opacity-0 text-sm sm:text-xl text-stone-50">
            <a href="https://github.com/mynameSumin" target="_blank">
            github | mynamesymin
              </a>
              
            </div>
            <div className="info leading-8 opacity-0 text-sm sm:text-xl text-stone-50">
              blog |{" "}
              <a href="https://velog.io/@msm4167/posts" target="_blank">
                https://velog.io/@msm4167/posts
              </a>
            </div>
            <div className="info leading-8 opacity-0 text-sm sm:text-xl text-stone-50">
              phone | 010-5578-4167
            </div>
          </div>
          <ul className="list-inside justify-between explain opacity-0 text-stone-50 m-0 p-0 list-none z-10">
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.0524em]">
              배움이 빠른
            </li>
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.054em]">
              {" "}
              긍정적인
            </li>
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.03em]">
              {" "}
              소통이 잘 되는
            </li>
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.04em]">
              {" "}
              집중력이 높은
            </li>
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.035em]">
              {" "}
              기록을 남기는
            </li>
            <li className="inline font-extrabold leading-24 lg:leading-35 text-6xl md:text-7xl lg:text-8xl tracking-[0.056em]">
              {" "}
              새로움에 관심이 많은
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
