import anime from "animejs";

//click to start button
export const startAnimation = () => {
    anime({
        targets: ".start-content span",
        opacity: [0, 1],
        translateY: [-3, 0],
        loop: true,
        delay: function(_el, i) {
            return i * 200 + 400;
        }
    })
}