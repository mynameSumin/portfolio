import anime from "animejs";

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
        delay: 800,
        easing: "easeInOutSine"
    })
}

export const zoominPlanet = (x: number, y: number, id: number) => {
    anime({
        targets: `.planet-${id}`,
        translateX: {
            value: innerWidth/2 - x,
            duration: 300,
            easing: "linear",
        },
        translateY: {
            value: innerHeight/2 - y,
            duration: 300,
            easing: "linear",
        },
        backgroundColor: "rgba(0, 0, 0, 1)",
        opacity: {
            value: 1,
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderRadius: {
            value: ["50%", "1%"],
            duration: 500,
            easing: "linear"
        },
        width: {
            value: innerWidth / 9 * 8,
            delay: 300,
            duration: 500,
            easing: "linear",
        },
        height: {
            value: innerHeight / 8 * 7,
            delay: 300,
            duration: 500,
            easing: "linear",
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
        },
    })

    anime({
        targets: `.name-${id}`,
        translateY: innerHeight * - 0.005,
        opacity: [0.5, 0],
        duration: 1000,
        scale: [1, 2],
    })

    anime({
        targets: `.planet-body-${id}`,
        borderRadius: 20,
        opacity: [0, 1],
        duration: 1000,
        easing: "linear",
        delay: 1000
    })

    anime({
        targets: `header`,
        opacity: [1, 0],
        easing: "linear",
        duration: 500,
        begin: () => {
            document.querySelector("header")!.style.pointerEvents = "none";
        }
    })
}

export const zoomoutPlanet = (id: number) => {

    anime({
        targets: `.planet-${id}`,
        translateX: {
            value: 0 ,
            delay: 300,
            duration: 500,
            easing: "linear",
        },
        translateY: {
            value: 0,
            delay: 300,
            duration: 500,
            easing: "linear",
        },
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        opacity: {
            value: 1,
            duration : 1000,
            easings: 'easeInOutSine'
        },
        borderRadius: {
            value: "50%",
            duration: 500,
            easing: "linear"
        },
        width: {
            value: 30,
            duration: 300,
            easing: "linear",
        },
        height: {
            value: 30,
            duration: 300,
            easing: "linear",
        },
        duration: 1500,
         begin: () => {
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
        targets: `.name-${id}`,
        opacity: [0, 0.5],
        duration: 500,
        scale: [3, 1]
    })

    anime({
        targets: `.planet-body-${id}`,
        opacity: [1, 0],
        duration: 500,
        easing: "linear",
    })

    anime({
        targets: `header`,
        opacity: [0, 1],
        easing: "linear",
        duration: 500,
        begin: () => {
            document.querySelector("header")!.style.pointerEvents = "auto";
        }
    })
}

export const explainModal = (id:number) => {

    anime({
        targets: `.explain-${id}`,
        opacity: [0,1],
        duration: 500,
        easing: "easeInOutSine"
    })

    anime({
        targets: `.arrow-${id}`,
        rotate: 90,
        duration: 500,
        easing: "easeInOutSine",
    })
}