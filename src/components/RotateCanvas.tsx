import {
  Engine,
  Render,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  Composite,
  Events,
} from "matter-js";
import { useEffect, useRef, useState } from "react";
import CSS3 from "../assets/CSS3.png";
import HTML5 from "../assets/HTML5.png";
import JS from "../assets/JavaScript.png";
import Tailwind from "../assets/Tailwind.png";
import TypeScript from "../assets/TypeScript.png";
import Threejs from "../assets/Threejs.png";
import Cpp from "../assets/Cpp.png";
import Figma from "../assets/Figma.png";
import GitHub from "../assets/GitHub.png";
import nodejs from "../assets/Nodejs.png";
import React from "../assets/React.png";
import Slack from "../assets/Slack.png";

function RotateCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const data: Record<string, { title: string; level: number }> = {
    JS: { title: "JAVASCRIPT", level: 4 },
    CSS3: { title: "CSS3", level: 5 },
    HTML5: { title: "HTML5", level: 5 },
    REACT: { title: "REACT", level: 4 },
    TYPESCRIPT: { title: "TYPESCRIPT", level: 2 },
    TAILWIND: { title: "TAILWIND", level: 3 },
    THREEJS: { title: "THREE.JS", level: 1 },
  };
  const [selectedItem, setSelectedItem] = useState(data["JS"]);

  const cx = 1000;
  const cy = 1000;
  const gravityPower = 0.7;
  let gravityDeg = 0;

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    let engine: Engine,
      render: Render,
      mouse: Mouse,
      mouseConstraint: MouseConstraint,
      runner: Runner,
      observer: IntersectionObserver;

    const initCanvas = () => {
      engine = Engine.create();
      render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: cx,
          height: cy,
          wireframes: false,
          background: "#1b1b19",
        },
      });

      runner = Runner.create();

      Render.run(render);
      Runner.run(runner, engine);
    };

    const observerCanvas = () => {
      const options = { threshold: 0.1 };

      observer = new IntersectionObserver((entries) => {
        const canvasEntry = entries[0];
        if (canvasEntry.isIntersecting) {
          runner!.enabled = true;
          Render.run(render);
        } else {
          runner!.enabled = false;
          Render.stop(render);
        }
      }, options);
      observer.observe(canvas);
    };

    const initMouse = () => {
      mouse = Mouse.create(canvas!);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      Composite.add(engine.world, mouseConstraint);
    };

    const initGround = () => {
      const segments = 50;
      const deg = (Math.PI * 2) / segments;
      const width = 50;
      const radius = cx / 2 + width / 2;
      const height = radius * Math.tan(deg / 2) * 2;

      for (let i = 0; i < segments; i++) {
        const realDeg = deg * i;
        const x = radius * Math.cos(realDeg) + cx / 2;
        const y = radius * Math.sin(realDeg) + cy / 2;
        addBox(x, y, width, height, { isStatic: true, angle: realDeg });
      }
    };

    const addBox = (
      x: number,
      y: number,
      width: number,
      height: number,
      options: {} = {}
    ) => {
      const box = Bodies.rectangle(x, y, width, height, options);
      Composite.add(engine.world, box);
    };

    const initSkillBoxes = () => {
      const scale = 0.4;
      addBox(cx / 2, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 90 },
        label: "CSS3",
        render: { sprite: { texture: CSS3, xScale: scale, yScale: scale } },
      });
      addBox(cx / 2 - 512 * scale, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 20 },
        label: "JS",
        render: { sprite: { texture: JS, xScale: scale, yScale: scale } },
      });
      addBox(cx / 2 + 512 * scale, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 85 },
        label: "HTML5",
        render: { sprite: { texture: HTML5, xScale: scale, yScale: scale } },
      });
      addBox(cx / 2, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 40 },
        label: "REACT",
        render: { sprite: { texture: React, xScale: scale, yScale: scale } },
      });
      addBox(cx / 2 + 512 * scale, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 70 },
        label: "TAILWIND",
        render: { sprite: { texture: Tailwind, xScale: 0.5, yScale: 0.5 } },
      });
      addBox(cx / 2 - 512 * scale, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 20 },
        label: "TYPESCRIPT",
        render: {
          sprite: { texture: TypeScript, xScale: scale, yScale: scale },
        },
      });

      addBox(cx / 2 - 512 * scale, cy / 2, 512 * scale, 512 * scale, {
        chamfer: { radius: 90 },
        label: "THREEJS",
        render: {
          sprite: { texture: Threejs, xScale: scale, yScale: scale },
        },
      });
    };

    initCanvas();
    initMouse();
    initGround();
    initSkillBoxes();
    observerCanvas();
    Events.on(runner!, "tick", () => {
      gravityDeg += 1;
      engine.gravity.x = gravityPower * Math.cos((Math.PI / 180) * gravityDeg);
      engine.gravity.y = gravityPower * Math.sin((Math.PI / 180) * gravityDeg);
    });

    Events.on(mouseConstraint!, "mousedown", () => {
      if (mouseConstraint.body && mouseConstraint.body.label) {
        const newItem = data[mouseConstraint.body.label];
        if (newItem) {
          setSelectedItem(newItem);
        }
      }
    });

    return () => {
      observer.unobserve(canvas);
      Composite.clear(engine.world, true);
      Mouse.clearSourceEvents(mouse);
      Runner.stop(runner);
      Render.stop(render);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="border-b-2 text-stone-50 pb-5">
      <div className="font-phudu border-b-2 pb-5 font-extrabold text-stone-50 text-6xl md:text-7xl lg:text-7xl">
        SKILLS
      </div>
      <div className="font-phudu text-stone-50 text-6xl my-5 font-bold">FE</div>
      <span className="font-phudu text-stone-50 text-6xl mb-5 mr-10">
        {selectedItem.title}
      </span>
      <span>
        {Array(5)
          .fill(null)
          .map((_, i) => {
            let color = selectedItem.level <= i ? 1 : 0;
            return (
              <span
                key={i}
                className={`justify-self-end text-6xl ${
                  color === 1 ? "grayscale" : ""
                }`}
              >
                &#x1F525;
              </span>
            );
          })}
      </span>
      <canvas
        ref={canvasRef}
        className="rounded-full w-100 h-100 mt-12 justify-self-center pointer-events-auto"
      ></canvas>
      <div className="click font-phudu text-stone-50 text-sm my-5 justify-self-center">
        CLICK OR DRAG IMAGE !
      </div>
    </div>
  );
}

export default RotateCanvas;
