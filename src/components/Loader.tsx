import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SevenWordmark from "./SevenWordmark";

const PLATES = [
  { size: "h-16 w-5", threshold: 8 },
  { size: "h-12 w-4", threshold: 32 },
  { size: "h-9 w-3.5", threshold: 56 },
  { size: "h-7 w-3", threshold: 80 },
];

const DURATION = 1900;

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
      return;
    }
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFlash(true), 150);
        setTimeout(onComplete, 150 + 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SevenWordmark className="scale-150" />
      </motion.div>

      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center gap-1.5">
          <div className="absolute -inset-x-10 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/15" />

          {PLATES.map((p, i) => (
            <motion.div
              key={`l-${i}`}
              className={`relative z-10 ${p.size} rounded-sm bg-white`}
              initial={{ opacity: 0, scaleY: 0.3 }}
              animate={
                progress >= p.threshold
                  ? { opacity: 1, scaleY: 1 }
                  : { opacity: 0, scaleY: 0.3 }
              }
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          ))}

          <div className="relative z-10 mx-2 h-1.5 w-16 rounded-full bg-white/25" />

          {[...PLATES].reverse().map((p, i) => (
            <motion.div
              key={`r-${i}`}
              className={`relative z-10 ${p.size} rounded-sm bg-white`}
              initial={{ opacity: 0, scaleY: 0.3 }}
              animate={
                progress >= p.threshold
                  ? { opacity: 1, scaleY: 1 }
                  : { opacity: 0, scaleY: 0.3 }
              }
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          ))}
        </div>

        <span className="font-mono text-sm text-white/60">
          {Math.round(progress)}%
        </span>
      </div>

      {flash && (
        <motion.div
          className="pointer-events-none fixed inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.35, times: [0, 0.4, 1], ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}
