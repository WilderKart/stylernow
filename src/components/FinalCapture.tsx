"use client";

import LeadForm from "@/components/LeadForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function FinalCapture() {
    const primaryCTA = "Solicitar acceso anticipado";

    return (
        <section id="leads" className="py-40 px-6 relative overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20 filter grayscale"
                >
                    <source src="/images/herovideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <ScrollReveal className="space-y-10 text-center lg:text-left">
                    <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                        ¿Vas a esperar a que tu competencia lo haga primero?
                    </h2>
                    <p className="text-2xl text-orange-400 font-medium opacity-80 leading-relaxed">
                        El acceso se cierra cuando se completan los cupos disponibles.
                    </p>
                    <div className="space-y-4 pt-4">
                        <a
                            href="#leads"
                            className="bg-orange-400 hover:bg-orange-500 inline-flex px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all rounded-full"
                        >
                            {primaryCTA}
                        </a>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black opacity-40">
                            Datos protegidos. Control total. Tú manejas tu dinero.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <LeadForm />
                </div>
            </div>
        </section>
    );
}
