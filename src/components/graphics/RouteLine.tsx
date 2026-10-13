"use client";

import { useId } from "react";
import { useViewState } from "../motion/useViewState";

// Ruta Lima → Tarapoto → HANAK. La curva pasa exactamente por los tres nodos
// (los dos primeros son los extremos de los tramos C/S de la ruta).
const ROUTE = "M40 150 C120 150 160 60 260 80 S400 150 470 90 S540 40 570 50";
const NODES = [
  { x: 40, y: 150, label: "Lima", anchor: "start" as const, dx: -4, dy: 22 },
  { x: 260, y: 80, label: "Tarapoto", anchor: "middle" as const, dx: 0, dy: -14 },
  { x: 570, y: 50, label: "HANAK", anchor: "end" as const, dx: 4, dy: -14 },
];

/**
 * Ruta punteada que se traza de Lima a HANAK al entrar en pantalla (una
 * máscara que crece de izquierda a derecha destapa el punteado), con los
 * tres puntos apareciendo uno tras otro. Al salir se recoge. Va sobre foto,
 * por eso lleva una sombra suave para leerse. Nombres propios: no cambian de
 * idioma, así que no pasan por el diccionario.
 */
export default function RouteLine({ className = "" }: { className?: string }) {
  const { ref, state, reduce } = useViewState<SVGSVGElement>({ margin: "0px 0px 0px 0px" });
  const uid = useId().replace(/:/g, "");
  const shown = state === "in";
  const ease = "cubic-bezier(0.4,0,0.2,1)";

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 600 190"
      className={`pointer-events-none ${className}`}
      fill="none"
      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }}
    >
      <defs>
        <clipPath id={`route-${uid}`}>
          <rect
            x="0"
            y="0"
            width="600"
            height="190"
            style={{
              transformOrigin: "0 0",
              transform: `scaleX(${shown ? 1 : 0})`,
              transition: reduce ? "none" : `transform ${shown ? 2600 : 700}ms ${ease} ${shown ? 300 : 0}ms`,
            }}
          />
        </clipPath>
      </defs>
      <path d={ROUTE} stroke="#f3ead3" strokeWidth={2.2} strokeLinecap="round" strokeDasharray="1 9" clipPath={`url(#route-${uid})`} />
      {NODES.map((n, i) => (
        <g
          key={n.label}
          style={{
            opacity: shown ? 1 : 0,
            transition: reduce ? "none" : `opacity 600ms ease ${shown ? 500 + i * 900 : 0}ms`,
          }}
        >
          <circle cx={n.x} cy={n.y} r={i === 2 ? 7 : 5} fill="#f3ead3" />
          {i === 2 && <circle cx={n.x} cy={n.y} r={13} stroke="#f3ead3" strokeWidth={1.4} />}
          <text
            x={n.x + n.dx}
            y={n.y + n.dy}
            textAnchor={n.anchor}
            fill="#f3ead3"
            fontSize={15}
            letterSpacing="0.16em"
            style={{ textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
