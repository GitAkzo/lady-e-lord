import React from 'react';
import { Sparkles, Calendar, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/servicesData';

export function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Glow e iluminação de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Texto e Proposta de Valor */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-[#d4af37]/30 text-xs text-[#f3e3a9]">
              <Sparkles size={13} className="text-[#d4af37]" />
              <span>A maior rede de beleza do Brasil em Guarapuava</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Sua experiência de <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">beleza & bem-estar</span> <br />
              no Cidade dos Lagos.
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-lg text-[#a2a2b0] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Ambiente de alto padrão para cuidar dos seus cabelos, estética e momentos especiais. Com a comodidade e segurança do Shopping Cidade dos Lagos, estacionamento coberto e atendimento estendido até as 22h.
            </p>

            {/* CTAs de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#agendamento"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#d4af37] via-[#f3e3a9] to-[#d4af37] shadow-lg shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar size={18} />
                Agendar Horário Online
              </a>
              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-medium text-[#f5f5f7] bg-[#14141a] hover:bg-[#1c1c24] border border-white/10 hover:border-[#d4af37]/40 transition-all group"
              >
                Ver Catálogo de Serviços
                <ArrowRight size={16} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Provas Sociais e Badges */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs text-[#8f8f9d]">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold text-white">{SALON_INFO?.rating ?? 4.9}</span>
                <span>({SALON_INFO?.reviewsCount ?? 380}+ avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#d4af37]" />
                <span>Tradição de 35+ anos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Piso L1 • Estacionamento Coberto</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual com Card de Apresentação */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura com gradiente de luxo */}
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#131318] p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                  alt="Espaço Lady & Lord Salão de Beleza"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Card no canto */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0a0d]/85 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-[#d4af37] uppercase font-semibold tracking-wider">Espaço Lady & Lord</p>
                    <p className="text-sm font-serif-luxury font-bold text-white">Do visual clássico às novas tendências</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Vagas Abertas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
