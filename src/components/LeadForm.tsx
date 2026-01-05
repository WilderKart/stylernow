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
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle size={40} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-main-text">¡Solicitud Enviada!</h3>
                <p className="text-secondary-text">Pronto estarás operando como un barbero del futuro. Nos pondremos en contacto contigo.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="premium-card space-y-6 w-full max-w-lg border-secondary-accent/10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center">
                    <ShieldCheck className="text-primary-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-main-text">🚀 QUIERO MI BARBERÍA LLENA</h3>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">Nombre Completo</label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Ej: John Doe"
                        className="w-full bg-background border border-secondary-accent/10 rounded-xl p-3 text-main-text placeholder:text-secondary-text/30 focus:border-primary-accent outline-none transition-all focus:ring-1 focus:ring-primary-accent/50"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">WhatsApp</label>
                        <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="312..."
                            className="w-full bg-background border border-secondary-accent/10 rounded-xl p-3 text-main-text placeholder:text-secondary-text/30 focus:border-primary-accent outline-none transition-all focus:ring-1 focus:ring-primary-accent/50"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="correo@..."
                            className="w-full bg-background border border-secondary-accent/10 rounded-xl p-3 text-main-text placeholder:text-secondary-text/30 focus:border-primary-accent outline-none transition-all focus:ring-1 focus:ring-primary-accent/50"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary-text mb-2">Nombre de la Barbería</label>
                    <input
                        required
                        name="barbershop_name"
                        type="text"
                        placeholder="La Logia..."
                        className="w-full bg-background border border-secondary-accent/10 rounded-xl p-3 text-main-text placeholder:text-secondary-text/30 focus:border-primary-accent outline-none transition-all focus:ring-1 focus:ring-primary-accent/50"
                    />
                </div>

                <div className="flex items-start space-x-3 py-2">
                    <input
                        required
                        name="consent"
                        id="consent"
                        type="checkbox"
                        className="mt-1 w-5 h-5 accent-primary-accent rounded-md"
                    />
                    <label htmlFor="consent" className="text-xs text-secondary-text leading-snug">
                        Acepto el procesamiento de mis datos según los <a href="#" className="text-primary-accent underline">Términos</a> y <a href="#" className="text-primary-accent underline">Privacidad</a>. <span className="text-error font-bold">*</span>
                    </label>
                </div>
            </div>

            {error && <p className="text-error text-sm font-semibold">{error}</p>}

            <button
                disabled={loading}
                type="submit"
                className="btn-gold w-full flex items-center justify-center space-x-2"
            >
                {loading ? <Loader2 className="animate-spin" /> : <span>ENVIAR SOLICITUD</span>}
            </button>

            <p className="text-[10px] text-center text-secondary-text/50 uppercase tracking-widest">
                🔐 Tus datos están seguros con cifrado de grado militar
            </p>
        </form>
    );
}
