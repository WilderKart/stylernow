"use client";

import { useEffect } from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center space-y-8">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <AlertTriangle className="text-red-500" size={40} />
            </div>

            <div className="space-y-4 max-w-md">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
                    Algo salió mal
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Incluso los mejores sistemas necesitan un ajuste a veces. No te
                    preocupes, tus datos están seguros.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="bg-orange-400 text-white hover:bg-orange-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-400/20"
                >
                    <RefreshCw size={16} />
                    Intentar de nuevo
                </button>
                <a
                    href="/"
                    className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all"
                >
                    Volver al inicio
                </a>
            </div>

            <p className="text-[10px] text-gray-600 font-mono mt-8">
                Error ID: {error.digest || "Unknown"}
            </p>
        </div>
    );
}
