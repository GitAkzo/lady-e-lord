import React from 'react';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { ProfessionalSelector } from './booking/ProfessionalSelector';
import { DateTimeSelector } from './booking/DateTimeSelector';
import { BookingSummary } from './booking/BookingSummary';
import { Sparkles, Scissors, Clock, Check } from 'lucide-react';

export function BookingWizard() {
  const {
    activeTab,
    handleTabChange,
    selectedServiceId,
    setSelectedServiceId,
    selectedService,
    currentServices,
    currentProfessionals,
    selectedProfessionalId,
    setSelectedProfessionalId,
    selectedProfessional,
    availableDays,
    selectedDateOffset,
    setSelectedDateOffset,
    activeDayObj,
    selectedShift,
    setSelectedShift,
    currentSlots,
    selectedTime,
    setSelectedTime,
    clientName,
    setClientName,
    whatsappUrl
  } = useBookingWizard();

  return (
    <section id="agendamento" className="py-16 md:py-24 bg-[#0d0d12] border-y border-[#d4af37]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1b24] border border-[#d4af37]/30 text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
            <Sparkles size={13} />
            Agendamento Inteligente Cidade dos Lagos
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Consulte a grade e garanta sua vaga
          </h2>
          <p className="text-xs sm:text-sm text-[#9b9ba8]">
            Escolha seu serviço, profissional e horário preferido. O pedido cai pronto no WhatsApp da nossa equipe.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-[#131318] rounded-2xl border border-[#d4af37]/25 p-5 sm:p-8 shadow-2xl relative">
          
          {/* Seletor Espaço Lady vs Espaço Lord */}
          <div className="flex rounded-xl bg-[#0a0a0d] p-1.5 border border-white/5 max-w-md mx-auto mb-8">
            <button
              type="button"
              onClick={() => handleTabChange('lady')}
              className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'lady'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#0a0a0d] shadow-md font-bold'
                  : 'text-[#9b9ba8] hover:text-white'
              }`}
            >
              <Sparkles size={15} />
              Espaço Lady (Feminino)
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('lord')}
              className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'lord'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#0a0a0d] shadow-md font-bold'
                  : 'text-[#9b9ba8] hover:text-white'
              }`}
            >
              <Scissors size={15} />
              Espaço Lord (Barbearia)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna da Esquerda: Serviços + Profissionais + Data/Hora (7 colunas) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* 1. Serviços */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] block">
                  1. Escolha o Serviço:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(currentServices ?? []).map((service) => {
                    const isSelected = selectedServiceId === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#1e1e28] border-[#d4af37] shadow-md shadow-[#d4af37]/10'
                            : 'bg-[#0e0e13] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                            {service.title}
                          </h4>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-[#d4af37] text-[#0a0a0d] flex items-center justify-center shrink-0">
                              <Check size={10} strokeWidth={3} />
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-[#d4af37] mt-1 font-medium">{service.tagline}</p>
                        <div className="flex items-center gap-1 text-[10px] text-[#7d7d8a] mt-1.5">
                          <Clock size={10} />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Seleção de Profissional */}
              <ProfessionalSelector
                professionals={currentProfessionals}
                selectedId={selectedProfessionalId}
                onSelect={setSelectedProfessionalId}
              />

              {/* 3. Seleção de Data e Horários na Grade */}
              <DateTimeSelector
                availableDays={availableDays}
                selectedOffset={selectedDateOffset}
                onSelectOffset={setSelectedDateOffset}
                selectedShift={selectedShift}
                onSelectShift={setSelectedShift}
                currentSlots={currentSlots}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />

            </div>

            {/* Coluna da Direita: Resumo e WhatsApp (5 colunas) */}
            <div className="lg:col-span-5 sticky top-24">
              <BookingSummary
                service={selectedService}
                professional={selectedProfessional}
                dayStr={activeDayObj?.fullDateStr}
                time={selectedTime}
                clientName={clientName}
                onNameChange={setClientName}
                whatsappUrl={whatsappUrl}
                isLady={activeTab === 'lady'}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
