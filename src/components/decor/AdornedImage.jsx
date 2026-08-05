import LaceEdge from "./LaceEdge.jsx";
import Lily from "./Lily.jsx";
import Bow from "./Bow.jsx";

export default function AdornedImage({
  src, alt, ratio = "4/5", bow = "sage", lily = true, className = "", imgClassName = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-2xl bg-white p-1.5 shadow-card">
        <LaceEdge side="top" />
        <LaceEdge side="bottom" />
        <div className="group overflow-hidden rounded-xl" style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgClassName}`}
          />
        </div>
      </div>
      {lily && <Lily size={42} className="absolute -left-3 -top-4 drop-shadow" />}
      {bow && <Bow color={bow} size={38} className="absolute -right-2 -top-3 transition-transform hover:animate-wiggle" />}
    </div>
  );
}
