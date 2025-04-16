import { useEffect, useRef } from "react";
import Particle from "./Particle";

const CanvasStar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dpr = window.devicePixelRatio;
  const interval: number = 1000 / 60;
  const particles: Particle[] = [];
  let canvasWidth: number;
  let canvasHeight: number;

  const init = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    canvasWidth = innerWidth;
    canvasHeight = innerHeight;

    canvas!.style.width = canvasWidth + "px";
    canvas!.style.height = canvasHeight + "px";
    canvas!.width = canvasWidth * dpr;
    canvas!.height = canvasHeight * dpr;
    ctx?.scale(dpr, dpr);
  };

  const createParticles = (): void => {
    const PARTICLE_NUM = 500;
    for (let i = 0; i < PARTICLE_NUM; i++) {
      particles.push(new Particle());
    }
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
      particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });

      then = now - (delta % interval);
    };

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    init(canvas, ctx);
    render(ctx);
    createParticles();

    window.addEventListener("resize", () => init(canvas, ctx));
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasStar;
