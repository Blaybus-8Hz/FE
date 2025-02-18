import React from "react";

import SplashLogo from "../assets/icons/spalsh.svg"; // SVG 파일 추가


const Splash: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-purple-400">
     

      {/* 중앙 콘텐츠 (SVG 이미지 + 텍스트 + 버튼) */}
      <div className="flex flex-col items-center justify-center">
        {/* SVG 이미지 */}
        <img src={SplashLogo} alt="스플래쉬" className="w-[250px] h-[120px] mb-[16px]" />


      </div>
    </div>
  );
};

export default Splash;