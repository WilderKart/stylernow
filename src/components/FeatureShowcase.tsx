"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GlassmorphismPanel } from './GlassmorphismPanel';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface Step { id: number; label: string; title: string; subtitle?: string; highlight: string; description: string; image: string; isHero?: boolean; }

const steps: Step[] = [
    { id: 1, isHero: true, label: "FASE 01 — ARQUITECTURA", title: "CENTRO DE", subtitle: "COMANDO", highlight: "OPERATIVO", description: "La cumbre de la gestión empresarial para barberías de lujo. Automatización quirúrgica diseñada para el visionario moderno.", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074" },
    { id: 2, label: "FASE 02 — CALIBRACIÓN", title: "DESPLIEGUES", highlight: "ULTRA- RÁPIDOS", description: "Sincroniza tu inventario, personal y finanzas en tiempo real. Configuración intuitiva con potencia industrial.", image: "https://images.unsplash.com/photo-1621605815841-2cd60668b95f?auto=format&fit=crop&q=80&w=2070" },
    { id: 3, label: "FASE 03 — MOMENTUM", title: "CRECIMIENTO", highlight: "AUTÓNOMO", description: "Marketing inteligente que llena tu agenda sin esfuerzo manual. Deja que el sistema trabaje por tu marca 24/7.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" },
    { id: 4, label: "FASE 04 — DOMINIO", title: "ANÁLISIS", highlight: "PREDICTIVO", description: "Anticipa el mercado. Escala tu red de sucursales con datos precisos y decisiones respaldadas por IA.", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2070" }
];

export const FeatureShowcase: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [timerProgress, setTimerProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [isInView, setIsInView] = useState(false);

    const scrollToStep = (index: number) => {
        if (!containerRef.current) return;
        const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
        const scrollTarget = (index / (steps.length - 1)) * totalHeight;
        const absoluteTarget = scrollTarget + containerRef.current.offsetTop;

        // Only scroll if we are actively viewing this section to avoid hijacking
        if (isInView) {
            window.scrollTo({ top: absoluteTarget, behavior: 'smooth' });
        }
    };

    const startAutoCycle = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

        // Don't start cycle if not in view
        if (!isInView) {
            setTimerProgress(0);
            return;
        }

        setTimerProgress(0);
        const duration = 8000;
        const start = Date.now();
        progressIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - start;
            setTimerProgress(Math.min(100, (elapsed / duration) * 100));
        }, 40);
        timerRef.current = setTimeout(() => { scrollToStep((activeStep + 1) % steps.length); }, duration);
    };

    // Observer to detect when user is actually looking at this section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Consider in view if at least 10% is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Effect to restart/stop cycle based on visibility
    useEffect(() => {
        startAutoCycle();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isInView, activeStep]); // Re-run when view status or step changes

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalHeight = rect.height - window.innerHeight;

            // Logic to detect active step based on scroll position
            // Only update active step if we are arguably "inside" the section's scroll range
            if (rect.top <= 0 && Math.abs(rect.top) <= totalHeight) {
                const progress = Math.abs(rect.top) / totalHeight;
                const stepIndex = Math.min(steps.length - 1, Math.floor(progress * (steps.length - 0.01)));
                if (stepIndex !== activeStep) setActiveStep(stepIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, [activeStep]);

    return (
        <div id="como-funciona" ref={containerRef} className="relative h-[400vh] bg-[#060606]">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-[2px] bg-orange-500/50 z-[100] transition-all duration-75" style={{ width: `${timerProgress}%` }} />

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`absolute inset-0 transition-opacity duration-1500 ease-out ${activeStep === index ? 'opacity-25' : 'opacity-0'}`}>
                            <div className="absolute inset-0 bg-[#060606] opacity-40 z-10" />
                            <div className="absolute inset-0 cinematic-vignette z-20" />
                            <img src={step.image} className={`w-full h-full object-cover grayscale-[40%] ${activeStep === index ? 'bg-kenburns' : ''}`} alt="" />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 z-30 pointer-events-none border-[1px] border-white/5 m-8 rounded-[40px]" />

                <div className="container mx-auto px-12 lg:px-24 h-full flex items-center relative z-40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center w-full">
                        {/* Left Content Column */}
                        <div className="lg:col-span-6 relative h-[500px] flex items-center">
                            {steps.map((step, index) => activeStep === index && (
                                <div key={step.id} className="absolute inset-0 flex flex-col justify-center">
                                    <div className="animate-ethereal mb-10" style={{ animationDelay: '0.1s' }}>
                                        <span className="text-[9px] font-bold tracking-[0.6em] uppercase flex items-center gap-4" style={{ color: '#ff7a18' }}><span className="w-12 h-[1px] bg-white/30" />{step.label}</span>
                                    </div>
                                    <h1 className="font-oswald font-bold mb-8 leading-[0.85] tracking-tighter">
                                        <span className="block text-white text-6xl md:text-8xl lg:text-9xl animate-ethereal" style={{ animationDelay: '0.25s' }}>{step.title}</span>
                                        {step.subtitle && (<span className="block text-white/80 text-5xl md:text-7xl lg:text-8xl animate-ethereal" style={{ animationDelay: '0.4s' }}>{step.subtitle}</span>)}
                                        <span className="block text-glow-orange text-6xl md:text-8xl lg:text-9xl animate-ethereal" style={{ animationDelay: '0.55s', color: '#ff7a18' }}>{step.highlight}.</span>
                                    </h1>
                                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-14 leading-relaxed font-light animate-ethereal" style={{ animationDelay: '0.7s' }}>{step.description}</p>
                                    <div className="animate-ethereal" style={{ animationDelay: '0.85s' }}>
                                        <button className="relative group px-12 py-5 border border-white/10 rounded-full overflow-hidden transition-all hover:border-orange-500/50">
                                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                            <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-black transition-colors flex items-center gap-3">{index > 0 ? "EXPLORAR MÓDULO" : "ESTABLECER COMANDO"}<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Panel Column */}
                        <div className="lg:col-span-6 hidden lg:flex perspective-container justify-center items-center h-[600px] relative">
                            <AnimatePresence mode="wait">
                                {activeStep === 0 && (
                                    <motion.div key="panel-0" className="absolute" initial={{ opacity: 0, x: 100, rotateY: -20 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: -50, rotateY: 10 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                                        <GlassmorphismPanel />
                                    </motion.div>
                                )}
                                {activeStep > 0 && (
                                    <motion.div
                                        key={`panel-${activeStep}`}
                                        className="w-full max-w-md absolute"
                                        initial={{ opacity: 0, x: 100, rotateY: -20 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        exit={{ opacity: 0, x: -50, rotateY: 10 }}
                                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                    >
                                        <div className="glass-panel p-16 rounded-[60px] border-orange-500/10">
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="w-16 h-16 rounded-2xl bg-orange-accent/5 flex items-center justify-center border border-orange-500/10">
                                                    {activeStep === 1 && <Zap className="w-8 h-8 text-[#ff7a18]" />}
                                                    {activeStep === 2 && <TrendingUp className="w-8 h-8 text-[#ff7a18]" />}
                                                    {activeStep === 3 && <ShieldCheck className="w-8 h-8 text-[#ff7a18] animate-pulse" />}
                                                </div>
                                                <span className="text-[10px] font-bold text-white/20 tracking-widest">{activeStep === 3 ? "DATOS SEGUROS" : "NÚCLEO ENCRIPTADO"}</span>
                                            </div>
                                            <h4 className="text-white font-oswald text-4xl font-bold mb-6 tracking-tight uppercase">SISTEMA <span style={{ color: '#ff7a18' }}>{steps[activeStep].highlight.split('-')[0]}</span></h4>
                                            <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">Algoritmos de alta precisión calibrados para {steps[activeStep].description.split('.')[0].toLowerCase()}.</p>
                                            <div className="flex gap-1.5 h-1">
                                                <div className="flex-1 bg-[#ff7a18] rounded-full shadow-[0_0_10px_#ff7a18]" />
                                                <div className="flex-1 bg-white/10 rounded-full" />
                                                <div className="flex-1 bg-white/10 rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Organic Growth Side Navigation */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 w-4 items-center">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center cursor-pointer group py-2"
                            onClick={() => scrollToStep(index)}
                        >
                            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-sm border border-white/10 text-[9px] tracking-[0.4em] whitespace-nowrap uppercase text-white pointer-events-none">
                                0{index + 1} // {steps[index].label.split(' — ')[1]}
                            </div>

                            {/* Organic Capsule Transformation */}
                            <motion.div
                                className={`w-1 rounded-full ${activeStep === index ? 'bg-[#ff7a18] shadow-[0_0_15px_#ff7a18]' : 'bg-white/10'}`}
                                animate={{
                                    height: activeStep === index ? 40 : 4,
                                    opacity: activeStep === index ? 1 : 0.5
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute left-12 bottom-12 z-20 hidden xl:block pointer-events-none overflow-hidden h-[180px]">
                    <div className="text-[200px] font-oswald font-black text-white/[0.015] select-none leading-none tracking-tighter uppercase transition-transform duration-1500" style={{ transform: `translateY(${activeStep * -10}%)` }}>COMANDO STYLER</div>
                </div>
            </div>
        </div>
    );
};
