import { motion } from "framer-motion";

const disciplinas = [
  "Funcional",
  "Boxeo",
  "Yoga",
  "Fuerza",
  "Spinning",
  "Crossfit",
  "Movilidad",
  "HIIT",
];

export default function Clases() {
  return (
    <section id="clases" className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <motion.div
        className="mb-12 max-w-xl md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
          clases grupales incluidas
        </span>
        <h2 className="hero-title mt-3 text-4xl font-medium md:text-6xl">
          elige tu forma de entrenar
        </h2>
        <p className="mt-4 text-white/70">
          más de 10 disciplinas disponibles en todas las sedes, incluidas en
          cada plan — sin cargos extra.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-px border border-white/15 bg-white/15 md:grid-cols-4">
        {disciplinas.map((nombre, i) => (
          <motion.div
            key={nombre}
            className="group flex min-h-[160px] flex-col justify-between bg-black p-6 transition-colors hover:bg-white hover:text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <span className="font-mono text-xs text-white/50 group-hover:text-black/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-medium uppercase tracking-tight">
              {nombre}
            </h3>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-xs text-white/40">
        *horario de clases grupales sujeto a cambios y modificaciones
      </p>
    </section>
  );
}
