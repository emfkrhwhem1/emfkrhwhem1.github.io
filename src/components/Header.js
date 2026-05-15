import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const navItems = ["About", "Experience", "Skills", "Projects"];
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // 메뉴가 열려있을 때는 스크롤 상태 변화를 무시하거나 배경을 고정해야 함
            setIsScrolled(window.scrollY > 20);
            const sectionIds = ["Home", ...navItems];
            const headerOffset = 100;
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // 모바일 메뉴 오픈 시 바디 스크롤 차단 (레이아웃 틀어짐 방지 핵심)
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsMenuOpen(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: `fixed w-full top-0 z-[130] transition-all duration-300 ${isScrolled || isMenuOpen
                    ? "bg-[#0a0a0a]/90 backdrop-blur-md py-3 border-b border-white/5"
                    : "bg-transparent py-6"}`, children: _jsxs("div", { className: " px-BasePx  flex items-center justify-between", children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, onClick: () => scrollToSection("Home"), className: `text-xl font-[900] cursor-pointer tracking-tighter relative z-[140] ${activeSection === "Home" ? "text-purple-400" : "text-white"}`, children: "<KangSeongMin />" }), _jsx("nav", { className: "hidden md:flex items-center gap-8", children: navItems.map(item => (_jsxs("button", { onClick: () => scrollToSection(item), className: `relative text-[16px] font-medium transition-colors duration-300 cursor-pointer ${activeSection === item
                                    ? "text-purple-400"
                                    : "text-gray-400 hover:text-white"}`, children: [item, activeSection === item && (_jsx(motion.span, { layoutId: "underline", className: "absolute -bottom-1 left-0 w-full h-[2px] bg-purple-400" }))] }, item))) }), _jsx("button", { className: "md:hidden text-white p-1 relative z-[140] cursor-pointer", onClick: () => setIsMenuOpen(!isMenuOpen), children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, rotate: -90 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 90 }, transition: { duration: 0.2 }, children: isMenuOpen ? _jsx(X, { size: 28 }) : _jsx(Menu, { size: 28 }) }, isMenuOpen ? "close" : "open") }) })] }) }), _jsx(AnimatePresence, { children: isMenuOpen && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-[#0d0d0d] z-[120] md:hidden flex flex-col items-center justify-center", children: _jsx("nav", { className: "flex flex-col items-center gap-10", children: ["Home", ...navItems].map((item, idx) => (_jsx(motion.button, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, onClick: () => scrollToSection(item), className: `text-3xl font-black tracking-widest ${activeSection === item ? "text-purple-400" : "text-gray-500"} uppercase`, children: item }, item))) }) })) })] }));
}
export default Header;
