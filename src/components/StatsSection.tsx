"use client";

import Counter from "@/components/Counter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function StatsSection() {
    const primaryCTA = "Solicitar acceso anticipado";

    return (
        <section className="py-24 border-y border-secondary-accent/5 bg-surface/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Stat 1: Waitlist */}
                    <ScrollReveal className="flex flex-col items-center text-center space-y-4">
                        <Counter isLive={true} prefix="+" />
                        <div className="space-y-1 px-4">
                            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Solicitudes en lista de espera</h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Acceso solo por invitación.</p>
                        </div>
                    </ScrollReveal>

                    {/* Stat 2: New this week */}
                    <ScrollReveal delay={0.2} className="flex flex-col items-center text-center space-y-4">
                        <Counter targetValue={47} prefix="+" />
                        <div className="space-y-1 px-4">
                            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Nuevas solicitudes esta semana</h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">El interés sigue creciendo.</p>
                        </div>
                    </ScrollReveal>

                    {/* Stat 3: Onboarding */}
                    <ScrollReveal delay={0.4} className="flex flex-col items-center text-center space-y-4">
                        <Counter targetValue={138} isLive={true} />
                        <div className="space-y-1 px-4">
                            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Barberías en onboarding</h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Configurándose ahora mismo.</p>
                        </div>
                    </ScrollReveal>

                    {/* Stat 4: Acceptance Rate */}
                    <ScrollReveal delay={0.6} className="flex flex-col items-center text-center space-y-4">
                        <Counter targetValue={78} suffix="%" />
                        <div className="space-y-1 px-4">
                            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Tasa de aceptación</h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Acceso limitado por cupos.</p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.8} className="flex justify-center mt-16">
                    <a
                        href="#leads"
                        className="bg-orange-400 text-white hover:bg-orange-500 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-orange-400/10 transition-all rounded-full"
                    >
                        {primaryCTA}
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
