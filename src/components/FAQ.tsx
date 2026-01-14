"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
    {
        question: "¿Necesito tarjeta de crédito para entrar a la lista?",
        answer:
            "No. El acceso a la lista de espera es 100% gratuito. Solo te pediremos datos de pago cuando tu cuenta esté configurada y lista para operar, y si decides continuar después del periodo de prueba.",
    },
    {
        question: "¿Stylernow funciona si se cae el internet?",
        answer:
            "Stylernow es una plataforma Cloud-First. Puedes acceder desde tu celular con datos móviles (4G/5G) en cualquier momento, asegurando que tu negocio nunca se detenga, incluso si falla el WiFi.",
    },
    {
        question: "¿Puedo migrar los datos de mi sistema actual?",
        answer:
            "Absolutamente. Nuestro equipo de onboarding 'Guante Blanco' se encarga de importar tus clientes, servicios e inventario desde Excel, agendas de papel u otro software sin costo adicional para miembros fundadores.",
    },
    {
        question: "¿Qué pasa si tengo más de una sede?",
        answer:
            "Stylernow es multi-sede de forma nativa. Puedes controlar todas tus sucursales desde un único panel administrativo, ver reportes consolidados y gestionar permisos por local.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 bg-black border-t border-secondary-accent/5">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Todo lo que necesitas saber antes de dar el salto.
                    </p>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index
                                ? "border-orange-400/50 bg-[#0B0F14]"
                                : "border-white/5 bg-transparent hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex(activeIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span
                                    className={`text-base md:text-lg font-bold transition-colors ${activeIndex === index ? "text-orange-400" : "text-white"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={`ml-4 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-90 text-orange-400" : "text-gray-500"
                                        }`}
                                >
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed text-sm md:text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
