"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

interface RollingNumberProps {
    value: string | number;
}

function RollingNumber({ value }: RollingNumberProps) {
    const digits = value.toString().split("");

    return (
        <div className="flex overflow-hidden">
            {digits.map((digit, index) => (
                <div key={index} className="relative h-[1.2em] w-[0.6em] md:w-[0.7em]">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={digit}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {digit}
                        </motion.span>
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

interface CounterProps {
    targetValue?: number;
    prefix?: string;
    suffix?: string;
    isLive?: boolean;
}

export default function Counter({ targetValue, prefix = "", suffix = "", isLive = false }: CounterProps) {
    const [count, setCount] = useState(targetValue || 334);
    const baseCount = 334;

    useEffect(() => {
        if (!isLive) return;

        // Initial fetch
        const fetchCount = async () => {
            const { count: supabaseCount, error } = await supabase
                .from("leads")
                .select("*", { count: "exact", head: true });

            if (!error && supabaseCount !== null) {
                setCount(baseCount + supabaseCount);
            }
        };

        fetchCount();

        // Subscribe to changes in the leads table
        const channel = supabase
            .channel("leads-counter")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "leads" },
                () => {
                    setCount((prev) => prev + 1);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [isLive, baseCount]);

    return (
        <div className="flex items-center justify-center text-4xl md:text-7xl font-black text-main-text tracking-tighter">
            <div className="flex items-center h-[1.2em]">
                {prefix && (
                    <span className="text-primary-accent text-[0.7em] md:text-[0.7em] mr-1 leading-none">
                        {prefix}
                    </span>
                )}
                <div className="flex h-full items-center">
                    <RollingNumber value={count} />
                </div>
                {suffix && (
                    <span className="text-primary-accent text-[0.7em] md:text-[0.7em] ml-1 leading-none">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
}
