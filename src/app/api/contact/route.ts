import { NextResponse } from "next/server";

// Endpoint funcional del formulario de contacto/Reserve.
// TODO: conectar al CRM real de Grupo Zevaot cuando tengan la plataforma y
// credenciales definidas (webhook o API). Por ahora valida y registra el lead
// en el log del servidor para que el flujo esté completo de punta a punta.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, contacto, continuar } = body as {
      nombre?: string;
      contacto?: string;
      continuar?: string;
    };

    if (!nombre || !contacto) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Log temporal — reemplazar por la llamada al CRM.
    console.log("[HANAK][nuevo lead]", {
      nombre,
      contacto,
      continuar,
      fecha: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida" },
      { status: 400 }
    );
  }
}
