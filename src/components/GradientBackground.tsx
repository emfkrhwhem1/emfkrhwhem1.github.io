function GradientBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#02010a]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* 1. 하단 은은한 안개 (가장 아래쪽만 살짝 보라색이 감돌게) */}
      <div
        className="absolute inset-0"
        style={{
          // 농도를 0.15로 낮추고 범위를 70%까지 넓게 퍼뜨림
          background:
            "linear-gradient(to top, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.02) 40%, transparent 70%)",
        }}
      />

      {/* 2. 하단 중앙 와이드 광원 (정원이 아닌 아주 넓은 타원으로 부드러움 극대화) */}
      <div
        className="absolute w-[160vw] h-[50vh]"
        style={{
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          // 중심부 농도를 확 낮추고(0.2) 외곽을 아주 길게 뺌
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 85%)",
        }}
      />

      {/* 3. 밋밋함을 잡아주는 입자 (노이즈 투명도를 낮춰서 고급스럽게) */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. 상단 대비 조절 (완전 검은색 대신 살짝 남색 톤이 섞인 어둠) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -10%, transparent 30%, rgba(2, 1, 10, 0.5) 100%)",
        }}
      />
    </div>
  );
}

export default GradientBackground;
