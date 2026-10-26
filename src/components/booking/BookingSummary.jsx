import React from 'react';
import { Calendar, User, Clock, Scissors, MessageSquare, ArrowRight } from 'lucide-react';

export function BookingSummary({
  service,
  professional,
  dayStr,
  time,
  clientName,
  onNameChange,
  whatsappUrl,
  isLady
}) {
  return (
    <div className="bg-[#0a0a0d] rounded-2xl p-5 sm:p-6 border border-[#d4af37]/30 shadow-xl space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
        <Calendar size={16} />
        Resumo da Reserva
      </h3>

      {/* Campo do Nome */}
      <div>
        <label className="text-[11px] text-[#9b9ba8] block mb-1 font-medium">
          Seu Nome Completo (Opcional):
        </label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Ex: Amanda Silva"
          className="w-full bg-[#13131a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4af37] transition-colors"
        />
      </div>

      {/* Detalhes do Agendamento */}
      <div className="p-4 rounded-xl bg-[#14141d] border border-white/5 text-xs space-y-2.5 text-[#d0d0dc]">
        <div className="flex items-start gap-2">
          <Scissors size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] text-[#868694] uppercase font-bold">Serviço</p>
            <p className="font-bold text-white text-sm">{service?.title ?? 'Selecione um serviço'}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <User size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] text-[#868694] uppercase font-bold">Profissional</p>
            <p className="font-semibold text-white">{professional?.name ?? 'Primeiro Disponível'}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Clock size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] text-[#868694] uppercase font-bold">Data & Horário</p>
            <p className="font-bold text-[#f3e3a9]">
              {dayStr} às <span className="underline decoration-[#d4af37]">{time}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Botão de Envio para o WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a0a0d] bg-gradient-to-r from-[#25D366] via-[#3bf381] to-[#25D366] hover:brightness-105 active:scale-[0.98] shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
      >
        <MessageSquare size={18} />
        <span>Enviar Horário no WhatsApp</span>
        <ArrowRight size={15} />
      </a>

      <p className="text-[11px] text-center text-[#757582] leading-tight">
        ⚡ A recepção recebe sua mensagem pré-formatada e confirma a vaga no sistema em poucos minutos.
      </p>
    </div>
  );
}
