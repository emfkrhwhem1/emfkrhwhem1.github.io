const ScrollGuide = () => {
  return (
    /* 최상위 div에 animate-bounce를 추가하여 전체가 위아래로 움직이게 함 */
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      {/* 마우스 모양 */}
      <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full relative">
        {/* 내부의 점도 기존처럼 개별적으로 움직임 (더 역동적임) */}
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
      </div>
      {/* 텍스트 */}
      <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
        Scroll Down
      </span>
    </div>
  );
};

export default ScrollGuide;
