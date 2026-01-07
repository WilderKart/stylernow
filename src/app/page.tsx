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
  CreditCard,
  Rocket,
  Zap,
  HandCoins,
  LayoutDashboard
} from "lucide-react";
import { useState, useEffect } from "react";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    { name: "Inicio", href: "#inicio" },
    { name: "Funciones", href: "#funciones" },
    { name: "Galería", href: "#galeria" },
    { name: "Precios", href: "#precios" },
  ];

  return (
    <main className="relative min-h-screen selection:bg-primary-accent/30 selection:text-primary-accent bg-background">

      {/* 1. STICKY NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4 bg-background/90 backdrop-blur-xl border-b border-secondary-accent/20 shadow-2xl" : "py-6 bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-primary-accent flex items-center gap-2">
            Stylernow
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-secondary-text hover:text-main-text transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="btn-outline-gold text-sm px-6">Acceso Beta</a>
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
            className="absolute top-full left-0 right-0 bg-surface border-b border-secondary-accent/20 p-8 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-secondary-text hover:text-primary-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#leads" className="btn-gold text-center py-4" onClick={() => setIsMenuOpen(false)}>Acceso Beta</a>
          </motion.div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 px-6 overflow-hidden">
        {/* Hero Background Video */}
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-bg.png"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/images/herovideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-accent/10 blur-[150px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-10 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-primary-accent text-xs font-bold tracking-widest uppercase mb-4">
              <Zap size={14} /> El SaaS de los barberos élite
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-main-text">
              Tu Barbería <br /> en <span className="text-primary-accent">Autopiloto</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Automatiza tus citas por WhatsApp, controla el inventario y lleva tu caja sin errores. Hecho en Cali para barberos que valoran su tiempo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <a href="#leads" className="btn-gold w-full sm:w-auto px-10 py-4 text-lg">
                🔥 EMPEZAR GRATIS
              </a>
              <a href="https://wa.me/573123456789" target="_blank" className="btn-whatsapp w-full sm:w-auto px-10 py-4 text-lg">
                <MessageSquare size={20} /> Hablar por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative flex justify-center"
          >
            {/* Phone Mockup */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="iphone-frame w-[320px] md:w-[380px] aspect-[9/19.5] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-background p-6 pt-14 flex flex-col gap-6">
                {/* Mockup Header */}
                <div className="flex justify-between items-center bg-surface/50 p-4 rounded-2xl border border-secondary-accent/10">
                  <div className="space-y-1">
                    <div className="text-[10px] text-secondary-text uppercase tracking-widest font-bold">Agenda Hoy</div>
                    <div className="text-sm font-bold text-main-text">14 de Octubre</div>
                  </div>
                  <Calendar className="text-primary-accent" size={20} />
                </div>

                {/* Mockup Body: Appointments */}
                <div className="space-y-3">
                  {[
                    { time: "10:00 AM", client: "Juan Perez", service: "Corte + Barba" },
                    { time: "11:30 AM", client: "Andrés G.", service: "Fade Pro" },
                    { time: "01:00 PM", client: "Camilo R.", service: "Básico" },
                  ].map((appt, i) => (
                    <div key={i} className="bg-surface/30 p-4 rounded-2xl border border-secondary-accent/10 flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="text-sm font-bold text-main-text">{appt.client}</div>
                        <div className="text-[10px] text-secondary-text">{appt.service}</div>
                      </div>
                      <div className="text-[10px] font-black text-primary-accent bg-primary-accent/10 px-2 py-1 rounded-lg">{appt.time}</div>
                    </div>
                  ))}
                </div>

                {/* Mockup Stats */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-primary-accent/10 border border-primary-accent/20 rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
                    <Wallet size={20} className="text-primary-accent" />
                    <div className="text-[10px] font-bold text-main-text">$450k</div>
                  </div>
                  <div className="flex-1 bg-success/10 border border-success/20 rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
                    <Users size={20} className="text-success" />
                    <div className="text-[10px] font-bold text-main-text">+12</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Orbit */}
            <div className="absolute -z-10 w-[500px] h-[500px] border border-primary-accent/10 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0] z-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 76.7C480 73.3 600 86.7 720 90C840 93.3 960 86.7 1080 80C1200 73.3 1320 66.7 1380 63.3L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#1A2430" />
          </svg>
        </div>
      </section>

      {/* 3. STATS COUNTER */}
      <section className="relative z-30 -mt-12 px-6">
        <div className="max-w-4xl mx-auto glass-bar p-10 flex flex-col md:flex-row items-center justify-around gap-12 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary-accent tracking-tighter">+500</div>
            <div className="text-xs font-bold text-secondary-text uppercase tracking-widest">Barberos</div>
          </div>
          <div className="w-px h-16 bg-primary-accent/10 hidden md:block" />
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary-accent tracking-tighter">+15k</div>
            <div className="text-xs font-bold text-secondary-text uppercase tracking-widest">Citas</div>
          </div>
          <div className="w-px h-16 bg-primary-accent/10 hidden md:block" />
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary-accent tracking-tighter">0</div>
            <div className="text-xs font-bold text-secondary-text uppercase tracking-widest">Estrés</div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section id="funciones" className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-main-text">Todo lo que necesitas</h2>
            <p className="text-secondary-text text-lg max-w-2xl mx-auto font-medium">
              Diseñado específicamente para el flujo de trabajo de una barbería moderna en Colombia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Agenda", desc: "Gestión de citas visual y rápida con recordatorios automáticos." },
              { icon: MessageSquare, title: "WhatsApp Bot", desc: "El bot atiende a tus clientes mientras estás cortando el pelo." },
              { icon: Wallet, title: "Caja", desc: "Flujo de dinero, propinas y gastos diarios sin descuadres." },
              { icon: HandCoins, title: "Comisiones", desc: "Cálculo automático de comisiones para cada barbero del equipo." },
              { icon: Users, title: "Clientes", desc: "Base de datos con historial de cortes, galerías y preferencias." },
              { icon: Package, title: "Inventario", desc: "Control de productos para venta y uso interno de la barbería." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="premium-card group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-8 border border-secondary-accent/20 group-hover:border-primary-accent group-hover:bg-primary-accent/5 transition-all duration-300">
                  <feature.icon className="text-primary-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-main-text">{feature.title}</h3>
                <p className="text-secondary-text leading-relaxed text-base font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-32 px-6 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto space-y-40">

          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <motion.div {...fadeUp} className="flex-1 space-y-8">
              <span className="text-primary-accent font-black text-xs tracking-[0.3em] uppercase py-2 px-4 bg-primary-accent/10 border border-primary-accent/20 rounded-full">Fase 01</span>
              <h2 className="text-4xl md:text-7xl font-bold text-main-text leading-tight">Configura <br /> tu Perfil</h2>
              <p className="text-xl text-secondary-text leading-relaxed">
                Registra tus barberos, servicios y horarios en menos de 5 minutos. Nuestra interfaz intuitiva no requiere conocimientos técnicos.
              </p>
              <div className="flex items-center gap-4 text-primary-accent font-bold text-lg">
                <CheckCircle2 size={24} /> Personalización total por barbero
              </div>
            </motion.div>
            <div className="flex-1 relative">
              <div className="iphone-frame w-full max-w-[500px] aspect-[16/9] flex items-center justify-center overflow-hidden bg-surface/20">
                <img src="/images/services.png" alt="Configuración de Servicios" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-20 lg:gap-32">
            <motion.div {...fadeUp} className="flex-1 space-y-8">
              <span className="text-primary-accent font-black text-xs tracking-[0.3em] uppercase py-2 px-4 bg-primary-accent/10 border border-primary-accent/20 rounded-full">Fase 02</span>
              <h2 className="text-4xl md:text-7xl font-bold text-main-text leading-tight">Comparte <br /> tu Link</h2>
              <p className="text-xl text-secondary-text leading-relaxed">
                Tus clientes agendan directamente desde tu biografía de Instagram o por WhatsApp. El bot confirma la cita automáticamente por ti.
              </p>
              <div className="flex items-center gap-4 text-primary-accent font-bold text-lg">
                <CheckCircle2 size={24} /> Integración directa con Meta
              </div>
            </motion.div>
            <div className="flex-1 relative">
              <div className="iphone-frame w-full max-w-[500px] aspect-[16/9] flex items-center justify-center overflow-hidden bg-surface/20">
                <img src="/images/bot.png" alt="WhatsApp Bot" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            <motion.div {...fadeUp} className="flex-1 space-y-8">
              <span className="text-success font-black text-xs tracking-[0.3em] uppercase py-2 px-4 bg-success/10 border border-success/20 rounded-full">Fase 03</span>
              <h2 className="text-4xl md:text-7xl font-bold text-success leading-tight">Recibe <br /> Dinero</h2>
              <p className="text-xl text-secondary-text leading-relaxed">
                Controla cada peso que entra. Stylernow gestiona tus cobros por Nequi, Bre-B o efectivo y te muestra las ganancias reales al final del día.
              </p>
              <div className="flex items-center gap-4 text-success font-bold text-lg">
                <HandCoins size={24} /> Pagos rápidos y sin fricción
              </div>
            </motion.div>
            <div className="flex-1 relative">
              <div className="iphone-frame w-full max-w-[500px] aspect-[16/9] flex items-center justify-center overflow-hidden bg-surface/20">
                <img src="/images/finances.png" alt="Finanzas y Pagos" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. APP SCREENSHOTS CAROUSEL */}
      <section id="galeria" className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-main-text">La Interfaz que enamora</h2>
            <p className="text-secondary-text text-xl font-medium">Elegancia y funcionalidad en la palma de tu mano.</p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-24 swiper-custom"
          >
            {[
              { src: "/images/agenda.png", title: "Agenda" },
              { src: "/images/inventory.png", title: "Inventario" },
              { src: "/images/clients.png", title: "Clientes" },
              { src: "/images/services.png", title: "Servicios" }
            ].map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="iphone-frame w-full aspect-[9/19] flex items-center justify-center overflow-hidden bg-background/50 group">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. PRICING TABLES */}
      <section id="precios" className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-main-text">Crecimiento a tu medida</h2>
            <p className="text-secondary-text text-xl font-medium">Sin contratos a largo plazo. Cancela cuando quieras.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Barbero Pro", price: "Gratis", features: ["1 Barbero", "Agenda Básica", "Bot de Citas", "Reportes Mensuales"], cta: "Empezar Hoy", popular: false },
              { title: "Barbería Expert", price: "$49k/mes", features: ["Hasta 5 Barberos", "Agenda Pro", "Bot Personalizado", "Gestión de Caja", "Inventario"], cta: "Lo Más Elegido", popular: true },
              { title: "Franquicia Master", price: "Contacto", features: ["Sedes Ilimitadas", "Barberos Ilimitados", "API Acceso", "Soporte 24/7", "Personalización Full"], cta: "Hablar con Ventas", popular: false }
            ].map((plan) => (
              <motion.div
                key={plan.title}
                {...fadeUp}
                className={`relative premium-card flex flex-col items-center text-center p-12 ${plan.popular ? "!border-primary-accent ring-2 ring-primary-accent/20 scale-105 z-10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-primary-accent text-background text-xs font-black uppercase rounded-full shadow-xl">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-main-text">{plan.title}</h3>
                <div className="text-5xl font-black text-primary-accent mb-10 tracking-tighter">{plan.price}</div>
                <ul className="space-y-5 mb-12 flex-1 text-secondary-text w-full">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircle2 size={20} className="text-success shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#leads" className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.popular ? "bg-primary-accent text-background hover:brightness-110 shadow-lg shadow-primary-accent/20" : "border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-background"}`}>
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DOWNLOAD / CTA AREA */}
      <section id="leads" className="py-32 px-6 relative bg-gradient-to-t from-background via-surface to-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-8">
            <div className="w-24 h-24 bg-primary-accent/10 rounded-[2rem] flex items-center justify-center mx-auto border border-primary-accent/20 shadow-inner">
              <Rocket className="text-primary-accent" size={48} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-main-text leading-[1.1]">Deja de perder dinero hoy mismo.</h2>
            <p className="text-secondary-text text-2xl font-medium">Únete a la nueva era de barberías digitales en Cali.</p>

            <div className="pt-6">
              <a href="#leads" className="btn-gold !bg-primary-accent !text-background px-12 py-5 text-xl font-black tracking-widest shadow-2xl shadow-primary-accent/30 hover:scale-105">
                🚀 QUIERO MI BARBERÍA LLENA
              </a>
            </div>
          </motion.div>

          <div className="w-full bg-surface/50 p-8 md:p-12 rounded-[2.5rem] border border-secondary-accent/20 backdrop-blur-xl shadow-2xl">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-24 bg-background px-6 border-t border-secondary-accent/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <div className="text-4xl font-black tracking-tighter text-primary-accent">
              Stylernow
            </div>
            <p className="text-secondary-text max-w-xs text-lg font-medium leading-relaxed">
              La plataforma que está transformando la industria de la barbería en el Valle del Cauca.
            </p>
            <div className="flex gap-4">
              {[Users, Package, MessageSquare].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-main-text hover:bg-primary-accent hover:text-background transition-all cursor-pointer border border-secondary-accent/10">
                  <Icon size={22} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h4 className="text-main-text font-black uppercase tracking-widest text-sm">Producto</h4>
              <div className="flex flex-col space-y-4 text-base font-bold text-secondary-text">
                <a href="#funciones" className="hover:text-primary-accent transition-colors">Funciones</a>
                <a href="#precios" className="hover:text-primary-accent transition-colors">Precios</a>
                <a href="#galeria" className="hover:text-primary-accent transition-colors">Galería</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-main-text font-black uppercase tracking-widest text-sm">Legal</h4>
              <div className="flex flex-col space-y-4 text-base font-bold text-secondary-text">
                <LegalLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-16 mt-20 border-t border-secondary-accent/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <ContactInfo />
          <p className="text-sm font-bold text-secondary-text">© 2025 Stylernow. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
