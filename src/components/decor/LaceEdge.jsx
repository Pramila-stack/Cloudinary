export default function LaceEdge({ side = "top", className = "" }) {
  const at = side === "top" ? "6px 0" : "6px 12px";
  const mask = `radial-gradient(circle 6px at ${at}, transparent 6px, #000 6.5px) 0 0/12px 12px repeat-x`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 right-0 h-3 bg-white ${side === "top" ? "-top-2" : "-bottom-2"} ${className}`}
      style={{ WebkitMask: mask, mask }}
    />
  );
}
