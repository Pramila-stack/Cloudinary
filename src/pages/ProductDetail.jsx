import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getRelated } from "../api/products.js";
import ProductGallery from "../components/product/ProductGallery.jsx";
import QuantityStepper from "../components/ui/QuantityStepper.jsx";
import Button from "../components/ui/Button.jsx";
import Spinner from "../components/ui/Spinner.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatMoney } from "../utils/format.js";
import NotFound from "./NotFound.jsx";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(undefined); // undefined=loading, null=missing
  const [related, setRelated] = useState([]);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let active = true;
    setProduct(undefined);
    getProduct(slug).then((p) => {
      if (!active) return;
      setProduct(p);
      if (p) { setColor(p.colors[0].name); setSize(p.sizes[0]); }
    });
    getRelated(slug).then((r) => active && setRelated(r.results));
    return () => { active = false; };
  }, [slug]);

  if (product === undefined) return <div className="container-boutique py-24"><Spinner /></div>;
  if (product === null) return <NotFound />;

  const add = () => { addItem(product, { color, size, qty }); setAdded(true); setTimeout(() => setAdded(false), 1800); };

  return (
    <section className="container-boutique py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />
        <div>
          <h1 className="font-display text-4xl text-ink">{product.name}</h1>
          <p className="mt-2 text-2xl font-medium text-magenta">{formatMoney(product.price)}</p>
          <p className="mt-4 max-w-md text-ink-soft">{product.description}</p>

          <p className="mt-6 text-sm font-medium text-ink">Color</p>
          <div className="mt-2 flex gap-2">
            {product.colors.map((c) => (
              <button key={c.name} aria-label={c.name} onClick={() => setColor(c.name)}
                className={`h-8 w-8 rounded-full border-2 ${color === c.name ? "border-magenta" : "border-white"}`}
                style={{ background: c.hex }} />
            ))}
          </div>

          <p className="mt-6 text-sm font-medium text-ink">Size</p>
          <div className="mt-2 flex gap-2">
            {product.sizes.map((s) => (
              <button key={s} onClick={() => setSize(s)}
                className={`rounded-full px-4 py-2 text-sm ${size === s ? "bg-magenta text-white" : "bg-white text-ink"}`}>{s}</button>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <QuantityStepper value={qty} onChange={setQty} />
            <Button onClick={add} size="lg">Add to bag</Button>
          </div>
          {added && <p className="mt-3 text-sm text-magenta">Added to your bag ♡</p>}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <SectionHeader eyebrow="You may also" title="Love" accent="these too" />
          <ProductGrid products={related} />
        </div>
      )}
    </section>
  );
}
