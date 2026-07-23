import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxGhost from "./ParallaxGhost";

const planes = [
  {
    nombre: "Pase diario",
    precio: "$5.000",
    periodo: "por día",
    beneficios: ["Acceso a sala de musculación", "1 clase grupal"],
  },
  {
    nombre: "Mensual",
    precio: "$29.900",
    periodo: "por mes",
    beneficios: [
      "Acceso ilimitado",
      "Clases grupales incluidas",
      "Evaluación nutricional gratuita",
    ],
  },
  {
    nombre: "Trimestral",
    precio: "$69.990",
    periodo: "cada 3 meses",
    beneficios: [
      "Acceso ilimitado a todas las sedes",
      "Clases grupales incluidas",
      "Asesoría en sala",
      "Evaluación nutricional gratuita",
    ],
    destacado: true,
  },
  {
    nombre: "Semestral",
    precio: "$99.000",
    periodo: "cada 6 meses",
    beneficios: ["Todo lo del plan trimestral", "Prioridad en eventos"],
  },
  {
    nombre: "Anual",
    precio: "$159.000",
    periodo: "por año",
    beneficios: ["El mejor valor por mes", "Congelable hasta 30 días"],
  },
];

export default function Planes() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(2);
  const plan = planes[active];

  return (
    <section
      ref={sectionRef}
      id="planes"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      <ParallaxGhost
        number="03"
        target={sectionRef}
        className="left-4 top-4 text-[22vw] text-white/[0.04] md:left-8 md:top-8 md:text-[16vw]"
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden
      />

      <motion.div
        className="relative mb-12 max-w-xl md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
          planes 2026
        </span>
        <h2 className="hero-title mt-3 text-4xl font-medium md:text-6xl">
          sin letra chica
        </h2>
        <p className="mt-4 text-white/70">
          matrícula gratis y clases grupales incluidas en todos los planes,
          siempre. plan anual congelable hasta 30 días; reembolso dentro de 7
          días si entrenaste máximo 3 veces.
        </p>
      </motion.div>

      <div className="relative">
        <div className="mb-8 flex flex-wrap gap-2">
          {planes.map((p, i) => (
            <button
              key={p.nombre}
              onClick={() => setActive(i)}
              className="relative rounded-full px-5 py-2.5 text-sm font-medium"
            >
              {active === i && (
                <motion.span
                  layoutId="plan-tab-glass"
                  className="absolute inset-0 rounded-full border border-white/25 bg-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors ${
                  active === i ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {p.nombre}
              </span>
              {p.destacado && (
                <span className="relative z-10 ml-2 inline-block h-1.5 w-1.5 rounded-full bg-white align-middle" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={plan.nombre}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-8 rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center md:p-12"
          >
            <div>
              {plan.destacado && (
                <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                  más elegido
                </span>
              )}
              <p className="font-mono text-6xl font-bold md:text-7xl">
                {plan.precio}
              </p>
              <p className="mt-2 text-sm text-white/60">{plan.periodo}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {plan.beneficios.map((b) => (
                  <li key={b} className="relative pl-4 text-sm text-white/80">
                    <span className="absolute left-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#comunidad"
              className="block w-full rounded-full bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200 md:w-auto"
            >
              elegir {plan.nombre.toLowerCase()}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
