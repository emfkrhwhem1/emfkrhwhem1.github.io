import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectCard from "@/components/ProjectCard";
import StepPage from "@/components/StepPage";
import Data from "@/data/Projects";
function ProjectPage() {
    return (_jsx(StepPage, { title: "Projects", stepNumber: 4, children: _jsxs("div", { className: "flex flex-col gap-24 mt-10", children: [" ", Data.map((project, index) => (_jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute -top-12 -left-4 select-none pointer-events-none", children: _jsx("span", { className: "text-8xl font-black text-white/[0.03] italic tracking-tighter group-hover:text-emerald-500/[0.05] transition-colors duration-500", children: (index + 1).toString().padStart(2, "0") }) }), _jsxs("div", { className: "flex items-center gap-4 mb-6 ml-2", children: [_jsx("div", { className: "h-[1px] w-8 bg-purple-500/50" }), _jsx("span", { className: "font-mono text-purple-400 text-lg font-bold", children: (index + 1).toString().padStart(2, "0") })] }), _jsx(ProjectCard, { ...project })] }, index)))] }) }));
}
export default ProjectPage;
