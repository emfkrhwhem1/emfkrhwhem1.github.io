import { MoveDown, Nfc } from "lucide-react";
import GradientBackground from "../components/GradientBackground";
import RandingCard from "../components/RandingCard";
import ScrollGuide from "@/components/ScrollGuid";
import { motion } from "motion/react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const Library = [
  "React",
  "TypeScript",
  "TailWind",
  "Framer Motion",
  "Lucide-react",
];

// 애니메이션 변수 설정
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const typewriterVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const typewriterContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05, // 글자 사이의 간격 (초 단위)
    },
  },
};

function RandingPage({ goToProject }: { goToProject: () => {} }) {
  const badgeText = "Available for new projects";
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* 배경 레이어 */}
      <div className="absolute inset-0 -z-10">
        <GradientBackground />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* 메인 콘텐츠 */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        // 모바일(기본): px-6, 태블릿 이상(md): px-BasePx 적용
        className="relative z-10 top-2 md:top-15 w-full px-6 md:px-BasePx pt-20 pb-10 md:pt-0 flex flex-col items-start"
      >
        {/*  <motion.div
        variants={staggerContainer}
        className="absolute top-15 px-BasePx flex flex-col left-0 w-full items-start z-10" */}
        {/* 상태 배지 */}
        <motion.div
          variants={fadeInUp}
          className="backdrop-blur-[10px]  mt-10 text-[14px] items-center font-fira bg-white/10 border flex gap-1 py-1 px-3 rounded-2xl border-white/10"
        >
          <Nfc className="text-purple animate-pulse shrink-0" />

          {/* 글자 하나씩 나타나는 컨테이너 */}
          <motion.span
            variants={typewriterContainer}
            initial="initial"
            animate="animate"
            className="flex "
          >
            {badgeText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={typewriterVariant}
                // 공백일 경우 너비를 유지하기 위해 처리
                className={
                  char === " " ? "inline-block w-[4px]" : "inline-block"
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.div
          variants={fadeInUp}
          className="text-[clamp(40px,8vw,100px)] font-bold leading-tight tracking-tighter"
        >
          <div className="text-white pt-10">Creative</div>
          <div className="bg-gradient-to-br from-white to-accent bg-clip-text text-transparent">
            Frontend Developer
          </div>
        </motion.div>

        {/* 슬로건 */}
        <motion.div
          variants={fadeInUp}
          className="text-[clamp(18px,3vw,30px)] pb-4 text-white/90"
        >
          만드는 이의{" "}
          <span className="text-white font-bold underline decoration-purple/30 text-underline-offset-4">
            고집
          </span>
          이 쓰는 이의{" "}
          <span className="text-white font-bold underline decoration-accent/30 text-underline-offset-4">
            편안함
          </span>
          이 되도록
        </motion.div>

        {/* 상세 설명 */}
        <motion.div
          variants={fadeInUp}
          className="text-[clamp(14px,2vw,22px)]  pb-4 md:pb-12 text-white/60"
        >
          React, Vue, TypeScript를 활용하여 사용자 중심의 웹 애플리케이션을
          만듭니다.
        </motion.div>

        {/* 버튼 그룹 */}
        <motion.div variants={fadeInUp} className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-4 py-3 md:px-6 md:py-4 flex justify-center items-center gap-1 bg-gradient-to-r from-purple to-accent text-white font-semibold rounded-xl shadow-[0_10px_20px_-10px_rgba(168,85,247,0.5)] cursor-pointer"
            onClick={goToProject}
          >
            프로젝트 보기
            <MoveDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-3 md:px-6 md:py-4flex justify-center items-center gap-1 backdrop-blur-[10px] bg-[#ffffff08] border border-[#ffffff0d] text-white font-semibold rounded-xl cursor-pointer"
          >
            연락하기
          </motion.button>
        </motion.div>

        {/* 라이브러리 섹션 */}
        <motion.div variants={fadeInUp} className="pt-4 md:pt-12">
          <div className="pb-4 text-[16px] text-white/40 font-medium">
            해당 프로젝트 사용 라이브러리
          </div>
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-4"
          >
            {Library.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -5 }}
              >
                <RandingCard>{item}</RandingCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 스크롤 가이드 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ScrollGuide />
      </motion.div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default RandingPage;
