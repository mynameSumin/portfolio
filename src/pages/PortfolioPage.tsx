import { useState } from "react";

function portfolioPage() {
  const [modal, setModal] = useState([false, false, false, false]);
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
      <div className="header pt-[5%] pb-[1%] pl-10 bg-sky-950 flex flex-row items-end gap-3">
        <div className="tracking-wider text-7xl font-bold font-phudu text-white">
          Portfolio
        </div>
        <div className="text-xl font-medium font-phudu text-white">
          2025.4 ~ now
        </div>
      </div>
      <div className="main-body flex flex-col justify-center p-10">
        <div className="text-4xl text-sky-950 font-extrabold font-phudu mb-10">
          1. concept
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-monoKorea font-light text-xl leading-10">
            이번 포트폴리오는{" "}
            <span className="font-medium">
              "저의 띠인 '뱀'과 2025년 '푸른 뱀의 해'라는 상징적인 의미에서"
            </span>{" "}
            출발했습니다.
          </div>
          <div className="font-monoKorea font-light text-xl leading-15 mb-10">
            뱀이 땅을 벗어나 하늘로 힘차게 날아오르고, 마침내 우주까지 도달하는
            이미지를 상상하며 전체 컨셉을 구상했습니다.
          </div>
          <div className="font-monoKorea font-light text-xl leading-10">
            이러한 흐름을 담기 위해, '푸른색'을 중심 컬러로 설정하고, '우주'를
            배경 테마로 선택하여
          </div>
          <div className="font-monoKorea font-bold text-sky-950 text-xl leading-15 mb-10">
            끝없이 확장되는 성장과 도전의 의미를 표현하고자 했습니다.
          </div>
        </div>
        <div className="text-4xl text-sky-950 font-extrabold font-phudu mb-5">
          2. STACK
        </div>
        <div className="flex flex-row gap-3 ml-5">
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            vite
          </div>
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            React
          </div>
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            Typescript
          </div>
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            Tailwind
          </div>
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            matter.js
          </div>
          <div className="text-xl text-sky-950 font-medium font-phudu mb-10 py-1 px-2 bg-cyan-700/10 rounded-sm border-2">
            anime.js
          </div>
        </div>
        <div className="text-4xl text-sky-950 font-extrabold font-phudu mb-5">
          3. What I did
        </div>
        <div
          onClick={() => {
            openModal(0);
            // explainModal(0);
          }}
          className="flex flex-row py-2 px-4 rounded-md w-full bg-cyan-700/10 items-center gap-2 cursor-pointer"
        >
          <div className="arrow-0 font-medium text-sky-950 text-xl">▶</div>
          <div className="font-monoKorea font-medium text-sky-950 text-xl">
            다양한 라이브러리를 이용한 애니메이션 구현
          </div>
        </div>
        {modal[0] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div>
              사용자가 포트폴리오에서 이탈하는 주된 원인은 '지루함'과 '정보
              과잉'이라는 가설을 세웠습니다.
            </div>
            <div className="mb-4">
              이를 해결하기 위해{" "}
              <span className="font-bold">
                시각적으로 역동적이되, 과하지 않은 인터랙션이 몰입감을 높인다
              </span>
              는 판단을 했습니다.
            </div>
            <div>
              사용자가 화면의 흐름과 상호작용을 통해 자연스럽게 몰입할 수 있도록
              설계했습니다.
            </div>
            <div>
              이를 위해 anime.js와 TailwindCSS를 조합하여 부드럽고 세련된 화면
              전환 애니메이션을 구현했으며,
            </div>
            <div className="mb-4">
              작은 동작 하나에도 일관성 있는 반응을 주어 사용자 경험을 끊김 없이
              이어가고자 했습니다.
            </div>
            <div>
              또한 Canvas와 Matter.js를 활용해 사용자의 클릭이나 움직임에 따라
              물리적 반응이 일어나는 인터랙션을 구현함으로써,
            </div>
            <div className="mb-4 font-bold">
              화면을 단순히 보는 것을 넘어 '직접 조작하고 경험하는 공간'으로
              만들었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-cyan-700/10 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(1);
            // explainModal(1);
          }}
        >
          <div className="font-medium text-sky-950 text-xl">▶</div>
          <div className="font-monoKorea font-medium text-sky-950 text-xl">
            애니메이션 최적화
          </div>
        </div>
        {modal[1] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              많은 인터렉션은 몰입감을 줄 수 있지만, 성능 저하로 인해 사이트
              이탈로 이어질 수 있다는 우려가 생겨 다음과 같이 해결하였습니다.
            </div>
            <div className="font-bold">- 별 렌더링 애니메이션 최적화</div>
            <div className="mx-4">
              프로젝트 페이지에서는 Canvas를 활용하여 다수의 별을 렌더링하는
              애니메이션을 구현했습니다.
            </div>
            <div className="mx-4">
              초기에는 별의 수가 많아짐에 따라 CPU 사용량이 급격히 증가하는
              문제가 발생했습니다.
            </div>
            <div className="mx-4">
              이를 해결하기 위해,{" "}
              <span className="font-bold">
                화면 밖으로 이탈하는 별 객체를 감지하여
              </span>{" "}
              삭제하는 로직을 추가했습니다.
            </div>
            <div className="mx-4">
              캔버스 렌더링 최적화를 통해{" "}
              <span className="font-bold">
                CPU 사용량을 평균 30%에서 15%로, 약 15% 절감하여
              </span>{" "}
              복잡한 애니메이션 환경에서도 안정적인 성능을 유지할 수 있도록
              개선했습니다.
            </div>
            <div className="mx-4">
              이를 통해 복잡한 그래픽 환경에서도 안정적인 성능을 유지할 수
              있도록 개선했습니다.
            </div>

            <div className="font-bold mt-5">- Matter.js 렌더링 최적화</div>
            <div className="mx-4">
              메인 페이지에서 Matter.js를 사용해 skill을 소개하는 2D 물리 기반
              애니메이션을 구현했습니다.
            </div>
            <div className="mx-4">
              그러나 스크롤이 발생해 화면에서 사라졌음에도 계속 렌더링과 물리
              연산이 진행되면서 성능 저하 문제가 발생했습니다.
            </div>
            <div className="mx-4">
              이를 해결하기 위해{" "}
              <span className="font-bold">
                IntersectionObserver를 적용하여,
              </span>{" "}
              화면에 나타나는 즉시 렌더링하고 화면 밖으로 나간 객체는 렌더링과
              연산을 중단하도록 최적화했습니다.
            </div>
            <div className="mx-4 mb-3">
              이 방법을 통해 CPU 사용량을{" "}
              <span className="font-bold">약 5% 감소시켜</span> 불필요한 리소스
              소모를 줄일 수 있었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-cyan-700/10 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(2);
            // explainModal(2);
          }}
        >
          <div className="font-medium text-sky-950 text-xl">▶</div>
          <div className="font-monoKorea font-medium text-sky-950 text-xl">
            몰입을 돕는 반응형 화면 구성
          </div>
        </div>
        {modal[2] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              포트폴리오를 접하는 사용자가 어떤 디바이스를 사용하더라도 불편함
              없이 경험할 수 있어야 한다고 생각했습니다.
            </div>
            <div>
              이를 위해 사용자가 어떤 디바이스를 이용하든 일관된 경험을 제공하기
              위해 CSS 라이브러리를 비교 분석했고,
            </div>
            <div className="mb-4">
              그 결과 반응형 설계에 최적화된 Tailwind CSS를 선택해 구현을
              진행했습니다.
            </div>
            <div className="mb-4">
              모바일에서는 Canvas 기반 페이지의 사용성과 성능이 떨어질 수 있어,
              접속 시 Notion으로 자동 이동하도록 구현하였습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-cyan-700/10 mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(3);
            // explainModal(3);
          }}
        >
          <div className="font-medium text-sky-950 text-xl">▶</div>
          <div className="font-monoKorea font-medium text-sky-950 text-xl">
            개발 과정 기록
          </div>
        </div>
        {modal[3] && (
          <div className="relative explain-3 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              개발 과정 중 해결한 문제들을 블로그에 기록해두었습니다.
            </div>
            <div className="mb-4">
              기록은 단순한 회고를 넘어, 성장의 발판이 된다고 생각합니다.
            </div>
            <div className="mb-4">
              자세한 글은 아래 제목을 클릭하여 확인해주세요.
            </div>
            <a
              className="py-3 font-medium text-white w-full px-3 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
              href="https://velog.io/@msm4167/CRA%EC%97%90%EC%84%9C-VITE%EB%A1%9C"
              target="_blank"
            >
              CRA에서 VITE로
            </a>
            <a
              href="https://velog.io/@msm4167/vsc%EC%97%90%EC%84%9C-tailwind-css-intellisense-%EC%9E%91%EB%8F%99-%EC%95%88%EB%90%A0-%EB%95%8C"
              target="_blank"
              className="py-3 font-medium text-white w-full px-3 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
            >
              vsc에서 tailwind css intellisense 작동 안될 때
            </a>

            <a
              href="https://velog.io/@msm4167/os%EC%97%90-%EB%94%B0%EB%A5%B8-font-size-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0"
              target="_blank"
              className="py-3 font-medium text-white w-full px-3 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
            >
              os에 따른 font size 문제 해결하기
            </a>

            <a
              href="https://velog.io/@msm4167/tailwind%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EA%B7%B8%EB%9D%BC%EB%8D%B0%EC%9D%B4%EC%85%98-%ED%9A%A8%EA%B3%BC-%EB%84%A3%EA%B8%B0"
              target="_blank"
              className="py-3 font-medium text-white w-full px-3 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
            >
              tailwind를 이용해 그라데이션 효과 넣기
            </a>

            <a
              href="https://velog.io/@msm4167/react-ts-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-matter.js-canvas-%EC%98%81%EC%97%AD-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%95%88%EB%90%A8-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95"
              target="_blank"
              className="py-3 font-medium text-white w-full px-3 rounded-md bg-[#4D4B5BCC] hover:bg-[#6b6a7acc] transition-colors duration-300"
            >
              react + ts 환경에서 matter.js + canvas 영역 스크롤 안됨 해결 방법
            </a>
          </div>
        )}
        <div className="text-4xl mt-10 text-sky-950 font-extrabold font-phudu mb-5">
          4. procedure
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 mb-2 gap-2">
          <div className="mb-1 font-bold text-xl text-sky-950">
            기획, 디자인, 개발을 모두 단독으로 수행했습니다.
          </div>
          <div className="font-bold text-xl">
            코드는 아래 버튼을 통해 GitHub에서 확인할 수 있습니다.
          </div>
          <div className="font-medium text-white mb-4 mt-4 py-2 w-fit px-4 rounded-md bg-sky-950 ">
            <a href="https://github.com/mynameSumin/portfolio" target="_blank">
              깃허브로 이동하기
            </a>
          </div>
          <div className="mb-4 font-bold text-xl border-t-1 border-gray-300 pt-5">
            디자인은 Figma를 통해 진행했습니다.
          </div>
          <div className="ml-2">- 아래 화면을 통해 확인하실 수 있습니다.</div>
          <iframe
            className="rounded-2xl mx-auto mt-5 mb-10 border-1 border-[#4D4B5BCC]"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/WAeq2jlYRX5tZ9NZY1jQOh/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=0-1&p=f&t=H6mGpLYpHc3YUxSZ-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default portfolioPage;
