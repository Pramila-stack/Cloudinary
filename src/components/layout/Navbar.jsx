import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCart } from "../../context/CartContext.jsx";

const MotionLink = motion(Link);

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop" },
  { to: "/shop?sort=newest", label: "New in" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const tap = reduce ? {} : { whileTap: { scale: 0.94 }, transition: { type: "spring", stiffness: 400, damping: 17 } };
  return (
    <header className="sticky top-0 z-40 border-b border-sage-deep/20 bg-cream/80 backdrop-blur">
      <nav className="container-boutique flex items-center justify-between py-4">
        <Link to="/" className="font-script text-3xl text-ink">Cloudine</Link>
        <ul className="hidden items-center gap-7 text-sm text-ink md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? "text-magenta" : "hover:text-magenta")}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <MotionLink to="/cart" className="relative rounded-full bg-white px-4 py-2 text-sm text-ink shadow-card" aria-label="Cart" {...tap}>
            Cart
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-magenta text-[11px] text-white">{count}</span>
            )}
          </MotionLink>
          <motion.button
            type="button"
            className="rounded-full bg-white px-3 py-2 text-ink shadow-card md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            whileTap={reduce ? undefined : { scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span aria-hidden="true">☰</span>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="container-boutique flex flex-col gap-2 pb-4 text-sm text-ink md:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.label}>
                <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "text-magenta" : "hover:text-magenta")}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
