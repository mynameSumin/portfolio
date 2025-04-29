import img1 from "../assets/bgImage/mediplan/1.png";
import img2 from "../assets/bgImage/mediplan/2.png";
import img3 from "../assets/bgImage/mediplan/3.png";
import img4 from "../assets/bgImage/mediplan/4.png";
import img5 from "../assets/bgImage/mediplan/5.png";
import img6 from "../assets/bgImage/mediplan/6.png";
import img7 from "../assets/bgImage/mediplan/7.png";
import rule1 from "../assets/bgImage/mediplan/rule1.png";
import rule2 from "../assets/bgImage/mediplan/rule2.png";
// import { explainModal } from "../utils/portfolioAnimation";
import { useState } from "react";

function MediplanPage() {
  const imgList = [img1, img2, img3, img4, img5, img6, img7];
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
      <div className="header pt-[5%] pb-[1%] pl-10 bg-[#4A43BF] flex flex-row items-end gap-3">
        <div className="tracking-wider text-7xl font-bold font-phudu text-white">
          MEDIPLAN
        </div>
        <div className="text-xl font-medium font-phudu text-white">
          2024.8 ~ now
        </div>
      </div>
      <div className="main-body flex flex-col justify-center p-10">
        <div className="text-4xl text-[#4A43BF] font-extrabold font-phudu mb-10">
          1. What is MEDIPLAN?
        </div>
        <div className="w-full mx-auto mb-15 flex flex-row overflow-y-scroll gap-5">
          {imgList.map((name) => {
            return <img src={name} className="w-[20%]" />;
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-monoKorea font-light text-xl leading-10">
            MEDIPLAN은{" "}
            <span className="font-medium">
              " 치매를 겪는 어르신들의 일상을 조금 더 편안하게 만들어주기 위해 "
            </span>{" "}
            시작된 앱입니다.
          </div>
          <div className="font-monoKorea font-light text-xl leading-15 mb-10">
            약 복용 시간을 설정해두면, 디스펜서가 정해진 시간에 맞춰 필요한 약을
            꺼내드려요.
          </div>
          {/* <div className="font-monoKorea font-bold text-[#4A43BF] text-xl leading-15 mb-10">
            매일의 복약이 번거로움이 아닌, 일상 속 습관이 되도록.
          </div> */}
        </div>
        <div className="text-4xl text-[#4A43BF] font-extrabold font-phudu mb-5">
          2. STACK
        </div>
        <div className="flex flex-row gap-3 ml-5">
          <div className="text-xl text-[#4A43BF] font-medium font-phudu mb-10 py-1 px-2 bg-[#EFEEFC] rounded-sm border-2">
            React Native
          </div>
          <div className="text-xl text-[#4A43BF] font-medium font-phudu mb-10 py-1 px-2 bg-[#EFEEFC] rounded-sm border-2">
            Typescript
          </div>
          <div className="text-xl text-[#4A43BF] font-medium font-phudu mb-10 py-1 px-2 bg-[#EFEEFC] rounded-sm border-2">
            Zustand
          </div>
        </div>
        <div className="text-4xl text-[#4A43BF] font-extrabold font-phudu mb-5">
          3. What I did
        </div>
        <div
          onClick={() => {
            openModal(0);
            // explainModal(0);
          }}
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#EFEEFC] items-center gap-2 cursor-pointer"
        >
          <div className="arrow-0 font-medium text-[#4A43BF] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4A43BF] text-xl">
            회원가입 페이지
          </div>
        </div>
        {modal[0] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div>
              회원가입은 애플, 카카오, 자체 회원가입 총 세 가지 방식으로
              가능하게 만들었습니다.
            </div>
            <div className="mb-4">
              앱 사용 연령층이 높은 만큼, 애플, 카카오 계정이 없을 가능성을
              감안하여 자체 회원가입 기능을 구현했습니다.
            </div>
            <div className="font-bold">- 카카오 로그인</div>
            <div className="mx-3 font-bold text-[#4A43BF]">
              기존의 웹뷰 기반 카카오 로그인을 네이티브 SDK 연동 방식으로
              전환함으로써,
            </div>
            <div className="mx-3">
              앱 외부 브라우저로의 전환 없이 앱 내에서 로그인 플로우를
              자연스럽게 이어갈 수 있도록 개선하였습니다.
            </div>
            <div className="mx-3 my-2 font-medium text-white w-fit px-3 py-1 rounded-md bg-[#4D4B5BCC]">
              <a
                href="https://velog.io/@msm4167/RN-expo%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0"
                target="_blank"
              >
                Trouble Shooting 과정 살펴보기
              </a>
            </div>
            <div className="font-bold">- 애플 로그인</div>
            <div className="mx-3">
              애플 로그인은 expo-apple-authentication을 사용하여 구현하였습니다.
            </div>
            <div className="mx-3 mb-3">아래는 실제 사용되는 로직입니다.</div>
            <pre className="bg-[#4D4B5BCC] text-white mb-6 text-sm p-4 rounded-md overflow-x-auto">
              <code>
                {`const handleAppleLogin = async () => {
        const credential = await AppleAuthentication.signInAsync({ //apple 로그인 진행
            requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL
            ]
        })

        const response = await axiosCheckSignedUp({ //회원가입이 되어있는지 체크
            provider: "APPLE",
            clientId: credential.user
        })

        if (response) {
            if (response.data.isSignedUp) {
                await appleLogin({clientId: credential.user})
                await toggleIsLoggedIn()
            } else {
                await setUserSignUpSchema({
                    ...userSignUpSchema,
                    clientId: credential.user,
                    provider: "APPLE"
                })
                navigation.navigate("PermissionNoticeScreen", {})
            }
        }
    }`}
              </code>
            </pre>
            <div className="font-bold">- 자체 회원가입</div>
            <div className="mx-3">
              자체 회원가입은 이메일 인증을 사용하여 구현하였습니다.
            </div>
            <div className="mx-3">
              사용자가 이메일을 입력하면, 서버에서 인증번호를 생성해 해당
              이메일로 전송하고, 클라이언트에서는 입력된 인증번호가 서버의
              응답값과 일치하는지 검증합니다.
            </div>
            <div className="mx-3 mb-3">
              인증이 완료되면 보호자 정보 등록 화면으로 라우팅되어 추가 정보를
              입력받는 방식으로 회원가입을 이어갑니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#EFEEFC] mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(1);
            // explainModal(1);
          }}
        >
          <div className="font-medium text-[#4A43BF] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4A43BF] text-xl">
            일정 추가 페이지
          </div>
        </div>
        {modal[1] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              기존에는 알약 정보를 props를 통해 전달했지만, 페이지 간 구조가
              분리되어 있고 로직 상 직접적인 전달이 어려워 유지보수가
              복잡해졌습니다.
            </div>
            <div className="mb-4">
              이에 따라 전역 상태 관리 라이브러리인 Zustand를 도입하였고, 알약
              추가 페이지에서 설정한 정보를 일정 추가 화면에서도 쉽게 접근하고
              활용할 수 있도록 구현하였습니다.
            </div>
            <div className="mb-4">
              이를 통해 전체적인 코드의 가독성과 확장성을 높일 수 있었습니다.
            </div>
          </div>
        )}
        <div
          className="flex flex-row py-2 px-4 rounded-md w-full bg-[#EFEEFC] mt-5 items-center gap-2 cursor-pointer"
          onClick={() => {
            openModal(2);
            // explainModal(2);
          }}
        >
          <div className="font-medium text-[#4A43BF] text-xl">▶</div>
          <div className="font-monoKorea font-medium text-[#4A43BF] text-xl">
            폴더 구조 및 네이밍 규칙
          </div>
        </div>
        {modal[2] && (
          <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 gap-2">
            <div className="mb-4">
              여러 명의 개발자가 동시에 작업하다 보니, 페이지 이름이 비슷하게
              작성되거나 유사한 컴포넌트를 중복 개발하는 문제가 발생했습니다.
            </div>
            <div className="mb-4">
              이를 해결하기 위해 폴더 구조를 체계적으로 재정비하였고, 각
              페이지별로 독립된 폴더를 생성한 뒤, 해당 폴더 내에 index.js 파일을
              기준으로 라우팅을 관리하는 방식으로 통일했습니다.
            </div>
            <div className="mb-4">
              또한 페이지 및 컴포넌트 네이밍 규칙을 명확히 정하여 이름 충돌을
              방지하고, 팀원 간 코드 가독성과 유지보수성을 높이는 데
              집중했습니다.
            </div>
            <div className="flex flex-row w-fit justify-around mx-auto mt-5">
            <img src={rule1} className="w-[40%] h-[30%]" />
            <img src={rule2} className="w-[40%] h-[30%]" />
          </div>
          </div>
        )}
        <div className="text-4xl mt-10 text-[#4A43BF] font-extrabold font-phudu mb-5">
          4. cooperation
        </div>
        <div className="relative explain-0 flex flex-col py-5 px-5 rounded-md w-full bg-[#F4F5F8] mt-2 mb-2 gap-2">
          <div className="mb-4 font-bold text-xl">
            FE 2명, BE 4명, PO 2명, DESIGN 1명으로 진행하였습니다.
          </div>
          <div className="mb-4 ml-2">
            - 디자인은 Figma를 활용해 팀원들과 실시간으로 의견을 조율하며
            협의하였습니다.
          </div>
          <div className="mb-4 ml-2">
            - 매주 일요일 Slack을 통해 정기 회의를 진행하여 진행 상황과 이슈를
            공유하였습니다.
          </div>
          <div className="mb-4 ml-2">
            - 회의 결과는 모두 Notion에 기록해 참여하지 못한 팀원도 확인이
            가능하도록 하였고, 의사결정 과정을 명확히 관리하였습니다.
          </div>
          <div className="ml-2">
            - 이러한 체계적인 커뮤니케이션 과정을 통해 팀원 간의 이해도를
            높이고, 효율적인 협업 역량을 키울 수 있었습니다.
          </div>
        </div>
        <div className="">
          * 현재는 하드웨어 기기 완성이 되지 않아 출시가 미뤄진 상태입니다.
        </div>
      </div>
    </div>
  );
}

export default MediplanPage;
