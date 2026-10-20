import React from 'react';
import { Sparkles, Calendar, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/servicesData';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const dynamicWords = [
    'beleza & bem-estar',
    'mechas & loiros perfeitos',
    'o seu grande dia de noiva',
    'barboterapia & estilo Lord',
    'autoestima & cuidado VIP'
  ];

  const { currentText } = useTypewriter(dynamicWords, 90, 45, 2200);

  return (
    <section id="hero" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Glow de iluminação nobre de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Texto e Proposta de Valor */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181822] border border-[#d4af37]/35 text-xs text-[#f3e3a9] shadow-sm">
              <Sparkles size={13} className="text-[#d4af37]" />
              <span>A maior rede de beleza do Brasil em Guarapuava</span>
            </div>

            {/* Título Principal com Efeito Typewriter Refinado */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18]">
              Sua experiência de <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal inline-flex items-center min-h-[1.2em]">
                <span>{currentText}</span>
                <span className="inline-block w-0.5 h-8 sm:h-11 bg-[#d4af37] ml-1.5 animate-pulse"></span>
              </span>
              <br />
              no Cidade dos Lagos.
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-lg text-[#a2a2b0] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Ambiente de alto padrão para cuidar dos seus cabelos, estética e momentos especiais. Com a comodidade e segurança do Shopping Cidade dos Lagos, estacionamento coberto e atendimento estendido até as 22h.
            </p>

            {/* CTAs de Ação com Prova Social Imediata */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#agendamento"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#d4af37] via-[#f3e3a9] to-[#d4af37] shadow-lg shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <Calendar size={16} />
                  Agendar Horário Online
                </a>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-[#f5f5f7] bg-[#14141a] hover:bg-[#1c1c24] border border-white/10 hover:border-[#d4af37]/40 transition-all group whitespace-nowrap"
                >
                  Ver Catálogo de Serviços
                  <ArrowRight size={15} className="text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Micro-avaliação do Google */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#a2a2b0]">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold text-white">{SALON_INFO?.rating ?? 4.9}</span>
                <span>• Excelente no Google ({SALON_INFO?.reviewsCount ?? 380}+ avaliações)</span>
              </div>
            </div>

            {/* Badges de Confiança */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#8f8f9d]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#d4af37]" />
                <span>Tradição de 35+ anos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Piso L1 • Estacionamento Coberto</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual com Imagem Aquecida e Acolhedora */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/35 bg-[#131318] p-2.5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                  alt="Espaço de Beleza Lady & Lord Cidade dos Lagos"
                  className="w-full h-80 sm:h-[420px] object-cover rounded-xl filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-85"></div>
                
                {/* Floating Card no canto */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0a0a0d]/85 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#d4af37] uppercase font-semibold tracking-wider">Espaço Lady & Lord</p>
                    <p className="text-xs sm:text-sm font-serif-luxury font-bold text-white">Do visual clássico às novas tendências</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
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
