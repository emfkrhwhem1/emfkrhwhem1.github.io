import ProjectCard from "@/components/ProjectCard";
import StepPage from "@/components/StepPage";
import Data from "@/data/Projects";

function ProjectPage() {
  return (
    <StepPage title="Projects" stepNumber={4}>
      <div className="flex flex-col gap-24 mt-10">
        {" "}
        {/* 프로젝트 간 간격을 좀 더 넓혔습니다 */}
        {Data.map((project, index) => (
          <div key={index} className="relative group">
            {/* 배경 숫자 디자인: 01, 02 형식 */}
            <div className="absolute -top-12 -left-4 select-none pointer-events-none">
              <span className="text-8xl font-black text-white/[0.03] italic tracking-tighter group-hover:text-emerald-500/[0.05] transition-colors duration-500">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* 작은 포인트 숫자 라벨 */}
            <div className="flex items-center gap-4 mb-6 ml-2">
              <div className="h-[1px] w-8 bg-purple-500/50" />
              <span className="font-mono text-purple-400 text-lg font-bold">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* 실제 프로젝트 카드 */}
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </StepPage>
  );
}

export default ProjectPage;
