"use client";

import { useState, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { submitLead } from '@/actions/submitLead';

// Utility for cleaner class merging
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// 1. Zod Validation Schema
const formSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    phone: z.string().min(7, "Ingresa un número válido (+57...)"),
    email: z.string().email("Ingresa un correo electrónico válido"),
    barbershop_name: z.string().min(2, "Nombre de la barbería requerido"),
    consent: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar los términos para continuar",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
    const [isPending, startTransition] = useTransition();
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    // 2. React Hook Form Setup
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    // 3. Persistence: Load from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem("stylerNow_leadForm");
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                Object.keys(parsed).forEach((key) => {
                    setValue(key as keyof FormData, parsed[key]);
                });
            } catch (e) {
                console.error("Error loading saved form data", e);
            }
        }
    }, [setValue]);

    // 4. Persistence: Save to localStorage on change
    useEffect(() => {
        const subscription = watch((value) => {
            localStorage.setItem("stylerNow_leadForm", JSON.stringify(value));
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (data: FormData) => {
        setServerError(null);

        // Prepare FormData for Server Action
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });
        // Add checkbox manually if true (since HTML checkboxes are weird)
        if (data.consent) formData.set("consent", "on");

        startTransition(async () => {
            const result = await submitLead({ success: false }, formData);

            if (result.success) {
                localStorage.removeItem("stylerNow_leadForm");
                reset();
                setSubmitted(true);
            } else {
                setServerError(result.message || "Error desconocido");
            }
        });
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="premium-card flex flex-col items-center justify-center text-center space-y-6 w-full max-w-lg p-10 bg-[#0B0F14] border border-green-500/20 shadow-2xl shadow-green-900/10"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2 animate-pulse">
                    <CheckCircle size={48} className="text-green-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white tracking-tight">¡Estás en la lista!</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Tu solicitud de acceso anticipado está confirmada. <br />
                        Un asesor de <span className="text-orange-400 font-bold">Stylernow</span> te contactará pronto.
                    </p>
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gray-500 hover:text-white uppercase tracking-widest font-bold underline transition-all"
                >
                    Volver al formulario
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="premium-card space-y-5 p-8 border border-white/5 bg-[#0B0F14]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
                {/* Glossy effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-50" />

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400/20 to-orange-600/5 flex items-center justify-center border border-orange-400/10 shadow-inner">
                        <ShieldCheck className="text-orange-400 drop-shadow-lg" size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Acceso Preferencial</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Cupos limitados disponibles</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Nombre Completo</label>
                        <div className="relative">
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Ej: Juan Pérez"
                                className={cn(
                                    "w-full bg-black/40 border rounded-xl p-4 text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300",
                                    errors.name ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-white/10 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 hover:border-white/20"
                                )}
                            />
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        className="absolute right-3 top-4 text-red-500"
                                    >
                                        <AlertCircle size={16} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        {errors.name && <p className="text-red-400 text-xs pl-1 font-medium">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">WhatsApp</label>
                            <input
                                {...register("phone")}
                                type="tel"
                                placeholder="+57..."
                                className={cn(
                                    "w-full bg-black/40 border rounded-xl p-4 text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300",
                                    errors.phone ? "border-red-500/50" : "border-white/10 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 hover:border-white/20"
                                )}
                            />
                            {errors.phone && <p className="text-red-400 text-xs pl-1 font-medium">{errors.phone.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="correo@..."
                                className={cn(
                                    "w-full bg-black/40 border rounded-xl p-4 text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300",
                                    errors.email ? "border-red-500/50" : "border-white/10 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 hover:border-white/20"
                                )}
                            />
                            {errors.email && <p className="text-red-400 text-xs pl-1 font-medium">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Barbershop Name */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 pl-1">Nombre de la Barbería</label>
                        <input
                            {...register("barbershop_name")}
                            type="text"
                            placeholder="Ej: Vikingos Barber Shop"
                            className={cn(
                                "w-full bg-black/40 border rounded-xl p-4 text-sm text-white placeholder:text-gray-700 outline-none transition-all duration-300",
                                errors.barbershop_name ? "border-red-500/50" : "border-white/10 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 hover:border-white/20"
                            )}
                        />
                        {errors.barbershop_name && <p className="text-red-400 text-xs pl-1 font-medium">{errors.barbershop_name.message}</p>}
                    </div>

                    {/* Consent */}
                    <div className="space-y-2 pt-2">
                        <div className="flex items-start space-x-3">
                            <div className="relative flex items-center">
                                <input
                                    {...register("consent")}
                                    id="consent"
                                    type="checkbox"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-black/40 transition-all checked:border-orange-400 checked:bg-orange-400"
                                />
                                <CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity peer-checked:opacity-100" size={12} strokeWidth={4} />
                            </div>
                            <label htmlFor="consent" className="text-xs text-gray-400 leading-snug cursor-pointer select-none">
                                Confirmo que soy dueño/administrador de una barbería y acepto la <a href="#" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">Política de Privacidad</a>.
                            </label>
                        </div>
                        {errors.consent && <p className="text-red-400 text-xs pl-8 font-medium">{errors.consent.message}</p>}
                    </div>
                </div>

                {serverError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                        <AlertCircle size={18} className="text-red-500 shrink-0" />
                        <p className="text-red-400 text-xs font-medium">{serverError}</p>
                    </div>
                )}

                <button
                    disabled={isPending}
                    type="submit"
                    className={cn(
                        "relative overflow-hidden rounded-full w-full py-4 font-bold transition-all flex items-center justify-center space-x-2 shadow-xl",
                        isPending
                            ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                            : "bg-orange-400 text-white hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] shadow-orange-400/20"
                    )}
                >
                    {isPending ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            <span className="uppercase tracking-[0.2em] text-xs md:text-sm">Solicitar acceso anticipado</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 rounded-full" />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 opacity-30 mt-2">
                    <ShieldCheck size={12} className="text-gray-400" />
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Encrypted & Secure</p>
                </div>
            </form>
        </div>
    );
}
