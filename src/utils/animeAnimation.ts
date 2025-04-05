import anime from "animejs";

//이름 함수
export const animateName = (height: number) => {
    anime({
      targets: ".name",
      scale: 5,
      translateY: -height * 0.06,
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
      duration: 3000,
      opacity: 1,
      easing: "easeOutElastic",
    });
  };

  export const clickCharacter = (width: number) : any => {
    anime({
        targets: ".name",
        letterSpacing: ["0px", `${width * 0.01}px`],
        translateX: 6,
        duration: 1500,
        easing: "easeInOutExpo"
    });
    anime({
        targets: ".image",
        translateX: width * - 0.011,
        duration: 1500,
        easing: "easeInOutExpo"
    })
  }

  export const resizeLetterSpace = (width: number) : any => {
    const currentLetterSpacing = parseFloat(getComputedStyle(document.querySelector(".name")!).letterSpacing) || 0;
    const newLetterSpacing = width * 0.008; // 기존 값에서 조금 줄어듦

    anime({
        targets: ".name",
        letterSpacing: [`${currentLetterSpacing}px`, `${newLetterSpacing}px`],
        translateX: 6,
        duration: 800,
        easing: "easeOutQuad"
    });

    anime({
        targets: ".image",
        translateX: width * - 0.011,
        easing: "easeOutQuad"
    })
  }
  