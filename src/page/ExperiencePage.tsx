import React from "react";
import ExperienceCard from "@/components/ExperienceCard";
import StepPage from "@/components/StepPage";

const experiences = [
  {
    title: "Frontend Engineer",
    companyName: "코즈모(주)",
    date: "2022 - 2023",
    location: "Daegu, Korea",
    descriptions: [
      "Vuex를 도입하여 복잡한 클라이언트 상태를 체계적으로 관리",
      "공통 컴포넌트 기반 디자인 시스템 구축으로 UI 일관성 확보",
      "Vue.js를 활용한 반응형 웹 애플리케이션 UI/UX 구현",
      "사용자 관점의 성능 최적화를 통한 쾌적한 웹 경험 제공",
    ],
    skills: [
      "VueJs",
      "Vuex",
      "JavaScript",
      "BootStrap",
      "Vuetify",
      "Spring",
      "Scss",
    ],
  },
  {
    title: "Frontend Engineer",
    companyName: "오큐브㈜",
    date: "2023 - 2024",
    location: "Daegu, Korea",
    descriptions: [
      "React를 활용한 반응형 웹 애플리케이션 UI/UX 구현",
      "TypeScript 도입으로 런타임 에러를 사전에 방지하고 코드 안정성 강화",
      "크로스 브라우징 이슈를 해결하고, 다양한 환경에서 동일하게 동작하는 견고한 UI 개발",
      "React Query를 활용한 서버 데이터 캐싱 및 비동기 상태 관리 아키텍처 설계",
    ],
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Mui",
      "React Query",
      "Zustand",
      "Styled-Component",
      "i18n",
    ],
  },
  {
    title: "Frontend Engineer",
    companyName: "㈜네트로",
    date: "2025",
    location: "Daegu, Korea",
    descriptions: [
      "OWASP Top 10 보안 가이드를 준수하여 XSS 및 CSRF 취약점을 방어하는 프론트엔드 시큐어 코딩 적용",
      "React를 활용한 반응형 웹 애플리케이션 UI/UX 구현",
      "MUI의 방대한 컴포넌트 생태계를 활용하여 빠르고 안정적으로 반응형 웹 인터페이스 구축",
      "이미지 지연 로딩(Lazy Loading) 및 WebP 포맷 변환을 적용하여 Lighthouse 성능 점수 향상",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Nginx"],
  },
];

function ExperiencePage() {
  return (
    <StepPage stepNumber={2} title="Experience">
      {/* 컨테이너 가로폭 제한 및 중앙 정렬 */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
        {/* 1. 중앙 수직 선 (Pillar) */}
        {/* hidden md:block -> 모바일에서 숨기고 768px(md) 이상에서만 표시 */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-10 xl:gap-24 relative z-10">
          {experiences.map((exp, index) => {
            const isRightAligned = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative flex w-full items-center 
                  /* 모바일: 가로 중앙 정렬 / PC(md): 지그재그 정렬 */
                  justify-center md:${isRightAligned ? "justify-end" : "justify-start"}
                `}
              >
                {/* 2. 중앙 점 (Dot) */}
                {/* hidden md:block -> 모바일에서 숨김 */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-purple -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#030014] z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                {/* 3. 경험 카드 섹션 */}
                {/* 모바일: 너비 100% / PC(md): 45% 정밀 제어 */}
                <div className="w-full lg:w-[45%] lg:w-[42%]">
                  <ExperienceCard {...exp} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StepPage>
  );
}

export default ExperiencePage;
