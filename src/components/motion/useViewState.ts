"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Estado de un elemento respecto de la pantalla, para animar ENTRADA y
 * SALIDA según el scroll (pedido de Bryan, como ayana.com):
 *   "pre"  → todavía no llegó (está más abajo de la pantalla)
 *   "in"   → está en la franja visible
 *   "post" → ya pasó (salió por arriba)
 * Al volver a subir, un elemento "post" pasa otra vez a "in" y luego a
 * "pre": la animación se revierte, no es de una sola vez.
 *
 * La franja visible se recorta 10% arriba y 10% abajo (rootMargin) para
 * que la entrada ocurra con el elemento ya claramente dentro de la pantalla
 * y la salida empiece antes de que desaparezca del todo, en vez de justo en
 * el borde. Con threshold 0, un elemento más alto que la pantalla también
 * cuenta como "in" mientras cruce la franja.
 */
export type ViewState = "pre" | "in" | "post";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useViewState<T extends Element>(options?: { margin?: string }) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<ViewState>("pre");
  const margin = options?.margin ?? "-10% 0px -10% 0px";
  // Con reduced-motion el contenido se queda siempre en su estado final.
  const [reduce, setReduce] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
        } else {
          const above = entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
          setState(above ? "post" : "pre");
        }
      },
      { rootMargin: margin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce, margin]);

  return { ref, state: reduce ? ("in" as ViewState) : state, reduce };
}
