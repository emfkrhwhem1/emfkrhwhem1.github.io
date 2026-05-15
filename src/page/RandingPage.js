import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
function RandingPage({ goToProject }) {
    const badgeText = "Available for new projects";
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (_jsxs("div", { className: "relative h-[100vh] w-full overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 -z-10", children: _jsx(GradientBackground, {}) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 0.9 }, transition: { duration: 1.5 }, className: "absolute inset-0 -z-10", style: {
                    backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "120px 120px",
                } }), _jsxs(motion.div, { variants: staggerContainer, initial: "initial", animate: "animate", 
                // 모바일(기본): px-6, 태블릿 이상(md): px-BasePx 적용
                className: "relative z-10 top-2 md:top-15 w-full px-6 md:px-BasePx pt-20 pb-10 md:pt-0 flex flex-col items-start", children: [_jsxs(motion.div, { variants: fadeInUp, className: "backdrop-blur-[10px]  mt-10 text-[14px] items-center font-fira bg-white/10 border flex gap-1 py-1 px-3 rounded-2xl border-white/10", children: [_jsx(Nfc, { className: "text-purple animate-pulse shrink-0" }), _jsx(motion.span, { variants: typewriterContainer, initial: "initial", animate: "animate", className: "flex ", children: badgeText.split("").map((char, index) => (_jsx(motion.span, { variants: typewriterVariant, 
                                    // 공백일 경우 너비를 유지하기 위해 처리
                                    className: char === " " ? "inline-block w-[4px]" : "inline-block", children: char }, index))) })] }), _jsxs(motion.div, { variants: fadeInUp, className: "text-[clamp(40px,8vw,100px)] font-bold leading-tight tracking-tighter", children: [_jsx("div", { className: "text-white pt-10", children: "Creative" }), _jsx("div", { className: "bg-gradient-to-br from-white to-accent bg-clip-text text-transparent", children: "Frontend Developer" })] }), _jsxs(motion.div, { variants: fadeInUp, className: "text-[clamp(18px,3vw,30px)] pb-4 text-white/90", children: ["\uB9CC\uB4DC\uB294 \uC774\uC758", " ", _jsx("span", { className: "text-white font-bold underline decoration-purple/30 text-underline-offset-4", children: "\uACE0\uC9D1" }), "\uC774 \uC4F0\uB294 \uC774\uC758", " ", _jsx("span", { className: "text-white font-bold underline decoration-accent/30 text-underline-offset-4", children: "\uD3B8\uC548\uD568" }), "\uC774 \uB418\uB3C4\uB85D"] }), _jsx(motion.div, { variants: fadeInUp, className: "text-[clamp(14px,2vw,22px)]  pb-4 md:pb-12 text-white/60", children: "React, Vue, TypeScript\uB97C \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4ED\uB2C8\uB2E4." }), _jsxs(motion.div, { variants: fadeInUp, className: "flex gap-4", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "group px-4 py-3 md:px-6 md:py-4 flex justify-center items-center gap-1 bg-gradient-to-r from-purple to-accent text-white font-semibold rounded-xl shadow-[0_10px_20px_-10px_rgba(168,85,247,0.5)] cursor-pointer", onClick: goToProject, children: ["\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30", _jsx(MoveDown, { className: "size-4 transition-transform duration-300 group-hover:translate-y-1" })] }), _jsx(motion.button, { whileHover: {
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                }, whileTap: { scale: 0.95 }, onClick: () => setIsContactOpen(true), className: "px-4 py-3 md:px-6 md:py-4flex justify-center items-center gap-1 backdrop-blur-[10px] bg-[#ffffff08] border border-[#ffffff0d] text-white font-semibold rounded-xl cursor-pointer", children: "\uC5F0\uB77D\uD558\uAE30" })] }), _jsxs(motion.div, { variants: fadeInUp, className: "pt-4 md:pt-12", children: [_jsx("div", { className: "pb-4 text-[16px] text-white/40 font-medium", children: "\uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8 \uC0AC\uC6A9 \uB77C\uC774\uBE0C\uB7EC\uB9AC" }), _jsx(motion.div, { variants: staggerContainer, className: "flex flex-wrap gap-4", children: Library.map((item, index) => (_jsx(motion.div, { variants: {
                                        initial: { opacity: 0, scale: 0.8 },
                                        animate: { opacity: 1, scale: 1 },
                                    }, whileHover: { y: -5 }, children: _jsx(RandingCard, { children: item }) }, index))) })] })] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.5, duration: 1 }, children: _jsx(ScrollGuide, {}) }), _jsx(ContactModal, { isOpen: isContactOpen, onClose: () => setIsContactOpen(false) })] }));
}
export default RandingPage;
