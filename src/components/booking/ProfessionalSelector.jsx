import React from 'react';
import { UserCheck } from 'lucide-react';

export function ProfessionalSelector({ professionals, selectedId, onSelect }) {
  return (
    <div className="space-y-3">
      <label className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] flex items-center gap-1.5">
        <UserCheck size={14} />
        2. Escolha o Profissional:
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        {(professionals ?? []).map((prof) => {
          const isSelected = selectedId === prof.id;
          return (
            <button
              key={prof.id}
              type="button"
              onClick={() => onSelect(prof.id)}
              className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-[#1f1f2a] border-[#d4af37] shadow-md shadow-[#d4af37]/15'
                  : 'bg-[#0f0f15] border-white/5 hover:border-white/20'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSelected
                    ? 'bg-[#d4af37] text-[#0a0a0d]'
                    : 'bg-[#1b1b22] text-[#d4af37] border border-white/10'
                }`}
              >
                {prof.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-white truncate">{prof.name}</p>
                <p className="text-[10px] text-[#9b9ba8] truncate">{prof.role}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
