import React, { useEffect } from "react";
import PaymentInfo from "../../components/reservationcompletes/PaymentInfo"; // 결제 정보 컴포넌트
import ReservationInfo from "../../components/reservationcompletes/ReservationInfo"; // 예약 정보 컴포넌트
import ReservationCompleteIcon from "../../assets/icons/Reservation complete.svg"; // 상대 경로
import { useLocation, useNavigate } from "react-router-dom";
import heartAnimation from "../../assets/lotties/heart.json"; // Lottie 파일 import
import Lottie from "lottie-react";
const ReservationComplete: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();
  
    // 전달된 결제 방식 정보
    const paymentMethod = location.state?.paymentMethod || "알 수 없음";
  
    // 콘솔 출력 (결제 방식만 확인)
    useEffect(() => {
      console.log("📢 결제 방식:", paymentMethod);
    }, [paymentMethod]);

    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-10 pb-24">
   {/* SVG 아이콘 적용 */}
   <div className="relative w-16 h-16 mb-6 flex flex-col items-center justify-end">
      {/* Lottie 애니메이션 (아래쪽으로 정렬) */}
      <div className="w-22 h-22 opacity-70">
        <Lottie animationData={heartAnimation} loop={false} />
      </div>

      {/* 기존 아이콘 (하단 배치) */}
      <img
        src={ReservationCompleteIcon}
        alt="예약 완료 아이콘"
        className="w-16 h-16"
      />
    </div>
      {/* 예약 완료 텍스트 */}
      <h2 className="text-2xl font-bold text-gray-900">예약이 완료됐어요</h2>

      {/* 예약 정보 컴포넌트 삽입 */}
      <ReservationInfo />

           {/* 결제 정보 컴포넌트 삽입 - 결제 방식이 "bankTransfer"일 때만 표시 */}
           {paymentMethod === "bankTransfer" && <PaymentInfo />}
    {/* 하단 고정 버튼 그룹 */}
<div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
  {/* 계좌 복사 버튼 */}
  {paymentMethod === "bankTransfer" && (
  <div className="flex flex-col items-center px-6">
    <button
      className="w-full max-w-sm px-4 py-3 bg-purple-100 text-gray-900 text-lg rounded-full shadow-md mb-12"
      onClick={() => navigator.clipboard.writeText("000-0000-000")}
    >
      계좌번호가 복사됐어요.
    </button>
  </div>
)}

  {/* 구분선: 양 끝까지 닿도록 수정 */}
  <hr className="w-full border-t border-gray-500" />

  {/* 하단 버튼들 */}
  <div className="px-4 py-5 flex flex-col items-center">
    <div className="flex w-full max-w-sm gap-4">
      <button className="w-1/2 px-6 py-3 bg-black text-white text-lg font-medium rounded-xl shadow-md"
          onClick={() => navigate("/reservationinquiry")} >
        예약 확인
      </button>
      <button className="w-1/2 px-6 py-3 bg-black text-white text-lg font-medium rounded-xl shadow-md"
          onClick={() => navigate("/")} >
        홈
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ReservationComplete;