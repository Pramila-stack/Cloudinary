import { useLocation, useParams } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import RibbonDivider from "../components/decor/RibbonDivider.jsx";
import { formatMoney } from "../utils/format.js";

export default function OrderConfirmation() {
  const { id } = useParams();
  const order = useLocation().state?.order;
  return (
    <section className="container-boutique py-20 text-center">
      <p className="eyebrow justify-center">Thank you ♡</p>
      <h1 className="mt-3 font-display text-4xl text-ink">Your order is on its way to being <span className="accent-italic">wrapped</span></h1>
      <p className="mt-3 text-ink-soft">Order <span className="font-medium text-ink">{id}</span> — a confirmation is in your inbox.</p>
      <RibbonDivider className="mx-auto max-w-md" />
      {order && (
        <p className="text-ink">Total paid: <span className="font-medium text-magenta">{formatMoney(order.total)}</span></p>
      )}
      <Button to="/shop" size="lg" className="mt-8">Keep shopping</Button>
    </section>
  );
}
