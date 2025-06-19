import { useNavigate } from "react-router-dom";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { useEffect } from "react";

export default function ContactPage() {
  const navigate = useNavigate();

  const init = () => {
    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas")!,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const camera = new THREE.PerspectiveCamera(30, 1);
    camera.position.set(0, 3, 5);

    renderer.render(scene, camera);

    let loader = new GLTFLoader();
    loader.load("assets/3dModels/desk.glb", (desk) => {
      console.log(desk);
      scene.add(desk.scene);
      desk.scene.scale.set(0.2, 0.35, 0.35);
      camera.lookAt(desk.scene.position);

      renderer.render(scene, camera);
    });

    const directionalLight = new THREE.DirectionalLight("0xffffff", 1);
    directionalLight.position.set(2, 2, 4);
    scene.add(directionalLight);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="w-screen h-screen bg-main">
      <header className="pt-10 mx-auto w-9/10 h-fit flex flex-row justify-between lg:w-[920px] gap-4 sm:gap-0 columns-3 font-medium">
        <div
          className="text-xl cursor-pointer sm:text-3xl text-cyan-700 hover:text-white transition-all duration-500"
          onClick={() => {
            navigate("/");
          }}
        >
          ABOUT ME
        </div>
        <div className="text-xl cursor-pointer sm:text-3xl text-cyan-700 hover:text-white transition-all duration-500">
          PROJECTS
        </div>
        <div className="text-xl cursor-pointer sm:text-3xl text-white">
          CONTACT
        </div>
      </header>
      <canvas id="canvas" className="w-screen h-screen" />
    </div>
  );
}
