import React from 'react';
import { MALL_PERKS, SALON_INFO } from '../data/servicesData';
import { Car, Clock, Shield, Sparkles, MapPin } from 'lucide-react';

export function MallPerks() {
  const icons = [Car, Clock, Shield, Sparkles];

  return (
    <section id="diferenciais" className="py-20 bg-[#0a0a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center justify-center gap-1.5">
            <MapPin size={13} />
            Conveniência Shopping Cidade dos Lagos
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            Por que cuidar de você no Shopping?
          </h2>
          <p className="text-sm sm:text-base text-[#9b9ba8] font-light">
            Esqueça a busca por vagas na rua, chuva ou pressa com o horário comercial. A unidade Cidade dos Lagos foi planejada para o seu máximo conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(MALL_PERKS ?? []).map((perk, index) => {
            const IconComp = icons[index % icons.length] ?? Sparkles;
            return (
              <div
                key={perk.title}
                className="p-6 rounded-2xl bg-[#121217] border border-white/5 hover:border-[#d4af37]/30 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1d1d28] to-[#121217] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <IconComp size={22} />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {perk.title}
                </h3>
                <p className="text-xs text-[#9b9ba8] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner de Localização Rápida no Shopping */}
        <div id="localizacao" className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14141d] via-[#161622] to-[#14141d] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
              Localização Exata
            </span>
            <h4 className="font-serif-luxury text-2xl font-bold text-white">
              {SALON_INFO?.subtitle} • Piso L1
            </h4>
            <p className="text-xs text-[#a0a0b0]">
              {SALON_INFO?.address} • Guarapuava, PR
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/?q=Shopping+Cidade+dos+Lagos+Guarapuava"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#222230] hover:bg-[#2c2c3e] border border-white/10 text-center transition-all"
            >
              Abrir no Google Maps
            </a>
            <a
              href="#agendamento"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-center shadow-md transition-all"
            >
              Agendar Meu Horário
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
