"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Clases del contenedor (debe darle tamaño/posición, ej. "absolute inset-0"). */
  className?: string;
  /** Cuántos px se mueve el contenido hacia arriba/abajo a lo largo del recorrido. */
  strength?: number;
}

/**
 * El contenido se mueve más lento que el scroll (parallax) dentro de un
 * marco fijo. Como no se permite scale() (regla de Bryan), el contenido
 * interno es `strength` px más alto por arriba y por abajo que el marco, y
 * es ese margen el que se recorre — así nunca se ve un hueco.
 *
 * Se actualiza escribiendo el transform directo en el DOM (sin estado de
 * React) y solo mientras el marco está en pantalla, para no costar nada
 * fuera de ella. En pantallas chicas el recorrido se reduce a la mitad.
 * Con prefers-reduced-motion queda quieto.
 */
export default function Parallax({ children, className = "", strength = 60 }: ParallaxProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      const amp = window.innerWidth < 640 ? strength / 2 : strength;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 cuando el marco apenas asoma por abajo, 1 cuando ya salió por arriba
      const p = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.min(Math.max(p, 0), 1);
      const y = (clamped - 0.5) * 2 * amp;
      inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!active || raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        active = e.isIntersecting;
        if (active) update();
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    io.observe(frame);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: -strength, bottom: -strength }}
      >
        {children}
      </div>
    </div>
  );
}
