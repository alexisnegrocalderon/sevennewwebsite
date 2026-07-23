import { motion } from "framer-motion";

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
    beneficios: ["Acceso ilimitado", "Clases grupales incluidas", "Evaluación nutricional gratuita"],
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
  return (
    <section id="planes" className="bg-black px-6 py-24 text-white md:px-10 md:py-32">
      <motion.div
        className="mb-12 max-w-xl md:mb-16"
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

      <div className="grid gap-4 md:grid-cols-5">
        {planes.map((plan, i) => (
          <motion.div
            key={plan.nombre}
            className={`flex flex-col justify-between border p-6 ${
              plan.destacado
                ? "border-white bg-white text-black"
                : "border-white/20 bg-black text-white"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div>
              {plan.destacado && (
                <span className="mb-3 inline-block bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  más elegido
                </span>
              )}
              <p
                className={`text-xs font-bold uppercase tracking-wide ${
                  plan.destacado ? "text-black/60" : "text-white/60"
                }`}
              >
                {plan.nombre}
              </p>
              <p className="mt-2 font-mono text-3xl font-bold">
                {plan.precio}
              </p>
              <p
                className={`mb-5 text-xs ${
                  plan.destacado ? "text-black/60" : "text-white/60"
                }`}
              >
                {plan.periodo}
              </p>
              <ul className="flex flex-col gap-2">
                {plan.beneficios.map((b) => (
                  <li
                    key={b}
                    className={`pl-4 text-sm relative ${
                      plan.destacado ? "text-black/80" : "text-white/80"
                    }`}
                  >
                    <span className="absolute left-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#comunidad"
              className={`mt-6 block w-full py-3 text-center text-sm font-bold uppercase tracking-wide transition-colors ${
                plan.destacado
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "border border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              elegir plan
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
