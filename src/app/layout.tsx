import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Stylernow | Software para Barberías Cali - Agenda y Caja",
  description: "Organiza tus citas, confirma asistencias por WhatsApp y cuadra tu caja con Stylernow. Diseñado en Cali para barberos serios que buscan el siguiente nivel.",
  keywords: ["Software barbería Cali", "Agenda barbería", "Caja para barberos", "Stylernow", "Cali Colombia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
