export default function QuantityStepper({ value, onChange, min = 1 }) {
  return (
    <div className="inline-flex items-center rounded-full border border-sage-deep/40 bg-white">
      <button aria-label="Decrease quantity" className="px-3 py-1.5 text-ink" onClick={() => onChange(Math.max(min, value - 1))}>–</button>
      <span className="min-w-8 text-center text-sm" aria-live="polite">{value}</span>
      <button aria-label="Increase quantity" className="px-3 py-1.5 text-ink" onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
