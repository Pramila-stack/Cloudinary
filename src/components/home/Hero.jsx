import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button.jsx";
import Chip from "../ui/Chip.jsx";
import AdornedImage from "../decor/AdornedImage.jsx";
import Bow from "../decor/Bow.jsx";

const STATS = [
  { value: "200+", label: "curated pieces" },
  { value: "4.9★", label: "loved by 10k+" },
  { value: "Free", label: "shipping over $75" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <Bow color="pink" size={54} className="absolute left-6 top-6 hidden opacity-80 sm:block" />
      <Bow color="sage" size={48} className="absolute right-10 top-24 hidden opacity-70 sm:block" />
      <div className="container-boutique grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Chip tone="pink">New season</Chip>
          <p className="mt-4 font-script text-3xl text-magenta">pretty little things,</p>
          <h1 className="mt-1 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            wear your <span className="accent-italic">softest era.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Cloud-soft fashion tied up in ribbons and lace, for the girls who pin their whole aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/shop" size="lg">Shop the collection</Button>
            <Button to="/shop?sort=newest" size="lg" variant="secondary">New arrivals</Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-ink">{s.value}</p>
                <p className="text-xs text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="relative" initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { scale: 1.03, rotate: -1.5, transition: { type: "spring", stiffness: 180, damping: 12 } }}
            className="cursor-pointer"
          >
            <AdornedImage src="/images/products/dress1.png" alt="Model in a soft pink dress with ribbons" bow="pink" ratio="4/5" />
          </motion.div>
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-5 py-3 shadow-card backdrop-blur">
            <p className="text-xs text-ink-soft">this week's favourite</p>
            <p className="font-display text-lg text-ink">Aria Ribbon Midi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
