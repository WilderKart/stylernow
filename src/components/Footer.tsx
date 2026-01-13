import Link from 'next/link';
import { ShieldCheck } from "lucide-react";
import { LegalLinks } from "@/components/Legal";

export default function Footer() {
    return (
        <footer className="py-32 px-6 bg-background border-t border-secondary-accent/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
                    <div className="space-y-8 max-w-sm">
                        <div className="text-3xl font-bold tracking-tighter text-white">
                            Stylernow
                        </div>
                        <p className="text-gray-400 text-lg font-medium opacity-60 leading-relaxed">
                            Stylernow — The operating system for modern barbershops.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                                Navegación
                            </h4>
                            <div className="flex flex-col space-y-4 text-sm font-bold text-gray-400">
                                <a
                                    href="#experiencia"
                                    className="hover:text-orange-400 transition-colors transition-all"
                                >
                                    Experiencia
                                </a>
                                <a
                                    href="#inversion"
                                    className="hover:text-orange-400 transition-colors transition-all"
                                >
                                    Inversión
                                </a>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                                Legal
                            </h4>
                            <div className="flex flex-col space-y-4 text-sm font-bold text-gray-400">
                                <LegalLinks />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-secondary-accent/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 opacity-40">
                        © 2026 Stylernow. Private Access Only.
                    </p>
                    <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
                        <ShieldCheck size={20} />
                        <div className="text-[8px] font-black uppercase tracking-[0.2em]">
                            SSL Encrypted
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
