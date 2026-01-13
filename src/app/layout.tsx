import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Stylernow | El Sistema Operativo para Barberías Modernas",
    template: "%s | Stylernow"
  },
  description: "Organiza tu agenda, automatiza confirmaciones por WhatsApp y controla tu caja con precisión. La herramienta premium para barberos que valoran su tiempo.",
  keywords: ["software barbería", "agenda barberos", "app barbería colombia", "sistema caja barbería", "crm barbería"],
  authors: [{ name: "Stylernow Team" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://stylernow.com",
    title: "Stylernow | Gestión Premium para Barberos",
    description: "Deja de perder dinero y tiempo con agendas de papel. Pásate al estándar digital de Stylernow.",
    siteName: "Stylernow",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Stylernow Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylernow | Software Barbería",
    description: "Gestión inteligente para tu barbería. Solicita acceso anticipado.",
    images: ["/images/hero-main.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-black text-white selection:bg-orange-400/30 selection:text-orange-400`}>
        {children}
      </body>
    </html>
  );
}
