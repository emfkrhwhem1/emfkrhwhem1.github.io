import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import StepPage from "@/components/StepPage";
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiMui, SiStyledcomponents, SiFigma, SiGit, SiBootstrap, SiVuetify, SiSubversion, SiVuedotjs, SiRedux, SiReactquery, SiVite, SiSass, SiHtml5, } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import ZeplinIcon from "@/components/Icons/ZeplinIcon";
import ZustandIcon from "@/components/Icons/ZustandIcon";
// 핵심: Tailwind 컴파일러가 인식할 수 있도록 전체 클래스명을 미리 정의합니다.
const skills = [
    {
        name: "React",
        Icon: SiReact,
        category: "FrontEnd",
        // 모바일은 유색, PC는 회색 -> 호버 시 유색
        colorClass: "text-[#61DAFB] md:text-gray-500 md:group-hover:text-[#61DAFB]",
    },
    {
        name: "TypeScript",
        Icon: SiTypescript,
        category: "FrontEnd",
        colorClass: "text-[#3178C6] md:text-gray-500 md:group-hover:text-[#3178C6]",
    },
    {
        name: "JavaScript",
        Icon: SiJavascript,
        category: "FrontEnd",
        colorClass: "text-[#F7DF1E] md:text-gray-500 md:group-hover:text-[#F7DF1E]",
    },
    {
        name: "HTML5",
        Icon: SiHtml5,
        category: "FrontEnd",
        colorClass: "text-[#E34F26] md:text-gray-500 md:group-hover:text-[#E34F26]",
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        category: "FrontEnd",
        colorClass: "text-[#06B6D4] md:text-gray-500 md:group-hover:text-[#06B6D4]",
    },
    {
        name: "Sass",
        Icon: SiSass,
        category: "FrontEnd",
        colorClass: "text-[#CC6699] md:text-gray-500 md:group-hover:text-[#CC6699]",
    },
    {
        name: "Redux",
        Icon: SiRedux,
        category: "FrontEnd",
        colorClass: "text-[#764ABC] md:text-gray-500 md:group-hover:text-[#764ABC]",
    },
    {
        name: "React Query",
        Icon: SiReactquery,
        category: "FrontEnd",
        colorClass: "text-[#FF4154] md:text-gray-500 md:group-hover:text-[#FF4154]",
    },
    {
        name: "Vite",
        Icon: SiVite,
        category: "FrontEnd",
        colorClass: "text-[#646CFF] md:text-gray-500 md:group-hover:text-[#646CFF]",
    },
    {
        name: "MUI",
        Icon: SiMui,
        category: "FrontEnd",
        colorClass: "text-[#007FFF] md:text-gray-500 md:group-hover:text-[#007FFF]",
    },
    {
        name: "Styled Components",
        Icon: SiStyledcomponents,
        category: "FrontEnd",
        colorClass: "text-[#DB7093] md:text-gray-500 md:group-hover:text-[#DB7093]",
    },
    {
        name: "Vue.js (Vuex)",
        Icon: SiVuedotjs,
        category: "FrontEnd",
        colorClass: "text-[#4FC08D] md:text-gray-500 md:group-hover:text-[#4FC08D]",
    },
    {
        name: "Vuetify",
        Icon: SiVuetify,
        category: "FrontEnd",
        colorClass: "text-[#1867C0] md:text-gray-500 md:group-hover:text-[#1867C0]",
    },
    {
        name: "Zustand",
        Icon: ZustandIcon,
        category: "FrontEnd",
        colorClass: "text-[#443E38] md:text-gray-500 md:group-hover:text-[#443E38]",
    },
    {
        name: "Bootstrap",
        Icon: SiBootstrap,
        category: "FrontEnd",
        colorClass: "text-[#7952B3] md:text-gray-500 md:group-hover:text-[#7952B3]",
    },
    {
        name: "Framer Motion",
        Icon: TbBrandFramerMotion,
        category: "FrontEnd",
        colorClass: "text-[#0055FF] md:text-gray-500 md:group-hover:text-[#0055FF]",
    },
    {
        name: "Figma",
        Icon: SiFigma,
        category: "Design",
        colorClass: "text-[#F24E1E] md:text-gray-500 md:group-hover:text-[#F24E1E]",
    },
    {
        name: "Zeplin",
        Icon: ZeplinIcon,
        category: "Design",
        colorClass: "text-[#FDB01E] md:text-gray-500 md:group-hover:text-[#FDB01E]",
    },
    {
        name: "Git",
        Icon: SiGit,
        category: "VCS",
        colorClass: "text-[#F05032] md:text-gray-500 md:group-hover:text-[#F05032]",
    },
    {
        name: "SVN",
        Icon: SiSubversion,
        category: "VCS",
        colorClass: "text-[#809CC9] md:text-gray-500 md:group-hover:text-[#809CC9]",
    },
];
const TABS = ["전체", "FrontEnd", "Design", "VCS"];
function SkillsPage() {
    const [activeTab, setActiveTab] = useState("전체");
    const filteredSkills = activeTab === "전체"
        ? skills
        : skills.filter(skill => skill.category === activeTab);
    return (_jsxs(StepPage, { title: "Skills", stepNumber: 3, children: [_jsx("div", { className: "text-center mb-8 text-gray-400", children: "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC5D0 \uD544\uC694\uD55C \uB2E4\uC591\uD55C \uAE30\uC220\uB4E4\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4." }), _jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: TABS.map(tab => (_jsx("button", { onClick: () => setActiveTab(tab), className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeTab === tab
                        ? "bg-purple text-black shadow-lg shadow-purple/20"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`, children: tab }, tab))) }), _jsx("div", { className: "grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full max-w-5xl mx-auto px-4", children: filteredSkills.map(skill => {
                    const IconComponent = skill.Icon;
                    return (_jsxs("div", { className: "group flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 ease-out \r\n                hover:-translate-y-1 md:hover:-translate-y-2 hover:bg-white/10 hover:border-white/30 hover:shadow-xl", children: [_jsx("div", { className: "w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 rounded-xl md:rounded-2xl mb-3 md:mb-4 transition-all duration-300 ease-out \r\n                group-hover:scale-110 group-hover:bg-black/60 shadow-inner", children: _jsx(IconComponent, { className: `text-3xl md:text-4xl transition-colors duration-300 ${skill.colorClass}` }) }), _jsx("span", { className: "text-[10px] md:text-sm font-medium text-gray-300 md:text-gray-400 transition-colors duration-300 group-hover:text-white text-center break-keep", children: skill.name })] }, skill.name));
                }) })] }));
}
export default SkillsPage;
