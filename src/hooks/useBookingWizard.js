import { useState, useMemo } from 'react';
import { SALON_INFO, SERVICES_LADY, SERVICES_LORD } from '../data/servicesData';

export function useBookingWizard() {
  const [activeTab, setActiveTab] = useState('lady'); // 'lady' | 'lord'
  const [selectedServiceId, setSelectedServiceId] = useState('mechas');
  const [preferredShift, setPreferredShift] = useState('tarde'); // 'manha' | 'tarde' | 'noite'
  const [preferredDay, setPreferredDay] = useState('esta-semana');
  const [clientName, setClientName] = useState('');
  const [professionalPref, setProfessionalPref] = useState('');

  // Retorna a lista de serviços de acordo com a aba ativa
  const currentServices = useMemo(() => {
    return activeTab === 'lady' ? SERVICES_LADY : SERVICES_LORD;
  }, [activeTab]);

  // Altera aba e reseta serviço padrão
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'lady') {
      setSelectedServiceId(SERVICES_LADY?.[0]?.id ?? 'mechas');
    } else {
      setSelectedServiceId(SERVICES_LORD?.[0]?.id ?? 'corte-lord');
    }
  };

  // Encontra o serviço selecionado atual
  const selectedService = useMemo(() => {
    const list = activeTab === 'lady' ? SERVICES_LADY : SERVICES_LORD;
    return list?.find((s) => s.id === selectedServiceId) ?? list?.[0];
  }, [activeTab, selectedServiceId]);

  // Rótulos amigáveis
  const shiftLabels = {
    manha: 'Manhã (10h às 13h)',
    tarde: 'Tarde (13h às 18h)',
    noite: 'Noite (18h às 21h)'
  };

  const dayLabels = {
    hoje: 'Hoje',
    amanha: 'Amanhã',
    'esta-semana': 'Nesta semana',
    sabado: 'Próximo Sábado'
  };

  // Monta texto estruturado da mensagem
  const formattedMessage = useMemo(() => {
    const serviceName = selectedService?.title ?? 'Serviço de Beleza';
    const shiftText = shiftLabels[preferredShift] ?? 'Flexível';
    const dayText = dayLabels[preferredDay] ?? 'A combinar';
    const spaceText = activeTab === 'lady' ? 'Espaço Lady' : 'Espaço Lord (Barbearia)';

    let msg = `Olá, Lady & Lord Shopping Cidade dos Lagos! 👋\n`;
    msg += `Gostaria de agendar um horário:\n\n`;
    msg += `✨ *Espaço:* ${spaceText}\n`;
    msg += `✂️ *Serviço:* ${serviceName}\n`;
    msg += `📅 *Previsão:* ${dayText}\n`;
    msg += `⏰ *Turno preferido:* ${shiftText}\n`;
    
    if (clientName?.trim()) {
      msg += `👤 *Meu nome:* ${clientName.trim()}\n`;
    }
    if (professionalPref?.trim()) {
      msg += `💇 *Preferência de profissional:* ${professionalPref.trim()}\n`;
    }
    
    msg += `\nQuais horários vocês têm disponíveis na grade?`;
    return msg;
  }, [activeTab, selectedService, preferredShift, preferredDay, clientName, professionalPref]);

  // Link direto para a API do WhatsApp
  const whatsappUrl = useMemo(() => {
    const phone = SALON_INFO?.whatsappRaw ?? '5542998765432';
    return `https://wa.me/${phone}?text=${encodeURIComponent(formattedMessage)}`;
  }, [formattedMessage]);

  return {
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
    formattedMessage,
    whatsappUrl
  };
}
