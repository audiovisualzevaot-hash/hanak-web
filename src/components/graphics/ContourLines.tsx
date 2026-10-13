"use client";

import { useViewState } from "../motion/useViewState";

// Curvas de nivel generadas una sola vez (deterministas — sin Math.random,
// así el HTML del servidor y el del cliente coinciden): anillos concéntricos
// cuyo radio se deforma con unas pocas ondas, como las líneas topográficas de
// un cerro. Cada anillo se deforma un poco distinto para que no sean círculos.
const W = 1000;
const H = 800;
const RINGS = 10;

function ring(i: number): string {
  const n = 96;
  const base = 36 + i * 40;
  const pts: string[] = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    const wob =
      1 +
      0.1 * Math.sin(a * 2 + i * 0.55) +
      0.06 * Math.sin(a * 3 - i * 0.9) +
      0.03 * Math.sin(a * 5 + i * 1.7);
    const r = base * wob;
    const x = W * 0.58 + Math.cos(a) * r * 1.35;
    const y = H * 0.5 + Math.sin(a) * r * 0.95;
    pts.push(`${k === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `${pts.join(" ")} Z`;
}
const PATHS = Array.from({ length: RINGS }, (_, i) => ring(i));

/**
 * Curvas de nivel topográficas de fondo: se dibujan solas, anillo por anillo
 * del centro hacia afuera, cuando el bloque entra en pantalla, y se
 * "recogen" al salir. Encajan con Hanak, que vive sobre cerros. Color y
 * opacidad vienen del className (usa currentColor).
 */
export default function ContourLines({ className = "" }: { className?: string }) {
  const { ref, state, reduce } = useViewState<SVGSVGElement>({ margin: "0px 0px 0px 0px" });
  const shown = state === "in";
  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
    >
      {PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: shown ? 0 : 1,
            transition: reduce ? "none" : `stroke-dashoffset ${shown ? 2600 : 900}ms cubic-bezier(0.4,0,0.2,1) ${shown ? i * 130 : 0}ms`,
          }}
        />
      ))}
    </svg>
  );
}
