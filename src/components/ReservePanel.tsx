"use client";

import { useState } from "react";
import { useReserve } from "./ReserveContext";

type Status = "idle" | "submitting" | "success" | "error";

export default function ReservePanel() {
  const { isOpen, close } = useReserve();
  const [status, setStatus] = useState<Status>("idle");
  const [continuar, setContinuar] = useState<"videollamada" | "visita" | "whatsapp">(
    "videollamada"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      contacto: (form.elements.namedItem("contacto") as HTMLInputElement).value,
      continuar,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  // Bryan pidió que esto deje de ser un modal centrado con fondo gris y pase
  // a ser un panel que se desliza desde el borde derecho, cubriendo solo una
  // franja de la pantalla (ancho fijo en desktop, pantalla completa en
  // mobile por falta de espacio). Se mantiene siempre montado — nunca
  // "if (!isOpen) return null" — y se anima vía transform/opacity, igual
  // criterio que el popup del Masterplan: así la salida también se ve
  // deslizarse en vez de desaparecer de golpe.
  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Capa de click-afuera-cierra — casi transparente a propósito, nunca
          el fondo gris pesado de antes. Da una leve sensación de panel
          activo sin tapar el resto de la pantalla. */}
      <div className="absolute inset-0 bg-charcoal/10" onClick={close} />

      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[440px] bg-cloud shadow-2xl overflow-y-auto p-6 sm:p-8 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between mb-1">
          <h2 className="font-display text-2xl text-forest">Agenda tu cita</h2>
          <button
            onClick={close}
            aria-label="Cerrar"
            className="text-charcoal/50 hover:text-charcoal text-xl leading-none px-2"
          >
            ×
          </button>
        </div>
        <p className="text-sm text-charcoal/60 mb-6">
          Sin compromiso — un asesor te acompaña en todo el proceso.
        </p>

        {status === "success" ? (
          <div className="py-8 text-center">
            <p className="font-display text-lg text-forest mb-2">¡Listo!</p>
            <p className="text-sm text-charcoal/70">
              Un asesor de HANAK se pondrá en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: "videollamada", label: "Videollamada" },
                  { id: "visita", label: "Visita guiada" },
                  { id: "whatsapp", label: "WhatsApp" },
                ] as const
              ).map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setContinuar(opt.id)}
                  className={`text-xs py-2 px-2 rounded-full border transition ${
                    continuar === opt.id
                      ? "bg-forest text-white border-forest"
                      : "border-charcoal/20 text-charcoal/70 hover:border-forest"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <input
              name="nombre"
              required
              placeholder="Nombre completo"
              className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest"
            />
            <input
              name="contacto"
              required
              placeholder="Teléfono / WhatsApp"
              className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-forest text-white rounded-full py-3 text-sm font-medium tracking-wide hover:bg-forest-dark transition disabled:opacity-60"
            >
              {status === "submitting" ? "Enviando..." : "Quiero que me contacten"}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-600">
                Algo falló al enviar. Intenta nuevamente o escríbenos por WhatsApp.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
