import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../api/products.js";
import Hero from "../components/home/Hero.jsx";
import CategoryCards from "../components/product/CategoryCards.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import StoryCollage from "../components/home/StoryCollage.jsx";
import CommunityStrip from "../components/home/CommunityStrip.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Newsletter from "../components/home/Newsletter.jsx";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const [feat, cats] = await Promise.all([getProducts({ featured: true }), getCategories()]);
        if (!active) return;
        setFeatured(feat.results.slice(0, 8));
        setCategories(cats.results);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <>
      <Hero />
      <section className="container-boutique py-14">
        <SectionHeader eyebrow="Shop by mood" title="Shop by" accent="category" />
        <CategoryCards categories={categories} />
      </section>
      <section className="container-boutique py-14">
        <SectionHeader eyebrow="Curated for you" title="Featured" accent="collection" subtitle="The pieces we're loving this season." action={{ label: "Shop all", to: "/shop" }} />
        <ProductGrid products={featured} loading={loading} skeletonCount={8} />
      </section>
      <StoryCollage />
      <CommunityStrip />
      <Testimonials />
      <Newsletter />
    </>
  );
}
