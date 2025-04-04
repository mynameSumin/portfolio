import "../styles/Main.css";
import { useMemo, useEffect } from "react";
import { generateStars, animateStars } from "../utils/starAnimation";
import { animateName, animateImage } from "../utils/animeAnimation";
import myCharacter from "../assets/myCharacter.png";

function HomePage() {
  const stars = useMemo(() => generateStars(80), []);
  
  useEffect(() => {
    animateStars(stars);
    
    const height = window.innerHeight;
    animateName(height);
    animateImage();
   
  }, []);

  return (
    <div className="bg-sky-950 w-screen h-screen overflow-hidden relative">
        <header className="columns-3 mt-6 font-medium flex justify-center gap-[15%]">
    <div className="text-3xl opacity-0">ABOUT ME</div>
    <div className="text-3xl opacity-0">PROJECTS</div>
    <div className="text-3xl opacity-0">CONTACT</div>
        </header>
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={`star star-${idx} absolute bg-amber-100 rounded-full w-2 h-2`}
          style={
            {
              "--x": star.x,
              "--y": star.y,
              opacity: 0
            } as React.CSSProperties
          }
        />
      ))}
      <div>
        <div className="name fixed bottom-1/2 left-1/2 translate-x-[-50%] max-w-1/2 font-extrabold opacity-0">
          <span className="text-cyan-700">MIN</span>
          <span className="text-blue-200">SU</span>
          <span className="text-cyan-700">MIN</span>
        </div>
        <img
          className="image fixed bottom-1/2 left-1/2 translate-x-1/2 translate-y-1/2  opacity-0 w-1/50  md:w-1/60 lg:w-1/100 hover:scale-102"
          src={myCharacter}
          alt="Character"
        />
      </div>
    </div>
  );
}

export default HomePage;
