"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    // delay factor 0-1, delays the start of the animation relative to the scroll window
    delay?: number;
}

export const ScrollReveal = ({ children, className, delay = 0 }: ScrollRevealProps) => {
    const ref = useRef(null);

    // We track when the element enters the viewport.
    // "start 0.95": Start tracking when the top of the element hits 95% of the viewport height (almost bottom)
    // "start 0.6": End tracking when the top of the element hits 60% of the viewport height (center-ish)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.95", "start 0.6"]
    });

    // Add a spring to smooth out the scroll value physically
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // If there is a delay, we map the progress differently.
    // Normal: 0 -> 1 maps to 0 -> 1
    // Delayed 0.2: 0 -> 0.2 maps to 0 -> 0 (stay hidden), 0.2 -> 1 maps to 0 -> 1
    const start = delay * 0.2; // arbitrary scale for delay effect in scroll domain

    const opacity = useTransform(smoothProgress, [start, 1], [0, 1]);
    const y = useTransform(smoothProgress, [start, 1], [30, 0]);
    // Also add a subtle scale for premium feel
    const scale = useTransform(smoothProgress, [start, 1], [0.95, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, scale }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
