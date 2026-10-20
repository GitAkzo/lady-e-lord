import React from 'react';
import { SERVICES_LADY } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export function ServicesShowcase() {
  const serviceImages = {
    mechas: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "corte-fem": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80",
    "terapia-capilar": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80",
    manicure: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
    "make-penteado": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
    noivas: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80"
  };

  return (
    <section id="servicos" className="py-20 bg-[#0a0a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Sparkles size={13} />
              Padrão de Excelência L&L
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Procedimentos & Cuidados Femininos
            </h2>
          </div>
          <p className="text-sm text-[#9b9ba8] max-w-md font-light leading-relaxed">
            Utilizamos linhas consagradas mundialmente e técnicas aperfeiçoadas pela tradição de mais de três décadas da marca Lady & Lord.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(SERVICES_LADY ?? []).map((service) => {
            const imgUrl = serviceImages[service.id] ?? "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80";
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#121217] border border-white/10 hover:border-[#d4af37]/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4af37]/5"
              >
                {/* Imagem do Serviço */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-90"></div>
                  
                  {/* Badge de Categoria */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#0a0a0d]/80 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                    {service.category}
                  </span>
                  
                  {service.popular && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#d4af37] text-[#0a0a0d]">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e3a9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#d4af37] font-medium mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-[#9b9ba8] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#7d7d8a]">
                      <Clock size={13} className="text-[#d4af37]" />
                      Tempo médio: {service.duration}
                    </span>
                    <a
                      href="#agendamento"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:text-[#f3e3a9] group/btn"
                    >
                      Reservar
                      <CheckCircle2 size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
