"use client";

import { useEffect, useRef, useState } from "react";
import { useViewState } from "../motion/useViewState";

/**
 * Número que sube de 0 al valor final cuando entra en pantalla (y vuelve a
 * contar si el visitante sale y regresa). Con reduced-motion muestra el
 * valor final directo. Pensado solo para cifras reales del proyecto.
 */
export default function CountUp({ to, durationMs = 1600, className = "" }: { to: number; durationMs?: number; className?: string }) {
  const { ref, state, reduce } = useViewState<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (reduce) return;
    if (state !== "in") {
      // al salir de pantalla se prepara para volver a contar desde 0
      raf.current = requestAnimationFrame(() => setVal(0));
      return () => cancelAnimationFrame(raf.current);
    }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [state, reduce, to, durationMs]);

  return (
    <span ref={ref} className={className} aria-label={String(to)}>
      <span aria-hidden>{reduce ? to : val}</span>
    </span>
  );
}
