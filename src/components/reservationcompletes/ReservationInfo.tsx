import React from "react";

const ReservationInfo: React.FC = () => {
  return (
    <div className="mt-4 inline-flex w-fit p-4 bg-transparent border border-gray-500 rounded-2xl mx-auto">
      {/* 한 줄 정렬 */}
      <div className="flex items-center gap-x-2 whitespace-nowrap">
        <span className="px-2 py-1 font-semibold text-blue-600 bg-blue-100 rounded-md text-sm mr-1">
          온라인
        </span>
        <p className="text-gray-800 font-bold text-lg">05.26(일) 오후 1:00~오후 1:30</p>
      </div>
    </div>
  );
};

export default ReservationInfo;