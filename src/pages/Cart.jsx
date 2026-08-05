import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import AdornedImage from "../components/decor/AdornedImage.jsx";
import QuantityStepper from "../components/ui/QuantityStepper.jsx";
import Button from "../components/ui/Button.jsx";
import { formatMoney } from "../utils/format.js";

export default function Cart() {
  const { items, setQty, removeItem, subtotal } = useCart();
  const shipping = subtotal === 0 || subtotal >= 75 ? 0 : 6;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="container-boutique py-24 text-center">
        <p className="font-display text-3xl text-ink">Your bag is empty</p>
        <p className="mt-2 text-ink-soft">Let's find something soft and pretty.</p>
        <Button to="/shop" size="lg" className="mt-6">Shop the collection</Button>
      </section>
    );
  }

  return (
    <section className="container-boutique grid gap-10 py-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="mb-6 font-display text-3xl text-ink">Your bag</h1>
        <ul className="space-y-5">
          {items.map((i) => (
            <li key={i.key} className="flex gap-4 rounded-3xl bg-white/70 p-4">
              <div className="w-24 flex-none"><AdornedImage src={i.image} alt={i.name} lily={false} bow="sage" /></div>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between">
                  <p className="font-display text-lg text-ink">{i.name}</p>
                  <p className="font-medium text-magenta">{formatMoney(i.price * i.qty)}</p>
                </div>
                <p className="text-xs text-ink-soft">{i.color} · {i.size}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <QuantityStepper value={i.qty} onChange={(v) => setQty(i.key, v)} />
                  <button className="text-xs text-ink-soft underline hover:text-magenta" onClick={() => removeItem(i.key)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit rounded-3xl bg-rose-soft p-6">
        <h2 className="font-display text-xl text-ink">Summary</h2>
        <dl className="mt-4 space-y-2 text-sm text-ink">
          <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatMoney(subtotal)}</dd></div>
          <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? "Free" : formatMoney(shipping)}</dd></div>
          <div className="flex justify-between border-t border-sage-deep/30 pt-2 font-medium"><dt>Total</dt><dd>{formatMoney(total)}</dd></div>
        </dl>
        <Button to="/checkout" size="lg" className="mt-6 w-full">Checkout</Button>
      </aside>
    </section>
  );
}
