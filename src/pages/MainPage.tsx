import "../styles/Main.css";
import { useMemo, useEffect, useRef, useState } from "react";
import { generateStars, animateStars } from "../utils/starAnimation";
import {
  animateName,
  animateImage,
  clickCharacter,
  resizeLetterSpace
} from "../utils/animeAnimation";
import myCharacter from "../assets/myCharacter.png";

function HomePage() {
  const stars = useMemo(() => generateStars(80), []);
  const isInitialRender = useRef(true);
  const [isClicked, setIsClicked] = useState(false);
  const handleResize = () : any => {
    const width = window.innerWidth;
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return;
      }

    if(isClicked) {
        console.log("resize!");
        resizeLetterSpace(width);
    }
  };

  useEffect(() => {
    animateStars(stars);
    const height = window.innerHeight;
    animateName(height);
    animateImage();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClicked]);

  return (
    <div className="bg-sky-950 w-screen h-screen overflow-hidden relative">
      <header className="columns-3 mt-6 font-medium flex justify-center gap-[16.5%]">
        <div className="text-3xl">ABOUT ME</div>
        <div className="text-3xl">PROJECTS</div>
        <div className="text-3xl">CONTACT</div>
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
        <div className="name absolute inset-0 flex justify-center items-center font-extrabold opacity-0 sm:justify-center">
          <div className="letter text-cyan-700 inline-block">MIN</div>
          <div className="letter text-blue-200 inline-block">SU</div>
          <div className="letter text-cyan-700 inline-block">MIN</div>
        </div>

        <img
          className="image pointer-events-auto fixed bottom-1/2 left-1/2 translate-x-1/2 translate-y-1/2  opacity-0 w-1/50  md:w-1/70 lg:w-1/100 hover:scale-102"
          onClick={() => {
            clickCharacter(window.innerWidth);
            setIsClicked(true);
        }}
          src={myCharacter}
          alt="Character"
        />
      </div>
    </div>
  );
}

export default HomePage;
