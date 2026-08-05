const PALETTE = {
  pink: { loop: "#F3B6CE", tail: "#E88BAE", knot: "#E0789F" },
  sage: { loop: "#AEC79A", tail: "#8FB077", knot: "#7D9E63" },
};

export default function Bow({ color = "pink", size = 40, className = "" }) {
  const c = PALETTE[color] || PALETTE.pink;
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 40 28" aria-hidden="true" className={className}>
      <path d="M20 15 C11 5 2 7 4 15 C2 23 11 25 20 15Z" fill={c.loop} />
      <path d="M20 15 C29 5 38 7 36 15 C38 23 29 25 20 15Z" fill={c.loop} />
      <path d="M17 16 L11 27" stroke={c.tail} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M23 16 L29 27" stroke={c.tail} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="15" r="3.4" fill={c.knot} />
    </svg>
  );
}
