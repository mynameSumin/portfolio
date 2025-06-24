// ContactPage.tsx
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { RefObject, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CameraController from "../utils/threejs/renderer";
import ScreenOverlay from "../components/Screen/ScreenOverlay";

function DeskModel({
  onClickScreen,
  handleFocusOut,
  screenRef,
  standPositionRef,
  lightRef,
  targetRef,
}: {
  onClickScreen: () => void;
  handleFocusOut: () => void;
  screenRef: React.RefObject<THREE.Mesh | null>;
  standPositionRef: React.MutableRefObject<THREE.Vector3 | null>;
  lightRef: RefObject<THREE.SpotLight | null>;
  targetRef: React.MutableRefObject<THREE.Object3D>;
}) {
  const { scene } = useGLTF("assets/3dModels/desk.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.name.toLowerCase().includes("screen")) {
          screenRef.current = child as THREE.Mesh;
        }

        if (child.name.toLowerCase().includes("stand")) {
          const stand = child as THREE.Mesh;
          const pos = new THREE.Vector3();
          stand.getWorldPosition(pos);
          standPositionRef.current = pos;

          if (lightRef.current) {
            lightRef.current.position.set(pos.x, pos.y, pos.z);
            targetRef.current.position.set(pos.x - 1.9, pos.y - 1, pos.z + 0.8);
            lightRef.current.target = targetRef.current;
          }
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.userData.clickable = true;
    }
  }, []);

  return (
    <primitive
      object={scene}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0, 0]}
      onClick={(e: {
        stopPropagation(): unknown;
        object: THREE.Mesh<
          THREE.BufferGeometry<THREE.NormalBufferAttributes>,
          THREE.Material | THREE.Material[],
          THREE.Object3DEventMap
        >;
      }) => {
        if ((e.object as THREE.Mesh).userData.clickable) {
          e.stopPropagation();
          onClickScreen();
        } else {
          handleFocusOut();
        }
      }}
    />
  );
}

export default function ContactPage() {
  const navigate = useNavigate();
  const [focusScreen, setFocusScreen] = useState(false);
  const screenRef = useRef<THREE.Mesh>(null);
  const standPositionRef = useRef<THREE.Vector3 | null>(null);
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(new THREE.Object3D());

  const handleFocusScreen = () => setFocusScreen(true);
  const handleFocusOut = () => setFocusScreen(false);

  return (
    <div className="w-screen h-screen bg-amber-800/90">
      <header className="fixed -translate-x-1/2 left-1/2 z-111 mt-10 w-9/10 lg:w-[920px] mx-auto columns-3 px-5 mb-10 font-medium flex justify-between">
        <div
          className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
          onClick={() => navigate("/")}
        >
          ABOUT ME
        </div>
        <div
          className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
          onClick={() => navigate("/project")}
        >
          PROJECTS
        </div>
        <div className="text-xl cursor-pointer sm:text-3xl text-white">
          CONTACT
        </div>
      </header>

      <Canvas
        shadows
        camera={{ position: [-3, 2, 3.5], fov: 30 }}
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
          intensity={3}
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
        <DeskModel
          onClickScreen={handleFocusScreen}
          handleFocusOut={handleFocusOut}
          screenRef={screenRef}
          standPositionRef={standPositionRef}
          lightRef={lightRef}
          targetRef={targetRef}
        />
        <ScreenOverlay screenRef={screenRef} focus={focusScreen} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("assets/3dModels/desk.glb");