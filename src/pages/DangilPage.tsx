import { useState } from "react";
import dangil from "../assets/bgImage/dangil.png";
import tag from "../assets/Dangil/tagImage.png";
import applyFriend from "../assets/Dangil/applyFriend.mp4";
import changeMusic from "../assets/Dangil/changeMusic.mp4";
import pdf from "../assets/Dangil/pdf.mp4";
import moveDesk from "../assets/Dangil/moveDesk.mp4";

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
        <div className="flex flex-col justify-center items-center">
          <div className="font-monoKorea font-light text-xl leading-10  mt-10">
            당일은{" "}
            <span className="font-medium">
              혼자 공부하거나 일하는 시간이 많은 현대인을 위해
            </span>{" "}
            만들어진 서비스입니다.
          </div>
          <div className="font-monoKorea font-light text-xl leading-15 mb-10">
            사용자는 나만의 가상 방을 꾸미고, 공부나 작업 기록을 남기며, 이
            공간을 친구들에게 공유할 수 있습니다.
          </div>
          <div className="font-monoKorea font-light text-xl leading-10">
            친구들은 방을 방문해 방명록을 남기며 응원과 소통을 이어갈 수 있어,
          </div>
          <div className="font-monoKorea font-light text-xl leading-15 mb-10">
            혼자 있는 시간에도 외로움을 덜고 함께 성장하는 따뜻한 경험을
            제공합니다.
          </div>
        </div>
        <div className="text-4xl text-[#4D3591] font-extrabold font-phudu mb-5">
          2. STACK
        </div>
        <div className="flex flex-row gap-3 ml-5">
          <div className="text-xl text-[#4D3591] font-medium font-phudu mb-10 py-1 px-2 bg-[#C9A6C5]/15 rounded-sm border-2">
            React
          </div>
          <div className="text-xl text-[#4D3591] font-medium font-phudu mb-10 py-1 px-2 bg-[#C9A6C5]/15 rounded-sm border-2">
            css
          </div>
        </div>
        <div className="text-4xl text-[#4D3591] font-extrabold font-phudu mb-5">
          3. Function
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mb-2 gap-2">
          <div className="font-bold">- 친구 추가 기능</div>
          <div className="mx-4 mb-3 ml-3">
            상대방의 고유 번호 또는 이름을 사용하여 사용자를 검색하고 친구를
            추가할 수 있습니다.
          </div>
          <div className="font-bold">- 방 꾸미기 기능</div>
          <div className="mx-4 mb-3 ml-3">
            커튼, 벽지 등을 꾸밀 수 있습니다.
          </div>
          <div className="font-bold">- 공부 기록 기능</div>
          <div className="mx-4 mb-3 ml-3">
            타이머로 시간을 기록하고, pdf를 불러와 필기 및 저장이 가능합니다.
            또한, 메모지 기능을 통해 간단한 메모를 할 수 있습니다.
          </div>
          <div className="font-bold">- 밤낮 모드</div>
          <div className="mx-4 mb-3 ml-3">
            스탠드를 클릭하여 밤낮 모드를 변경할 수 있습니다.
          </div>
        </div>
        <div className="text-4xl text-[#4D3591] font-extrabold font-phudu my-5">
          4. What I did
        </div>

        <div
          onClick={() => {
            openModal(0);
            // explainModal(0);
          }}
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#C9A6C5]/15 items-center gap-2 cursor-pointer"
        >
          <div className="arrow-0 font-medium text-[#4D3591] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4D3591] text-xl">
            친구 추가 및 실시간 알림 기능 구현 (SSE 기반)
          </div>
        </div>
        {modal[0] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mx-4">
              사용자는 이름에 커서를 올렸을 때 표시되는 고유 태그 번호를 통해
              친구를 검색하고 추가할 수 있습니다.
            </div>
            <div className="mx-4">
              친구 요청이 발생하면, 서버에서는{" "}
              <span className="font-bold">Server-Sent Events(SSE)</span>를 통해
              해당 사용자에게 실시간 알림을 전송합니다.
            </div>
            <div className="mx-4">
              이를 통해 사용자 간의 상호작용을 더욱 빠르고 자연스럽게 이어갈 수
              있도록 하였습니다.
            </div>
            <div className="flex flex-col md:flex-row justify-around my-5">
              <img src={tag} className="w-[40%] h-[30%] rounded-2xl" />
              <video
                src={applyFriend}
                className="w-[50%] rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                controls
              />
            </div>
            <div className="mx-auto">
              현재 서버가 종료되어 로그인이 되지 않는 관계로 사진 및 영상으로
              대체합니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#C9A6C5]/15 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(1);
            // explainModal(1);
          }}
        >
          <div className="font-medium text-[#4D3591] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4D3591] text-xl">
            다양한 API 사용을 통한 기능 구현
          </div>
        </div>
        {modal[1] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4 font-bold">- bgm 기능</div>
            <div className="mb-4">
              react-youtube를 사용하여, 사용자가 방의 bgm을 설정할 수 있도록
              구현하였습니다.
            </div>
            <div className="mb-4">
              bgm은 설정 시, 백엔드로 넘어가 로그아웃 후 다시 로그인을 하더라도
              유지됩니다.
            </div>
            <div className="mb-4">
              (현재는 서버가 종료되어 저장되지 않습니다.)
            </div>
            <video
              src={changeMusic}
              className="w-[50%] rounded-lg shadow-lg mb-10"
              autoPlay
              muted
              loop
              controls
            />
            <div className="mb-2 font-bold">- pdf 기능</div>
            <div className="mb-2">
              React-PDF를 사용하여 pdf를 불러와 필기가 가능하게 만들었습니다.
            </div>
            <video
              src={pdf}
              className="w-[50%] rounded-lg shadow-lg mb-10"
              autoPlay
              muted
              loop
              controls
            />
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#C9A6C5]/15 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(2);
            // explainModal(2);
          }}
        >
          <div className="font-medium text-[#4D3591] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4D3591] text-xl">
            다양한 인터렉션
          </div>
        </div>
        {modal[2] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4 font-bold">- 밤낮 모드</div>
            <div className="mb-4">
              다크모드와 데이모드 구현 시, 자연스러운 변환을 주기 위해 해가 지고
              뜨는 모습을 구현하였습니다.
            </div>
            <div className="mb-4">
              랜딩 페이지에서는 버튼을 클릭해 변경할 수 있으며, 개인
              페이지에서는 스탠드의 헤드를 클릭하여 변경할 수 있습니다.
            </div>
            <div className="mb-4">
              css와 svg, 컴포넌트 요소들을 이용하여 구현하는 과정에서{" "}
              <span className="font-bold text-[#4D3591]">
                각각의 속성 및 이벤트를 유기적으로 연결하는 방법을 익혔고,
              </span>
            </div>
            <div className="mb-4">
              사용자 행동에 자연스럽게 반응하는 인터페이스를 설계하는 경험을 할
              수 있었습니다.
            </div>
            <div className="mb-4 font-bold mt-5">- 메모 기능</div>
            <div className="mb-4">svg와 js, css를 사용하여 구현하였습니다.</div>
            <div className="mb-4">
              사용자는 메모지의 원하는 색깔, 모양을 선택할 수 있으며 컴퓨터
              하단에만 부착할 수 있습니다.
            </div>
            <div className="mb-4">
              메모지 더블 클릭 시, 메모 내용을 자세히 확인하실 수 있습니다.
            </div>
            <div className="mb-4 font-bold mt-5">- 타이머 기능</div>
            <div className="mb-4">svg와 js를 사용하여 구현하였습니다.</div>
            <div className="mb-4">
              1시간까지는 1초 단위로 시간이 흐르며, 1시간 이후로는 1분 단위로
              올라가도록 만들었습니다.
            </div>
            <div className="mb-4">
              svg를 사용해보며 그래픽 요소를 코드로 직접 다루는 경험을 하였고,
            </div>
            <div className="mb-4">
              다양한 시간 단위(초, 분) 변화를 부드럽게 표현하기 위해 애니메이션
              처리와 최적화 방안을 고민하는 경험을 할 수 있었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#C9A6C5]/15 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(3);
            // explainModal(3);
          }}
        >
          <div className="font-medium text-[#4D3591] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4D3591] text-xl">
            랜딩 화면 드래그앤드롭을 통한 이동 구현
          </div>
        </div>
        {modal[3] && (
          <div className="relative explain-3 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              사용자가 랜딩 화면에서 자유롭게 공간을 탐색할 수 있도록{" "}
              <span className="font-bold">드래그 앤 드롭 기능을 적용하여,</span> 경계 없는 무한한
              인터랙티브 공간을 구현하였습니다.
            </div>
            <div className="mb-4">또한 자유로움을 더욱 느낄 수 있도록 노트북 컴포넌트를 랜덤 배치하고자 하였습니다.</div>
            <div className="mb-4">새로운 로직을 구현하는 과정에서 개발 역량을 확장할 수 있었으며,</div>
            <div className="mb-4">특히 랜덤 배치를 통해 더욱 인터랙티브한 웹 경험을 설계하고 구현하는 실력을 쌓을 수 있었습니다.</div>
            <video
                src={moveDesk}
                className="w-[20%] mx-auto mb-5 rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                controls
              />
            <div className="mb-4 border-t-1 border-gray-300 pt-5">해결 과정은 블로그에 기록해두었습니다.</div>
            <div className="mb-4">
              자세한 글은 아래 제목을 클릭하여 확인해주세요.
            </div>
            <a
              className="py-2 font-medium text-white w-fit px-4 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
              href="https://velog.io/@msm4167/%EB%93%9C%EB%9E%98%EA%B7%B8%EC%95%A4%EB%93%9C%EB%A1%AD%EC%9C%BC%EB%A1%9C-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EB%A9%94%EC%9D%B8-%ED%99%94%EB%A9%B4-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0"
              target="_blank"
            >
              드래그앤드롭으로 움직이는 메인 화면 개발하기
            </a>
          </div>
        )}
        <div className="text-4xl mt-10 text-[#4D3591] font-extrabold font-phudu mb-5">
          4. procedure
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 mb-2 gap-2">
          <div className="mb-1 font-bold text-xl">
            인원은{" "}
            <span className="text-[#4D3591]">FE 2명, BE 2명, DESIGN 1명</span>
            으로 진행했습니다.
          </div>
          <div className="font-bold text-xl">
            코드는 아래 버튼을 통해 GitHub에서 확인할 수 있습니다.
          </div>
          <div className="font-medium text-white mb-4 mt-4 py-2 w-fit px-4 rounded-md bg-[#4D3591] hover:bg-[#6137d6] transition-colors duration-300">
            <a
              href="https://github.com/dang-il/dang-il-frontend"
              target="_blank"
            >
              깃허브로 이동하기
            </a>
          </div>
          <div className="mb-2 font-bold text-xl border-t-1 border-gray-300 pt-5">
            회의 내용은 notion에 기록하였습니다.
          </div>
          <div className="mb-4 font-bold text-xl">
            아래 버튼을 통해 자세한 내용을 확인할 수 있습니다.
          </div>
          <a
            href="https://www.notion.so/74a3c0c42eb2447d85afb6343fa5c9be"
            target="_blank"
            className="font-medium text-white mb-4 py-2 w-fit px-4 rounded-md bg-[#4D3591] hover:bg-[#6137d6] transition-colors duration-300"
          >
            notion으로 이동하기
          </a>
          <div className="mb-4 font-bold text-xl border-t-1 border-gray-300 pt-5">
            실제 사용은 아래의 버튼을 통해 이동하여 사용하실 수 있습니다.
          </div>
          <div className="mb-4 font-bold text-xl">
            현재는 서버가 종료되어 개인 공간만 사용해보실 수 있습니다.
          </div>
          <a
            href="https://dang-il.github.io/dang-il-frontend/"
            target="_blank"
            className="font-medium text-white mb-4 py-2 w-fit px-4 rounded-md bg-[#4D3591] hover:bg-[#6137d6] transition-colors duration-300"
          >
            당일 공간으로 이동하기
          </a>
          <div className="mb-4 font-bold text-xl border-t-1 border-gray-300 pt-5">
            디자인은 Figma를 통해 진행했습니다.
          </div>
          <div className="ml-2">- 아래 화면을 통해 확인하실 수 있습니다.</div>
          <iframe
            className="rounded-2xl mx-auto mt-5 mb-10 border-1 border-[#4D4B5BCC]"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/QuF4BcSQkRHEpj07fmWaZS/%EC%98%88%EC%88%A0%EC%A0%81%EC%9D%B8-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4---%EB%8B%B9%EC%9D%BC--Community-?node-id=0-1&p=f&t=7GcG5SO4brNGLHYS-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DangilPage;
