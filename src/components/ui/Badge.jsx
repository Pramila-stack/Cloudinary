export default function Badge({ children, className = "" }) {
  return <span className={`rounded-full bg-magenta px-2.5 py-1 text-[11px] font-medium text-white ${className}`}>{children}</span>;
}
