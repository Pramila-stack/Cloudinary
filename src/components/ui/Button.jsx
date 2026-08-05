import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion(Link);

const SIZES = { md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
const VARIANTS = {
  primary: "bg-magenta text-white shadow-soft hover:bg-magenta-deep",
  secondary: "bg-white text-ink border border-sage-deep/40 hover:bg-cream",
};

export default function Button({ to, href, variant = "primary", size = "md", className = "", children, ...props }) {
  const reduce = useReducedMotion();
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  const motionProps = reduce
    ? {}
    : { whileTap: { scale: 0.95 }, whileHover: { scale: 1.03 }, transition: { type: "spring", stiffness: 400, damping: 17 } };
  if (to) return <MotionLink to={to} className={cls} {...motionProps} {...props}>{children}</MotionLink>;
  if (href) return <motion.a href={href} className={cls} {...motionProps} {...props}>{children}</motion.a>;
  return <motion.button className={cls} {...motionProps} {...props}>{children}</motion.button>;
}
