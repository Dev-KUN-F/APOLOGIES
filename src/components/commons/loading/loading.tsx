import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../public/loading.json"; // 로딩 애니메이션 JSON 파일 경로

const Loading = () => {
  return <Lottie animationData={loadingAnimation} loop={true} />;
};

export default Loading;
