import { Link } from "react-router-dom";
import RibbonDivider from "../decor/RibbonDivider.jsx";

export default function Footer() {
  return (
    <footer className="container-boutique pb-10 pt-6">
      <RibbonDivider />
      <div className="grid gap-8 rounded-3xl bg-cream/70 p-8 sm:grid-cols-3">
        <div>
          <p className="font-script text-3xl text-ink">Cloudine</p>
          <p className="mt-2 text-sm text-ink-soft">A dreamy little boutique tied up in ribbons and lace.</p>
        </div>
        <div className="text-sm text-ink">
          <p className="mb-2 font-medium">Shop</p>
          <ul className="space-y-1 text-ink-soft">
            <li><Link to="/shop" className="hover:text-magenta">All pieces</Link></li>
            <li><Link to="/shop?category=dresses" className="hover:text-magenta">Dresses</Link></li>
            <li><Link to="/shop?sort=newest" className="hover:text-magenta">New in</Link></li>
          </ul>
        </div>
        <div className="text-sm text-ink-soft">
          <p className="mb-2 font-medium text-ink">Follow the softness</p>
          <p>@cloudine.boutique</p>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-ink-soft">© 2026 Cloudine. Made with soft things.</p>
    </footer>
  );
}
