import { useEffect, useState } from "react";
import CanvasStar from "../components/canvasStar";
import {
  startPage,
  zoominPlanet,
  zoomoutPlanet,
} from "../utils/portfolioAnimation";
import { useNavigate } from "react-router-dom";
import { playAudio, stopAudio } from "../utils/audio";
import MediplanPage from "./MediplanPage";
import PortfolioPage from "./PortfolioPage";
import DangilPage from "./DangilPage";
import OnlstudiesPage from "./OnlstudiesPage";

function ProjectPage() {
  const navigate = useNavigate();
  const [clickPlanet, setClickPlanet] = useState(false);
  const [planetId, setPlanetId] = useState(-1);
  const getPlanetLocation = () => {
    return [
      { page: PortfolioPage, x: innerWidth / 4 - 150, y: innerHeight / 4 + 100, name: "포트폴리오" },
      {
        page: MediplanPage,
        x: (innerWidth / 4) * 2 - 150,
        y: (innerHeight / 4) * 3 + 100,
        name: "MEDIPLAN",
      },
      {
        page: MediplanPage,
        x: (innerWidth / 4) * 3 - 150,
        y: innerHeight / 4 + 100,
        name: "당일",
      },
      {
        page: MediplanPage,
        x: innerWidth - 150,
        y: (innerHeight / 4) * 2 + 100,
        name: "오늘의 스터디",
      },
    ];
  };
  const [planetLocation, setPlanetLocation] = useState(getPlanetLocation());

  useEffect(() => {
    startPage();
    playAudio("src/assets/portfolioPage.mp3");

    const handleResize = () => setPlanetLocation(getPlanetLocation());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      stopAudio();
    };
  }, []);
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-black"
      onClick={() => {
        if (clickPlanet) {
          //현재 클릭이 된 상태라면
          const nextState = !clickPlanet;
          setClickPlanet(nextState);
          zoomoutPlanet(planetId);
        }
      }}
    >
      <header className="fixed -translate-x-1/2 left-1/2 z-1 opacity-0 mt-10 w-9/10 lg:w-[920px] mx-auto columns-3 px-5 mb-10 font-medium flex justify-between">
        <div
          className="text-2xl sm:text-3xl text-neutral-800 hover:text-neutral-400 transition-all duration-500 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          ABOUT ME
        </div>
        <div className="text-2xl sm:text-3xl text-neutral-400 cursor-pointer">
          PROJECTS
        </div>
        <div
          className="text-2xl sm:text-3xl text-neutral-800 cursor-pointer hover:text-neutral-400 transition-all duration-500"
          onClick={() => stopAudio()}
        >
          STOP MUSIC
        </div>
      </header>
      <CanvasStar />
      <div className="body w-9/10 h-screen lg:w-[920px] mx-auto flex justify-center">
        <div>
          {planetLocation.map((planet, idx) => {
           return (
            (
              <div key={idx} className="planets">
                <div
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!clickPlanet) {
                      //현재 클릭이 안된 상태라면
                      const nextState = !clickPlanet; //클릭된 상태로 바꾸기
                      setClickPlanet(nextState);
                      setPlanetId(idx);
                      zoominPlanet(planet.x, planet.y, idx);
                    }
                  }}
                  className={`planet planet-${idx} border-none group fixed w-[30px] h-[30px] opacity-1 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-150 hover:bg-sky-900`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    left: `${planet.x}px`,
                    top: `${planet.y}px`,
                  }}
                >
                  <div
                    className={`overflow-scroll planet-body planet-body-${idx} bg-fixed z-2 opacity-0 w-full h-full bg-no-repeat bg-cover bg-center absolute bg-white`}
                  >
                    {
                      idx == 0 ? <PortfolioPage/> :
                      idx == 1 ? <MediplanPage/> :
                      idx == 2 ? <DangilPage/> :
                      <OnlstudiesPage/>
                    }
                  </div>
                  <div
                    className={`flex name name-${idx} justify-center border-2 border-white items-center absolute opacity-50 group-hover:opacity-100 left-1/2 w-[110px] h-[30px] rounded-sm -translate-x-1/2 -translate-y-[140%] transition-all duration-500`}
                  >
                    <div className="text-white font-bold">{planet.name}</div>
                  </div>
                </div>
              </div>
            )
           ) 
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
