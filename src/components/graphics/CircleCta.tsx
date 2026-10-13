import type { ReactNode } from "react";

/**
 * Botón circular con texto que gira alrededor (como el "View Details" de
 * ayana.com). Es solo visual: el enlace lo pone quien lo usa — se renderiza
 * como <span> para poder ir DENTRO de un <Link>/<a> sin anidar enlaces. El
 * texto se repite para llenar el perímetro; con `textLength` el navegador
 * reparte el espaciado y el círculo siempre cierra parejo. Al pasar el mouse
 * por el grupo padre (clase `group`) el círculo se rellena y la flecha sube.
 */
export default function CircleCta({
  label,
  size = 112,
  tone = "light",
  className = "",
  children,
}: {
  label: string;
  size?: number;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const unit = `${label.toUpperCase()} · `;
  const circumference = 2 * Math.PI * 44;
  const reps = Math.max(2, Math.round(circumference / (unit.length * 6.6)));
  const text = unit.repeat(reps);
  const color = tone === "light" ? "text-cloud" : "text-forest";
  const fill = tone === "light" ? "group-hover:bg-forest-dark/85" : "group-hover:bg-forest/10";

  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-500 ${color} ${fill} ${
        tone === "light" ? "border-cloud/70 bg-forest-dark/60 shadow-lg shadow-black/20" : "border-forest/30"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="animate-circle-text absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id="circle-cta-path" d="M50 50 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
        </defs>
        <text fontSize="8.8" fontWeight="500" letterSpacing="0.14em" fill="currentColor" style={{ fontFamily: "var(--font-sans)" }}>
          <textPath href="#circle-cta-path" textLength={circumference - 2} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span aria-hidden className="relative text-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
        {children ?? "↗"}
      </span>
    </span>
  );
}
