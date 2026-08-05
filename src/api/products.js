import { PRODUCTS, CATEGORIES } from "../data/products.js";

const delay = (v, ms = 250) => new Promise((r) => setTimeout(() => r(v), ms));

export async function getProducts(filters = {}) {
  let list = [...PRODUCTS];
  const { category, featured, bestSeller, isNew, search, sort } = filters;
  if (category) list = list.filter((p) => p.category === category);
  if (featured) list = list.filter((p) => p.isFeatured);
  if (bestSeller) list = list.filter((p) => p.isBestSeller);
  if (isNew) list = list.filter((p) => p.isNew);
  if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sort === "newest") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
  return delay({ results: list });
}

export async function getProduct(slug) {
  return delay(PRODUCTS.find((p) => p.slug === slug) || null);
}

export async function getRelated(slug) {
  const base = PRODUCTS.find((p) => p.slug === slug);
  const results = base
    ? PRODUCTS.filter((p) => p.category === base.category && p.slug !== slug).slice(0, 4)
    : [];
  return delay({ results });
}

export async function getCategories() {
  const results = CATEGORIES.map((c) => ({ ...c, productCount: PRODUCTS.filter((p) => p.category === c.slug).length }));
  return delay({ results });
}
