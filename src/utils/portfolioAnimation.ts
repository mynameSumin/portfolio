import anime, { easings, set } from "animejs";

export const startPage = () => {
    anime({
        targets: "header",
        opacity: [0, 1],
        duration: 900,
        delay: 500,
        easing: "easeInOutSine"
    })
    anime({
        targets: ".planet",
        opacity: [0, 0.6],
        duration: 900,
        delay: 1000,
        easing: "easeInOutSine"
    })
}

export const zoominPlanet = (x: number, y: number, id: number) => {
    anime({
        targets: `.planet-${id}`,
        translateX: {
            value: innerWidth/2 - x,
            delay: 500,
            duration: 500,
            easing: "linear",
        },
        backgroundColor: "rgba(0, 0, 0, 1)",
        opacity: {
            value: 1,
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderWidth: {
            value: [0, 1],
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderColor: {
            value: "white",
        },
        borderRadius: {
            value: 3,
            duration: 1000,
            easing: "linear"
        },
        translateY: {
            value: innerHeight/2 - y + 50,
            delay: 500,
            duration: 500,
            easing: "easeOutBack",
        },
        width: {
            value: innerWidth / 9 * 8,
            delay: 500,
            duration: 1000,
            easing: "easeOutBack",
        },
        height: {
            value: innerHeight / 4 * 3,
            delay: 500,
            duration: 1000,
            easing: "easeOutBack",
        },
        duration: 1500,
        begin: () => {
            const planets = document.querySelectorAll(".planet");
            planets.forEach((planet) => {
                planet.classList.remove("hover:scale-150");
                planet.classList.remove("hover:bg-sky-900");
            })

            const planet = document.querySelector(`.planet-${id}`);
            planet?.classList.add("z-1"); 
        }
    })

    anime({
        targets: ".name",
        opacity: [0.2, 1],
        duration: 500,
    })

    anime({
        targets: ".planet-body",
        opacity: [0, 0.3],
        duration: 500,
        easing: "linear",
        delay: 1000
    })
}

export const zoomoutPlanet = (x: number, y: number, id: number) => {
    anime({
        targets: `.planet-${id}`,
        translateX: {
            value: 0 ,
            delay: 500,
            duration: 500,
            easing: "linear",
        },
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        opacity: {
            value: 1,
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderWidth: {
            value: [1, 0],
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderColor: {
            value: "white",
        },
        borderRadius: {
            value: "50%",
            duration: 1000,
            easing: "linear"
        },
        translateY: {
            value: 0,
            delay: 500,
            duration: 500,
            easing: "easeOutBack",
        },
        width: {
            value: 30,
            delay: 500,
            duration: 1000,
            easing: "easeOutBack",
        },
        height: {
            value: 30,
            delay: 500,
            duration: 1000,
            easing: "easeOutBack",
        },
        duration: 1500,
         complete: () => {
            const planets = document.querySelectorAll(".planet");
            planets.forEach((planet) => {
                planet.classList.add("hover:scale-150");
                planet.classList.add("hover:bg-sky-900");
            })

            const planet = document.querySelector(`.planet-${id}`);
            planet?.classList.remove("z-1"); 
         }
    })

    anime({
        targets: ".name",
        opacity: [0.5, 1],
        duration: 500,
    })

    anime({
        targets: ".planet-body",
        opacity: [0.3, 0],
        duration: 500,
        easing: "linear",
        delay: 1000
    })
}