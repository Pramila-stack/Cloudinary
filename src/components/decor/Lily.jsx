export default function Lily({ size = 44, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" aria-hidden="true" className={className}>
      <g fill="#fff" stroke="#F3D9E4" strokeWidth="0.5">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="23" cy="11" rx="4.6" ry="10" transform={`rotate(${deg} 23 20)`} />
        ))}
      </g>
      <circle cx="23" cy="20" r="3.4" fill="#F4B9CF" />
      <circle cx="23" cy="20" r="1.4" fill="#E9A83F" />
    </svg>
  );
}
