import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AboutCard from "@/components/AboutCard";
import StepPage from "@/components/StepPage";
import { Code2, Heart, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
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
const itemVariants = {
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
    return (_jsx(StepPage, { title: "About Me", children: _jsxs("div", { className: "flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-20 w-full", children: [_jsx("div", { className: "order-first xl:order-last w-full xl:w-auto flex justify-center", children: _jsx("div", { className: "relative group w-[clamp(240px,65vw,320px)] aspect-square shrink-0", children: _jsxs("div", { className: "\r\n                relative h-full w-full \r\n                flex items-center justify-center \r\n                rounded-[32px] bg-[#111119]\r\n                shadow-neon transition-all duration-500 ease-out\r\n                hover:shadow-[0_0_60px_-10px_rgba(168,85,247,0.5),0_0_90px_-15px_rgba(236,72,153,0.3)]\r\n                overflow-hidden\r\n              ", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#a855f720] to-[#ec489910] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" }), _jsxs("div", { className: "relative w-full h-full overflow-hidden rounded-[30px] transition-transform duration-500 group-hover:scale-105", children: [_jsx("img", { src: "/profile-kangseongmin.jpg", alt: "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uAC15\uC131\uBBFC", className: "w-full h-full object-cover select-none" }), _jsx("div", { className: "absolute inset-0 bg-[#11111940] group-hover:bg-transparent transition-colors duration-300" })] })] }) }) }), _jsxs("div", { className: "order-last xl:order-first flex-1 w-full", children: [_jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "text-[17px] md:text-[20px] text-gray-400 leading-relaxed text-center xl:text-left break-keep", children: [_jsxs(motion.p, { variants: itemVariants, className: "mb-6", children: ["\uC548\uB155\uD558\uC2ED\uB2C8\uAE4C! ", _jsx("br", {}), "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790", " ", _jsx("strong", { className: "text-white font-semibold", children: "\uAC15\uC131\uBBFC" }), "\uC785\uB2C8\uB2E4."] }), _jsxs(motion.p, { variants: itemVariants, className: "mb-6", children: ["\uB300\uD559\uAD50\uC5D0\uC11C HTML\uACFC CSS\uB97C \uBC30\uC6B4 \uD6C4 \uC6F9 \uAC1C\uBC1C\uC5D0 \uAE4A\uAC8C \uB9E4\uB8CC\uB418\uC5C8\uACE0,", " ", _jsx("br", { className: "hidden md:block" }), "\uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uD1B5\uD574", " ", _jsx("strong", { className: "text-white font-semibold", children: "\uAFB8\uC900\uD788 \uC131\uC7A5" }), "\uD574 \uC654\uC2B5\uB2C8\uB2E4."] }), _jsxs(motion.p, { variants: itemVariants, className: "mb-6", children: ["\uC800\uB294 \uB2E8\uC21C\uD788 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD558\uB294 \uAC83\uC744 \uB118\uC5B4,", " ", _jsx("br", { className: "hidden md:block" }), "\uC0AC\uC6A9\uC790\uAC00", " ", _jsx("strong", { className: "text-white font-semibold", children: "\uAC00\uC7A5 \uD3B8\uC548\uD55C \uC2DC\uAC01\uC801 \uACBD\uD5D8" }), "\uC744 \uAC00\uC9C8 \uC218 \uC788\uB3C4\uB85D \uACE0\uBBFC\uD569\uB2C8\uB2E4."] }), _jsxs(motion.p, { variants: itemVariants, children: ["\uB9E4\uB044\uB7EC\uC6B4 \uC560\uB2C8\uBA54\uC774\uC158 \uD558\uB098\uAC00 \uACE7", " ", _jsx("strong", { className: "text-white font-semibold", children: "\uD68C\uC0AC\uC758 \uC774\uBBF8\uC9C0" }), "\uB77C \uC0DD\uAC01\uD558\uBA70, ", _jsx("br", { className: "hidden md:block" }), "\uB354 \uCE5C\uC808\uD55C \uC6F9\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD574 \uB04A\uC784\uC5C6\uC774", " ", _jsx("strong", { className: "text-white font-semibold", children: "\uBC1C\uC804" }), "\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."] })] }), _jsx("div", { className: "grid pt-12 grid-cols-1 md:grid-cols-2 gap-4 w-full", children: CardList.map((card, index) => (_jsx(AboutCard, { ...card }, index))) })] })] }) }));
}
export default AboutPage;
