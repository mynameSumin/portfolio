import { useState, useRef, useEffect } from "react";

export default function DocsScreen({
  setView,
}: {
  setView: (view: "main" | "form" | "thanks") => void;
}) {
  const [position, setPosition] = useState({ x: 12, y: 12 }); // px 단위 위치
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialPos.current = { ...position };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({
      x: initialPos.current.x + dx,
      y: initialPos.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      style={{
        top: Math.max(2, Math.min(13, position.y / 4)),
        left: Math.max(2, Math.min(30, position.x / 4)),
      }}
      className={`fixed flex-col flex w-[80%] h-[80%] bg-gray-700 rounded-xs`}
    >
      <nav
        onMouseDown={handleMouseDown}
        className="w-full h-fit rounded-t-xs flex flex-row items-start justify-end bg-gray-400"
      >
        <div
          className="px-0.5 pr-1 cursor-pointer h-fit m-0 text-[5px] text-black"
          onClick={() => setView("main")}
        >
          x
        </div>
      </nav>
      <main className="scrollbar-hide flex flex-col gap-1 h-full overflow-scroll items-center">
        <div className="mt-3 text-[7.5px] font-bold">포트폴리오를 읽어주신 모든 분들께</div>
        <div className="mt-3 text-[7px]">포트폴리오를 읽어주셔서</div>
        <div className="text-[7px]"> 진심으로 감사합니다.</div>
        <div className="text-[7px] mt-2">단순한 포트폴리오가 아닌</div>
        <div className="text-[7px]">
          재미를 줄 수 있는 사이트를 제작하기 위해
        </div>
        <div className="text-[7px]">노력하였습니다.</div>
        <div className="text-[7px] mt-2">연락을 원하신다면</div>
        <div className="text-[7px]">mail 창을 통해</div>
        <div className="text-[7px]">바로 이메일을 전송할 수 있습니다.</div>
        <div className="text-[7px] mt-2"> 짧은 여정이지만, </div>
        <div className="text-[7px] mb-3">
          {" "}
          제 노력이 즐거운 인상으로 남았길 바랍니다 :)
        </div>
      </main>
    </div>
  );
}
