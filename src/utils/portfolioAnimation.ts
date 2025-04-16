import anime from "animejs";

export const startPage = () => {
    anime({
        targets: "header",
        opacity: [0, 1],
        duration: 900,
        delay: 500,
        easing: "easeInOutSine"
    })
}