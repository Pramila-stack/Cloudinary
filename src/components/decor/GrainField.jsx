export default function GrainField({ children }) {
  const frame = {
    backgroundImage:
      "repeating-linear-gradient(0deg,rgba(255,255,255,.10) 0 1px,transparent 1px 24px)," +
      "repeating-linear-gradient(90deg,rgba(255,255,255,.10) 0 1px,transparent 1px 24px)," +
      "radial-gradient(circle at 20% 10%, rgba(157,176,126,.45), transparent 45%)," +
      "linear-gradient(160deg,#C4D2A6,#B7CAA0)",
  };
  const page = { backgroundImage: "linear-gradient(180deg,#FFF6FA 0%,#FBF2EC 55%,#F7EFE6 100%)" };
  return (
    <div className="min-h-screen bg-sage p-2 sm:p-3" style={frame}>
      <div className="min-h-screen rounded-[1.75rem] border-2 border-dashed border-sage-deep/50 bg-cream" style={page}>
        {children}
      </div>
    </div>
  );
}
