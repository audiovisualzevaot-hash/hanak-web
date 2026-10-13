"use client";

import type { CSSProperties, ReactNode } from "react";
import { useViewState } from "./motion/useViewState";

export type RevealVariant = "rise" | "fade" | "blur" | "left" | "right" | "track";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Cómo entra: sube (rise), solo fundido (fade), de borroso a nítido (blur), desde un costado (left/right), o con el espaciado de letras cerrándose (track). */
  variant?: RevealVariant;
  /** Retraso en ms antes de animar — para escalonar varios elementos del mismo bloque. */
  delayMs?: number;
  /** Desplazamiento en px (rise/left/right). */
  y?: number;
  durationMs?: number;
  /** false = solo anima la entrada; true (default) = también anima la salida al pasar de largo. */
  exit?: boolean;
  /** Solo variant="track": el espaciado de letras final (el wrapper lo fija inline, así que NO ponerlo también como clase tracking-*). */
  tracking?: string;
}

const EASE = "cubic-bezier(0.16,1,0.3,1)";

/**
 * Revela su contenido cuando entra en pantalla y lo retira al salir — todo
 * ligado al scroll y reversible (si subes, vuelve a entrar). Pedido de
 * Bryan: "todos los textos deben tener animación de entrada y salida de
 * acuerdo al scroll", como ayana.com.
 *
 * Seis variantes (ver RevealVariant) para que no se sienta monótono: cada
 * bloque usa una distinta. Solo opacity/transform/filter/letter-spacing,
 * nunca scale() (regla de Bryan: el único zoom prohibido es el scale()).
 *
 * Expone data-state="pre|in|post" en el wrapper — el CSS lo usa para cosas
 * como el subrayado que se dibuja (.draw-underline en globals.css).
 *
 * OJO al envolver elementos con posición absoluta: el transform de este
 * wrapper lo convierte en contenedor de posicionamiento para hijos
 * "absolute". Si el contenido depende de un ancestro MÁS ARRIBA, hay que
 * mover las clases de posición/tamaño al propio <ScrollReveal className>.
 */
export default function ScrollReveal({
  children,
  className = "",
  variant = "rise",
  delayMs = 0,
  y = 28,
  durationMs = 900,
  exit = true,
  tracking = "0.2em",
}: ScrollRevealProps) {
  const { ref, state, reduce } = useViewState<HTMLDivElement>();
  const shown = state === "in" || (!exit && state === "post");

  const hidden: CSSProperties = (() => {
    const out = state === "post" && exit;
    switch (variant) {
      case "fade":
        return { opacity: 0 };
      case "blur":
        return { opacity: 0, filter: "blur(10px)", transform: `translateY(${out ? -y / 2 : y / 2}px)` };
      case "left":
        return { opacity: 0, transform: `translateX(${out ? y : -y * 2}px)` };
      case "right":
        return { opacity: 0, transform: `translateX(${out ? -y : y * 2}px)` };
      case "track":
        return { opacity: 0, letterSpacing: "0.5em" };
      default:
        return { opacity: 0, transform: `translateY(${out ? -y / 2 : y}px)` };
    }
  })();

  const visible: CSSProperties = {
    opacity: 1,
    transform: "none",
    filter: "none",
    ...(variant === "track" ? { letterSpacing: tracking } : {}),
  };

  const props = variant === "track" ? "opacity, letter-spacing" : "opacity, transform, filter";

  return (
    <div
      ref={ref}
      className={className}
      data-state={state}
      style={{
        ...(shown ? visible : hidden),
        transitionProperty: reduce ? "none" : props,
        // La salida es más corta que la entrada: se va rápido, llega despacio.
        transitionDuration: `${shown ? durationMs : Math.round(durationMs * 0.55)}ms`,
        transitionTimingFunction: EASE,
        transitionDelay: shown ? `${delayMs}ms` : "0ms",
        willChange: reduce ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
