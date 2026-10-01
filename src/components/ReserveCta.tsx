"use client";

import { useReserve } from "./ReserveContext";

/**
 * Botón de agenda reutilizable — sembrado en varios puntos de cada página
 * (pedido explícito de Bryan: "muy aparte de lo que ya esta... que en
 * algunas partes se coloquen botones de acción a que agenden una llamada,
 * una cita"). Reusa el mismo mecanismo que ya abre el panel del Header y el
 * popup del Masterplan — useReserve().open() — nunca un nuevo modal.
 *
 * Dos variantes, calcadas de los botones que YA existen en el sitio (no se
 * inventa un estilo nuevo, Bryan pidió "acorde a la línea gráfica"):
 * - "dark": el botón "vidrio" del Header cuando está transparente sobre una
 *   foto/fondo oscuro (bg-white/10, borde blanco).
 * - "light": el botón sólido forest-dark del Header cuando ya tiene fondo
 *   sólido, el mismo que usa "Conocer disponibilidad" en el Masterplan.
 */
export default function ReserveCta({
  label,
  variant = "light",
  className = "",
}: {
  label: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const { open } = useReserve();
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] rounded-full px-6 py-3 transition-colors ${
        variant === "dark"
          ? "bg-white/10 text-white border border-white/40 hover:bg-white/20"
          : "bg-forest-dark text-white hover:bg-forest"
      } ${className}`}
    >
      {label}
      <span aria-hidden>↗</span>
    </button>
  );
}
