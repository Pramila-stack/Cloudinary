import Chip from "../ui/Chip.jsx";

const SORTS = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export default function ShopFilters({ categories, params, onChange }) {
  const { category, sort, q } = params;
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => onChange({ category: "" })} aria-label="All categories">
          <Chip tone={!category ? "pink" : "sage"}>All</Chip>
        </button>
        {categories.map((c) => (
          <button type="button" key={c.slug} onClick={() => onChange({ category: c.slug })} aria-label={c.name}>
            <Chip tone={category === c.slug ? "pink" : "sage"}>{c.name}</Chip>
          </button>
        ))}
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <input
          type="search"
          value={q}
          onChange={(e) => onChange({ q: e.target.value })}
          placeholder="Search pieces…"
          aria-label="Search products"
          className="w-full rounded-full border border-sage-deep/40 bg-white px-4 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta sm:w-auto"
        />
        <select
          value={sort}
          onChange={(e) => onChange({ sort: e.target.value })}
          aria-label="Sort products"
          className="w-full rounded-full border border-sage-deep/40 bg-white px-4 py-2 text-sm text-ink outline-none focus-visible:ring-2 focus-visible:ring-magenta sm:w-auto"
        >
          {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>
    </div>
  );
}
