import React, { useState } from "react";
import CancelPopup from "./CancelPopup";
import { CalendarIcon, ClockIcon, MapPinIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { copyToClipboard } from "../../utils/clipboard"; // 📌 클립보드 유틸 파일 가져오기
interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  status: "결제 완료" | "입금 확인중" | "상담 완료" | "상담 취소";
  online: boolean;
  profileImage?: string;
  type: "직접" | "온라인";
}

const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case "결제 완료":
      return "border border-gray-700 text-gray-700 bg-transparent";
    case "입금 확인중":
      return "border border-red-500 text-red-600 bg-transparent";
    case "상담 완료":
      return "border border-gray-700 text-gray-700 bg-transparent";
    case "상담 취소":
      return "border border-red-500 text-red-600 bg-transparent";
    default:
      return "border border-gray-700 text-gray-700 bg-transparent";
  }
};



const getTypeBadgeStyle = (type: string) =>
  type === "온라인"
    ? "bg-blue-100 text-blue-600 px-[8px] py-[4px] rounded text-[12px]"
    : "bg-red-100 text-red-600 px-[8px] py-[4px] rounded text-[12px]";

    const getButtonStyle = (disabled: boolean) =>
        `w-full py-[8px] rounded-[12px] bg-white font-medium border-[1px] border-gray-500 select-none ${
          disabled ? "cursor-not-allowed text-gray-400 border-gray-500 pointer-events-none" : "text-black"
        }`;
const ReservationCard: React.FC<{ reservation: Reservation }> = ({ reservation }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCancelClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleConfirmCancel = () => {
    setIsPopupOpen(false);
    alert("예약이 취소되었습니다.");
  };

  return (
    <div className="bg-white p-[12px] mb-[16px] rounded-[16px] relative" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <span className={`absolute top-[12px] left-[12px] text-[12px] px-[12px] py-[4px] rounded-full ${getStatusBadgeStyle(reservation.status)}`}>
  {reservation.status}
</span>
      <div className="flex items-center gap-[16px] mt-[40px]">
        <div className="w-[48px] h-[48px] mr-[4px] rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-[14px] font-bold">
          {reservation.profileImage ? (
            <img src={reservation.profileImage} alt={reservation.name} className="w-[48px] h-[48px] rounded-full object-cover border border-gray-300" />
          ) : (
            "👤"
          )}
        </div>
        <div>
          <h4 className="text-[18px] font-bold text-black">{reservation.name}</h4>
          <span className={getTypeBadgeStyle(reservation.type)}>{reservation.type}</span>
        </div>
      </div>

      <div className="mt-[16px] text-[14px] bg-gray-200 p-[12px] rounded-[8px]">
        <p className="text-gray-950 flex items-center gap-[8px] mb-[4px]">
          <CalendarIcon className="w-[20px] h-[20px] text-gray-700 mr-[4px]" title="날짜" />
          {reservation.date} ({new Date(reservation.date).toLocaleDateString("ko-KR", { weekday: "short" })})
        </p>
        <p className="text-gray-950 flex items-center gap-[8px] mb-[4px]">
          <ClockIcon className="w-[20px] h-[20px] text-gray-700 mr-[4px]" title="시간" />
          {reservation.time}
        </p>
        <p className="text-gray-950 flex items-center gap-[8px]">
        <MapPinIcon className="w-[20px] h-[20px] text-gray-700 mr-[4px]" title="위치" />
        {reservation.location}
        <ClipboardIcon
          className="w-[16px] h-[16px] text-gray-600 cursor-pointer hover:text-gray-600 transition-all duration-150"
          onClick={() => copyToClipboard(reservation.location)} // ✅ 유틸 함수 사용
          title="주소 복사"
        />
      </p>

        {reservation.status === "입금 확인중" && (
          <div className="flex justify-start gap-[16px] text-gray-700">
            <p>기업은행 000-0000-0000</p>
            <p className="font-semibold">30,000원</p>
          </div>
        )}
      </div>

      <div className="mt-[12px] flex gap-[10px]">
        {reservation.status === "결제 완료" ? (
          <button className={getButtonStyle(false)} onClick={handleCancelClick}>
            예약 취소
          </button>
        ) : reservation.status === "입금 확인중" ? (
          <>
            <button className={getButtonStyle(false)} onClick={handleCancelClick}>
              예약 취소
            </button>
            <button className={getButtonStyle(false)}>미팅 입장하기</button>
          </>
        ) : (
          <>
            <button className={getButtonStyle(true)} disabled>
              요약 리포트
            </button>
            <button className={getButtonStyle(true)} disabled>
              후기 남기기
            </button>
          </>
        )}
      </div>

      <CancelPopup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={handleConfirmCancel} />
    </div>
  );
};

export default ReservationCard;