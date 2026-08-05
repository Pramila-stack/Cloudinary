const TONES = { pink: "bg-blush text-magenta-deep", sage: "bg-sage-soft text-ink" };
export default function Chip({ children, tone = "pink", className = "" }) {
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium ${TONES[tone]} ${className}`}>{children}</span>;
}
