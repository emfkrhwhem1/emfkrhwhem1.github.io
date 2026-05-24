export interface ProjectType {
  title: string;
  description: string;
  imageSrc: string;
  period: string;
  contributionRole: string;
  techStack: string[];
  contributions: string[];
  memberCount: number;
}

const data: ProjectType[] = [
  {
    title: "가게로 (관리자 페이지)",
    description: "위치 기반으로 할인하는 상점을 검색하는 서비스 사이트입니다.",
    imageSrc: "/1.png",
    period: "2021.08 - 2021.10 (3개월)",
    contributionRole: "퍼블리싱 (100%)",
    techStack: ["Vue.js", "Scss", "Git", "Vuetify"],
    memberCount: 3,
    contributions: [
      "Vue.js 기반 웹 서비스의 UI/UX 프론트엔드 파트 단독 구현",
      "모바일 표준 해상도를 준수하는 반응형 퍼블리싱으로 멀티 디바이스 최적화",
      "카카오/애플 소셜 로그인 인증 시스템 구현",
    ],
  },
  {
    title: "DGB 어울림",
    description: "DGB금융그룹의 임직원들을 위한 통합 소통 플랫폼 웹앱입니다.",
    imageSrc: "/2.png",
    period: "2021.10 - 2021.12 (3개월)",
    contributionRole: "프론트엔드 개발 (40%)",
    techStack: ["Vue.js", "Scss", "Vuetify", "Axios", "Vuex", "Git"],
    memberCount: 4,
    contributions: [
      "Vuetify 데이터 그리드를 커스텀하여 복잡한 통계 및 목록형 UI 구조 구현",
      "Axios 비동기 통신을 활용한 RESTful API 연동 및 클라이언트 데이터 바인딩 기틀 마련.",
      "Vuex를 활용한 컴포넌트 간 전역 상태 관리로 데이터 정합성 유지.",
      "모바일 환경을 고려한 그리드(Grid) 기반의 반응형 레이아웃 구현 및 UI 퍼블리싱.",
    ],
  },
  {
    title: "뷰아미 (사용자, 관리자 페이지)",
    description:
      "맞춤형 화장품 추천과 뷰티 정보를 한곳에서 만나볼 수 있는 종합 뷰티 플랫폼 사이트입니다.",
    imageSrc: "/3.png",
    period: "2021.12 - 2022.04 (5개월)",
    contributionRole: "프론트엔드 개발 (100%)",
    techStack: ["Vue.js", "Scss", "Vuetify", "Axios", "Vuex", "Git"],
    memberCount: 4,
    contributions: [
      "고객용 서비스 페이지와 관리자 대시보드 페이지를 포함한 전체 프론트엔드 시스템 설계 및 개발",
      "뷰티 제품 쇼츠 형식의 커스텀 비디오 플레이어 개발 (제품 타임라인 네비게이션, 인터랙티브 UI/UX 구현)",
      "다중 소셜(SNS) 로그인(네이버, 카카오, 구글) 통합 인증 시스템 구현",
    ],
  },
  {
    title: "온트피아 가상갤러리",
    description:
      "온라인 상에서 예술 작품을 전시하고 감상할 수 있는 가상 갤러리 사이트입니다.",
    imageSrc: "/4.png",
    period: "2022.04 - 2023.01 (10개월)",
    contributionRole: "프론트엔드 (90%), 백엔드 개발 (40%)",
    memberCount: 4,
    techStack: [
      "Vue.js",
      "Scss",
      "Vuetify",
      "Axios",
      "Vuex",
      "Spring Boot",
      "Git",
    ],
    contributions: [
      "[Frontend] 가상 갤러리 서비스의 프론트엔드 아키텍처 전담 개발 및 PC/모바일 반응형 UI 구현.",
      "[Backend] Spring Boot 프레임워크를 활용하여 컨텐츠 관리 및 조회 관련 일부 REST API 직접 설계 및 구현.",
      "iframe을 활용한 Unity3D-Vue.js 웹 애플리케이션 통합 구현",
      "카카오맵 API 연동을 통한 위치 기반 서비스 구현",
      "Vue Router의 네비게이션 가드(beforeEach)를 활용한 롤 기반(Role-based) 페이지 인가 기능 및 비로그인 유저 접근 통제 logic 구현.",
    ],
  },
  {
    title: "스마트팜 (팜넷)",
    description:
      "농가의 환경 및 작물 상태를 실시간으로 모니터링하고 제어할 수 있는 스마트 농업 시스템 사이트입니다.",
    imageSrc: "/5.png",
    period: "2022.08 - 2022.10 (3개월)",
    contributionRole: "프론트엔드 개발 (100%)",
    techStack: ["Vue.js", "Scss", "Vuetify", "Axios", "Vuex", "i18n", "Git"],
    memberCount: 3,
    contributions: [
      "모바일 반응형 웹 디자인 퍼블리싱",
      "카카오 지도 API 연동, 위치 기반 마커 시스템",
      "터치 제스처 인터랙션 지원",
      "Vuetify 데이터 테이블 및 차트 UI를 활용하여 스마트팜 장비의 실시간 센서 데이터를 가독성 높게 데이터 시각화.",
      "vue-i18n 라이브러리를 활용한 다국어(Localization) 처리 시스템 구축 및 동적 언어 변경에 따른 레이아웃 깨짐 현상 대응.",
    ],
  },
  {
    title: "대구 어르신 통합무임 교통카드",
    description:
      "대구시에서 시행되는 어르신 무임교통 통합 발급 시스템 사이트입니다.",
    imageSrc: "/6.png",
    period: "2023.05 - 2024.02 (10개월)",
    contributionRole: "프론트엔드 유지 보수 및 기능 추가 (100%)",
    techStack: ["Vue.js", "Scss", "Axios", "Vanilla JS", "Vuex", "SVN"],
    memberCount: 6,
    contributions: [
      "Vue.js 프로젝트와 Vanilla JS 프로젝트 유지보수 및 추가 기능 개발",
      "관리자 요구사항 분석을 통한 맞춤형 필터링 시스템 개발 및 구현",
      "실시간 현장 서비스 대응 및 원격 지원을 통해 동사무소 민원 현장의 기술 이슈를 신속하게 트래킹하고 패치(Hotfix)하여 행정 공백 최소화.",
    ],
  },
  {
    title: "IM 유페이",
    description:
      "iM유페이는 대구·경북 지역 교통카드인 '원패스'의 등록, 충전, 분실신고 및 정산 서비스를 제공하는 iM금융그룹 계열의 교통·결제 플랫폼 사이트입니다.",
    imageSrc: "/8.png",
    period: " 2024-03 ~ 2024-07 (약 5개월)",
    contributionRole: "프론트엔드 개발 (50%)",
    memberCount: 5,
    techStack: [
      "React",
      "TypeScript",
      "Styled-Components",
      "MUI",
      "Axios",
      "Zustand",
      "i18n",
      "GitLab",
      "Dompurity",
    ],
    contributions: [
      "금융/페이먼트 플랫폼의 React + TypeScript 기반 아키텍처 신규 구축",
      "i18n 라이브러리로 다국어 처리",
      "PASS와 i-PIN 본인인증 연동 작업 처리",
      "XSS(Cross-Site Scripting) 방어를 통한 프론트엔드 보안성 강화",
    ],
  },
  {
    title: "포항 디지털트윈 플랫폼",
    description:
      "포항시 전역의 안전 데이터를 실시간으로 모니터링하고 시각화하는 디지털 트윈 기반 거버넌스 플랫폼입니다.",
    imageSrc: "/9.png",
    period: "2025.04 - 2025.9 (6개월)",
    contributionRole: "프론트엔드 개발 (100%)",
    memberCount: 4,
    techStack: [
      "React",
      "JavaScript",
      "Styled-Component",
      "MUI",
      "Axios",
      "Zustand",
      "Framer-Motion",
      "Dompurity",
    ],
    contributions: [
      "디지털트윈 모니터링 플랫폼의 프론트엔드 코어 아키텍처 단독 설계 및 총괄 개발",
      "OWASP Top 10 지침을 준수하여 XSS 및 CSRF 등 주요 웹 보안 취약점을 방어하는 시큐어 코딩 적용",
      "다양한 모바일 기기 및 해상도에 최적화된 인터페이스를 위해 미디어 쿼리 기반의 반응형 레이아웃 구현",
      "플랫폼 특성상 무거운 이미지 자산을 WebP 포맷으로 변환 및 미디어 용량 최적화.",
    ],
  },
];

export default data;
