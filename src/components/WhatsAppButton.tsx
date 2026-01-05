"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const whatsappNumber = "573123456789";
    const message = encodeURIComponent("Hola, quiero organizar mi barbería");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#1F7A63] text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-[#1F7A63]"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0, 0.6],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <MessageCircle size={32} className="relative z-10" />
        </motion.a>
    );
}
