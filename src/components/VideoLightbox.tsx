"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const noopSubscribe = () => () => {};
/** true solo tras hidratar en el cliente — evita el mismatch de SSR sin
 *  llamar a setState dentro de un efecto. */
function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

/**
 * Botón de "play" superpuesto a una foto de fondo (poster) que, al hacer
 * click, abre un reproductor en pantalla completa. Pensado para el hero de
 * Tarapoto: Bryan aclaró que esa foto en realidad es un video —
 * "cuando tu le das click se abre el reproductor" — pero el archivo de
 * video en alta calidad todavía no ha sido entregado. `videoSrc` queda
 * opcional: en cuanto Bryan envíe el .mp4, basta con pasar su ruta y el
 * reproductor queda funcionando sin tocar nada más.
 */
export default function VideoLightbox({
  videoSrc,
  poster,
  label = "Reproducir video",
  overlay = true,
  className = "",
}: {
  videoSrc?: string;
  poster?: string;
  label?: string;
  /** true (default): botón absoluto que cubre a su contenedor posicionado
   *  (uso típico: superpuesto a una foto de fondo). false: botón normal,
   *  del tamaño de su propio círculo, para insertarlo en el flujo del
   *  texto donde se necesite. */
  overlay?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className={
          overlay
            ? `group absolute inset-0 z-20 flex items-center justify-center w-full h-full cursor-pointer ${className}`
            : `group inline-flex cursor-pointer ${className}`
        }
      >
        <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/85 group-hover:bg-white group-hover:scale-105 flex items-center justify-center shadow-2xl transition-all duration-300">
          <svg width="22" height="22" viewBox="0 0 24 24" className="ml-1 fill-forest">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="sr-only">{label}</span>
      </button>

      {mounted && open &&
        createPortal(
          // Renderizado vía portal directo a <body>: el hero vive dentro de
          // un contenedor con z-index propio (el bloque de texto, z-10),
          // que crea su propio contexto de apilamiento. Sin el portal, este
          // overlay "fixed" quedaría atrapado dentro de ese contexto y el
          // header (fixed, z-50, fuera de ese contexto) se dibujaría por
          // encima del reproductor. El portal lo evita por completo.
          <div
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar video"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition"
            >
              ×
            </button>

            <div
              className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden bg-forest-dark shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {videoSrc ? (
                <video
                  src={videoSrc}
                  poster={poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center text-cloud px-8 gap-2">
                  <p className="font-display text-lg sm:text-xl">Video en producción</p>
                  <p className="text-sm text-cloud/60 max-w-xs">
                    Estamos preparando el video oficial de Tarapoto. Muy
                    pronto estará disponible aquí.
                  </p>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
