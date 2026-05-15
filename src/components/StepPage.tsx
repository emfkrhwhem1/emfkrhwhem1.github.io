import { ReactNode } from "react";

// 1. Props 타입 분리 (실무 권장)
interface StepPageProps {
  children: ReactNode;
  stepNumber?: number; // 대문자 Number 대신 소문자 number 사용
  title: string;
}

function StepPage({
  children,
  stepNumber = 1,
  title = "Aboue Me",
}: StepPageProps) {
  return (
    <div className="relative  min-h-[100vh] px-BasePx  py-24 md:py-40">
      <div className="flex items-center gap-4 mb-16">
        {/* 2. 01, 02 형식의 숫자를 안전하게 렌더링하는 방법 적용 */}
        <span className="text-purple font-fira">
          {String(stepNumber).padStart(2, "0")}.
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent max-w-md" />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default StepPage;
