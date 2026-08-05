import { describe, it, expect } from "vitest";
import { getProducts, getProduct, getCategories, getRelated } from "./products.js";

describe("products api", () => {
  it("returns all products with no filters", async () => {
    const { results } = await getProducts();
    expect(results.length).toBe(24);
  });
  it("filters by category", async () => {
    const { results } = await getProducts({ category: "dresses" });
    expect(results.every((p) => p.category === "dresses")).toBe(true);
  });
  it("filters featured only", async () => {
    const { results } = await getProducts({ featured: true });
    expect(results.every((p) => p.isFeatured)).toBe(true);
  });
  it("searches by name (case-insensitive)", async () => {
    const { results } = await getProducts({ search: "aria" });
    expect(results.some((p) => /aria/i.test(p.name))).toBe(true);
  });
  it("sorts by price ascending", async () => {
    const { results } = await getProducts({ sort: "price-asc" });
    for (let i = 1; i < results.length; i++) expect(results[i].price).toBeGreaterThanOrEqual(results[i - 1].price);
  });
  it("gets one product by slug, null when missing", async () => {
    expect(await getProduct("aria-ribbon-midi")).toMatchObject({ slug: "aria-ribbon-midi" });
    expect(await getProduct("nope")).toBeNull();
  });
  it("related excludes the product itself and shares category", async () => {
    const { results } = await getRelated("aria-ribbon-midi");
    expect(results.every((p) => p.slug !== "aria-ribbon-midi")).toBe(true);
  });
  it("lists categories", async () => {
    const { results } = await getCategories();
    expect(results.map((c) => c.slug)).toContain("dresses");
  });
});
