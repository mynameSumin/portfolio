// ContactPage.tsx
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CameraController from "../utils/threejs/renderer";
import ScreenOverlay from "../components/Screen/ScreenOverlay";
import { startAnimation } from "../utils/contactAnimation";
import { playAudio } from "../utils/audio";
import DeskModel from "../components/Screen/DeskModel";
import bgm from "../assets/screen/ContactBGM.mp3";
import clickAudio from "../assets/screen/mouseClick.mp3";

export default function ContactPage() {
  const navigate = useNavigate();
  const [focusScreen, setFocusScreen] = useState(false);
  const [light, setLight] = useState(true);
  const screenRef = useRef<THREE.Mesh>(null);
  const standPositionRef = useRef<THREE.Vector3 | null>(null);
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(new THREE.Object3D());

  const handleFocusScreen = () => setFocusScreen(true);
  const handleFocusOut = () => setFocusScreen(false);
  const handleLight = () => setLight(!light);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(bgm);
    audioRef.current.volume = 1;
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="w-screen h-screen bg-amber-800/90">
      <BeforeStart audioRef={audioRef} />
      <header className="fixed -translate-x-1/2 left-1/2 z-111 mt-10 w-9/10 lg:w-[920px] mx-auto columns-3 px-5 mb-10 font-medium flex justify-between">
        <div
          className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
          onClick={() => {
            audioRef.current?.pause();
            audioRef.current!.currentTime = 0;
            navigate("/");
          }}
        >
          ABOUT ME
        </div>
        {window.innerWidth > 430 ? (
          <div
            className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
            onClick={() => {
              audioRef.current?.pause();
              audioRef.current!.currentTime = 0;
              navigate("/project");
            }}
          >
            PROJECTS
          </div>
        ) : (
          <div className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500">
            <a
              href="https://www.notion.so/16ef3b205f1e80079ce2e2f3faf613c4?v=f9b691cba218416abfec4a4555365c5b"
              target="_blank"
            >
              PROJECTS
            </a>
          </div>
        )}
        <div className="text-xl cursor-pointer sm:text-3xl text-white">
          CONTACT
        </div>
      </header>

      <Canvas
        shadows
        camera={{ position: [-1.5, 1.2, 2.5], fov: 30 }}
        className="w-screen h-screen"
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;

          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        onPointerMissed={(e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (!target.closest(".html-ui")) {
            setFocusScreen(false);
          }
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[-2.4, 2.7, 12.05]}
          intensity={1}
          castShadow
          shadow-bias={-0.00018}
          shadow-normalBias={0.05}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <primitive object={targetRef.current} />
        <spotLight
          ref={lightRef}
          intensity={light ? 3 : 0}
          angle={Math.PI / 3}
          penumbra={0.6}
          decay={1}
          distance={1.5}
          shadow-bias={-0.0005}
          shadow-normalBias={0.05}
          color="#ffcc00"
          castShadow
        />

        <CameraController focus={focusScreen} />
        <Suspense
          fallback={
            <Html center>
              <div className="w-screen h-screen bg-black fixed top-0 left-0">
                Loading ...
              </div>
            </Html>
          }
        >
          <DeskModel
            onClickScreen={handleFocusScreen}
            handleFocusOut={handleFocusOut}
            screenRef={screenRef}
            standPositionRef={standPositionRef}
            lightRef={lightRef}
            targetRef={targetRef}
            handleLight={handleLight}
          />

          <ScreenOverlay screenRef={screenRef} focus={focusScreen} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("assets/3dModels/desk.glb");

function BeforeStart({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const [start, setStart] = useState(true);
  const startString = "[ click to start ]".split("");

  return (
    <div
      className={`start-image z-500 w-screen h-screen fixed left-0 top-0 bg-black flex transition-opacity duration-1000 justify-center items-center 
        ${
          start
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        `}
      onClick={() => {
        playAudio(clickAudio);
      }}
    >
      <div
        className="start-content cursor-pointer"
        onClick={() => {
          playAudio(clickAudio);

          const audio = audioRef.current;
          if (audio) {
            audio.currentTime = 0;
            audio.play().catch((err: unknown) => {
              console.warn("audio play 실패", err);
            });
          }
          setStart(false);
        }}
      >
        {startString.map((char, idx) => {
          return (
            <span
              key={idx}
              className="ml-1 text-white/80 inline-block font-extrabold text-4xl"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
