import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/servicesData';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SALON_INFO?.whatsappRaw}?text=${encodeURIComponent(
    'Olá, Lady & Lord Shopping Cidade dos Lagos! Gostaria de consultar horários disponíveis.'
  )}`;

  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Badge de apoio */}
      <div className="hidden sm:flex flex-col items-end py-1.5 px-3 rounded-xl bg-[#121217]/95 border border-[#d4af37]/30 shadow-xl backdrop-blur-md">
        <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">
          Recepção Online
        </span>
        <span className="text-xs text-white font-medium">
          Tire dúvidas no WhatsApp
        </span>
      </div>

      {/* Botão de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#4eed87] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="Abrir WhatsApp da Recepção"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0a0d] animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0a0a0d]"></span>
        <MessageCircle size={28} className="text-[#0a0a0d] fill-current" />
      </a>
    </aside>
  );
}
