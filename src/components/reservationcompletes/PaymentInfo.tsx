import React from "react";

const PaymentInfo: React.FC = () => {
  return (
    <div className="mt-4 text-center">
      {/* 계좌번호와 금액 한 줄 배치 */}
      <div className="flex justify-center items-center gap-x-2 text-md">
        <p className="text-gray-900">기업은행 000-0000-000</p>
        <p className="text-purple-600 font-bold">30,000원</p>
      </div>
      <p className="text-gray-900 text-md">24시간 내 입금완료 시 확정됩니다.</p>
    </div>
  );
};

export default PaymentInfo;