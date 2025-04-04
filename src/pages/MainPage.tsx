import "../styles/Main.css";
import { useMemo, useEffect } from "react";
import { generateStars } from "../utils/starAnimation";
import anime from "animejs";
import myCharacter from "../assets/myCharacter.png";

function HomePage() {
  const stars = useMemo(() => generateStars(80), []);
  const moveStarWithoutCenter = (
    min: number,
    max: number,
    excludeMin: number,
    excludeMax: number
  ) => {
    let value = 0;
    while (value > excludeMin && value < excludeMax) {
      value = Math.random() * max - min;
    }

    return value;
  };
  useEffect(() => {
    stars.forEach((_, idx) => {
      const finalX = moveStarWithoutCenter(700, 1600, -100, 100);
      const finalY = moveStarWithoutCenter(700, 1600, -200, 50);
      const finalScale = Math.random() + 0.5;
      anime({
        targets: `.star-${idx}`,
        translateX: finalX,
        translateY: finalY,
        delay: idx * 15,
        duration: 5000,
        scale: finalScale,
        easing: "easeOutElastic",
        loop: false,
      });
    });
    
    const height = window.innerHeight;
    anime({
      targets: ".name",
      scale: 5,
      translateY: -height * 0.06,
      delay: 700,
      duration: 5000,
      opacity: 1,
      easing: "easeOutElastic",
    });

    anime({
      targets: ".image",
      scale: 20,
      delay: 700,
      duration: 5000,
      opacity: 1,
      easing: "easeOutElastic",
    });
  }, []);

  return (
    <div className="bg-sky-950 w-screen h-screen overflow-hidden relative">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={`star star-${idx} absolute bg-amber-100 rounded-full w-2 h-2`}
          style={
            {
              "--x": star.x,
              "--y": star.y,
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
