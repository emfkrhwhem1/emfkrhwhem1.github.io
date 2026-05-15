import { useState } from "react";
import {
  Calendar,
  User,
  Code2,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  period: string;
  contributionRole: string;
  techStack: string[];
  contributions: string[];
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  period,
  contributionRole,
  techStack,
  contributions,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative transition-all duration-300 mb-12">
        {/* 배경 그라데이션 - 모바일에서는 조금 더 은은하게 */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30 md:opacity-50 group-hover:opacity-70 transition-opacity rounded-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]/80 backdrop-blur-xl p-5 md:p-10 shadow-2xl">
          {/* 
            Grid 레이아웃: 
            - 기본(모바일): 1열 (이미지 위, 텍스트 아래)
            - lg(데스크탑): 5열 중 2열(이미지) : 3열(텍스트) 비율 유지
          */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* 왼쪽/상단: 프로젝트 이미지 섹션 */}
            <div className="lg:col-span-2 space-y-4 relative w-full">
              <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-secondary/30 shadow-inner flex items-center justify-center group/img">
                <img
                  src={imageSrc}
                  alt={`${title} 프로젝트 썸네일`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover/img:scale-110"
                />

                {/* 확대 버튼: 모바일에서는 항상 보이거나 터치하기 쉬운 크기로 유지 (선택사항) 
                    여기서는 hover가 없는 모바일 환경을 고려해 opacity-0 md:group-hover/img:opacity-100 로 대응 */}
                <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/40 transition-all transform md:translate-y-4 md:group-hover/img:translate-y-0"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm font-medium">확대해서 보기</span>
                  </button>
                </div>

                {/* 모바일용 탭 가이드 (터치 환경 대응) */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* 프로젝트 메타 정보: 모바일에서 텍스트 크기 및 패딩 조절 */}
              <div className="grid grid-cols-2 gap-3 text-[12px] md:text-sm">
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 p-2.5 md:p-3 rounded-xl border border-white/5">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 shrink-0" />
                  <span className="">{period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 p-2.5 md:p-3 rounded-xl border border-white/5">
                  <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                  <span className="">{contributionRole}</span>
                </div>
              </div>
            </div>

            {/* 오른쪽/하단: 상세 내용 섹션 */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg whitespace-pre-line break-keep">
                  {description}
                </p>
              </div>

              {/* 기술 스택 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <h4>주요 기술</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] md:text-sm font-mono bg-white/5 border border-white/10 text-gray-300 rounded-md hover:border-purple-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 작업 기여도 */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <h4>수행 역할</h4>
                </div>
                <ul className="grid gap-2.5 md:gap-3">
                  {contributions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white font-bold text-[14px] md:text-[16px] leading-snug break-keep"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 전체 화면 이미지 모달 (Lightbox) --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 transition-all animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-20 right-4 md:top-8 md:right-8 p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-base md:text-xl font-bold">
                {title} 이미지 상세보기
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
