"use client";

import type { CSSProperties, ElementType } from "react";
import { useViewState } from "./useViewState";

type Mode = "mask" | "blur";

interface SplitTextProps {
  /** Texto plano — se parte por palabras. */
  text: string;
  /** Etiqueta a renderizar (h2, p, span…). */
  as?: ElementType;
  className?: string;
  /** mask: cada palabra sube desde una máscara (titulares). blur: cada palabra pasa de borrosa a nítida (párrafos). */
  mode?: Mode;
  delayMs?: number;
  /** Retraso entre una palabra y la siguiente. */
  staggerMs?: number;
}

const EASE = "cubic-bezier(0.16,1,0.3,1)";

/**
 * Texto que entra palabra por palabra al aparecer en pantalla y se retira al
 * salir — la versión "titular" (mask) levanta cada palabra desde una
 * máscara, la versión "párrafo" (blur) la enfoca. Ligado al scroll y
 * reversible, igual que ScrollReveal.
 *
 * Accesibilidad: la etiqueta lleva el texto completo en aria-label y las
 * palabras sueltas van en aria-hidden, así un lector de pantalla lee la
 * frase una sola vez y de corrido.
 *
 * La máscara deja un poco de margen en el borde inferior y los costados
 * (padding negativo compensado) para que no recorte las colas de letras como
 * la "g" de la tipografía de display ni las cursivas.
 */
export default function SplitText({
  text,
  as: Tag = "p",
  className = "",
  mode = "mask",
  delayMs = 0,
  staggerMs = mode === "mask" ? 70 : 28,
}: SplitTextProps) {
  const { ref, state, reduce } = useViewState<HTMLElement>();
  const words = text.split(" ");
  const shown = state === "in";
  const out = state === "post";

  const wordStyle = (i: number): CSSProperties => {
    const base: CSSProperties = {
      display: "inline-block",
      transitionProperty: reduce ? "none" : "transform, opacity, filter",
      transitionTimingFunction: EASE,
      transitionDuration: shown ? (mode === "mask" ? "1000ms" : "800ms") : "450ms",
      transitionDelay: shown ? `${delayMs + i * staggerMs}ms` : "0ms",
    };
    if (shown) return { ...base, transform: "none", opacity: 1, filter: "none" };
    if (mode === "mask") return { ...base, transform: out ? "translateY(-105%)" : "translateY(105%)", opacity: 1 };
    return { ...base, opacity: 0, filter: "blur(8px)", transform: `translateY(${out ? -6 : 10}px)` };
  };

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden style={{ display: "inline" }}>
          {mode === "mask" ? (
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "top",
                paddingBottom: "0.16em",
                marginBottom: "-0.16em",
                paddingInline: "0.06em",
                marginInline: "-0.06em",
              }}
            >
              <span style={wordStyle(i)}>{w}</span>
            </span>
          ) : (
            <span style={wordStyle(i)}>{w}</span>
          )}
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
