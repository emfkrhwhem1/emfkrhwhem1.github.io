import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
function StepPage({ children, stepNumber = 1, title = "Aboue Me", }) {
    return (_jsxs("div", { className: "relative  min-h-[100vh] px-BasePx  py-24 md:py-40", children: [_jsxs("div", { className: "flex items-center gap-4 mb-16", children: [_jsxs("span", { className: "text-purple font-fira", children: [String(stepNumber).padStart(2, "0"), "."] }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: title }), _jsx("div", { className: "flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent max-w-md" })] }), _jsx("div", { children: children })] }));
}
export default StepPage;
