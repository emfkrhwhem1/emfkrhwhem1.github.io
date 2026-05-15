function GradientBackground() {
  return (
    // 전체 배경 뒤에 배치될 컨테이너 (-z-10으로 컨텐츠 뒤에 배치)
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-navy">
      <div className="absolute -top-[-60%] -left-[-10%] w-[200px] h-[200px] rounded-full bg-purple  blur-[80px] mix-blend-screen opacity-90" />

      {/* 2. 오른쪽 하단의 메인 빛 (농도 60%, 크기는 유지하되 블러 축소로 뚜렷하게) */}
      <div className="absolute -bottom-[05%] -right-[-15%] w-[300px] h-[300px] rounded-full bg-purple  blur-[100px] mix-blend-screen" />

      {/* 3. 오른쪽 상단의 작은 서브 빛 (옵션) */}
      <div className="absolute top-[20%] right-[-0%] w-[300px] h-[300px] rounded-full bg-purple  blur-[90px] mix-blend-screen opacity-70" />
    </div>
  );
}

export default GradientBackground;
