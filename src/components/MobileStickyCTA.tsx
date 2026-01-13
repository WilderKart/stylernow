"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the Hero section (approx 100vh)
            const showThreshold = window.innerHeight * 0.8;
            setIsVisible(window.scrollY > showThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[90] p-4 bg-gradient-to-t from-black via-black/90 to-transparent md:hidden pb-safe"
                >
                    <div className="max-w-md mx-auto">
                        <a
                            href="#leads"
                            className="flex items-center justify-center w-full bg-orange-400 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-full shadow-lg shadow-orange-400/20 active:scale-[0.98] transition-transform"
                        >
                            Solicitar Acceso
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
