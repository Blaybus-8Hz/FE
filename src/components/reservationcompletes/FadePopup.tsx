import React, { useEffect } from "react";

interface FadePopupProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const FadePopup: React.FC<FadePopupProps> = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose(); // 1초 후 자동 닫기
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-160 left-1/2 transform -translate-x-1/2 px-70 py-15 bg-purple-100 text-gray-900 text-lg rounded-full shadow-md transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ whiteSpace: "nowrap" }} // ✅ 텍스트 한 줄 유지
    >
      {message}
    </div>
  );
};

export default FadePopup;