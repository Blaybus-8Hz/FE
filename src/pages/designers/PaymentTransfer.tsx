import React, { useState, useEffect } from "react";
import PaymentModal from "../../components/paymenttransfers/PaymentModal";
import InfoForm from "../../components/paymenttransfers/InfoForm"; // 분리된 폼 컴포넌트 import
import DefaultHearImage from "../../assets/images/default_hear.png"; // 상대 경로

const PaymentTransfer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [request, setRequest] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* 상단 헤더 */}
      <div className="fixed top-0 w-full bg-white py-4 px-2 flex items-center justify-between">
        <button className="p-2 bg-transparent border-none">
          <div className="w-6 h-6 flex items-center justify-center bg-transparent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L8 12L15 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        <h2 className="text-lg font-semibold text-black">예약하기</h2>
        <div className="w-6"></div> {/* 우측 여백 맞추기 */}
      </div>
      {/* 본문 영역 */}
      <div className="w-full max-w-md mt-16 px-4 pt-4">
        {/* 디자이너 정보 */}


        <div className="w-full h-44 rounded-lg mb-6 overflow-hidden">
      <img
        src={DefaultHearImage}
        alt="디자이너 이미지"
        className="w-full h-full object-cover"
      />
    </div>
    </div>
          {/* 본문 영역 */}
          <div className="w-full max-w-md px-5">
        {/* 디자이너 정보 */}
        <h3 className="text-2xl font-bold text-black">박수연 실장</h3>
        <p className="text-black text-md">준오헤어 반포점</p>

        {/* 일정 정보 */}
        <div className="flex items-center gap-x-16 mt-2 pb-6 ">
          <p className="text-gray-600 text-md font-semibold">일정</p>
          <p className="font-semibold text-lg text-black">05.26(일) 오후 1:00~오후 1:30</p>
        </div>
{/* 구분선 추가 */}
<div className="relative w-full mb-8">
  <div className="absolute left-0 w-full border-t-1 border-gray-400"></div>
</div>
        {/* 결제 금액 */}
        <div className="flex items-center justify-between w-full pb-12">
          <p className="text-gray-600 text-xl font-bold">결제금액</p>
          <div className="flex items-center gap-x-1">
            <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-md mr-1.5">
              온라인
            </span>
            <p className="text-purple-600 font-bold text-xl">45,000원</p>
          </div>
        </div>
        </div>

{/* 구분선 추가 */}
<div className="w-full border-t-10 border-gray-400"></div>
   {/* 본문 영역 */}
   <div className="w-full max-w-md px-5 pb-40">
        {/* 정보 입력 폼 (컴포넌트 사용) */}
        <InfoForm request={request} setRequest={setRequest} />
        </div> 
    {/* 결제 버튼 */}
<div className="fixed bottom-0 left-0 w-full bg-white">
  {/* 구분선 */}
  <div className="w-full border-t-1 border-gray-400 absolute top-0 left-0"></div>

  {/* 버튼 영역 */}
  <div className="p-4 ">
    <button
      className="w-full py-4 bg-black text-white text-lg font-semibold rounded-xl"
      onClick={() => setShowModal(true)}
    >
      결제하고 예약 확정
    </button>
  </div>
</div>

      {/* 모달 표시 */}
      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PaymentTransfer;