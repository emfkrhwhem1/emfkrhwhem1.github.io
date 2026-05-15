import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AboutCard({
  icon: Icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <div
      className="
        /* 레이아웃: 모바일에서는 가로(row), 태블릿 이상(sm)부터는 세로(col) */
        flex flex-row sm:flex-col items-start gap-4 sm:gap-3 
        
        /* 배경 및 테두리 */
        bg-[lab(53.4407%_1.42542_-7.38182_/_0.2)] 
        border border-white/[5%] 
        rounded-2xl 
        
        /* 패딩: 모바일에서는 조금 더 컴팩트하게 */
        p-5 md:py-6 md:px-7 
        
        /* 효과 */
        transition-all duration-300 
        hover:bg-white/[0.05] 
        hover:border-purple/30
        hover:-translate-y-1
        group
      "
    >
      {/* 아이콘 컨테이너 */}
      <div
        className="
        p-2.5 md:p-3 
        w-fit 
        bg-purple/10 
        rounded-xl 
        text-purple 
        transition-all 
        duration-300 
        group-hover:bg-purple/20 
        group-hover:scale-110
        shrink-0
      "
      >
        <Icon className="size-5 md:size-6" />
      </div>

      {/* 텍스트 컨테이너 */}
      <div className="flex-1">
        <h3
          className="
          text-white font-bold 
          text-base md:text-xl 
          mb-1 md:mb-2 
          font-fira 
          transition-colors 
          group-hover:text-purple-300
        "
        >
          {title}
        </h3>
        <p
          className="
          text-white/60 
          group-hover:text-white/80
          font-fira 
          text-[14px] md:text-[16px] 
          leading-relaxed 
          font-gmarket 
          break-keep
        "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
