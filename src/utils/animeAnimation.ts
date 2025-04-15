import anime from "animejs";

//이름 함수
export const animateName = () => {
  anime({
    targets: ".name",
    scale: [0, 5],
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
    scale: [0.1, 1],
    delay: 1000,
    duration: 3000,
    opacity: [0, 1],
    easing: "easeOutElastic",
  });
};

export const clickCharacter = (width: number, imgWidth: number): any => {
  let letterSpace = 0;
  if (width <= 430) letterSpace = 1;
  else if (width < 640) letterSpace = width * 0.0075;
  else if (width < 700) letterSpace = width * 0.008;
  else if (width < 880) letterSpace = width * 0.01;
  else letterSpace = width * 0.014;
  anime({
    targets: ".name",
    letterSpacing: ["0px", `${letterSpace}px`],
    translateX: width > 800 ? 7 : 1, 
    duration: 2000,
    easing: "easeInOutExpo",
  });

  anime({
    targets: ".image",
    translateX: [width * 0.5 - imgWidth * 0.5, 10],
    duration: 2000,
    easing: "easeInOutExpo",
    complete: () => {
      const element = document.querySelector(".box") as HTMLElement;
      if (element) {
        element.classList.remove("items-center");
      }
    }
  });

  anime({
    targets: ".info",
    opacity: [0, 0.7],
    duration: 1500,
    delay: 1000,
    easing: "easeOutElastic(1, .8)",
    begin: () => {
      const element = document.querySelector(".body") as HTMLElement;
      if (element) {
        element.classList.remove("overflow-y-hidden");
        element.classList.add("overflow-y-scroll");
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

  anime({
    targets: "header",
    opacity: [0, 1],
    delay: 1000,
  });

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
  if (width <= 430) newLetterSpacing = 2;
  else if (width < 640) newLetterSpacing = width * 0.0075;
  else if (width < 700) newLetterSpacing = width * 0.008;
  else if (width < 880) newLetterSpacing = width * 0.01;
  else newLetterSpacing = width * 0.014;

  anime({
    targets: ".name",
    translateX: width > 800 ? 7 : 1,
    letterSpacing: [`${currentLetterSpacing}px`, `${newLetterSpacing}px`],
    duration: 800,
    easing: "easeOutQuad",
  });

  // anime({
  //   targets: ".image",
  //   translateX: width < 600 ? width * -0.012 : width * -0.0105,
  //   easing: "easeOutQuad",
  // });
};
