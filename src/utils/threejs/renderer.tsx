import { useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export default function CameraController({ focus }: { focus: boolean }) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [animating, setAnimating] = useState(false);
  const [endRotate, setEndRotate] = useState(-1);

  const [{ camPosition, camTarget }, api] = useSpring(() => ({
    camPosition: [-2, 1.2, 2.5],
    camTarget: [-0.6, 0.8, -4.9],
    config: { mass: 1, tension: 80, friction: 20 },
  }));

  // focus가 변경될 때마다 spring 상태 업데이트
  useEffect(() => {
    if (focus) {
      api.start({
        camPosition: [-0.1, 1, 1.3],
        camTarget: [-2.3, 0.25, -6.5],
      });
    } else {
      api.start({
        camPosition: [-2, 1.2, 2.5],
        camTarget: [-0.6, 0.8, - 5],
        onStart: () => setAnimating(true),
        onRest: () => setAnimating(false),
      });
    }

  }, [api, focus]);

  // frame마다 spring에 따라 카메라 위치 업데이트
  useFrame(() => {
    //focus된 상태에서는 계속 카메라로 비추고 있어야함 = (focus => 통과)
    //focus가 안된 상태에서는 한번 업데이트 이후 안해야함 = (!focus && !false) 
    if (!controlsRef.current) return;

    if (focus) {
      controlsRef.current.object.position.lerp(
        new THREE.Vector3(...camPosition.get()),
        0.1
      );
      controlsRef.current.target.lerp(
        new THREE.Vector3(...camTarget.get()),
        0.1
      );
      controlsRef.current.update();
    }
  
    // focus가 false면서 animation 중일 땐 한 번만 이동
    if (!focus && animating) {
      controlsRef.current.object.position.lerp(
        new THREE.Vector3(...camPosition.get()),
        0.1
      );
      controlsRef.current.target.lerp(
        new THREE.Vector3(...camTarget.get()),
        0.1
      );
      
    }

    if(!focus){
      const azimuth = controlsRef.current.getAzimuthalAngle(); // 현재 회전 각도
  
    // 왼쪽 끝에 도달하면 오른쪽으로
    if (azimuth <= controlsRef.current.minAzimuthAngle) {
      setEndRotate(1);
    }
  
    // 오른쪽 끝에 도달하면 왼쪽으로
    if (azimuth >= controlsRef.current.maxAzimuthAngle) {
      setEndRotate(-1);
    }
  
    // 수동으로 회전 업데이트
    controlsRef.current.setAzimuthalAngle(azimuth + endRotate * 0.002); // 회전 속도
    controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      target={[-0.4, 1.25, -3.5]}
      dampingFactor={0.1}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2.3}
      minAzimuthAngle={- Math.PI / 12}
      maxAzimuthAngle={Math.PI / 12}
      minDistance={3}
      maxDistance={window.innerWidth <= 500 ? 8 : window.innerWidth >= 1500 ? 5 : 5}
    />
  );
}
