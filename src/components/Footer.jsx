import React from 'react';
import { SALON_INFO } from '../data/servicesData';
import { MapPin, Phone, Clock, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#08080a] border-t border-[#d4af37]/20 pt-16 pb-12 text-[#9a9aa4] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 bg-[#161620] flex items-center justify-center text-[#d4af37] font-serif font-bold text-sm">
                L&L
              </div>
              <span className="font-serif-luxury text-xl font-bold text-white tracking-wider">
                Lady & Lord
              </span>
            </div>
            <p className="text-xs text-[#828290] leading-relaxed">
              Unidade Shopping Cidade dos Lagos. A mais tradicional rede de salões de beleza do Brasil trazendo sofisticação para Guarapuava.
            </p>
          </div>

          {/* Coluna 2: Localização */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Onde Estamos</h4>
            <p className="flex items-start gap-2 text-xs">
              <MapPin size={15} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span>{SALON_INFO?.address}</span>
            </p>
            <p className="flex items-center gap-2 text-xs">
              <Phone size={14} className="text-[#d4af37] flex-shrink-0" />
              <span>{SALON_INFO?.phone}</span>
            </p>
          </div>

          {/* Coluna 3: Horários */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Horário de Funcionamento</h4>
            <p className="flex items-start gap-2 text-xs">
              <Clock size={15} className="text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span>{SALON_INFO?.openingHours}</span>
            </p>
            <p className="text-[11px] text-[#6d6d78]">
              * Atendimento em feriados conforme a convenção do Shopping.
            </p>
          </div>

          {/* Coluna 4: Redes & Agendamento */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Siga a Unidade</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ladylordbr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#161620] border border-white/10 flex items-center justify-center text-[#d4af37] hover:border-[#d4af37] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ladylordbr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#161620] border border-white/10 flex items-center justify-center text-[#d4af37] hover:border-[#d4af37] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
            <a
              href="#agendamento"
              className="inline-block mt-2 text-xs font-semibold text-[#d4af37] hover:underline"
            >
              Fazer pré-agendamento agora &rarr;
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6e6e7a]">
          <p>© {new Date().getFullYear()} Lady & Lord Cidade dos Lagos. Todos os direitos reservados.</p>
          <p>Conceito de protótipo de alta conversão desenvolvido para a unidade de Guarapuava.</p>
        </div>
      </div>
    </footer>
  );
}
