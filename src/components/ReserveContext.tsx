"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ReserveContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ReserveContext = createContext<ReserveContextType | null>(null);

export function ReserveProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Permite abrir el panel desde componentes sin acceso directo al contexto
  // (ej. el modal del Masterplan) disparando este evento en window.
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("hanak:open-reserve", handler);
    return () => window.removeEventListener("hanak:open-reserve", handler);
  }, []);

  return (
    <ReserveContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
}

export function useReserve() {
  const ctx = useContext(ReserveContext);
  if (!ctx) throw new Error("useReserve debe usarse dentro de ReserveProvider");
  return ctx;
}
