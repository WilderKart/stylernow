"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

// DATOS DEFINITIVOS PARA STYLERNOW
const slides = [
    {
        id: 1,
        title: "Orden absoluto",
        subtitle: "Sin esfuerzo, sin caos",
        description: "Tu agenda siempre impecable, sin choques ni confusiones. Cada cita perfectamente organizada, cada minuto optimizado. Olvídate del caos: ahora tu calendario funciona a la perfección.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
        location: "Control Total"
    },
    {
        id: 2,
        title: "Asistencia inteligente",
        subtitle: "Disponible 24/7",
        description: "Un asistente que nunca duerme y siempre atiende. Confirma, recuerda y organiza cada interacción automáticamente. La atención perfecta, disponible siempre, para cada cliente que llegue.",
        image: "/images/asistencia.png",
        location: "Servicio Premium"
    },
    {
        id: 3,
        title: "Finanzas bajo control",
        subtitle: "Visibilidad total",
        description: "Visualiza ingresos, propinas y gastos al instante. Toma decisiones con certeza absoluta y gestiona tu negocio sin sorpresas. Toda la información financiera al alcance de tu mano, clara y confiable.",
        image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop",
        location: "Transparencia"
    },
    {
        id: 4,
        title: "Pagos justos",
        subtitle: "Equipos motivados",
        description: "Comisiones automáticas, claras y sin errores. Mantén la motivación de tu equipo con pagos precisos y puntuales. La transparencia genera confianza y la confianza produce resultados.",
        image: "/images/pagos-justos.png",
        location: "Confianza Total"
    },
    {
        id: 5,
        title: "Relaciones duraderas",
        subtitle: "Más que contactos",
        description: "Cada cliente recordado y cada detalle capturado. No gestionas contactos, construyes relaciones estratégicas que permanecen. Fidelización asegurada y personalizada.",
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2081&auto=format&fit=crop",
        location: "Clientes Premium"
    },
    {
        id: 6,
        title: "Inventario preciso",
        subtitle: "Sin pérdidas",
        description: "Todo bajo control, siempre listo para actuar. Cada producto, cada herramienta y cada insumo registrado y monitoreado. Precisión absoluta y eficiencia total para tu negocio.",
        image: "https://images.unsplash.com/photo-1611599535605-1b5f8e0b841c?q=80&w=2070&auto=format&fit=crop",
        location: "Eficiencia"
    }
];

const AUTOPLAY_TIME = 6000;

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_TIME);

        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    const getVisibleThumbnails = () => {
        const visible = [];
        for (let i = 1; i <= 4; i++) {
            visible.push(slides[(currentIndex + i) % slides.length]);
        }
        return visible;
    };

    const visibleThumbnails = getVisibleThumbnails();

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">

            {/* FONDO CON ANIMACIÓN */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={slides[currentIndex].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: 1,
                        scale: hoveredIndex !== null ? 1.03 : 1,
                        filter: hoveredIndex !== null ? 'brightness(1.1)' : 'brightness(1)'
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20 z-10" />
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-contain md:object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            {/* CONTENIDO PRINCIPAL */}
            <div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col justify-start pt-32 md:justify-center md:pt-0 px-6 md:px-24 pointer-events-none">
                <div className="max-w-xl pointer-events-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div key={currentIndex}>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl md:text-7xl font-bold leading-tight mb-2"
                            >
                                {slides[currentIndex].title}
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 md:mb-6"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-sm md:max-w-md"
                            >
                                {slides[currentIndex].description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Botón de Play - Mobile adjustments */}
                <div className="mt-8 md:mt-12 flex items-center gap-4 pointer-events-auto">
                    <div
                        onClick={() => setIsPaused(!isPaused)}
                        className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer hover:bg-white/10 transition-colors"
                    >
                        {isPaused ? (
                            <Pause fill="white" className="w-4 h-4 md:w-6 md:h-6" />
                        ) : (
                            <Play fill="white" className="ml-1 w-4 h-4 md:w-6 md:h-6" />
                        )}
                        {!isPaused && (
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="50%" cy="50%" r="48%"
                                    stroke="white" strokeWidth="2" fill="none"
                                    strokeDasharray="195"
                                    strokeDashoffset="0"
                                    className="opacity-30"
                                />
                                <motion.circle
                                    cx="50%" cy="50%" r="48%"
                                    stroke="#fb923c" strokeWidth="2" fill="none"
                                    pathLength={1}
                                    strokeDasharray="1"
                                    initial={{ strokeDashoffset: 1 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: AUTOPLAY_TIME / 1000, ease: "linear", repeat: Infinity }}
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* MINIATURAS (Scrollable on mobile) */}
            <div className="absolute z-30 bottom-8 left-0 w-full px-6 flex gap-4 overflow-x-auto no-scrollbar md:bottom-12 md:right-12 md:left-auto md:w-auto md:px-0 md:overflow-visible">
                {visibleThumbnails.map((slideItem) => (
                    <motion.div
                        key={slideItem.id}
                        layoutId={`thumb-${slideItem.id}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        onMouseEnter={() => setHoveredIndex(slides.indexOf(slideItem))}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => goToSlide(slides.indexOf(slideItem))}
                        className="relative flex-shrink-0 w-28 h-40 md:w-40 md:h-56 rounded-xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
                    >
                        <img
                            src={slideItem.image}
                            alt={slideItem.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                        <div className="absolute bottom-3 left-3 pr-1 md:bottom-4 md:left-4 md:pr-2">
                            <h4 className="font-bold text-xs md:text-lg leading-tight line-clamp-2">{slideItem.title}</h4>
                            <p className="text-[10px] md:text-xs text-orange-400 mt-1 truncate">{slideItem.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div >
    );
}
