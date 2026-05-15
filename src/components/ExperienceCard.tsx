import { Building2, Calendar, MapPin, MoveRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  companyName: string;
  date: string;
  location: string;
  descriptions: string[];
  skills: string[];
}

function ExperienceCard({
  title,
  companyName,
  date,
  location,
  descriptions,
  skills,
}: ExperienceCardProps) {
  return (
    <div
      className="
      /* 부모가 정해준 너비를 꽉 채움 */
      w-full 
      flex flex-col gap-3 
      bg-[lab(53.4407%_1.42542_-7.38182_/_0.2)] 
      border border-white/[5%] 
      rounded-2xl 
      p-5 md:py-6 md:px-7 
      transition-all duration-300 
      hover:bg-white/[0.05] 
      hover:border-purple/30
      group
    "
    >
      {/* 헤더: 직무 및 회사 */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg md:text-xl mb-1 font-fira break-keep">
            {title}
          </h3>
          <p className="text-purple font-fira text-sm md:text-base leading-relaxed font-gmarket">
            {companyName}
          </p>
        </div>
        <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br w-10 h-10 md:w-14 md:h-14 from-primary/20 to-accent/20 flex justify-center items-center shrink-0 text-purple">
          <Building2 className="size-5 md:size-6" />
        </div>
      </div>

      {/* 메타 정보: 기간 및 위치 */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate/60 text-xs md:text-sm font-fira">
        <div className="flex gap-1.5 items-center">
          <Calendar className="size-3.5 md:size-4 text-purple/50" />
          <span>{date}</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <MapPin className="size-3.5 md:size-4 text-purple/50" />
          <span>{location}</span>
        </div>
      </div>

      {/* 업무 상세 설명 */}
      <div className="flex flex-col gap-3 my-2">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className="flex gap-2 md:gap-3 text-slate/80 text-[13px] md:text-[15px]"
          >
            <MoveRight className="size-4 md:size-5 shrink-0 text-purple mt-0.5 transition-all -translate-x-2 group-hover:translate-x-0" />
            <p className="leading-relaxed break-keep">{desc}</p>
          </div>
        ))}
      </div>

      {/* 기술 스택 태그 */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-fira bg-purple/10 border border-purple/20 text-purple rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
