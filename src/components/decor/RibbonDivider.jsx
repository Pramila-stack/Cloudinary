import Bow from "./Bow.jsx";

export default function RibbonDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 py-6 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-sage-deep/40" />
      <Bow color="sage" size={44} />
      <span className="h-px flex-1 bg-sage-deep/40" />
    </div>
  );
}
