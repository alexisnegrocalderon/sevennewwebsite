import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { RefObject } from "react";

export default function ParallaxGhost({
  number,
  target,
  className = "",
}: {
  number: string;
  target: RefObject<HTMLElement | null>;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-70, 70]);

  return (
    <motion.span
      style={{ y }}
      aria-hidden
      className={`hero-title pointer-events-none absolute select-none font-medium leading-none ${className}`}
    >
      {number}
    </motion.span>
  );
}
