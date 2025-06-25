import { RefObject, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function DeskModel({
    onClickScreen,
    handleFocusOut,
    screenRef,
    standPositionRef,
    lightRef,
    targetRef,
    handleLight
  }: {
    onClickScreen: () => void;
    handleFocusOut: () => void;
    screenRef: React.RefObject<THREE.Mesh | null>;
    standPositionRef: React.MutableRefObject<THREE.Vector3 | null>;
    lightRef: RefObject<THREE.SpotLight | null>;
    targetRef: React.MutableRefObject<THREE.Object3D>;
    handleLight: () => void;
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
          if (e.object.name.toLowerCase().includes("stand")) {
            handleLight();
          }

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