import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import AboutPage from "./page/AboutPage";
import ExperiencePage from "./page/ExperiencePage";
import ProjectPage from "./page/ProjectPage";
import RandingPage from "./page/RandingPage";
import SkillsPage from "./page/SkillsPage";
function App() {
    // 부드러운 스크롤 이동 함수
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { id: "Home", children: _jsx(RandingPage, { goToProject: async () => scrollToSection("Projects") }) }), _jsx("section", { id: "About", children: _jsx(AboutPage, {}) }), _jsx("section", { id: "Experience", children: _jsx(ExperiencePage, {}) }), _jsx("section", { id: "Skills", children: _jsx(SkillsPage, {}) }), _jsx("section", { id: "Projects", children: _jsx(ProjectPage, {}) })] }));
}
export default App;
