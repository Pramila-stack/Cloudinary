import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { createOrder } from "../api/orders.js";
import Button from "../components/ui/Button.jsx";
import { formatMoney } from "../utils/format.js";

const FIELDS = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "address", label: "Address", type: "text" },
  { name: "city", label: "City", type: "text" },
  { name: "zip", label: "ZIP / Postal code", type: "text" },
];

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const shipping = subtotal >= 75 ? 0 : 6;
  const total = subtotal + shipping;

  const submit = async (e) => {
    e.preventDefault();
    if (FIELDS.some((f) => !form[f.name].trim())) { setError("Please fill in all shipping fields."); return; }
    setBusy(true);
    const order = await createOrder({ items, subtotal, shipping, total, shippingInfo: form });
    clear();
    navigate(`/order/${order.id}`, { state: { order } });
  };

  return (
    <section className="container-boutique grid gap-10 py-12 lg:grid-cols-2">
      <form onSubmit={submit} noValidate>
        <h1 className="mb-6 font-display text-3xl text-ink">Checkout</h1>
        <div className="grid gap-4">
          {FIELDS.map((f) => (
            <label key={f.name} className="block text-sm text-ink">
              {f.label}
              <input type={f.type} value={form[f.name]} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-sage-deep/40 bg-white px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-magenta" />
            </label>
          ))}
          <label className="block text-sm text-ink">Card (demo only — not charged)
            <input inputMode="numeric" placeholder="4242 4242 4242 4242"
              className="mt-1 w-full rounded-2xl border border-sage-deep/40 bg-white px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-magenta" />
          </label>
        </div>
        {error && <p className="mt-3 text-sm text-magenta">{error}</p>}
        <Button size="lg" className="mt-6 w-full" type="submit" disabled={busy}>{busy ? "Placing…" : "Place order"}</Button>
      </form>
      <aside className="h-fit rounded-3xl bg-rose-soft p-6">
        <h2 className="font-display text-xl text-ink">Order summary</h2>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {items.map((i) => (
            <li key={i.key} className="flex justify-between"><span>{i.name} × {i.qty}</span><span>{formatMoney(i.price * i.qty)}</span></li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-sage-deep/30 pt-3 font-medium text-ink">
          <span>Total</span><span>{formatMoney(total)}</span>
        </div>
      </aside>
    </section>
  );
}
