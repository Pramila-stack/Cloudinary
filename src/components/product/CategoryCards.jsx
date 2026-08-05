import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AdornedImage from "../decor/AdornedImage.jsx";

const CATEGORY_IMAGE = {
  dresses: "/images/products/dress1.png",
  tops: "/images/products/top1.png",
  skirts: "/images/products/skirt1.png",
  accessories: "/images/products/accessory1.png",
};

const MotionLink = motion(Link);

export default function CategoryCards({ categories }) {
  const reduce = useReducedMotion();
  if (!categories?.length) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {categories.map((c, i) => (
        <MotionLink
          key={c.slug}
          to={`/shop?category=${c.slug}`}
          className="group rounded-3xl bg-rose/70 p-3 text-center sm:p-4"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { y: -8, transition: { type: "spring", stiffness: 240, damping: 16 } }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          <AdornedImage src={CATEGORY_IMAGE[c.slug] || "/images/products/dress1.png"} alt={c.name} ratio="4/5" bow={i % 2 ? "pink" : "sage"} />
          <p className="mt-3 font-display text-lg text-ink sm:mt-4 sm:text-xl">{c.name}</p>
          <p className="text-xs text-ink-soft">{c.productCount} pieces</p>
        </MotionLink>
      ))}
    </div>
  );
}
