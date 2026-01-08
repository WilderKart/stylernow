"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Wallet,
  CheckCircle2,
  Users,
  Package,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Rocket,
  Zap,
  HandCoins,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import LeadForm from "@/components/LeadForm";
import { LegalLinks, ContactInfo } from "@/components/Legal";

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
    <main className="relative min-h-screen selection:bg-primary-accent/30 selection:text-primary-accent bg-background">

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4 bg-background/90 backdrop-blur-xl border-b border-secondary-accent/10" : "py-6 bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-primary-accent">
            Stylernow
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-secondary-text hover:text-main-text transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="btn-outline-gold text-[10px] px-6 py-2 uppercase tracking-[0.2em]">{primaryCTA}</a>
          </div>

          <button className="md:hidden text-main-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                className="text-lg font-bold text-secondary-text hover:text-primary-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="btn-gold text-center py-4 text-xs font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>{primaryCTA}</a>
          </motion.div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-40 pb-24 lg:pt-60 lg:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-bg.png"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          >
            <source src="/images/herovideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-primary-accent/5 border border-primary-accent/10 text-primary-accent text-[10px] font-black tracking-[0.3em] uppercase">
              Acceso privado — Cupos limitados
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-main-text max-w-5xl mx-auto">
              Mientras tú creas estilo, tu agenda se llena sola.
            </h1>

            <p className="text-lg md:text-2xl text-secondary-text max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
              Reservas automáticas, confirmaciones inteligentes y control total del negocio en una sola plataforma premium.
            </p>

            <div className="flex flex-col items-center gap-6 pt-4">
              <a href="#leads" className="btn-gold px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-primary-accent/20">
                {primaryCTA}
              </a>
              <p className="text-[10px] text-secondary-text uppercase tracking-widest font-bold opacity-50">
                Datos protegidos. Control total. Tú manejas tu dinero.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SOFT SOCIAL PROOF */}
      <section className="py-20 border-y border-secondary-accent/5 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-medium text-main-text">
              Lista de espera activa • Barberías en proceso de activación • Acceso por invitación
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-text font-bold">
              Nuevas barberías aceptadas cada semana.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <a href="#leads" className="inline-flex items-center gap-2 text-primary-accent font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all group">
              {primaryCTA} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION */}
      <section id="por-que" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-32 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-main-text tracking-tight max-w-4xl mx-auto uppercase">La ventaja que separa a una barbería común de una que crece.</h2>
            <p className="text-secondary-text text-xl md:text-2xl max-w-2xl mx-auto font-medium opacity-70">
              Diseñado para dueños que quieren control, orden y crecimiento real.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Calendar, title: "El fin del caos", desc: "Agenda visual, sin dobles reservas ni mensajes perdidos." },
              { icon: MessageSquare, title: "Tu secretaria 24/7", desc: "El bot atiende, confirma y recuerda por ti." },
              { icon: Wallet, title: "Control financiero real", desc: "Ingresos, propinas y gastos claros en tiempo real." },
              { icon: HandCoins, title: "Pagos claros, equipos leales", desc: "Comisiones automáticas, sin discusiones." },
              { icon: Users, title: "Relaciones, no contactos", desc: "Historial, preferencias y fidelización." },
              { icon: Package, title: "Inventario sin pérdidas", desc: "Stock siempre bajo control." }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="premium-card group hover:bg-surface/50 border-secondary-accent/5 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-accent/5 flex items-center justify-center mb-8 border border-primary-accent/10">
                  <card.icon className="text-primary-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-main-text tracking-tight">{card.title} —</h3>
                <p className="text-secondary-text leading-relaxed text-lg font-medium opacity-80 mb-8">{card.desc}</p>
                <a href="#leads" className="inline-flex items-center gap-2 text-primary-accent text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  Ver cómo funciona <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="como-funciona" className="py-40 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-32">
            <h2 className="text-4xl md:text-7xl font-bold text-main-text uppercase">Tu negocio, en su mejor versión.</h2>
          </motion.div>

          <div className="space-y-40">
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
                <motion.div {...fadeUp} className="flex-1 space-y-8">
                  <div className="text-primary-accent font-black text-4xl opacity-20 tracking-tighter">Step {step.step}</div>
                  <h3 className="text-3xl md:text-5xl font-bold text-main-text leading-tight">{step.text}</h3>
                  <a href="#leads" className="btn-outline-gold inline-flex px-10 py-4 text-[10px] uppercase font-bold tracking-[0.2em]">
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
      </section>

      {/* 6. INTERFACE (GALLERY) */}
      <section id="experiencia" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-32 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-main-text uppercase">Elegancia que se siente. Control que se nota.</h2>
            <p className="text-secondary-text text-xl md:text-2xl font-medium opacity-70">Diseñado para verse bien y funcionar mejor.</p>
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
            <a href="#leads" className="btn-gold px-12 py-5 text-sm font-bold uppercase tracking-[0.2em]">
              Explorar experiencia →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PRICING (INVERSIÓN) */}
      <section id="inversion" className="py-40 px-6 bg-surface/10 border-y border-secondary-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-main-text uppercase">Inversión para miembros fundadores</h2>
            <p className="text-secondary-text text-xl md:text-2xl font-medium opacity-70">Precio preferencial solo durante esta fase privada.</p>
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
                className={`premium-card p-12 text-center flex flex-col items-center justify-between min-h-[300px] ${i === 1 ? 'border-primary-accent shadow-2xl shadow-primary-accent/10' : 'border-secondary-accent/5'}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary-accent/5 flex items-center justify-center mb-8">
                  {i === 0 ? <Zap className="text-primary-accent" size={24} /> : i === 1 ? <ShieldCheck className="text-primary-accent" size={24} /> : <ArrowRight className="text-primary-accent" size={24} />}
                </div>
                <a href="#leads" className={`w-full py-5 rounded-lg text-xs font-black uppercase tracking-[0.2em] transition-all ${i === 1 ? 'bg-primary-accent text-background hover:brightness-110' : 'border border-primary-accent/30 text-primary-accent hover:border-primary-accent'}`}>
                  {btn}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-12 text-[10px] uppercase font-bold tracking-[0.3em] text-secondary-text opacity-50">
            El precio se bloquea al solicitar acceso, no al activar.
          </p>
        </div>
      </section>

      {/* 8. FINAL CAPTURE */}
      <section id="leads" className="py-40 px-6 relative overflow-hidden bg-background">
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
            <h2 className="text-5xl md:text-8xl font-black text-main-text leading-[0.9] tracking-tighter uppercase">¿Vas a esperar a que tu competencia lo haga primero?</h2>
            <p className="text-2xl text-secondary-text font-medium opacity-80 leading-relaxed">
              El acceso se cierra cuando se completan los cupos disponibles.
            </p>
            <div className="space-y-4 pt-4">
              <a href="#leads" className="btn-gold inline-flex px-12 py-5 text-sm font-bold uppercase tracking-[0.2em]">
                {primaryCTA}
              </a>
              <p className="text-[10px] text-secondary-text uppercase tracking-widest font-black opacity-40">
                Datos protegidos. Control total. Tú manejas tu dinero.
              </p>
            </div>
          </motion.div>

          <div className="w-full">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-32 px-6 bg-background border-t border-secondary-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
            <div className="space-y-8 max-w-sm">
              <div className="text-3xl font-bold tracking-tighter text-primary-accent">
                Stylernow
              </div>
              <p className="text-secondary-text text-lg font-medium opacity-60 leading-relaxed">
                Stylernow — The operating system for modern barbershops.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-main-text">Navegación</h4>
                <div className="flex flex-col space-y-4 text-sm font-bold text-secondary-text">
                  <a href="#experiencia" className="hover:text-primary-accent transition-colors transition-all">Experiencia</a>
                  <a href="#inversion" className="hover:text-primary-accent transition-colors transition-all">Inversión</a>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-main-text">Legal</h4>
                <div className="flex flex-col space-y-4 text-sm font-bold text-secondary-text">
                  <LegalLinks />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-secondary-accent/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary-text opacity-40">© 2026 Stylernow. Private Access Only.</p>
            <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
              <ShieldCheck size={20} />
              <div className="text-[8px] font-black uppercase tracking-[0.2em]">SSL Encrypted</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

