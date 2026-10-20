import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingWizard } from './components/BookingWizard';
import { ServicesShowcase } from './components/ServicesShowcase';
import { LordSpace } from './components/LordSpace';
import { MallPerks } from './components/MallPerks';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#f5f5f7] flex flex-col font-sans">
      {/* Barra de Navegação */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        <Hero />
        <BookingWizard />
        <ServicesShowcase />
        <LordSpace />
        <MallPerks />
        <Reviews />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante de Atendimento */}
      <FloatingWhatsApp />
    </div>
  );
}
