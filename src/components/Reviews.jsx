import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Camila Ribeiro",
      role: "Cliente Mechas & Tratamento",
      content: "Fiz minhas mechas com a equipe do Cidade dos Lagos e o resultado superou todas as expectativas. Meu cabelo continuou saudável, brilhoso e o atendimento foi nota mil!",
      rating: 5
    },
    {
      name: "Rodrigo Medeiros",
      role: "Cliente Espaço Lord",
      content: "A comodidade de cortar o cabelo e fazer a barba dentro do shopping até mais tarde é imbatível. A barboterapia na toalha quente é um diferencial que não largo mais.",
      rating: 5
    },
    {
      name: "Isabela Fonseca",
      role: "Noiva Lady & Lord",
      content: "Meu Dia da Noiva foi impecável! O cuidado de cada profissional, a pontualidade e o carinho com que me atenderam tornaram meu casamento ainda mais inesquecível.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#0d0d12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Opinião de Quem Frequenta
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
            Experiências reais em Guarapuava
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-[#a0a0b0]">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>Nota 4.9 no Google Avaliações</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(reviews ?? []).map((review) => (
            <div
              key={review.name}
              className="p-6 rounded-2xl bg-[#14141a] border border-white/5 flex flex-col justify-between space-y-4 hover:border-[#d4af37]/30 transition-all"
            >
              <div className="space-y-3">
                <Quote size={24} className="text-[#d4af37]/40" />
                <p className="text-xs sm:text-sm text-[#b0b0be] leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <p className="text-[11px] text-[#d4af37]">{review.role}</p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
