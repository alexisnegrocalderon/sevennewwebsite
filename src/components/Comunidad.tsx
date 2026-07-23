import { motion } from "framer-motion";

const profesionales = [
  { area: "Nutrición", detalle: "evaluación inicial gratis para socios · sesión de pago $33.990" },
  { area: "Psicología deportiva", detalle: "sesión gratuita para socios · sesión de pago $29.990" },
  { area: "Entrenadores en piso", detalle: "orientación de máquinas y técnica en cada sede" },
];

const alianzas = ["Red Bull", "Santiago Wanderers", "Pro Karting", "ProRiders Surf", "@gimnasioseven"];

export default function Comunidad() {
  return (
    <section id="comunidad" className="bg-white text-black">
      <div className="grid gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-black/50">
            quiénes somos
          </span>
          <h2 className="hero-title mt-3 text-4xl font-medium md:text-6xl">
            más que un gimnasio
          </h2>
          <p className="mt-5 max-w-md text-black/70">
            fundado en 2021 en viña del mar, seven creció hasta convertirse en
            referente fitness regional. zonas exteriores para calistenia,
            salas interiores con máquinas y pesas de calidad, y un equipo de
            profesionales que acompaña cada meta.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {profesionales.map((p) => (
              <div key={p.area} className="border-t border-black/15 pt-3">
                <p className="text-sm font-bold uppercase tracking-wide">
                  {p.area}
                </p>
                <p className="text-sm text-black/60">{p.detalle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div>
            <div className="text-lg tracking-widest">★★★★★</div>
            <blockquote className="hero-title mt-4 max-w-sm text-3xl font-medium md:text-4xl">
              "realmente es el mejor ambiente para entrenar."
            </blockquote>
            <p className="mt-4 text-sm text-black/60">
              4.8 / 5 en Google Reviews — comunidad Seven
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {alianzas.map((a) => (
              <span
                key={a}
                className="border border-black/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-black/60"
              >
                {a}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-start gap-6 bg-black px-6 py-24 text-white md:px-10 md:py-32"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="hero-title text-4xl font-medium md:text-6xl">
          tu mejor versión empieza hoy
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="#planes"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-neutral-200"
          >
            agenda tu evaluación
          </a>
          <a
            href="#sedes"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white"
          >
            encuentra tu sede
          </a>
        </div>
      </motion.div>
    </section>
  );
}
