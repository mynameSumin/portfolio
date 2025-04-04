import anime from "animejs";

//이름 함수
export const animateName = (height: number) => {
    anime({
      targets: ".name",
      scale: 5,
      translateY: -height * 0.06,
      delay: 700,
      duration: 5000,
      opacity: 1,
      easing: "easeOutElastic",
    });
  };
  

  //내 캐릭터 이미지 함수
  export const animateImage = () => {
    anime({
      targets: ".image",
      scale: 20,
      delay: 700,
      duration: 5000,
      opacity: 1,
      easing: "easeOutElastic",
    });
  };
  