// import { explainModal } from "../utils/portfolioAnimation";
import { useState } from "react";

function OnlstudiesPage() {
  const [modal, setModal] = useState([false, false, false]);
  const openModal = (i: number) => {
    let copy = [...modal];

    if (modal[i] == false) {
      copy[i] = true;
      setModal(copy);
    } else {
      //모달창 열려있으면 닫아주기
      copy[i] = false;
      setModal(copy);
    }
  };
  return (
    <div className="full-body w-full h-full">
      <div className="header pt-[5%] pb-[1%] pl-10 bg-[#657D24] flex flex-row items-end gap-3">
        <div className="tracking-wider text-7xl font-bold font-phudu text-white">
          today's study
        </div>
        <div className="text-xl font-medium font-phudu text-white">
          2022.4 ~ 2022.9
        </div>
      </div>
      <div className="main-body flex flex-col justify-center p-10">
        <div className="text-4xl text-[#657D24] font-extrabold font-phudu mb-10">
          1. what is today's study?
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-monoKorea font-light text-xl leading-15">
            "오늘의 스터디"는
          </div>
          <div className="font-monoKorea text-[#657D24] font-bold text-xl leading-15">
            "만남이 어려워진 코로나 시기, 스터디 활동을 도울 수 있는 플랫폼이
            있으면 좋겠다"
          </div>
          <div className="font-monoKorea font-light text-xl leading-15 mb-5">
            는 생각에서 만들어진 사이트입니다.
          </div>
        </div>
        <div className="text-4xl text-[#657D24] font-extrabold font-phudu mb-5">
          2. STACK
        </div>
        <div className="flex flex-row gap-3 ml-5">
          <div className="text-xl text-[#657D24] font-medium font-phudu mb-10 py-1 px-2 bg-[#DDEEAF]/70 rounded-sm border-2">
            vanilla JS
          </div>
          <div className="text-xl text-[#657D24] font-medium font-phudu mb-10 py-1 px-2 bg-[#DDEEAF]/70 rounded-sm border-2">
            bootstrap
          </div>
          <div className="text-xl text-[#657D24] font-medium font-phudu mb-10 py-1 px-2 bg-[#DDEEAF]/70 rounded-sm border-2">
            css
          </div>
        </div>
        <div className="text-4xl text-[#657D24] font-extrabold font-phudu mb-5">
          3. Function
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F9F9F9] mb-2 gap-2">
          <div className="font-bold mb-3">- 그룹 생성/수정/초대 기능</div>
          <div className="mx-4 mb-3 ml-3">
            그룹 이름과 설명, 색상을 지정하여 그룹을 생성할 수 있습니다. 또한
            그룹 설정 버튼을 눌러 기존 정보를 수정할 수 있습니다.
          </div>
          <div className="mx-4 mb-3 ml-3">
            그룹 페이지 하단의 초대 코드를 통해 그룹에 입장하실 수 있습니다.
          </div>
          <div className="font-bold my-3">- 회의록 작성, 채팅 기능</div>
          <div className="mx-4 mb-3 ml-3">
            채팅을 시작한 후 작성된 회의록 및 채팅은 저장소에 저장됩니다.
          </div>
          <div className="font-bold my-3">- Todo 기능</div>
          <div className="mx-4 mb-3 ml-3">
            개인의 목표를 설정하면 다른 팀원들이 확인할 수 있습니다.
          </div>
          <div className="mx-4 mb-3 ml-3">
            그룹의 공동 목표도 설정할 수 있습니다.
          </div>
          <div className="font-bold my-3">- 벌금 기능</div>
          <div className="mx-4 mb-3 ml-3">
            목표나 일정을 지키지 않은 팀원에게 벌금을 매길 수 있습니다.
          </div>
        </div>
        <div className="mt-5 text-4xl text-[#657D24] font-extrabold font-phudu mb-5">
          4. What I did
        </div>
        <div
          onClick={() => {
            openModal(0);
            // explainModal(0);
          }}
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#DDEEAF]/70 items-center gap-2 cursor-pointer"
        >
          <div className="arrow-0 font-medium text-[#657D24] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#657D24] text-xl">
            랜딩 페이지
          </div>
        </div>
        {modal[0] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F9F9F9] mt-2 gap-2">
            <div>
              스터디 플랫폼의 이미지에 맞게 최대한 깔끔한 디자인과 최소한의
              애니메이션만 구현하였습니다.
            </div>
            <div>로그인은 구글 로그인으로 이동하도록 구현하였습니다.</div>
            <div>
              첫 프로젝트로,{" "}
              <span className="font-bold">
                백엔드 API를 연동하고 Vanilla JS로 기능을 구현하는 과정을 통해,
              </span>{" "}
              개발 역량은 물론 팀원들과의 원활한 협업 능력까지 함께 성장시킬 수
              있었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#DDEEAF]/70 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(1);
            // explainModal(1);
          }}
        >
          <div className="font-medium text-[#657D24] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#657D24] text-xl">
            그룹 페이지
          </div>
        </div>
        {modal[1] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F9F9F9] mt-2 gap-2">
            <div className="mb-4">
              그룹 페이지에서는 로그인한 사용자의 프로필 사진과 그룹 정보를
              백엔드 API와 연동하여 가져오고,
            </div>
            <div className="mb-4">
              각 그룹의 정보를 카드 형태로 화면에 출력되도록 구현하였습니다.
            </div>
            <div className="mb-4">
              Bootstrap의 grid 시스템을 활용하여 반응형으로 그룹들을
              배치하였으며,
            </div>
            <div className="mb-4">
              사용자별 맞춤 콘텐츠를 제공하기 위한 데이터 연동을 경험할 수
              있었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#DDEEAF]/70 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(2);
            // explainModal(2);
          }}
        >
          <div className="font-medium text-[#657D24] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#657D24] text-xl">
            Todo 페이지
          </div>
        </div>
        {modal[2] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F9F9F9] mt-2 gap-2">
            <div className="mb-4">
              - Bootstrap 기반 그리드 시스템을 활용해 사이드바와 메인 콘텐츠
              영역을 반응형으로 구성하고, 로그인한 사용자의 프로필 및 그룹
              정보를 API와 연동하여 동적으로 출력하였습니다.
            </div>
            <div className="mb-1">
              - Todo 관리 기능은{" "}
              <span className="font-bold">
                Vanilla JavaScript와 jQuery를 활용하여
              </span>{" "}
              입력, 수정, 삭제, 체크 기능을 지원하고,
            </div>
            <div className="mb-4 ml-3">
              각각의 Todo는 선택한 날짜별로 관리할 수 있도록 캘린더 기능과
              연동하였습니다.
            </div>
            <div className="mb-1">
              - 사용자가 날짜를 선택하면 해당 날짜에 저장된 개인 및 그룹원의
              Todo 리스트를 비동기로 가져와 실시간으로 렌더링하며,
            </div>
            <div className="mb-4 ml-3">
              체크 여부 변경, 삭제, 추가 시 서버에 PUT/POST 요청을 보내 데이터의
              일관성을 유지하도록 설계하였습니다.
            </div>
            <div className="mb-1">
              - 캘린더는 기본 Bootstrap Modal을 확장하여 직접 이전달/다음달 이동
              및 오늘 날짜 강조 기능을 구현하였고,
            </div>
            <div className="mb-4 ml-3">
              동적 요소가 많은 구조를 고려해 DOM 최적화에도
              신경 썼습니다.
            </div>
          </div>
        )}
        <div className="text-4xl mt-10 text-[#657D24] font-extrabold font-phudu mb-5">
          5. cooperation
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F9F9F9] mt-2 mb-2 gap-2">
          <div className="mb-4 font-bold text-xl">
            - FE 3명, BE 2명으로 진행하였습니다.
          </div>
          <div className="mb-4 font-bold text-xl border-t-1 border-gray-300 pt-5">
            실제 사용은 아래의 버튼을 통해 이동하여 사용하실 수 있습니다.
          </div>
          <a
            href="http://onlstudies.com/"
            target="_blank"
            className="font-medium text-white mb-4 py-2 w-fit px-4 rounded-md bg-[#657D24] hover:bg-[#657D24]/80 transition-colors duration-300"
          >
            오늘의 스터디로 이동하기
          </a>
          <div className="font-bold text-xl">
            코드는 아래 버튼을 통해 GitHub에서 확인할 수 있습니다.
          </div>
          <div className="font-medium text-white mb-4 mt-4 py-2 w-fit px-4 rounded-md bg-[#657D24] hover:bg-[#657D24]/80 transition-colors duration-300">
            <a
              href="https://github.com/KHU-RETURN/Online-Study-Platform?tab=readme-ov-file"
              target="_blank"
            >
              깃허브로 이동하기
            </a>
          </div>
          <div className="mb-4 font-bold text-xl border-t-1 border-gray-300 pt-5">
            - 디자인 및 기획은 Figma를 통해 진행했습니다.
          </div>
          <div className="ml-2">- 아래 화면을 통해 확인하실 수 있습니다.</div>
          <iframe
            className="rounded-2xl mx-auto mt-5 mb-10 border-1 border-[#4D4B5BCC]"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/xo5yDpWwUD0PWW8Fk7Hlhw/Untitled?node-id=0-1&p=f&t=nFkTo8lFcE7GYN6u-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default OnlstudiesPage;
