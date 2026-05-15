import Header from "./components/Header";
import AboutPage from "./page/AboutPage";
import ExperiencePage from "./page/ExperiencePage";
import ProjectPage from "./page/ProjectPage";
import RandingPage from "./page/RandingPage";
import SkillsPage from "./page/SkillsPage";

function App() {
  // 부드러운 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Header />
      <div id="Home">
        <RandingPage goToProject={async () => scrollToSection("Projects")} />
      </div>
      <section id="About">
        <AboutPage />
      </section>
      <section id="Experience">
        <ExperiencePage />
      </section>
      <section id="Skills">
        <SkillsPage />
      </section>
      <section id="Projects">
        <ProjectPage />
      </section>
    </>
  );
}

export default App;
