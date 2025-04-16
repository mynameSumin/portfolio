import { useEffect } from "react";
import CanvasStar from "../components/canvasStar";
import { startPage } from "../utils/portfolioAnimation";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
    const navigate = useNavigate();

    useEffect(() => {
        startPage();
    }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <header className="fixed opacity-0 left-1/2 -translate-x-1/2  mt-10 w-9/10 lg:w-[920px] columns-3 px-5 mb-10 font-medium flex justify-between">
        <div className="text-2xl sm:text-3xl text-neutral-800 cursor-pointer" onClick={() => navigate("/")}>ABOUT ME</div>
        <div className="text-2xl sm:text-3xl text-neutral-400 cursor-pointer">PROJECTS</div>
        <div className="text-2xl sm:text-3xl text-neutral-800 cursor-pointer">CONTACT</div>
      </header>
      <CanvasStar />
    </div>
  );
}

export default ProjectPage;
