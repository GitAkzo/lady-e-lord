import React from 'react';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { Sparkles, Scissors, Clock, Calendar, MessageSquare, ArrowRight, Check } from 'lucide-react';

export function BookingWizard() {
  const {
    activeTab,
    handleTabChange,
    selectedServiceId,
    setSelectedServiceId,
    selectedService,
    currentServices,
    preferredShift,
    setPreferredShift,
    preferredDay,
    setPreferredDay,
    clientName,
    setClientName,
    professionalPref,
    setProfessionalPref,
    whatsappUrl
  } = useBookingWizard();

  return (
    <section id="agendamento" className="py-16 md:py-24 bg-[#0d0d12] border-y border-[#d4af37]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1b24] border border-[#d4af37]/30 text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
            <Sparkles size={13} />
            Pré-Agendamento Rápido
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Reserve seu momento em poucos cliques
          </h2>
          <p className="text-sm sm:text-base text-[#9b9ba8]">
            Escolha seu serviço e preferência de horário. Enviamos sua solicitação direto para a recepção do Cidade dos Lagos no WhatsApp!
          </p>
        </div>

        {/* Card do Wizard */}
        <div className="bg-[#131318] rounded-2xl border border-[#d4af37]/25 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Seletor de Espaço (Lady vs Lord) */}
          <div className="flex rounded-xl bg-[#0a0a0d] p-1.5 border border-white/5 max-w-md mx-auto mb-8">
            <button
              type="button"
              onClick={() => handleTabChange('lady')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'lady'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#0a0a0d] shadow-md font-bold'
                  : 'text-[#9b9ba8] hover:text-white'
              }`}
            >
              <Sparkles size={16} />
              Espaço Lady (Feminino)
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('lord')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'lord'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#0a0a0d] shadow-md font-bold'
                  : 'text-[#9b9ba8] hover:text-white'
              }`}
            >
              <Scissors size={16} />
              Espaço Lord (Barbearia)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna 1: Seleção de Serviços (7 colunas) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] block mb-3">
                  1. Escolha o serviço desejado:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(currentServices ?? []).map((service) => {
                    const isSelected = selectedServiceId === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#1e1e28] border-[#d4af37] shadow-md shadow-[#d4af37]/10'
                            : 'bg-[#0e0e13] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white leading-tight">
                            {service.title}
                          </h4>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-[#d4af37] text-[#0a0a0d] flex items-center justify-center flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#d4af37] mt-1 font-medium">{service.tagline}</p>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#7d7d8a] mt-2">
                          <Clock size={11} />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preferências de Dia e Turno */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] block mb-2">
                    2. Quando você prefere ir?
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full bg-[#0a0a0d] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="hoje">Hoje</option>
                    <option value="amanha">Amanhã</option>
                    <option value="esta-semana">Nesta semana</option>
                    <option value="sabado">Próximo Sábado</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] block mb-2">
                    3. Qual o melhor turno?
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full bg-[#0a0a0d] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="manha">Manhã (10h às 13h)</option>
                    <option value="tarde">Tarde (13h às 18h)</option>
                    <option value="noite">Noite (18h às 21h)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Coluna 2: Dados e Confirmação no WhatsApp (5 colunas) */}
            <div className="lg:col-span-5 bg-[#0a0a0d] rounded-xl p-5 border border-white/10 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <Calendar size={15} />
                Resumo do Agendamento
              </h3>

              {/* Campos do Cliente */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-[#9b9ba8] block mb-1">Seu Nome (Opcional):</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Amanda Silva"
                    className="w-full bg-[#13131a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#9b9ba8] block mb-1">Profissional de Preferência (Opcional):</label>
                  <input
                    type="text"
                    value={professionalPref}
                    onChange={(e) => setProfessionalPref(e.target.value)}
                    placeholder="Ex: Com quem estiver livre primeiro"
                    className="w-full bg-[#13131a] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Caixa de Visualização do Cartão */}
              <div className="p-3.5 rounded-lg bg-[#14141c] border border-[#d4af37]/20 text-xs space-y-1.5 text-[#d0d0dc]">
                <p><span className="text-[#9b9ba8]">Serviço:</span> <b className="text-white">{selectedService?.title ?? 'Serviço selecionado'}</b></p>
                <p><span className="text-[#9b9ba8]">Espaço:</span> {activeTab === 'lady' ? 'Lady & Lord Feminino' : 'Espaço Lord (Barbearia)'}</p>
                <p><span className="text-[#9b9ba8]">Duração média:</span> {selectedService?.duration ?? 'Consulte'}</p>
              </div>

              {/* Botão de Envio WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#25D366] via-[#3bf381] to-[#25D366] hover:brightness-105 active:scale-[0.98] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare size={18} />
                Solicitar Horário no WhatsApp
                <ArrowRight size={15} />
              </a>

              <p className="text-[11px] text-center text-[#757582] leading-tight">
                ⚡ A recepção recebe sua mensagem pré-formatada e confirma a vaga no sistema em poucos minutos.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
