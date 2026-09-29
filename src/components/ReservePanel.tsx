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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-charcoal/50 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="w-full sm:max-w-md bg-cloud rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
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
