"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "¿Por qué Stylernow?", href: "#por-que" },
        { name: "Cómo funciona", href: "#como-funciona" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Inversión", href: "#inversion" },
    ];

    const primaryCTA = "Solicitar acceso anticipado";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                    ? "py-4 bg-[#0B0F14]/90 backdrop-blur-xl border-b border-secondary-accent/10"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    Stylernow
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#leads"
                        className="border border-orange-400 bg-transparent hover:bg-orange-400 text-[10px] px-6 py-2 uppercase tracking-[0.2em] text-white transition-all rounded-full"
                    >
                        {primaryCTA}
                    </a>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 bg-[#0B0F14] border-b border-secondary-accent/10 p-8 flex flex-col space-y-6 md:hidden shadow-2xl" // Fixed bg color to match dark mode theme
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-gray-300 hover:text-orange-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#leads"
                            className="bg-orange-400 text-white hover:bg-orange-500 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {primaryCTA}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
