import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function GradientBackground() {
    return (_jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#02010a]", style: { transform: "translateZ(0)" }, children: [_jsx("div", { className: "absolute inset-0", style: {
                    // 농도를 0.15로 낮추고 범위를 70%까지 넓게 퍼뜨림
                    background: "linear-gradient(to top, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.02) 40%, transparent 70%)",
                } }), _jsx("div", { className: "absolute w-[160vw] h-[50vh]", style: {
                    bottom: "-20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    // 중심부 농도를 확 낮추고(0.2) 외곽을 아주 길게 뺌
                    background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 85%)",
                } }), _jsx("div", { className: "absolute inset-0 opacity-[0.12] mix-blend-overlay", style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                } }), _jsx("div", { className: "absolute inset-0", style: {
                    background: "radial-gradient(circle at 50% -10%, transparent 30%, rgba(2, 1, 10, 0.5) 100%)",
                } })] }));
}
export default GradientBackground;
