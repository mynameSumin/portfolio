import { useState, useRef, useEffect } from "react";
import { sendEmail } from "../../utils/sendEmail";

export default function EmailScreen({ setView }: { setView: (view: "main" | "form" | "thanks") => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [position, setPosition] = useState({ x: 12, y: 12 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

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

  const handleMouseUp = () => setDragging(false);

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

  const handleSubmit = async () => {
    if (name.length < 1) {
      setError("이름을 1자 이상 입력해주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    if (message.length < 3) {
      setError("메시지를 3자 이상 입력해주세요.");
      return;
    }

    // 여기서 전송 처리
    try {
      const messageFull = name + " " + email + " " + message;
      await sendEmail(email, messageFull);
      alert("메일이 성공적으로 전송되었습니다.");
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    } catch (error) {
      alert("이메일 전송 중 오류 발생");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        top: Math.max(2, Math.min(13, position.y / 4)),
        left: Math.max(2, Math.min(16, position.x / 4)),
      }}
      className="fixed flex-col flex w-[90%] h-[80%] bg-gray-200 rounded-xs"
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
      <main className="flex scrollbar-hide flex-col px-2 text-gray-800 h-full overflow-scroll">
        <div className="mt-1 text-[10px] font-extrabold">CONTACT</div>
        <div className="text-[7px]">name</div>
        <input
          className="mt-[1px] mb-1 p-[1px] text-[5px] bg-gray-50 rounded-xs focus:outline-0"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="text-[7px]">email</div>
        <input
          type="email"
          className="mt-[1px] mb-1 p-[1px] text-[5px] bg-gray-50 rounded-xs focus:outline-0"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="text-[7px]">message</div>
        <textarea
          className="focus:outline-0 bg-gray-50 text-sm w-full min-h-10 resize-none p-1 rounded-xs text-[6px]"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex flex-col items-end w-full">
        <div className={`mt-1 h-fit text-[6px] text-red-800 transition-all duration-500 ${error.length == 0 ? "opacity-0" : "opacity-100"}`}>{error}</div>
          <button
            className="my-2 text-[7px] text-white bg-gray-400 rounded-sm w-fit px-1 py-0.5 hover:bg-gray-500 transition-all duration-300"
            onClick={handleSubmit}
          >
            send message
          </button>
        </div>
      </main>
    </div>
  );
}
