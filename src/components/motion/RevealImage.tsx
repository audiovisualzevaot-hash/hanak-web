"use client";

import type { CSSProperties, ReactNode } from "react";
import { useViewState } from "./useViewState";

export type ImageReveal = "arch" | "circle" | "wipe";

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  /**
   * arch: se abre desde un arco, como una ventana.
   * circle: se abre desde el centro con un círculo.
   * wipe: se destapa de arriba hacia abajo, como una cortina.
   */
  variant?: ImageReveal;
  delayMs?: number;
  /** Radio de las esquinas cuando ya está abierta (px). */
  radius?: number;
}

const EASE = "cubic-bezier(0.65,0,0.35,1)";

/**
 * Revela una imagen con una máscara (clip-path) al entrar en pantalla y la
 * cierra al salir — ligado al scroll y reversible. Tres formas distintas
 * (ver ImageReveal) para que las fotos del sitio no abran todas igual.
 *
 * Las máscaras de tipo inset() se animan bien porque origen y destino
 * tienen la misma estructura (inset + round); el círculo, igual entre
 * circle() y circle(). Nada de scale() (regla de Bryan).
 */
export default function RevealImage({
  children,
  className = "",
  variant = "arch",
  delayMs = 0,
  radius = 16,
}: RevealImageProps) {
  const { ref, state, reduce } = useViewState<HTMLDivElement>({ margin: "-6% 0px -6% 0px" });
  const r = `${radius}px`;

  const clip = (() => {
    if (state === "in") {
      return variant === "circle"
        ? "circle(80% at 50% 50%)"
        : `inset(0% 0% 0% 0% round ${r} ${r} ${r} ${r})`;
    }
    const post = state === "post";
    switch (variant) {
      case "circle":
        return "circle(0% at 50% 50%)";
      case "wipe":
        return post
          ? `inset(100% 0% 0% 0% round ${r} ${r} ${r} ${r})`
          : `inset(0% 0% 100% 0% round ${r} ${r} ${r} ${r})`;
      default:
        return post
          ? `inset(0% 26% 42% 26% round ${r} ${r} 999px 999px)`
          : `inset(42% 26% 0% 26% round 999px 999px ${r} ${r})`;
    }
  })();

  const style: CSSProperties = {
    clipPath: clip,
    WebkitClipPath: clip,
    transitionProperty: reduce ? "none" : "clip-path, -webkit-clip-path, opacity",
    transitionDuration: state === "in" ? "1300ms" : "700ms",
    transitionTimingFunction: EASE,
    transitionDelay: state === "in" ? `${delayMs}ms` : "0ms",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
