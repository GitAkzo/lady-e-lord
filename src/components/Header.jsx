import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/servicesData';
import { MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner de Informações Rápidas (Recolhe suavemente com scroll) */}
      <div
        className={`bg-[#121217] text-[11px] px-4 text-[#9b9ba6] border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-10 opacity-100 py-1.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#d4af37] font-medium whitespace-nowrap">
              <MapPin size={12} className="text-[#d4af37]" />
              {SALON_INFO?.subtitle ?? 'Shopping Cidade dos Lagos'} • Piso L1
            </span>
            <span className="hidden sm:inline-block text-zinc-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-400 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Aberto hoje até 22h
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-[#858592] whitespace-nowrap">
            <Clock size={11} />
            <span>{SALON_INFO?.openingHours ?? ''}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#0a0a0d]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo com shrink-0 para nunca amassar */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/50 bg-gradient-to-br from-[#1c1c26] to-[#0c0c10] flex items-center justify-center text-[#d4af37] font-serif font-bold text-base shadow-sm group-hover:border-[#d4af37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all">
              L&L
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-[#f5f5f7] uppercase group-hover:text-[#f3e3a9] transition-colors leading-tight">
                Lady & Lord
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d4af37] uppercase font-semibold whitespace-nowrap">
                Cidade dos Lagos • Guarapuava
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Limpos e sem quebra */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#c8c8d0]">
            <a href="#agendamento" className="hover:text-[#d4af37] transition-colors whitespace-nowrap flex items-center gap-1.5 text-[#f3e3a9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
              Agenda
            </a>
            <a href="#servicos" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Espaço Lady
            </a>
            <a href="#espaco-lord" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Espaço Lord
            </a>
            <a href="#diferenciais" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              O Salão
            </a>
            <a href="#localizacao" className="hover:text-[#d4af37] transition-colors whitespace-nowrap">
              Localização
            </a>
          </nav>

          {/* CTAs da Direita com whitespace-nowrap rigoroso */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#d4af37] via-[#f3e3a9] to-[#d4af37] rounded-full shadow-md shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <Calendar size={13} className="text-[#0a0a0d]" />
              <span>Agendar Horário</span>
            </a>

            <a
              href={`https://wa.me/${SALON_INFO?.whatsappRaw}?text=${encodeURIComponent('Olá, gostaria de informações sobre os serviços do Lady & Lord Cidade dos Lagos!')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp da Recepção"
              className="w-10 h-10 rounded-full bg-[#161622] hover:bg-[#1e1e2d] border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-sm relative group transition-all"
              title="Recepção no WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0d]"></span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
