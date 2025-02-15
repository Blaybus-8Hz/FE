import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 사용

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
    const navigate = useNavigate(); // 네비게이션 함수 사용

   // 결제 후 페이지 이동 (결제 방식 전달)
   const handlePayment = (method: string) => {
    navigate("/reservationcomplete", { state: { paymentMethod: method } }); // 결제 방식과 함께 이동
  };


  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // 빈 공간 클릭 시 닫기
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-5 w-80"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        <h3 className="text-xl font-bold text-center mb-4 text-black mt-2">결제 방식 선택</h3>
        <div className="flex justify-between gap-6">
           {/* 계좌 이체 버튼 */}
      <button
            className="w-1/2 px-2 py-3 bg-black text-white rounded-xl"
            onClick={() => handlePayment("bankTransfer")} // 계좌 이체 선택
          >
            계좌 이체
          </button>
          {/* 카카오페이 버튼 */}
          <button
            className="w-1/2 px-4 py-3 bg-black text-white rounded-xl"
            onClick={() => handlePayment("kakaoPay")} // 카카오페이 선택
          >
            카카오페이
          </button>
        </div>

        {/* 닫기 버튼 추가 */}
      </div>
    </div>
  );
};

export default PaymentModal;