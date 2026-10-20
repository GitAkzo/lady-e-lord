import React from 'react';
import { SALON_INFO } from '../data/servicesData';
import { MapPin, Clock, MessageCircle, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0d]/90 backdrop-blur-md border-b border-[#d4af37]/20">
      {/* Top Banner de Informações Rápidas */}
      <div className="bg-[#121216] text-xs py-1.5 px-4 text-[#9b9ba6] border-b border-white/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <span className="flex items-center gap-1.5 text-[#d4af37]">
            <MapPin size={13} className="text-[#d4af37]" />
            {SALON_INFO?.subtitle ?? 'Shopping Cidade dos Lagos'} • Piso L1
          </span>
          <span className="hidden md:flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Aberto hoje até 22h
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {SALON_INFO?.openingHours ?? ''}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-gradient-to-br from-[#1a1a22] to-[#0d0d12] flex items-center justify-center text-[#d4af37] font-serif font-bold text-lg shadow-sm group-hover:border-[#d4af37] transition-colors">
            L&L
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#f5f5f7] uppercase group-hover:text-[#f3e3a9] transition-colors">
              Lady & Lord
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
              Cidade dos Lagos • Guarapuava
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#c8c8d0]">
          <a href="#agendamento" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#d4af37]" />
            Pré-Agendamento
          </a>
          <a href="#servicos" className="hover:text-[#d4af37] transition-colors">
            Espaço Lady
          </a>
          <a href="#espaco-lord" className="hover:text-[#d4af37] transition-colors">
            Espaço Lord (Barbearia)
          </a>
          <a href="#diferenciais" className="hover:text-[#d4af37] transition-colors">
            Shopping & Conforto
          </a>
          <a href="#localizacao" className="hover:text-[#d4af37] transition-colors">
            Localização
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#agendamento"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#d4af37] via-[#f3e3a9] to-[#d4af37] rounded-full shadow-md hover:shadow-[#d4af37]/25 hover:brightness-105 active:scale-95 transition-all"
          >
            Agendar Horário
          </a>
          <a
            href={`https://wa.me/${SALON_INFO?.whatsappRaw}?text=${encodeURIComponent('Olá, gostaria de informações sobre os serviços do Lady & Lord Cidade dos Lagos!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-[#f5f5f7] bg-[#1a1a24] hover:bg-[#222230] border border-white/10 rounded-full flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle size={16} className="text-emerald-400" />
            <span className="hidden md:inline">WhatsApp Direto</span>
          </a>
        </div>
      </div>
    </header>
  );
}
