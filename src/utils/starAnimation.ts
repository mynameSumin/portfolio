import anime from "animejs";

interface Stars {
    x: string;
    y: string;
}

export const generateStars = (count: number): Stars[] => {
    const stars: Stars[] = [];
  
    for (let i = 0; i < count; i++) {
      stars.push({
        x: `50%`,
        y: `50%`,
      });
    }
  
    return stars;
  };

  export const moveStarWithoutCenter = (
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


  export const animateStars = (stars: any[]) => {
    stars.forEach((_, idx) => {
      const finalX = moveStarWithoutCenter(700, 1600, -100, 100);
      const finalY = moveStarWithoutCenter(700, 3000, -200, 50);
      const finalScale = Math.random() + 0.5;
      anime({
        targets: `.star-${idx}`,
        translateX: finalX,
        translateY: finalY,
        delay: idx * 15,
        opacity: 0.4,
        duration: 5000,
        scale: finalScale,
        easing: "easeOutElastic",
        loop: false,
      });
    });
  };