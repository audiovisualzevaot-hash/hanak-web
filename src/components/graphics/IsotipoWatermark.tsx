"use client";

import Image from "next/image";
import { useViewState } from "../motion/useViewState";

/**
 * El isotipo de HANAK (mandala de 4 pétalos) en grande, casi invisible, como
 * marca de agua detrás de un bloque: aparece con un fundido al entrar en
 * pantalla, se desvanece al salir, y gira muy lento todo el tiempo.
 * Posición y tamaño vienen del className del contenedor; la opacidad final
 * del prop `opacity`.
 */
export default function IsotipoWatermark({
  className = "",
  size = 560,
  opacity = 0.07,
  tone = "sage",
}: {
  className?: string;
  size?: number;
  opacity?: number;
  tone?: "forest" | "cream" | "sage";
}) {
  const { ref, state, reduce } = useViewState<HTMLDivElement>({ margin: "0px 0px 0px 0px" });
  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        opacity: state === "in" ? opacity : 0,
        transition: reduce ? "none" : "opacity 2200ms ease",
      }}
    >
      <div className="animate-watermark-spin" style={{ width: size, height: size }}>
        <Image src={`/images/brand/isotipo-${tone}.png`} alt="" width={size} height={size} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
