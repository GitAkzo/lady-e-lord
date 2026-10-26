import React from 'react';
import { Calendar, Clock, Sun, Sunset, Moon } from 'lucide-react';

export function DateTimeSelector({
  availableDays,
  selectedOffset,
  onSelectOffset,
  selectedShift,
  onSelectShift,
  currentSlots,
  selectedTime,
  onSelectTime
}) {
  const shifts = [
    { id: 'manha', label: 'Manhã', icon: Sun, period: '10h às 13h' },
    { id: 'tarde', label: 'Tarde', icon: Sunset, period: '13h às 18h' },
    { id: 'noite', label: 'Noite', icon: Moon, period: '18h às 21h' }
  ];

  return (
    <div className="space-y-5 pt-2">
      {/* 1. Escolha do Dia */}
      <div className="space-y-2.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] flex items-center gap-1.5">
          <Calendar size={14} />
          3. Escolha o Dia:
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {(availableDays ?? []).map((day) => {
            const isSelected = selectedOffset === day.offset;
            return (
              <button
                key={day.offset}
                type="button"
                onClick={() => onSelectOffset(day.offset)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-[#1f1f2a] border-[#d4af37] shadow-md shadow-[#d4af37]/20 ring-1 ring-[#d4af37]'
                    : 'bg-[#0f0f15] border-white/5 hover:border-white/20'
                }`}
              >
                <p className={`text-[11px] font-bold ${isSelected ? 'text-[#d4af37]' : 'text-[#8b8b99]'}`}>
                  {day.label}
                </p>
                <p className="text-xs font-semibold text-white mt-0.5">
                  {day.dateFormatted}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Escolha do Turno e Horário Exato */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] flex items-center gap-1.5">
            <Clock size={14} />
            4. Horários Disponíveis na Grade:
          </label>
          
          {/* Seletor Rápido de Turno */}
          <div className="flex rounded-lg bg-[#0a0a0d] p-1 border border-white/5 text-[11px]">
            {shifts.map((s) => {
              const Icon = s.icon;
              const isSelected = selectedShift === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelectShift(s.id)}
                  className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-medium transition-all ${
                    isSelected
                      ? 'bg-[#d4af37] text-[#0a0a0d] font-bold'
                      : 'text-[#888896] hover:text-white'
                  }`}
                >
                  <Icon size={12} />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade de Slots de Horários */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-1">
          {(currentSlots ?? []).map((slot) => {
            const isSelected = selectedTime === slot.time && slot.available;
            if (!slot.available) {
              return (
                <div
                  key={slot.time}
                  className="p-2.5 rounded-xl bg-[#0a0a0d]/40 border border-white/5 text-center text-zinc-600 cursor-not-allowed select-none opacity-40 line-through text-xs font-medium"
                  title="Horário já reservado por outro cliente"
                >
                  {slot.time}
                </div>
              );
            }
            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => onSelectTime(slot.time)}
                className={`p-2.5 rounded-xl border text-center font-bold text-xs transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b38a26] text-[#0a0a0d] border-[#d4af37] shadow-md shadow-[#d4af37]/20 scale-105'
                    : 'bg-[#14141c] text-white border-white/10 hover:border-[#d4af37]/50'
                }`}
              >
                {slot.time}
              </button>
            );
          })}
        </div>

        <p className="text-[11px] text-[#787886] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Horários em verde/dourado estão livres no sistema da recepção hoje.</span>
        </p>
      </div>
    </div>
  );
}
