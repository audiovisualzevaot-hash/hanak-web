import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";

// Fuente de marca real (recibida de Bryan). Un solo peso (Regular) —
// se usa como fuente de display en tamaños grandes (H1/H2), nunca en texto
// corrido pequeño.
const gealova = localFont({
  src: "./fonts/Gealova.woff2",
  variable: "--font-gealova",
  weight: "400",
  style: "normal",
  display: "swap",
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservePanel from "@/components/ReservePanel";
import { ReserveProvider } from "@/components/ReserveContext";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "El primer Sky Resort de Latinoamérica. Casas de campo sobre las nubes, en Tarapoto, Perú.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={gealova.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ReserveProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ReservePanel />
        </ReserveProvider>
      </body>
    </html>
  );
}
