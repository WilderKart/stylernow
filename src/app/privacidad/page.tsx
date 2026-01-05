import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <Link href="/" className="inline-flex items-center text-primary-accent hover:text-main-text transition-colors font-bold mb-8">
                    <ChevronLeft size={20} /> Volver al Inicio
                </Link>

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-black text-main-text">Política de Privacidad</h1>
                    <p className="text-secondary-text">Última actualización: Enero 2026</p>
                </div>

                <div className="space-y-8 text-secondary-text leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">1. Recopilación de Datos</h2>
                        <p>Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, número de teléfono y nombre de su barbería, cuando se registra o completa formularios en nuestra plataforma.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">2. Uso de la Información</h2>
                        <p>Utilizamos su información para operar y mantener nuestros servicios, procesar transacciones, mejorar la funcionalidad de la plataforma y comunicarnos con usted sobre actualizaciones o promociones relevantes.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">3. Protección de Datos</h2>
                        <p>Implementamos medidas de seguridad técnicas y organizativas, incluido el cifrado de grado militar, para proteger sus datos personales contra el acceso, uso o divulgación no autorizados.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">4. Compartir Información</h2>
                        <p>No vendemos ni alquilamos su información personal a terceros. Podemos compartir datos con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio (por ejemplo, procesamiento de pagos), bajo estrictos acuerdos de confidencialidad.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">5. Sus Derechos</h2>
                        <p>Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Puede ejercer estos derechos contactándonos a través de nuestro soporte o directamente en la configuración de su cuenta.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
