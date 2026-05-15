function RandingCard({ children = "asd" }) {
  return (
    <div className="text-white/70 font-fira bg-[lab(53.4407%_1.42542_-7.38182_/_0.2)] border border-white/[5%] rounded-2xl  py-1 px-3 md:py-2 md:px-4">
      {children}
    </div>
  );
}

export default RandingCard;
