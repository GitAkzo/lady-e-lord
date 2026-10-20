import React from 'react';
import { SERVICES_LORD } from '../data/servicesData';
import { Scissors, Coffee, Clock, ArrowRight } from 'lucide-react';

export function LordSpace() {
  return (
    <section id="espaco-lord" className="py-20 bg-[#0c0c10] border-t border-[#d4af37]/15 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner de Apresentação Lord */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#d4af37]/30 text-xs text-[#d4af37] uppercase font-semibold">
              <Scissors size={13} />
              Barbearia & Cuidados Masculinos
            </div>
            
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
              Espaço Lord: <br />
              <span className="text-[#d4af37]">O clube masculino de beleza</span> no shopping.
            </h2>
            
            <p className="text-sm sm:text-base text-[#9b9ba8] leading-relaxed font-light">
              Desde a fundação da rede, o espaço Lord foi desenhado para o homem contemporâneo que valoriza precisão no corte, barba impecável e uma pausa no dia com conforto, privacidade e cerveja ou café especial.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#d4af37]">
              <span className="flex items-center gap-2">
                <Coffee size={14} /> Café & Cerveja Cortesia
              </span>
              <span className="flex items-center gap-2">
                <Scissors size={14} /> Toalha Quente & Ozônio
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Estacionamento do Shopping
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                alt="Espaço Lord Barbearia Masculina"
                className="w-full h-72 sm:h-80 object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#d0d0dc]">
                📍 Espaço exclusivo e privativo dentro da unidade Cidade dos Lagos.
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Serviços do Espaço Lord */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(SERVICES_LORD ?? []).map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-xl bg-[#13131a] border border-white/10 hover:border-[#d4af37]/40 flex flex-col justify-between transition-all group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#d4af37] mb-2 font-medium">
                  <span>{service.tagline}</span>
                  {service.popular && (
                    <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[10px] font-bold uppercase">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#f3e3a9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#8f8f9d] mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] text-[#7d7d8a]">
                  <Clock size={12} className="text-[#d4af37]" />
                  {service.duration}
                </span>
                <a
                  href="#agendamento"
                  className="text-xs font-semibold text-[#d4af37] hover:text-white flex items-center gap-1"
                >
                  Agendar <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
