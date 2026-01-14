import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import HeroCarousel from "@/components/HeroCarousel";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import InterfaceGallery from "@/components/InterfaceGallery";
import PricingSection from "@/components/PricingSection";
import FinalCapture from "@/components/FinalCapture";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import SocialProofToast from "@/components/SocialProofToast";
import FAQ from "@/components/FAQ";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-orange-400/30 selection:text-orange-400 bg-black">
      <ScrollProgress />
      <Navbar />
      <MobileStickyCTA />
      <SocialProofToast />
      <Hero />
      <StatsSection />

      {/* 4. VALUE PROPOSITION */}
      <section id="por-que" className="relative">
        <HeroCarousel />
      </section>

      <FeatureShowcase />
      <InterfaceGallery />
      <PricingSection />
      <FAQ />
      <FinalCapture />
      <Footer />
    </main>
  );
}
