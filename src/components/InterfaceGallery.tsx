"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function InterfaceGallery() {
    const slides = [
        { src: "/images/agenda.png", title: "Agenda" },
        { src: "/images/inventory.png", title: "Inventario" },
        { src: "/images/clients.png", title: "Clientes" },
        { src: "/images/services.png", title: "Servicios" },
    ];

    return (
        <section id="experiencia" className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeUp} className="text-center mb-32 space-y-6">
                    <h2 className="text-4xl md:text-7xl font-bold text-white uppercase">
                        Elegancia que se siente. Control que se nota.
                    </h2>
                    <p className="text-orange-400 text-xl md:text-2xl font-medium opacity-70">
                        Diseñado para verse bien y funcionar mejor.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-32 swiper-custom"
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className="iphone-frame w-full aspect-[9/19] flex items-center justify-center overflow-hidden bg-surface/50 border-secondary-accent/20">
                                <Image
                                    src={slide.src}
                                    alt={slide.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-12">
                    <a
                        href="#leads"
                        className="bg-orange-400 text-white hover:bg-orange-500 px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all rounded-full"
                    >
                        Explorar experiencia →
                    </a>
                </div>
            </div>
        </section>
    );
}
