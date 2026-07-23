import { useRef } from "react";
import { motion } from "framer-motion";
import ParallaxGhost from "./ParallaxGhost";

const regiones = [
  {
    nombre: "Región de Valparaíso",
    horario: "lun-vie 06:00–23:00 · sáb-dom 09:00–18:00",
    sedes: [
      { nombre: "Viña del Mar · Recreo", nota: "abre 06:30" },
      { nombre: "Valparaíso" },
      { nombre: "Quillota" },
      { nombre: "Quilpué" },
    ],
  },
  {
    nombre: "Región de O'Higgins",
    horario: "lun-vie 06:00–23:00 · sáb-dom 09:00–20:00",
    sedes: [
      { nombre: "Rancagua" },
      { nombre: "Rancagua · Outlet", nota: "todos los días 10:00–20:00" },
    ],
  },
];

export default function Sedes() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="sedes"
      className="relative overflow-hidden bg-white px-6 py-24 text-black md:px-10 md:py-32"
    >
      <ParallaxGhost
        number="02"
        target={sectionRef}
        className="right-4 top-4 text-[22vw] text-black/[0.04] md:right-8 md:top-8 md:text-[16vw]"
      />

      <motion.div
        className="relative mb-12 max-w-xl md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-black/50">
          presencia en dos regiones
        </span>
        <h2 className="hero-title mt-3 text-4xl font-medium md:text-6xl">
          una sede cerca de ti
        </h2>
        <p className="mt-4 text-black/60">
          6 sedes activas entre la Región de Valparaíso y la Región de
          O'Higgins, con acceso multisede incluido en todos los planes.
        </p>
      </motion.div>

      <div className="relative grid gap-12 md:grid-cols-2">
        {regiones.map((region, ri) => (
          <motion.div
            key={region.nombre}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: ri * 0.1 }}
          >
            <div className="flex items-baseline justify-between border-b border-black/15 pb-3">
              <h3 className="text-lg font-medium uppercase tracking-tight">
                {region.nombre}
              </h3>
              <span className="font-mono text-xs text-black/50">
                {region.horario}
              </span>
            </div>
            <div className="flex flex-col">
              {region.sedes.map((sede) => (
                <div
                  key={sede.nombre}
                  className="flex items-center justify-between border-b border-black/10 py-4"
                >
                  <span className="text-base font-medium">{sede.nombre}</span>
                  {sede.nota && (
                    <span className="font-mono text-xs text-black/50">
                      {sede.nota}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
