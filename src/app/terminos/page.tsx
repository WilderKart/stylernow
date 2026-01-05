import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <Link href="/" className="inline-flex items-center text-primary-accent hover:text-main-text transition-colors font-bold mb-8">
                    <ChevronLeft size={20} /> Volver al Inicio
                </Link>

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-black text-main-text">Términos y Condiciones</h1>
                    <p className="text-secondary-text">Última actualización: Enero 2026</p>
                </div>

                <div className="space-y-8 text-secondary-text leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">1. Aceptación de los Términos</h2>
                        <p>Al acceder y utilizar Stylernow ("la Plataforma"), usted acepta estar legalmente vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte, no debe utilizar nuestros servicios.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">2. Descripción del Servicio</h2>
                        <p>Stylernow es una solución SaaS (Software as a Service) diseñada para la gestión de barberías, incluyendo agendamiento, control de caja e inventario. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">3. Cuentas y Seguridad</h2>
                        <p>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Stylernow no se hace responsable de pérdidas o daños derivados del incumplimiento de esta obligación.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">4. Pagos y Suscripciones</h2>
                        <p>Los servicios premium se facturan por adelantado de forma mensual. No ofrecemos reembolsos por meses parciales de servicio, actualizaciones o reembolsos por meses no utilizados.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-main-text">5. Propiedad Intelectual</h2>
                        <p>Todo el contenido, marcas registradas, logotipos y software de la Plataforma son propiedad exclusiva de Stylernow. Usted conserva todos los derechos sobre los datos que ingresa en la plataforma.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
