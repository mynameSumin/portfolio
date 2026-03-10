import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    return (
        <header className="fixed -translate-x-1/2 left-1/2 z-111 mt-10 w-9/10 lg:w-[920px] mx-auto columns-3 px-5 mb-10 font-medium flex justify-between">
        <div
          className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
          onClick={() => {
            navigate("/");
          }}
        >
          ABOUT ME
        </div>
        {window.innerWidth > 430 ? (
          <div
            className="text-xl cursor-pointer sm:text-3xl text-black hover:text-white transition-all duration-500"
            onClick={() => {
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
    )
}