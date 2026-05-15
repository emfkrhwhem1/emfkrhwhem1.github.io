import AboutCard from "@/components/AboutCard";
import StepPage from "@/components/StepPage";
import { Code2, Heart, Palette, Zap } from "lucide-react";
import { motion, Variants } from "motion/react";

const CardList = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "읽기 쉽고 유지보수가 용이한 코드를 작성합니다",
  },
  {
    icon: Palette,
    title: "Design Sense",
    description: "아름다운 UI/UX를 구현하는 것을 좋아합니다",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "최적화된 빠른 웹 경험을 제공합니다",
  },
  {
    icon: Heart,
    title: "User First",
    description: "사용자 관점에서 문제를 해결합니다",
  },
];

// 애니메이션 설정
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // 이제 에러가 나지 않습니다.
    },
  },
};

function AboutPage() {
  return (
    <StepPage title="About Me">
      {/* 
        반응형 레이아웃 엔진:
        - flex-col (모바일 세로) -> xl:flex-row (PC 가로)
        - gap-12 (모바일 간격) -> xl:gap-20 (PC 간격)
      */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-20 w-full">
        {/* 1. 사진 영역 (모바일에서 맨 위로) */}
        <div className="order-first xl:order-last w-full xl:w-auto flex justify-center">
          <div className="relative group w-[clamp(240px,65vw,320px)] aspect-square shrink-0">
            {/* 카드 본체 외곽 네온 효과 */}
            <div
              className="
                relative h-full w-full 
                flex items-center justify-center 
                rounded-[32px] bg-[#111119]
                shadow-neon transition-all duration-500 ease-out
                hover:shadow-[0_0_60px_-10px_rgba(168,85,247,0.5),0_0_90px_-15px_rgba(236,72,153,0.3)]
                overflow-hidden
              "
            >
              {/* 호버 시 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f720] to-[#ec489910] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* 이미지 컨테이너 */}
              <div className="relative w-full h-full overflow-hidden rounded-[30px] transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/profile-kangseongmin.jpg"
                  alt="프론트엔드 개발자 강성민"
                  className="w-full h-full object-cover select-none"
                />
                {/* 사진 위 은은한 딤드 효과 */}
                <div className="absolute inset-0 bg-[#11111940] group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. 텍스트 및 카드 영역 (모바일에서 사진 아래로) */}
        <div className="order-last xl:order-first flex-1 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[17px] md:text-[20px] text-gray-400 leading-relaxed text-center xl:text-left break-keep"
          >
            <motion.p variants={itemVariants} className="mb-6">
              안녕하십니까! <br />
              프론트엔드 개발자{" "}
              <strong className="text-white font-semibold">강성민</strong>
              입니다.
            </motion.p>

            <motion.p variants={itemVariants} className="mb-6">
              대학교에서 HTML과 CSS를 배운 후 웹 개발에 깊게 매료되었고,{" "}
              <br className="hidden md:block" />
              다양한 프로젝트를 통해{" "}
              <strong className="text-white font-semibold">꾸준히 성장</strong>
              해 왔습니다.
            </motion.p>

            <motion.p variants={itemVariants} className="mb-6">
              저는 단순히 기능을 구현하는 것을 넘어,{" "}
              <br className="hidden md:block" />
              사용자가{" "}
              <strong className="text-white font-semibold">
                가장 편안한 시각적 경험
              </strong>
              을 가질 수 있도록 고민합니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              매끄러운 애니메이션 하나가 곧{" "}
              <strong className="text-white font-semibold">
                회사의 이미지
              </strong>
              라 생각하며, <br className="hidden md:block" />더 친절한 웹을
              만들기 위해 끊임없이{" "}
              <strong className="text-white font-semibold">발전</strong>하고
              있습니다.
            </motion.p>
          </motion.div>

          {/* About 카드 그리드 섹션 */}
          <div className="grid pt-12 grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {CardList.map((card, index) => (
              <AboutCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </StepPage>
  );
}

export default AboutPage;
