import { motion, useReducedMotion } from "framer-motion";
import ProductCard from "./ProductCard.jsx";

function Skeleton() {
  return <div className="aspect-[4/5] w-full animate-pulse rounded-2xl bg-white/60" />;
}

export default function ProductGrid({ products, loading, skeletonCount = 8 }) {
  const reduce = useReducedMotion();
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, i) => <Skeleton key={i} />)}
      </div>
    );
  }
  if (!products?.length) return <p className="py-10 text-center text-ink-soft">No pieces here yet — check back soon ♡</p>;
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((p, i) => (
        <motion.div
          key={p.id}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
        >
          <ProductCard product={p} />
        </motion.div>
      ))}
    </div>
  );
}
