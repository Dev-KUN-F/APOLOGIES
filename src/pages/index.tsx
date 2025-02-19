import Loading from "@/components/commons/loading/loading";
import { useEffect, useState } from "react";
import "@/styles/animations.css"; // 애니메이션 CSS 파일 임포트

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 로딩 중에는 스크롤 비활성화
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5초 후 로딩 종료

    return () => {
      clearTimeout(timer);
      // 컴포넌트 언마운트 시 스크롤 활성화
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-container">
          <div className="rectangle rectangle1"></div>
          <div className="rectangle rectangle2"></div>
          <div className="rectangle rectangle3"></div>
          <div className="content fade-in">안녕</div>
        </div>
      )}
    </div>
  );
}
