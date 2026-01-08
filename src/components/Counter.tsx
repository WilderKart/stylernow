"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
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
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center font-black"
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

export default function Counter({ targetValue = 0, prefix = "", suffix = "", isLive = false }: CounterProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const baseCount = 334;
    const [finalTarget, setFinalTarget] = useState(isLive ? baseCount : targetValue);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isLive) {
            const fetchCount = async () => {
                const { count: supabaseCount, error } = await supabase
                    .from("leads")
                    .select("*", { count: "exact", head: true });

                if (!error && supabaseCount !== null) {
                    setFinalTarget(baseCount + supabaseCount);
                }
            };
            fetchCount();
        }
    }, [isLive]);

    useEffect(() => {
        if (isInView && !hasAnimated.current && finalTarget > 0) {
            hasAnimated.current = true;

            const controls = animate(0, finalTarget, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    setDisplayValue(Math.floor(value));
                },
            });

            return () => controls.stop();
        }
    }, [isInView, finalTarget]);

    return (
        <div ref={containerRef} className="flex items-center justify-center text-4xl md:text-7xl font-black text-main-text tracking-tighter">
            <div className="flex items-center h-[1.2em]">
                {prefix && (
                    <span className="text-primary-accent text-[0.7em] md:text-[0.7em] mr-1 leading-none">
                        {prefix}
                    </span>
                )}
                <div className="flex h-full items-center">
                    <RollingNumber value={displayValue} />
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
