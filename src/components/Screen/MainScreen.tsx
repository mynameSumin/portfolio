import docs from "../../assets/screen/docs.png";
import mail from "../../assets/screen/mail.png";

export default function MainScreen({
  setView,
}: {
  setView: (view: "main" | "form" | "thanks") => void;
}) {
  return (
    <div className="z-3 flex flex-col gap-1 p-0.5 h-[100%]">
      <div
        className="justify-center items-center w-[10px] h-fit flex flex-col"
        onDoubleClick={() => setView("thanks")}
      >
        <img src={docs} className="w-[10px] cursor-pointer" />
        <div className="text-[6px] cursor-pointer">docs</div>
      </div>
      <div
        className="justify-center items-center w-[10px] h-fit flex flex-col"
        onDoubleClick={() => setView("form")}
      >
        <img src={mail} className="w-[10px] cursor-pointer" />
        <div className="text-[6px] cursor-pointer">mail</div>
      </div>
    </div>
  );
}
