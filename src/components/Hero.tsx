import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import SevenWordmark from "./SevenWordmark";

const navReveal: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <img
        src="/images/hero-fallback.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85"
        aria-hidden
      />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between gap-4 px-6 pt-6 md:px-10"
        variants={navReveal}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center rounded-full bg-neutral-900/90 px-5 py-2.5 backdrop-blur">
          <SevenWordmark />
        </div>

        <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
          {["clases", "sedes", "planes", "comunidad"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#planes"
          className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
        >
          agenda tu evaluación
        </a>
      </motion.nav>

      <motion.div
        className="relative h-full w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.h1
          className="hero-title absolute left-4 top-[18%] text-[14vw] font-medium text-white md:left-10 md:text-[13vw]"
          variants={wordReveal}
          custom={0.15}
          initial="hidden"
          animate="show"
        >
          entrena
        </motion.h1>
        <motion.h1
          className="hero-title absolute right-4 top-[38%] text-[14vw] font-medium text-white md:right-10 md:text-[13vw]"
          variants={wordReveal}
          custom={0.3}
          initial="hidden"
          animate="show"
        >
          sin
        </motion.h1>
        <motion.h1
          className="hero-title absolute left-[18%] top-[58%] text-[14vw] font-medium text-white md:left-[28%] md:text-[13vw]"
          variants={wordReveal}
          custom={0.45}
          initial="hidden"
          animate="show"
        >
          límites
        </motion.h1>

        <motion.p
          className="absolute left-6 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90 md:left-10"
          variants={fadeUp}
          custom={0.65}
          initial="hidden"
          animate="show"
        >
          entrena siempre en el mejor ambiente, con clases grupales, asesoría
          nutricional y una comunidad que no se detiene
        </motion.p>

        <motion.div
          className="absolute right-6 top-[14%] md:right-24"
          variants={fadeUp}
          custom={0.8}
          initial="hidden"
          animate="show"
        >
          <div className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 rotate-[20deg] bg-white/40 md:block" />
            <span className="text-4xl font-medium tracking-tight md:text-5xl">
              4.8
            </span>
          </div>
          <p className="mt-1 text-right text-xs text-white/70 md:text-sm">
            en google reviews
          </p>
        </motion.div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black"
          aria-hidden
        />

        <motion.div
          className="absolute left-6 bottom-20 md:left-20 md:bottom-24"
          variants={fadeUp}
          custom={0.95}
          initial="hidden"
          animate="show"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl font-medium tracking-tight md:text-5xl">
              +6
            </span>
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
          </div>
          <p className="mt-1 text-xs text-white/70 md:text-sm">
            sedes en 2 regiones
          </p>
        </motion.div>

        <motion.div
          className="absolute right-6 bottom-16 md:right-20 md:bottom-20"
          variants={fadeUp}
          custom={1.1}
          initial="hidden"
          animate="show"
        >
          <div className="flex items-center gap-3">
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
            <span className="text-4xl font-medium tracking-tight md:text-5xl">
              10+
            </span>
          </div>
          <p className="mt-1 text-right text-xs text-white/70 md:text-sm">
            disciplinas disponibles
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
