import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts, getCategories } from "../api/products.js";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import ShopFilters from "../components/product/ShopFilters.jsx";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "newest";
  const q = searchParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { getCategories().then((r) => setCategories(r.results)); }, []);
  useEffect(() => {
    let active = true;
    setLoading(true);
    getProducts({ category: category || undefined, sort, search: q || undefined }).then((r) => {
      if (active) { setProducts(r.results); setLoading(false); }
    });
    return () => { active = false; };
  }, [category, sort, q]);

  const update = (next) => {
    const merged = { category, sort, q, ...next };
    const clean = Object.fromEntries(Object.entries(merged).filter(([, v]) => v));
    setSearchParams(clean);
  };

  const title = category ? categories.find((c) => c.slug === category)?.name || "Shop" : "All pieces";
  return (
    <section className="container-boutique py-12">
      <SectionHeader eyebrow="The boutique" title="Shop" accent={title} />
      <ShopFilters categories={categories} params={{ category, sort, q }} onChange={update} />
      <div className="mt-8">
        <ProductGrid products={products} loading={loading} />
      </div>
    </section>
  );
}
