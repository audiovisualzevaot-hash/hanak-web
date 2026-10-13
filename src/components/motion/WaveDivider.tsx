"use client";

import type { CSSProperties } from "react";
import { useViewState } from "./useViewState";

export type WaveVariant = "arc" | "wave" | "clouds" | "hills" | "scoop" | "mist";

interface WaveDividerProps {
  variant: WaveVariant;
  /** Color del bloque DUEÑO del borde (ej. "var(--hanak-cloud)"). */
  fill: string;
  /** Solo "hills": color de la capa trasera (por defecto el mismo `fill`, algo más tenue). Un tono distinto da profundidad cuando fill y el bloque vecino casi no contrastan. */
  backFill?: string;
  /**
   * top: el borde cuelga HACIA ARRIBA, sobre el final del bloque anterior
   * (el color del bloque sube y lo tapa con una curva).
   * bottom: el borde cuelga HACIA ABAJO, sobre el comienzo del bloque siguiente.
   * inside: va DENTRO del bloque, pegado a su base (para la neblina, que no
   * invade al vecino).
   * El bloque dueño debe ser `relative` y tener z-index mayor que su vecino.
   */
  edge?: "top" | "bottom" | "inside";
  className?: string;
}

const EASE = "cubic-bezier(0.22,1,0.36,1)";

// Una sinusoide de periodo 720 repetida 4 veces (ancho 2880 = 2 pantallas de
// 1440): al desplazarla -50% se recorren exactamente 2 periodos, así el bucle
// no tiene salto.
const WAVE_PATH =
  "M0 60 Q180 0 360 60 T720 60 T1080 60 T1440 60 T1800 60 T2160 60 T2520 60 T2880 60 V120 H0 Z";
// Festón de nubes: bultos de ancho y alto distintos para que no parezca un patrón mecánico.
const CLOUD_PATH = (() => {
  const widths = [200, 160, 240, 180, 220, 150, 180, 110];
  const heights = [52, 38, 64, 44, 58, 36, 50, 30];
  let x = 0;
  let d = "M0 120 V74";
  widths.forEach((w, i) => {
    const h = heights[i];
    d += ` C${x + w * 0.04} ${74 - h * 1.35} ${x + w * 0.96} ${74 - h * 1.35} ${x + w} 74`;
    x += w;
  });
  return `${d} V120 Z`;
})();

const PATHS = {
  arc: "M0 120 V98 C360 -14 1080 -14 1440 98 V120 Z",
  scoop: "M0 0 C360 124 1080 124 1440 0 V120 H0 Z",
  hillsBack:
    "M0 120 V70 C140 28 260 18 400 54 S640 92 800 46 S1100 4 1250 40 S1400 62 1440 50 V120 Z",
  hillsFront: "M0 120 V94 C180 58 330 50 500 80 S850 102 1000 70 S1300 44 1440 82 V120 Z",
};

/**
 * Borde curvo entre dos bloques, en lugar del corte recto. Cada variante
 * tiene forma Y movimiento propios, para que ninguna transición se repita
 * (pedido de Bryan: "variado, que no se sienta monótono"):
 *   arc    → arco convexo que sube con el scroll
 *   wave   → onda en S que ondula sin parar, en dos capas a distinta velocidad
 *   clouds → festón de nubes con una capa trasera que se mece
 *   hills  → cerros en dos capas que suben a velocidades distintas
 *   scoop  → "cuchara" cóncava (la de ayana) que se cierra al entrar
 *   mist   → neblina suave que sube desde abajo
 *
 * La forma se dibuja siempre con el color del bloque dueño del borde, así
 * funciona igual sobre una foto (que no tiene un color sólido que imitar).
 * Decorativo: aria-hidden y sin eventos de puntero.
 */
export default function WaveDivider({ variant, fill, backFill, edge = "top", className = "" }: WaveDividerProps) {
  const { ref, state, reduce } = useViewState<HTMLDivElement>({ margin: "0px 0px 0px 0px" });
  const flip = edge === "bottom";
  const shown = state === "in";
  // Dirección del "entra desde": el borde top sube desde abajo (+), el bottom baja desde arriba (-).
  const dir = flip ? -1 : 1;

  const transition = (ms: number, delay = 0): CSSProperties => ({
    transitionProperty: reduce ? "none" : "transform, opacity",
    transitionDuration: `${ms}ms`,
    transitionTimingFunction: EASE,
    transitionDelay: shown ? `${delay}ms` : "0ms",
  });

  const box: CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    height: "clamp(44px, 8vw, 128px)",
    pointerEvents: "none",
    overflow: "hidden",
    ...(edge === "inside" ? { bottom: 0 } : flip ? { top: "calc(100% - 1px)" } : { bottom: "calc(100% - 1px)" }),
  };

  const svgBase = (extra: CSSProperties = {}): CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    display: "block",
    ...(flip ? { transform: `scaleY(-1) ${extra.transform ?? ""}` } : {}),
    ...extra,
  });

  // Capas que suben/bajan al entrar: se aplican en un <g>-wrapper vía div para no pelear con el flip del svg.
  const layerStyle = (ms: number, delay: number, from: number): CSSProperties => ({
    position: "absolute",
    inset: 0,
    transform: shown ? "translateY(0)" : `translateY(${dir * from}%)`,
    opacity: shown ? 1 : 0,
    ...transition(ms, delay),
  });

  const flipStyle: CSSProperties = flip ? { transform: "scaleY(-1)" } : {};

  return (
    <div ref={ref} aria-hidden className={className} style={box}>
      {variant === "arc" && (
        <div style={layerStyle(1400, 0, 70)}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ ...svgBase(), ...flipStyle }}>
            <path d={PATHS.arc} fill={fill} />
          </svg>
        </div>
      )}

      {variant === "scoop" && (
        <div style={layerStyle(1400, 0, 60)}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ ...svgBase(), ...flipStyle }}>
            <path d={PATHS.scoop} fill={fill} />
          </svg>
        </div>
      )}

      {variant === "wave" && (
        <div style={layerStyle(1200, 0, 50)}>
          <div style={{ position: "absolute", inset: 0, ...flipStyle }}>
            <svg
              viewBox="0 0 2880 120"
              preserveAspectRatio="none"
              className="animate-wave-drift-slow absolute top-0 left-0 h-full"
              style={{ width: "200%", opacity: 0.45 }}
            >
              <path d={WAVE_PATH} fill={fill} transform="translate(360 0)" />
            </svg>
            <svg
              viewBox="0 0 2880 120"
              preserveAspectRatio="none"
              className="animate-wave-drift absolute top-0 left-0 h-full"
              style={{ width: "200%" }}
            >
              <path d={WAVE_PATH} fill={fill} />
            </svg>
          </div>
        </div>
      )}

      {variant === "clouds" && (
        <>
          <div style={layerStyle(1500, 0, 60)}>
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="animate-cloud-bob"
              style={{ ...svgBase(), ...flipStyle, opacity: 0.5 }}
            >
              <path d={CLOUD_PATH} fill={fill} transform="translate(-90 6)" />
            </svg>
          </div>
          <div style={layerStyle(1200, 140, 40)}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ ...svgBase(), ...flipStyle }}>
              <path d={CLOUD_PATH} fill={fill} />
            </svg>
          </div>
        </>
      )}

      {variant === "hills" && (
        <>
          <div style={layerStyle(1700, 0, 90)}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ ...svgBase(), ...flipStyle, opacity: backFill ? 1 : 0.5 }}>
              <path d={PATHS.hillsBack} fill={backFill ?? fill} />
            </svg>
          </div>
          <div style={layerStyle(1200, 160, 55)}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ ...svgBase(), ...flipStyle }}>
              <path d={PATHS.hillsFront} fill={fill} />
            </svg>
          </div>
        </>
      )}

      {variant === "mist" && (
        <div style={layerStyle(1800, 0, 40)}>
          <div
            className="animate-mist-drift absolute inset-x-[-10%] bottom-0 h-full"
            style={{
              background: `radial-gradient(60% 90% at 20% 100%, ${fill}, transparent 70%), radial-gradient(55% 80% at 70% 110%, ${fill}, transparent 70%), radial-gradient(40% 70% at 95% 100%, ${fill}, transparent 70%)`,
              filter: "blur(10px)",
              ...(flip ? { transform: "scaleY(-1)" } : {}),
            }}
          />
        </div>
      )}
    </div>
  );
}
