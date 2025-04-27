import { useEffect, useRef } from "react";
import Particle from "./Particle";
import Planet from "./Planet";

const CanvasStar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dpr = window.devicePixelRatio;
  const interval: number = 1000 / 60;
  let particles: Particle[] = [];
  const planets: Planet[] = [];
  let canvasWidth: number;
  let canvasHeight: number;
  
  const getPlanetLocation = () => {
    return [
      { x: innerWidth / 4 - 150, y: innerHeight / 4 + 100},
      { x: innerWidth / 4 * 2 - 150, y: innerHeight / 4 * 3 + 100},
      { x: innerWidth / 4 * 3 - 150, y: innerHeight / 4 + 100},
      { x: innerWidth / 4 * 4 - 150, y: innerHeight / 4 * 2 + 100},
    ];
  };

  let drawPlanetsAndLines = false;
  setTimeout(() => {
    drawPlanetsAndLines = true;
  }, 1000);

  const init = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    canvasWidth = innerWidth;
    canvasHeight = innerHeight;

    canvas!.style.width = canvasWidth + "px";
    canvas!.style.height = canvasHeight + "px";
    canvas!.width = canvasWidth * dpr;
    canvas!.height = canvasHeight * dpr;
    ctx?.scale(dpr, dpr);
  };

  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createRadialGradient(
      canvasWidth / 2, canvasHeight / 2, 0,
      canvasWidth / 2, canvasHeight / 2, canvasWidth
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(0.3, "rgba(20, 30, 60, 0.05)");
    gradient.addColorStop(1, "rgba(5, 10, 20, 1)");
  
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const createParticles = (): void => {
    const PARTICLE_NUM = 350;
    for (let i = 0; i < PARTICLE_NUM; i++) {
      particles.push(new Particle());
    }
  };

  const createPlanet = (location: { x: number; y: number }[]): void => {
    planets.length = 0;
    for (let i = 0; i < location.length; i++) {
      planets.push(new Planet(location[i].x, location[i].y));
    }
  };

  const drawPlanetLines = (ctx: CanvasRenderingContext2D) => {
    if (planets.length < 2) return;
  
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1;
  
    ctx.beginPath();
    ctx.moveTo(planets[0].x, planets[0].y);
  
    for (let i = 1; i < planets.length; i++) {
      ctx.lineTo(planets[i].x, planets[i].y);
    }
  
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const render = (ctx: CanvasRenderingContext2D) => {
    let now, delta;
    let then = Date.now();

    const frame = () => {
      //설정한 interval마다 실행
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;

      if (delta < interval) return;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      if(drawPlanetsAndLines){
        planets.forEach((planet) => {
          planet.update();
          planet.draw(ctx);
        })
        drawPlanetLines(ctx);
  
      }
     
      particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });

      particles = particles.filter(
        (p) => !(p.x < 0 || p.x > screen.width || p.y < 0 || p.y > screen.height)
      );

      drawBackground(ctx);

      then = now - (delta % interval);
    };

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    const locations = getPlanetLocation();
    init(canvas, ctx);
    render(ctx);
    createParticles();
    createPlanet(locations);
  
    window.addEventListener("resize", () => {
      const newLocations = getPlanetLocation();
       particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });
      init(canvas, ctx);
      createPlanet(newLocations);
    });
  }, []);
  

  return <canvas className="fixed w-screen h-screen" ref={canvasRef} />;
};

export default CanvasStar;
