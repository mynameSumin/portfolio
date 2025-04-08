import anime from "animejs";

//이름 함수
export const animateName = () => {
  anime({
    targets: ".name",
    scale: 5,
    delay: 1000,
    duration: 3000,
    opacity: 1,
    easing: "easeOutElastic",
  });
};

//내 캐릭터 이미지 함수
export const animateImage = () => {
  anime({
    targets: ".image",
    scale: 20,
    delay: 1000,
    duration: 2000,
    opacity: 1,
    easing: "easeOutElastic",
  });
};

export const clickCharacter = (width: number): any => {
  let letterSpace = 0;
  if (width < 370) letterSpace = 0;
  else if (width < 600) letterSpace = 4;
  else letterSpace = width * 0.0105;
  anime({
    targets: ".name",
    letterSpacing: ["0px", `${letterSpace}px`],
    translateX: width < 600 ? 3 : 6,
    duration: 2000,
    easing: "easeInOutExpo",
  });
  anime({
    targets: ".image",
    translateX: width < 600 ? width < 370? width * -0.014: width * -0.012 : width * -0.0105,
    duration: 2000,
    easing: "easeInOutExpo"
  });

  anime({
    targets: ".info",
    opacity: [0, 0.7],
    duration: 1500,
    delay: 1000,
    easing: "easeOutElastic(1, .8)",
    begin: () => {
      const element = document.querySelector(".h-screen") as HTMLElement;
      if (element) {
        element.classList.remove("overflow-hidden");
        element.classList.add("overflow-scroll");
      }

      const info = document.querySelector(".info-box") as HTMLElement;
      if (info) {
        info.classList.remove("pointer-events-none");
        info.classList.add("pointer-events-auto");
      }
    },
  });

  anime({
    targets: ".explain",
    opacity: [0, 1],
    delay: 1000,
  });

  anime({
    targets: ".custom-list",
    opacity: [0, 0.15],
    delay: 1000,
  });

  // anime({
  //   targets: "header",
  //   opacity: [0, 1],
  //   delay: 1000,
  // });

  anime({
    targets: ".click",
    translateY: -5,
    duration: 800,
    direction: "alternate",
    easing: "easeInOutSine",
    loop: true,
  });
};

export const resizeLetterSpace = (width: number): any => {
  const currentLetterSpacing =
    parseFloat(
      getComputedStyle(document.querySelector(".name")!).letterSpacing
    ) || 0;
  let newLetterSpacing;
  if (width < 360) newLetterSpacing = 0;
  else if (width < 550) newLetterSpacing = width * 0.005;
  else if (width < 1000) newLetterSpacing = width * 0.011;
  else newLetterSpacing = width * 0.008;

  anime({
    targets: ".name",
    letterSpacing: [`${currentLetterSpacing}px`, `${newLetterSpacing}px`],
    duration: 800,
    easing: "easeOutQuad",
  });

  anime({
    targets: ".image",
    translateX: width < 600 ? width * -0.012 : width * -0.0105,
    easing: "easeOutQuad",
  });
};
