import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";
import MainScreen from "./MainScreen";
import DocsScreen from "./DocsScreen";
import EmailScreen from "./EmailScreen";
import { playAudio } from "../../utils/audio";

export default function ScreenOverlay({
  screenRef,
  focus,
}: {
  screenRef: React.RefObject<THREE.Mesh | null>;
  focus: boolean;
}) {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [quaternion, setQuaternion] = useState<
    [number, number, number, number]
  >([0, 0, 0, 1]);
  const [view, setView] = useState<"main" | "form" | "thanks">("main");
  const now = new Date();

  // 한글 형식
  const localeTime = now.toLocaleTimeString("ko-KR"); // "오후 2:23:45"

  useEffect(() => {
    if (screenRef.current) {
      const geometry = screenRef.current.geometry;
      geometry.computeBoundingBox();

      const boundingBox = geometry.boundingBox!;
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      const worldSize = size.clone();
      screenRef.current.getWorldScale(worldSize); // world scale 곱셈
      worldSize.multiply(size);
      setSize({ width: worldSize.x, height: worldSize.y });
    }
  }, []);

  useFrame(() => {
    if (screenRef.current) {
      const pos = new THREE.Vector3();
      const quat = new THREE.Quaternion();

      screenRef.current?.updateMatrixWorld();
      screenRef.current.getWorldPosition(pos);
      screenRef.current.getWorldQuaternion(quat);
      pos.z -= 0.046;

      setPosition([pos.x, pos.y, pos.z]);
      setQuaternion([quat.x, quat.y, quat.z, quat.w]);
    }
  });

  return (
    <Html
      position={position}
      quaternion={new THREE.Quaternion(...quaternion)}
      transform
      distanceFactor={1}
      zIndexRange={[100, 0]}
      className="html-ui"
    >
      <div
        style={{
          transform: "translate(40%, -62%)",
          width: `${size.width * 401}px`,
          height: `${size.height * 401}px`,
          borderRadius: "4px",
          padding: "6px",
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          playAudio("src/assets/screen/mouseClick.mp3");

        }}
        onWheel={(e) => e.stopPropagation()}
        className={`html-ui bg-black text-white ${
          focus ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <MainScreen setView={setView} />
        {
        view == "thanks" ? <DocsScreen setView={setView} /> :
        view == "form" ? <EmailScreen setView={setView}/> :
        <></>
        }
        <div className=" z-10 bg-white/40 pr-2 w-full flex justify-end h-[8px] fixed left-0 bottom-0">
          <div className="text-[4px]">{localeTime}</div>
        </div>
      </div>
    </Html>
  );
}
