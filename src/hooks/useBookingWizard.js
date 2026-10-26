import { useState, useMemo } from 'react';
import {
  SALON_INFO,
  SERVICES_LADY,
  SERVICES_LORD,
  PROFESSIONALS_LADY,
  PROFESSIONALS_LORD,
  TIME_SLOTS
} from '../data/servicesData';

export function useBookingWizard() {
  const [activeTab, setActiveTab] = useState('lady'); // 'lady' | 'lord'
  const [selectedServiceId, setSelectedServiceId] = useState('mechas');
  const [selectedProfessionalId, setSelectedProfessionalId] = useState('qualquer');
  const [selectedDateOffset, setSelectedDateOffset] = useState(0); // 0 = hoje, 1 = amanhã, etc.
  const [selectedShift, setSelectedShift] = useState('tarde'); // 'manha' | 'tarde' | 'noite'
  const [selectedTime, setSelectedTime] = useState('14:15');
  const [clientName, setClientName] = useState('');

  // Lista de serviços e profissionais ativos
  const currentServices = useMemo(() => {
    return activeTab === 'lady' ? SERVICES_LADY : SERVICES_LORD;
  }, [activeTab]);

  const currentProfessionals = useMemo(() => {
    return activeTab === 'lady' ? PROFESSIONALS_LADY : PROFESSIONALS_LORD;
  }, [activeTab]);

  // Altera aba e reseta padrões
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'lady') {
      setSelectedServiceId(SERVICES_LADY?.[0]?.id ?? 'mechas');
      setSelectedProfessionalId('qualquer');
    } else {
      setSelectedServiceId(SERVICES_LORD?.[0]?.id ?? 'corte-lord');
      setSelectedProfessionalId('qualquer-lord');
    }
  };

  // Encontra o serviço selecionado atual
  const selectedService = useMemo(() => {
    const list = activeTab === 'lady' ? SERVICES_LADY : SERVICES_LORD;
    return list?.find((s) => s.id === selectedServiceId) ?? list?.[0];
  }, [activeTab, selectedServiceId]);

  // Encontra o profissional selecionado
  const selectedProfessional = useMemo(() => {
    const list = activeTab === 'lady' ? PROFESSIONALS_LADY : PROFESSIONALS_LORD;
    return list?.find((p) => p.id === selectedProfessionalId) ?? list?.[0];
  }, [activeTab, selectedProfessionalId]);

  // Gera os próximos 6 dias da semana com datas reais
  const availableDays = useMemo(() => {
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const days = [];
    const baseDate = new Date();

    for (let i = 0; i < 6; i++) {
      const d = new Date();
      d.setDate(baseDate.getDate() + i);
      const isToday = i === 0;
      const isTomorrow = i === 1;
      
      let label = isToday ? 'Hoje' : isTomorrow ? 'Amanhã' : `${diasSemana[d.getDay()]}`;
      let dateFormatted = `${d.getDate()} ${meses[d.getMonth()]}`;

      days.push({
        offset: i,
        label,
        dayOfWeek: diasSemana[d.getDay()],
        dateFormatted,
        fullDateStr: `${label} (${dateFormatted})`
      });
    }
    return days;
  }, []);

  const activeDayObj = availableDays[selectedDateOffset] ?? availableDays[0];

  // Horários disponíveis para o turno atual
  const currentSlots = useMemo(() => {
    return TIME_SLOTS[selectedShift] ?? [];
  }, [selectedShift]);

  // Monta texto estruturado da mensagem para WhatsApp
  const formattedMessage = useMemo(() => {
    const serviceName = selectedService?.title ?? 'Serviço de Beleza';
    const profName = selectedProfessional?.name ?? 'Qualquer Profissional Disponível';
    const dayStr = activeDayObj?.fullDateStr ?? 'Hoje';
    const spaceText = activeTab === 'lady' ? 'Espaço Lady & Lord' : 'Espaço Lord (Barbearia)';

    let msg = `Olá, equipe Lady & Lord Cidade dos Lagos! 👋\n`;
    msg += `Gostaria de agendar o seguinte horário:\n\n`;
    msg += `✂️ *Serviço:* ${serviceName}\n`;
    msg += `👤 *Profissional:* ${profName}\n`;
    msg += `📅 *Data:* ${dayStr}\n`;
    msg += `⏰ *Horário desejado:* ${selectedTime}\n`;
    msg += `🏬 *Espaço:* ${spaceText}\n`;
    
    if (clientName?.trim()) {
      msg += `✨ *Cliente:* ${clientName.trim()}\n`;
    }
    
    msg += `\nPoderiam confirmar a reserva dessa vaga na grade para mim?`;
    return msg;
  }, [activeTab, selectedService, selectedProfessional, activeDayObj, selectedTime, clientName]);

  // Link direto para a API do WhatsApp
  const whatsappUrl = useMemo(() => {
    const phone = SALON_INFO?.whatsappRaw ?? '5541999337207';
    return `https://wa.me/${phone}?text=${encodeURIComponent(formattedMessage)}`;
  }, [formattedMessage]);

  return {
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
    formattedMessage,
    whatsappUrl
  };
}
