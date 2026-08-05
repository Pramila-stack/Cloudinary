import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AdornedImage from "../decor/AdornedImage.jsx";
import Badge from "../ui/Badge.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { formatMoney } from "../../utils/format.js";

const MotionLink = motion(Link);
const spring = { type: "spring", stiffness: 400, damping: 17 };

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();
  const label = product.isBestSeller ? "Best seller" : product.isNew ? "New" : null;
  return (
    <div className="group flex flex-col">
      <div className="relative">
        {label && <Badge className="absolute left-2 top-2 z-10">{label}</Badge>}
        <MotionLink
          to={`/product/${product.slug}`}
          aria-label={product.name}
          className="block"
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={spring}
        >
          <AdornedImage src={product.images[0]} alt={product.name} bow={product.isBestSeller ? "pink" : "sage"} />
        </MotionLink>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <Link to={`/product/${product.slug}`} className="font-display text-lg text-ink hover:text-magenta">{product.name}</Link>
          <p className="mt-0.5 font-medium text-magenta">{formatMoney(product.price)}</p>
        </div>
        <motion.button
          className="rounded-full bg-white px-3 py-2 text-xs text-ink shadow-card transition-colors hover:bg-magenta hover:text-white"
          aria-label={`Add ${product.name} to bag`}
          whileTap={reduce ? undefined : { scale: 0.9 }}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          transition={spring}
          onClick={() => addItem(product, { color: product.colors[0].name, size: product.sizes[0], qty: 1 })}
        >
          Add to bag
        </motion.button>
      </div>
    </div>
  );
}
