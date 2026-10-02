"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms antes de animar — para escalonar varios elementos del mismo bloque (cards, líneas de texto). */
  delayMs?: number;
  /** Desplazamiento inicial en px (sube desde abajo). */
  y?: number;
  durationMs?: number;
  /** Qué tan metido en pantalla debe estar el elemento antes de animar (0-1). */
  threshold?: number;
}

/**
 * Revela su contenido con un fundido + leve subida cuando entra en el
 * viewport — el mismo lenguaje visual que ya usan HeroSequence y
 * PriorizamosSelva (fundido/disolve, nunca escala), aplicado acá a bloques
 * que hoy aparecen de golpe al cargar (teaser "Llegar a Hanak", masterplan,
 * socios fundadores, novedades).
 *
 * A diferencia de esos dos componentes, acá no hace falta progreso continuo
 * ligado al scroll (no hay pin ni parallax) — solo "ya entró o no entró a
 * pantalla" — así que usa IntersectionObserver en vez de escuchar el scroll
 * a mano: más liviano, y no agrega ninguna dependencia nueva al proyecto.
 *
 * Respeta prefers-reduced-motion: si el visitante lo pidió a nivel sistema,
 * el contenido aparece directo, sin animar.
 *
 * OJO al envolver elementos con posición absoluta: el translateY de esta
 * animación convierte a su wrapper en contenedor de posicionamiento para
 * hijos "absolute" (lo hace cualquier elemento con transform ≠ none). Si el
 * contenido envuelto depende de posicionarse respecto de un ancestro MÁS
 * ARRIBA (no de este wrapper), hay que mover las clases de posición/tamaño
 * al propio <ScrollReveal className="..."> en vez de dejarlas en el hijo.
 */
export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  y = 24,
  durationMs = 700,
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Lazy initializer (no un setState dentro de un efecto) — evita el salto
  // de "aparece animado y después se corrige" si el visitante ya tenía
  // reduced-motion activado desde antes de montar.
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, threshold]);

  const shown = reduceMotion || visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${durationMs}ms cubic-bezier(0.16,1,0.3,1), transform ${durationMs}ms cubic-bezier(0.16,1,0.3,1)`,
        transitionDelay: shown ? `${delayMs}ms` : "0ms",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
