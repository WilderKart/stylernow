"use client";

import { motion } from "framer-motion";
import {
  Menu,
  X,
  Rocket,
  Zap,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import Counter from "@/components/Counter";
import LeadForm from "@/components/LeadForm";
import { LegalLinks, ContactInfo } from "@/components/Legal";
import HeroCarousel from "@/components/HeroCarousel";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Por qué Stylernow?", href: "#por-que" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Inversión", href: "#inversion" },
  ];

  const primaryCTA = "Solicitar acceso anticipado";

  return (
    <main className="relative min-h-screen selection:bg-orange-400/30 selection:text-orange-400 bg-black">

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4 bg-[#0B0F14]/90 backdrop-blur-xl border-b border-secondary-accent/10" : "py-6 bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">
            Stylernow
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="border border-orange-400 bg-transparent hover:bg-orange-400 text-[10px] px-6 py-2 uppercase tracking-[0.2em] text-white transition-all rounded-full">{primaryCTA}</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-secondary-accent/10 p-8 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-300 hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="bg-orange-400 text-white hover:bg-orange-500 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-full" onClick={() => setIsMenuOpen(false)}>{primaryCTA}</a>
          </motion.div>
        )}
      </nav>

      {/* 2. HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-main.jpg"
            alt="Hero Background"
            className="w-full h-full object-contain md:object-cover object-center select-none pointer-events-none"
          />
          {/* Gradient Overlays to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Content Container - Split into Top (Text) and Bottom (CTA) */}
        {/* Content Container - Split into Top (Text) and Bottom (CTA) */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-between pb-16 pt-20 md:pb-56 md:pt-32 px-6">

          {/* TOP: Title (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-[0.9] tracking-tighter text-white drop-shadow-2xl uppercase">
              La Gestión <span className="text-orange-400">Premium</span> que tu <br className="hidden md:block" /> Barbería <span className="text-orange-400">merece.</span>
            </h1>
          </motion.div>

          {/* BOTTOM: CTA Button (Centered to align with Title) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-3 md:gap-4"
          >
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-xl md:max-w-2xl text-center leading-relaxed font-medium opacity-90 drop-shadow-lg mb-1 md:mb-2">
              Gestiona reservas, pagos y clientes... Aumenta tus ingresos y ahorra tiempo con StylerNow.
            </p>

            <a href="#leads" className="bg-orange-400 text-white hover:bg-orange-500 px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-orange-400/20 transition-all rounded-full transform hover:scale-105">
              {primaryCTA}
            </a>
            <p className="text-[9px] md:text-[10px] text-center text-gray-300 uppercase tracking-widest font-bold opacity-60 md:ml-2">
              Solo 1000 cupos para el lanzamiento beta.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. SOFT SOCIAL PROOF (Stats) */}
      < section className="py-24 border-y border-secondary-accent/5 bg-surface/30 relative overflow-hidden" >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Stat 1: Waitlist */}
            <motion.div {...fadeUp} className="flex flex-col items-center text-center space-y-4">
              <Counter isLive={true} prefix="+" />
              <div className="space-y-1 px-4">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Solicitudes en lista de espera</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Acceso solo por invitación.</p>
              </div>
            </motion.div>

            {/* Stat 2: New this week */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center space-y-4">
              <Counter targetValue={47} prefix="+" />
              <div className="space-y-1 px-4">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Nuevas solicitudes esta semana</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">El interés sigue creciendo.</p>
              </div>
            </motion.div>

            {/* Stat 3: Onboarding */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center space-y-4">
              <Counter targetValue={138} isLive={true} />
              <div className="space-y-1 px-4">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Barberías en onboarding</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Configurándose ahora mismo.</p>
              </div>
            </motion.div>

            {/* Stat 4: Acceptance Rate */}
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col items-center text-center space-y-4">
              <Counter targetValue={78} suffix="%" />
              <div className="space-y-1 px-4">
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Tasa de aceptación</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-60 font-bold">Acceso limitado por cupos.</p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex justify-center mt-16">
            <a href="#leads" className="bg-orange-400 text-white hover:bg-orange-500 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-orange-400/10 transition-all rounded-full">
              {primaryCTA}
            </a>
          </motion.div>
        </div>
      </section >

      {/* 4. VALUE PROPOSITION */}
      < section id="por-que" className="relative" >
        <HeroCarousel />
      </section >

      {/* 5. HOW IT WORKS */}
      < section id="como-funciona" className="relative py-24 md:py-40 px-6 overflow-hidden" >
        {/* Premium Barber Background - Fixed height on mobile to prevent extreme zoom */}
        < div className="absolute top-0 left-0 right-0 h-[600px] md:h-full z-0 opacity-30 md:opacity-40 filter grayscale contrast-125 overflow-hidden" >
          <img
            src="/images/steps-bg-premium.png"
            alt="Premium Barber Background"
            className="w-full h-full object-cover object-[center_20%] md:object-center select-none pointer-events-none transition-all duration-1000"
          />
          {/* Multi-stage gradient to blend into background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background md:via-background/20" />
        </div >

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter">Tu negocio, en su mejor versión.</h2>
          </motion.div>

          <div className="space-y-32 md:space-y-40">
            {[
              {
                step: "01",
                text: "Configura una vez — Tu barbería queda organizada desde el primer día.",
                img: "/images/services.png"
              },
              {
                step: "02",
                text: "El sistema trabaja — Clientes agendan, el bot confirma, tú solo atiendes.",
                img: "/images/bot.png"
              },
              {
                step: "03",
                text: "Tú decides con datos — Crecimiento basado en números reales.",
                img: "/images/finances.png"
              }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 lg:gap-32`}>
                <motion.div {...fadeUp} className="flex-1 space-y-10">
                  {/* Circular Step Indicator */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Outer Yellow Circle */}
                    <div className="absolute inset-0 bg-orange-400 rounded-full shadow-[0_0_40px_rgba(251,146,60,0.2)]" />
                    {/* Inner Black Circle */}
                    <div className="absolute w-[80%] h-[80%] bg-[#121212] rounded-full flex items-center justify-center border border-orange-400/10">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">PASO</span>
                        <span className="text-3xl font-black text-orange-400 tracking-tighter">{step.step}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase">{step.text}</h3>
                  <a href="#leads" className="border border-orange-400 text-white hover:bg-orange-400 inline-flex px-10 py-4 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-full">
                    {primaryCTA}
                  </a>
                </motion.div>
                <div className="flex-1 relative w-full group">
                  <div className="aspect-video rounded-[2rem] overflow-hidden bg-surface border border-secondary-accent/10 shadow-2xl">
                    <img src={step.img} alt={`Step ${step.step}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 6. INTERFACE (GALLERY) */}
      < section id="experiencia" className="py-40 px-6" >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-32 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase">Elegancia que se siente. Control que se nota.</h2>
            <p className="text-orange-400 text-xl md:text-2xl font-medium opacity-70">Diseñado para verse bien y funcionar mejor.</p>
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
            {[
              { src: "/images/agenda.png", title: "Agenda" },
              { src: "/images/inventory.png", title: "Inventario" },
              { src: "/images/clients.png", title: "Clientes" },
              { src: "/images/services.png", title: "Servicios" }
            ].map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="iphone-frame w-full aspect-[9/19] flex items-center justify-center overflow-hidden bg-surface/50 border-secondary-accent/20">
                  <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <a href="#leads" className="bg-orange-400 text-white hover:bg-orange-500 px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all rounded-full">
              Explorar experiencia →
            </a>
          </div>
        </div>
      </section >

      {/* 7. PRICING (INVERSIÓN) */}
      < section id="inversion" className="py-40 px-6 bg-surface/10 border-y border-secondary-accent/5" >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase">Inversión para miembros fundadores</h2>
            <p className="text-orange-400 text-xl md:text-2xl font-medium opacity-70">Precio preferencial solo durante esta fase privada.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Reclamar acceso fundador",
              "Asegurar precio preferencial",
              "Solicitar demo privada"
            ].map((btn, i) => (
              <motion.div
                key={btn}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`premium-card p-12 text-center flex flex-col items-center justify-between min-h-[300px] ${i === 1 ? 'border-orange-400 shadow-2xl shadow-orange-400/10' : 'border-gray-800'}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary-accent/5 flex items-center justify-center mb-8">
                  {i === 0 ? <Zap className="text-orange-400" size={24} /> : i === 1 ? <ShieldCheck className="text-orange-400" size={24} /> : <ArrowRight className="text-orange-400" size={24} />}
                </div>
                <a href="#leads" className={`w-full py-5 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full ${i === 1 ? 'bg-orange-400 text-white hover:bg-orange-500' : 'border border-orange-400 text-white hover:bg-orange-400'}`}>
                  {btn}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-12 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 opacity-50">
            El precio se bloquea al solicitar acceso, no al activar.
          </p>
        </div>
      </section >

      {/* 8. FINAL CAPTURE */}
      < section id="leads" className="py-40 px-6 relative overflow-hidden bg-background" >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 filter grayscale"
          >
            <source src="/images/herovideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp} className="space-y-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">¿Vas a esperar a que tu competencia lo haga primero?</h2>
            <p className="text-2xl text-orange-400 font-medium opacity-80 leading-relaxed">
              El acceso se cierra cuando se completan los cupos disponibles.
            </p>
            <div className="space-y-4 pt-4">
              <a href="#leads" className="bg-orange-400 hover:bg-orange-500 inline-flex px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all rounded-full">
                {primaryCTA}
              </a>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black opacity-40">
                Datos protegidos. Control total. Tú manejas tu dinero.
              </p>
            </div>
          </motion.div>

          <div className="w-full">
            <LeadForm />
          </div>
        </div>
      </section >

      {/* 9. FOOTER */}
      < footer className="py-32 px-6 bg-background border-t border-secondary-accent/5" >
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
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Navegación</h4>
                <div className="flex flex-col space-y-4 text-sm font-bold text-gray-400">
                  <a href="#experiencia" className="hover:text-orange-400 transition-colors transition-all">Experiencia</a>
                  <a href="#inversion" className="hover:text-orange-400 transition-colors transition-all">Inversión</a>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Legal</h4>
                <div className="flex flex-col space-y-4 text-sm font-bold text-gray-400">
                  <LegalLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-secondary-accent/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 opacity-40">© 2026 Stylernow. Private Access Only.</p>
            <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
              <ShieldCheck size={20} />
              <div className="text-[8px] font-black uppercase tracking-[0.2em]">SSL Encrypted</div>
            </div>
          </div>
        </div>
      </footer >
    </main >
  );
}

