"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";

// Datos simulados realistas para generar confianza
const NOTIFICATIONS = [
    { name: "Barbería Los Reyes", action: "solicitó acceso anticipado", time: "hace 2 min", city: "Cali" },
    { name: "Carlos M.", action: "se unió a la lista de espera", time: "hace 5 min", city: "Bogotá" },
    { name: "Studio 54 Barber", action: "configuró su cuenta", time: "hace 12 min", city: "Medellín" },
    { name: "La Clásica", action: "aseguró su cupo fundador", time: "hace 1 min", city: "Cali" },
    { name: "Elegance Cuts", action: "ha sido aprobada", time: "hace 8 min", city: "Barranquilla" },
];

export default function SocialProofToast() {
    const [current, setCurrent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay inicial para no abrumar al usuario apenas entra
        const initialDelay = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(initialDelay);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Ciclo de notificaciones: Mostrar 5s, Ocultar 10-20s aleatorio
        const interval = setInterval(() => {
            setIsVisible(false);

            const nextDelay = Math.random() * 10000 + 10000; // Entre 10s y 20s de silencio

            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % NOTIFICATIONS.length);
                setIsVisible(true);
            }, nextDelay); // Esperar antes de mostrar la siguiente

        }, 8000); // Tiempo que permanece visible (incluyendo animaciones)

        return () => clearInterval(interval);
    }, [isVisible]);

    const notification = NOTIFICATIONS[current];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -50, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed z-[80] bottom-24 left-4 md:bottom-8 md:left-8 flex items-center gap-4 bg-[#0B0F14]/90 backdrop-blur-md border border-secondary-accent/20 p-4 pr-6 rounded-2xl shadow-2xl shadow-black/50 max-w-[90vw] md:max-w-sm pointer-events-none"
                >
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <CheckCircle size={18} className="text-green-500" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-white font-bold leading-tight">
                            <span className="text-orange-400">{notification.name}</span> {notification.action}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{notification.time}</span>
                            <span className="text-[10px] text-gray-600">•</span>
                            <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                <MapPin size={10} />
                                {notification.city}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
