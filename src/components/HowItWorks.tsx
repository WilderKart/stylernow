"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function HowItWorks() {
    const primaryCTA = "Solicitar acceso anticipado";

    const steps = [
        {
            step: "01",
            text: "Configura una vez — Tu barbería queda organizada desde el primer día.",
            img: "/images/services.png",
        },
        {
            step: "02",
            text: "El sistema trabaja — Clientes agendan, el bot confirma, tú solo atiendes.",
            img: "/images/bot.png",
        },
        {
            step: "03",
            text: "Tú decides con datos — Crecimiento basado en números reales.",
            img: "/images/finances.png",
        },
    ];

    return (
        <section id="como-funciona" className="relative py-24 md:py-40 px-6 overflow-hidden">
            {/* Premium Barber Background - Fixed height on mobile to prevent extreme zoom */}
            <div className="absolute top-0 left-0 right-0 h-[600px] md:h-full z-0 opacity-30 md:opacity-40 filter grayscale contrast-125 overflow-hidden">
                <Image
                    src="/images/steps-bg-premium.png"
                    alt="Premium Barber Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-[center_20%] md:object-center select-none pointer-events-none transition-all duration-1000"
                />
                {/* Multi-stage gradient to blend into background */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background md:via-background/20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div {...fadeUp} className="text-center mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter">
                        Tu negocio, en su mejor versión.
                    </h2>
                </motion.div>

                <div className="space-y-32 md:space-y-40">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-center gap-20 lg:gap-32`}
                        >
                            <motion.div {...fadeUp} className="flex-1 space-y-10">
                                {/* Circular Step Indicator */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    {/* Outer Yellow Circle */}
                                    <div className="absolute inset-0 bg-orange-400 rounded-full shadow-[0_0_40px_rgba(251,146,60,0.2)]" />
                                    {/* Inner Black Circle */}
                                    <div className="absolute w-[80%] h-[80%] bg-[#121212] rounded-full flex items-center justify-center border border-orange-400/10">
                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                PASO
                                            </span>
                                            <span className="text-3xl font-black text-orange-400 tracking-tighter">
                                                {step.step}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase">
                                    {step.text}
                                </h3>
                                <a
                                    href="#leads"
                                    className="border border-orange-400 text-white hover:bg-orange-400 inline-flex px-10 py-4 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-full"
                                >
                                    {primaryCTA}
                                </a>
                            </motion.div>
                            <div className="flex-1 relative w-full group">
                                <div className="aspect-video rounded-[2rem] overflow-hidden bg-surface border border-secondary-accent/10 shadow-2xl">
                                    <Image
                                        src={step.img}
                                        alt={`Step ${step.step}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
