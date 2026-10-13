"use client";

import { useViewState } from "../motion/useViewState";

// Rama de selva en trazo fino: un tallo curvo con hojas a ambos lados. Las
// posiciones de las hojas se calculan sobre la propia curva (Bézier) en vez
// de ponerse a mano, así quedan bien repartidas y orientadas según la
// tangente del tallo.
const P = [
  [20, 380],
  [60, 270],
  [110, 170],
  [210, 30],
] as const;

function bez(t: number) {
  const u = 1 - t;
  const x = u * u * u * P[0][0] + 3 * u * u * t * P[1][0] + 3 * u * t * t * P[2][0] + t * t * t * P[3][0];
  const y = u * u * u * P[0][1] + 3 * u * u * t * P[1][1] + 3 * u * t * t * P[2][1] + t * t * t * P[3][1];
  const dx = 3 * u * u * (P[1][0] - P[0][0]) + 6 * u * t * (P[2][0] - P[1][0]) + 3 * t * t * (P[3][0] - P[2][0]);
  const dy = 3 * u * u * (P[1][1] - P[0][1]) + 6 * u * t * (P[2][1] - P[1][1]) + 3 * t * t * (P[3][1] - P[2][1]);
  return { x, y, ang: (Math.atan2(dy, dx) * 180) / Math.PI };
}

const LEAVES = [0.14, 0.26, 0.38, 0.5, 0.62, 0.74, 0.86].flatMap((t, i) => {
  const { x, y, ang } = bez(t);
  const s = 1.15 - t * 0.55; // las hojas se achican hacia la punta
  return [
    { x, y, rot: ang - 58, s, i },
    { x, y, rot: ang + 58, s: s * 0.92, i: i + 0.5 },
  ];
});

const LEAF = "M0 0 C14 -22 44 -24 64 -6 C46 14 16 18 0 0 Z";
const RIB = "M0 0 L56 -6";

/**
 * Rama monolínea que se dibuja sola: primero el tallo y luego las hojas una
 * a una. Se activa por scroll (entrada/salida) o, si se pasa `progress`
 * (0-1), sigue ese valor — útil dentro de las secciones fijas (pin) donde ya
 * existe un progreso de scroll propio. `flip` la espeja para el lado derecho.
 */
export default function LeafLines({
  className = "",
  progress,
  flip = false,
}: {
  className?: string;
  progress?: number;
  flip?: boolean;
}) {
  const { ref, state, reduce } = useViewState<SVGSVGElement>({ margin: "0px 0px 0px 0px" });
  const driven = typeof progress === "number";
  const shown = state === "in";
  const t = driven ? Math.min(Math.max(progress!, 0), 1) : shown ? 1 : 0;
  const trans = (ms: number, delay: number) =>
    reduce || driven ? "none" : `stroke-dashoffset ${ms}ms cubic-bezier(0.4,0,0.2,1) ${shown ? delay : 0}ms`;

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 260 400"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d={`M${P[0][0]} ${P[0][1]} C${P[1][0]} ${P[1][1]} ${P[2][0]} ${P[2][1]} ${P[3][0]} ${P[3][1]}`}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        style={{ strokeDasharray: 1, strokeDashoffset: 1 - Math.min(1, t * 1.6), transition: trans(1800, 0) }}
      />
      {LEAVES.map((l, idx) => {
        // en modo "progress" las hojas aparecen escalonadas entre 25% y 100% del progreso
        const local = driven ? Math.min(Math.max((t - 0.25 - idx * 0.045) / 0.25, 0), 1) : t;
        return (
          <g key={idx} transform={`translate(${l.x.toFixed(1)} ${l.y.toFixed(1)}) rotate(${l.rot.toFixed(1)}) scale(${l.s.toFixed(2)})`}>
            <path
              d={LEAF}
              pathLength={1}
              vectorEffect="non-scaling-stroke"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 - local, transition: trans(1200, 700 + idx * 110) }}
            />
            <path
              d={RIB}
              pathLength={1}
              vectorEffect="non-scaling-stroke"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 - local, transition: trans(1200, 900 + idx * 110), opacity: 0.6 }}
            />
          </g>
        );
      })}
    </svg>
  );
}
