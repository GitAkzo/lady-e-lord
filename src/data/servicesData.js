export const SALON_INFO = {
  name: "Lady & Lord",
  subtitle: "Shopping Cidade dos Lagos",
  city: "Guarapuava - PR",
  address: "Av. Guarapuava, 1400 - Cidade dos Lagos (Piso L1)",
  phone: "(41) 9 9933-7207",
  whatsappRaw: "5541999337207",
  openingHours: "Seg a Sáb: 10h às 22h | Dom: 14h às 20h",
  rating: 4.9,
  reviewsCount: 387
};

export const PROFESSIONALS_LADY = [
  { id: "qualquer", name: "Primeiro Disponível", role: "Atendimento mais rápido" },
  { id: "amanda", name: "Amanda Costa", role: "Especialista Mechas & Loiros" },
  { id: "juliana", name: "Juliana Prado", role: "Visagismo, Corte & Escovas" },
  { id: "beatriz", name: "Beatriz Lima", role: "Terapia Capilar & Cronograma" },
  { id: "camila", name: "Camila Santos", role: "Spa de Unhas & Alongamento" }
];

export const PROFESSIONALS_LORD = [
  { id: "qualquer-lord", name: "Primeiro Disponível", role: "Atendimento mais rápido" },
  { id: "carlos", name: "Carlos Eduardo", role: "Master Barber & Degradê" },
  { id: "marcos", name: "Marcos Vinicius", role: "Barboterapia & Visagismo Masculino" }
];

export const TIME_SLOTS = {
  manha: [
    { time: "10:30", available: true },
    { time: "11:15", available: true },
    { time: "12:00", available: false } // Simulação de vaga disputada
  ],
  tarde: [
    { time: "13:30", available: true },
    { time: "14:15", available: true },
    { time: "15:00", available: false },
    { time: "16:00", available: true },
    { time: "17:15", available: true }
  ],
  noite: [
    { time: "18:15", available: true },
    { time: "19:00", available: true },
    { time: "19:45", available: false },
    { time: "20:30", available: true }
  ]
};

export const SERVICES_LADY = [
  {
    id: "mechas",
    title: "Mechas & Loiros Iluminados",
    tagline: "Especialidade da casa",
    description: "Técnicas personalizadas de morena iluminada, baby blond e contour com teste de mecha rigoroso e proteção capilar.",
    duration: "3h a 4h",
    popular: true,
    category: "Cabelos"
  },
  {
    id: "corte-fem",
    title: "Corte & Visagismo Feminino",
    tagline: "Consultoria de imagem",
    description: "Design de corte adaptado ao formato do seu rosto e estilo de vida, com lavatório relaxante e finalização impecável.",
    duration: "1h",
    popular: false,
    category: "Cabelos"
  },
  {
    id: "terapia-capilar",
    title: "Tratamentos & Cronograma Capilar",
    tagline: "Nutrição & reconstrução",
    description: "Protocolos profissionais com marcas consagradas (Kérastase, L'Oréal, Wella) para recuperação instantânea do fio.",
    duration: "1h15",
    popular: true,
    category: "Tratamentos"
  },
  {
    id: "manicure",
    title: "Spa de Mãos & Pés / Alongamento",
    tagline: "Unhas impecáveis",
    description: "Esmaltação tradicional, em gel, blindagem e alongamentos com biossegurança total e esterilização em autoclave.",
    duration: "45m a 2h",
    popular: false,
    category: "Estética"
  },
  {
    id: "make-penteado",
    title: "Make & Penteado para Eventos",
    tagline: "Formaturas e festas",
    description: "Maquiagem de alta durabilidade e penteados estruturados para você brilhar nos melhores eventos de Guarapuava.",
    duration: "2h",
    popular: true,
    category: "Eventos"
  },
  {
    id: "noivas",
    title: "Dia da Noiva & Debutantes",
    tagline: "Sala VIP e atendimento exclusivo",
    description: "Espaço reservado, banho relaxante, prévia de cabelo e make, assessoria completa para o dia mais especial da sua vida.",
    duration: "Pacotes VIP",
    popular: true,
    category: "Eventos"
  }
];

export const SERVICES_LORD = [
  {
    id: "corte-lord",
    title: "Corte Masculino & Degradê Navalhado",
    tagline: "Padrão executivo e moderno",
    description: "Acabamento de alta precisão, visagismo masculino e finalização com pomadas premium.",
    duration: "40m",
    popular: true
  },
  {
    id: "barboterapia",
    title: "Barboterapia com Toalha Quente",
    tagline: "Relaxamento e hidratação",
    description: "Vapor de ozônio, óleos essenciais, massagem facial e navalha afiada para pele sem irritações.",
    duration: "45m",
    popular: true
  },
  {
    id: "combo-lord",
    title: "Combo Lord (Corte + Barba + Sobrancelha)",
    tagline: "O cuidado completo do homem",
    description: "Experiência completa com direito a café espresso ou cerveja gelada de cortesia durante o atendimento.",
    duration: "1h15",
    popular: true
  },
  {
    id: "camuflagem",
    title: "Camuflagem de Fios Brancos & Tonalização",
    tagline: "Rejuvenescimento natural",
    description: "Cobertura discreta dos fios grisalhos no cabelo e barba sem efeito artificial.",
    duration: "30m",
    popular: false
  }
];

export const MALL_PERKS = [
  {
    title: "Estacionamento Coberto do Shopping",
    desc: "Vagas amplas e segurança monitorada durante todo o seu atendimento."
  },
  {
    title: "Horário Estendido até 22h",
    desc: "Atendimento no pós-trabalho e aos finais de semana, sem a correria da rua."
  },
  {
    title: "Espaço Dual: Lady & Lord",
    desc: "Ambientes elegantes e separados para o conforto de homens e mulheres."
  },
  {
    title: "Café Especial & Bar Cortesia",
    desc: "Menu de bebidas para transformar seu momento de cuidado em puro relaxamento."
  }
];
