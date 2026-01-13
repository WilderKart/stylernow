"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const primaryCTA = "Solicitar acceso anticipado";

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-main.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain md:object-cover object-center select-none pointer-events-none"
                />
                {/* Gradient Overlays to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            </div>

            {/* Content Container - Split into Top (Text) and Bottom (CTA) */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between pb-16 pt-20 md:pb-56 md:pt-32 px-6">
                {/* TOP: Title (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-4 md:space-y-6"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-[0.9] tracking-tighter text-white drop-shadow-2xl uppercase">
                        La Gestión <span className="text-orange-400">Premium</span> que tu{" "}
                        <br className="hidden md:block" /> Barbería{" "}
                        <span className="text-orange-400">merece.</span>
                    </h1>
                </motion.div>

                {/* BOTTOM: CTA Button (Centered to align with Title) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-3 md:gap-4"
                >
                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-xl md:max-w-2xl text-center leading-relaxed font-medium opacity-90 drop-shadow-lg mb-1 md:mb-2">
                        Gestiona reservas, pagos y clientes... Aumenta tus ingresos y ahorra
                        tiempo con StylerNow.
                    </p>

                    <a
                        href="#leads"
                        className="bg-orange-400 text-white hover:bg-orange-500 px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-orange-400/20 transition-all rounded-full transform hover:scale-105"
                    >
                        {primaryCTA}
                    </a>
                    <p className="text-[9px] md:text-[10px] text-center text-gray-300 uppercase tracking-widest font-bold opacity-60 md:ml-2">
                        Solo 1000 cupos para el lanzamiento beta.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
