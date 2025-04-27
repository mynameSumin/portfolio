import { useState } from "react";
import dangil from "../assets/bgImage/dangil.png";

function DangilPage() {
  const [modal, setModal] = useState([false, false, false, false]);
  const openModal = (i: number) => {
    let copy = [...modal];

    if (modal[i] == false) {
      copy[i] = true;
      setModal(copy);
    } else {
      copy[i] = false;
      setModal(copy);
    }
  };

  return (
    <div className="full-body w-full h-full">
      <div className="header pt-[5%] pb-[1%] pl-10 bg-[#4D3591] flex flex-row items-end gap-3">
        <div className="tracking-wider text-7xl font-bold font-phudu text-white">
          Dang il
        </div>
        <div className="text-xl font-medium font-phudu text-white">
          2024.5 ~ 2024.9
        </div>
      </div>
      <div className="main-body flex flex-col justify-center p-10">
        <div className="text-5xl text-[#4D3591] font-extrabold font-phudu mb-10">
          1. What is Dangil?
        </div>
        <img src={dangil} className="w-[70%] h-[30%] rounded-2xl mx-auto" />
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
}

export default DangilPage;
