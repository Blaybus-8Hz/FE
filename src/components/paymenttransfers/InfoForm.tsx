import React from "react";

interface InfoFormProps {
  request: string;
  setRequest: (value: string) => void;
}

const InfoForm: React.FC<InfoFormProps> = ({ request, setRequest }) => {
  return (
    <div className="mt-6 pt-2">
      <p className="font-bold text-black font-xl">정보 입력</p>
      <div className="mt-3 flex items-center gap-x-22 font-semibold">
        <p className="text-gray-600 text-">이름</p>
        <p className="font-sm text-black">박수현</p>
      </div>
      <div className="mt-1 flex items-center gap-x-22 font-semibold">
        <p className="text-gray-600 text-md">이메일</p>
        <p className="font-sm text-black">parksu@gmail.com</p>
      </div>

      {/* 요청사항 입력 */}
      <div className="mt-8">
  <div className="flex justify-between items-center">
    <p className="text-gray-900 text-md font-medium">요청사항</p>
    <p className="text-gray-600 text-md">{request.length}/200</p>
  </div>
  <textarea
  className="w-full h-36 p-3 bg-transparent border border-gray-500 rounded-xl mt-2 text-md placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
  placeholder="디자이너 분께 요청하실 내용을 적어주세요."
  maxLength={200}
  value={request}
  onChange={(e) => setRequest(e.target.value)}
/>
</div>
    </div>
  );
};

export default InfoForm;