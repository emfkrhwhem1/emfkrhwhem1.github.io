import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Users, // 작업 인원 아이콘 추가
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
  memberCount: number; // 작업 인원 필드 추가 (예: "1명" 또는 "4명")
  techStack: string[];
  contributions: string[];
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  period,
  contributionRole,
  memberCount,
  techStack,
  contributions,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 상태에 따른 배경 스크롤 차단 로직
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="group relative transition-all duration-300 mb-12">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30 md:opacity-50 group-hover:opacity-70 transition-opacity rounded-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]/80 backdrop-blur-xl p-5 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* 왼쪽/상단: 프로젝트 이미지 섹션 */}
            <div className="lg:col-span-2 space-y-4 relative w-full">
              <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-secondary/30 shadow-inner flex items-center justify-center group/img">
                <img
                  src={imageSrc}
                  alt={`${title} 프로젝트 썸네일`}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover/img:scale-110"
                />

                {/* 확대 버튼 (데스크탑) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/40 transition-all transform md:translate-y-4 md:group-hover/img:translate-y-0"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm font-medium">확대해서 보기</span>
                  </button>
                </div>

                {/* 확대 버튼 (모바일 전용) */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* 프로젝트  타 정보 (3열 그리드로 수정) */}
              {/* 프로젝트 메타 정보 */}
              <div className="flex flex-wrap items-center gap-2 text-[12px] md:text-xs lg:text-sm w-full">
                {/* 1. 기간 */}
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5 min-w-max">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 shrink-0" />
                  <span className="whitespace-nowrap">{period}</span>
                </div>

                {/* 2. 수행 역할 (글자가 길어도 박스가 알아서 늘어남) */}
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5 min-w-max">
                  <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 shrink-0" />
                  <span className="whitespace-nowrap">{contributionRole}</span>
                </div>

                {/* 3. 작업 인원 (memberCount가 정상 바인딩됨) */}
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5 min-w-max">
                  {/* 메인 그룹 아이콘 */}
                  <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 shrink-0" />

                  {/* 인원수 글자 표기 */}
                  <span className="text-xs text-gray-400 mr-1">참여 인원</span>

                  {/* 데이터 기반으로 사람 아이콘 배열을 동적 생성하여 렌더링 */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: Number(memberCount) || 1 }).map(
                      (_, index) => (
                        <User
                          key={index}
                          className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400/80 shrink-0 -ml-0.5 first:ml-0"
                        />
                      ),
                    )}
                    {/* 텍스트 보조 표시 (선택사항, 지우셔도 됩니다) */}
                    <span className="text-emerald-400 font-medium ml-1">
                      ({memberCount}명)
                    </span>
                  </div>
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

              {/* 수행 역할 */}
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
          className="fixed inset-0 z-131 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4 md:p-10 transition-all animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-24 right-6 md:top-10 cursor-pointer md:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[210]"
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
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <div className="mt-6 text-center">
              <p className="text-white text-lg md:text-2xl font-bold">
                {title} 이미지 상세보기
              </p>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                창을 닫으려면 배경을 클릭하거나 X 버튼을 누르세요.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
