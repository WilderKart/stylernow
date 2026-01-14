"use client";

import { Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PricingSection() {
    const buttons = [
        "Reclamar acceso fundador",
        "Asegurar precio preferencial",
        "Solicitar demo privada",
    ];

    return (
        <section id="inversion" className="py-40 px-6 bg-surface/10 border-y border-secondary-accent/5">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal className="text-center mb-24 space-y-6">
                    <h2 className="text-4xl md:text-7xl font-bold text-white uppercase">
                        Inversión para miembros fundadores
                    </h2>
                    <p className="text-orange-400 text-xl md:text-2xl font-medium opacity-70">
                        Precio preferencial solo durante esta fase privada.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {buttons.map((btn, i) => (
                        <ScrollReveal
                            key={btn}
                            delay={i * 0.2}
                            className={`premium-card p-12 text-center flex flex-col items-center justify-between min-h-[300px] ${i === 1
                                ? "border-orange-400 shadow-2xl shadow-orange-400/10"
                                : "border-gray-800"
                                }`}
                        >
                            <div className="w-12 h-12 rounded-full bg-primary-accent/5 flex items-center justify-center mb-8">
                                {i === 0 ? (
                                    <Zap className="text-orange-400" size={24} />
                                ) : i === 1 ? (
                                    <ShieldCheck className="text-orange-400" size={24} />
                                ) : (
                                    <ArrowRight className="text-orange-400" size={24} />
                                )}
                            </div>
                            <a
                                href="#leads"
                                className={`w-full py-5 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full ${i === 1
                                    ? "bg-orange-400 text-white hover:bg-orange-500"
                                    : "border border-orange-400 text-white hover:bg-orange-400"
                                    }`}
                            >
                                {btn}
                            </a>
                        </ScrollReveal>
                    ))}
                </div>

                <p className="text-center mt-12 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 opacity-50">
                    El precio se bloquea al solicitar acceso, no al activar.
                </p>
            </div>
        </section>
    );
}
