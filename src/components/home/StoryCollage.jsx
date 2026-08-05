import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button.jsx";
import AdornedImage from "../decor/AdornedImage.jsx";
import HeartBullet from "../decor/HeartBullet.jsx";

export default function StoryCollage() {
  const reduce = useReducedMotion();
  const springHover = { type: "spring", stiffness: 200, damping: 14 };
  return (
    <section className="container-boutique py-16">
      <div className="grid items-center gap-10 rounded-3xl bg-rose/50 p-8 sm:p-12 lg:grid-cols-2">
        <div className="relative pb-10">
          <motion.div
            className="w-3/4"
            initial={reduce ? false : { opacity: 0, x: -48, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { scale: 1.03, rotate: 0, transition: springHover }}
          >
            <AdornedImage src="/images/products/dress3.png" alt="Soft-girl outfit flatlay" bow="sage" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 right-0 w-1/2"
            initial={reduce ? false : { opacity: 0, y: 48, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { scale: 1.06, rotate: 0, transition: springHover }}
          >
            <AdornedImage src="/images/products/accessory2.png" alt="Lace and ribbon details" bow="pink" />
          </motion.div>
        </div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="eyebrow"><HeartBullet /> our little world</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink">
            I create worlds where soft, <span className="accent-italic">pretty things</span> feel powerful.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Every piece is chosen for the girls who romanticise their whole life — tied in bows, trimmed in lace, and made to be photographed.
          </p>
          <Button to="/about" className="mt-6">Our story</Button>
        </motion.div>
      </div>
    </section>
  );
}
