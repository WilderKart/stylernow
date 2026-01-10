"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, ShieldCheck } from 'lucide-react';

export default function LeadForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const barbershop_name = formData.get('barbershop_name') as string;
        const consent = formData.get('consent') === 'on';

        try {
            const { error: supabaseError } = await supabase
                .from('leads')
                .insert([{ name, phone, email, barbershop_name, consent }]);

            if (supabaseError) throw supabaseError;

            setSubmitted(true);
        } catch (err: any) {
            console.error(err);
            setError('Ocurrió un error. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="premium-card flex flex-col items-center justify-center text-center space-y-4 w-full max-w-lg"
            >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inscripción Completada</h3>
                <p className="text-gray-300">Su solicitud de acceso anticipado ha sido recibida. Un miembro de nuestro equipo contactará con usted en las próximas 24 horas.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="premium-card space-y-6 w-full max-w-lg border-gray-800 bg-black/50 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center">
                    <ShieldCheck className="text-orange-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Solicitar acceso anticipado</h3>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre Completo</label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Nombre y apellidos"
                        className="w-full bg-black/50 border border-gray-800 rounded-xl p-3 text-white placeholder:text-gray-600 focus:border-orange-400 outline-none transition-all focus:ring-1 focus:ring-orange-400/50"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp</label>
                        <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="+57..."
                            className="w-full bg-black/50 border border-gray-800 rounded-xl p-3 text-white placeholder:text-gray-600 focus:border-orange-400 outline-none transition-all focus:ring-1 focus:ring-orange-400/50"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            className="w-full bg-black/50 border border-gray-800 rounded-xl p-3 text-white placeholder:text-gray-600 focus:border-orange-400 outline-none transition-all focus:ring-1 focus:ring-orange-400/50"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre de la Barbería</label>
                    <input
                        required
                        name="barbershop_name"
                        type="text"
                        placeholder="Nombre comercial"
                        className="w-full bg-black/50 border border-gray-800 rounded-xl p-3 text-white placeholder:text-gray-600 focus:border-orange-400 outline-none transition-all focus:ring-1 focus:ring-orange-400/50"
                    />
                </div>

                <div className="flex items-start space-x-3 py-2">
                    <input
                        required
                        name="consent"
                        id="consent"
                        type="checkbox"
                        className="mt-1 w-5 h-5 accent-orange-400 rounded-md"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-400 leading-snug">
                        Acepto el procesamiento de mis datos según los <a href="#" className="text-orange-400 underline">Términos</a> y <a href="#" className="text-orange-400 underline">Privacidad</a>. <span className="text-red-500 font-bold">*</span>
                    </label>
                </div>
            </div>

            {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

            <button
                disabled={loading}
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 rounded-full w-full py-4 text-white font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-orange-400/20"
            >
                {loading ? <Loader2 className="animate-spin" /> : <span className="uppercase tracking-[0.2em] text-sm">Solicitar acceso anticipado</span>}
            </button>

            <p className="text-[10px] text-center text-gray-500 opacity-50 uppercase tracking-widest">
                Seguridad de datos certificada bajo estándares internacionales
            </p>
        </form>
    );
}
