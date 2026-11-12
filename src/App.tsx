import React, { useState } from 'react';
import { ScreenTab, PlanOption } from './types';
import { GUEST_DATA, DRIVER_DATA, RESCUE_PLANS, MARITIME_BULLETIN, CONCIERGE_DATA } from './data/mockData';
import { Navbar } from './components/Navbar';
import { WeatherAlertBanner } from './components/WeatherAlertBanner';
import { PersonalizedHeader } from './components/PersonalizedHeader';
import { PlanRescueCard } from './components/PlanRescueCard';
import { ActivePassView } from './components/ActivePassView';
import { MaritimeMonitoringView } from './components/MaritimeMonitoringView';
import { PlanComparisonModal } from './components/PlanComparisonModal';
import { PlanDetailModal } from './components/PlanDetailModal';
import { ConciergeChatModal } from './components/ConciergeChatModal';
import { GuaranteeModal } from './components/GuaranteeModal';
import { StickyReassuranceDock } from './components/StickyReassuranceDock';
import { Sparkles, SlidersHorizontal, ShieldCheck, HeartHandshake, Phone, PhoneOff, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('rescue');
  const [selectedPlanId, setSelectedPlanId] = useState<PlanOption['id']>('plan_a');
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [detailPlan, setDetailPlan] = useState<PlanOption | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [guaranteeOpen, setGuaranteeOpen] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedPlan = RESCUE_PLANS.find((p) => p.id === selectedPlanId);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectPlan = (planId: PlanOption['id']) => {
    setSelectedPlanId(planId);
    const plan = RESCUE_PLANS.find((p) => p.id === planId);
    triggerToast(`¡${plan?.title.split('&')[0]} seleccionado! Tu Pase Digital y transporte están listos.`);
  };

  const handleStartCall = () => {
    setCallActive(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans pb-28">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="w-7 h-7 rounded-full bg-[#059669] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#85f8c4]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* Primary Top Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenChat={() => setChatOpen(true)}
        selectedPlanTitle={selectedPlan?.title}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Screen 1: Primary Rescue Hub */}
        {currentTab === 'rescue' && (
          <div className="space-y-6">
            {/* Weather Alert & Authority Banner */}
            <WeatherAlertBanner
              bulletin={MARITIME_BULLETIN}
              onViewMaritimeDetails={() => setCurrentTab('maritime')}
            />

            {/* Personalized Family Card with Concierge Contact */}
            <PersonalizedHeader
              guest={GUEST_DATA}
              onOpenChat={() => setChatOpen(true)}
              onCallConcierge={handleStartCall}
            />

            {/* Rescue Plans Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                    Opciones de Contingencia VIP
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                  <span className="text-xs text-[#64748B]">100% Sin Costo Adicional</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Elige la mejor alternativa para el día de tu familia
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setComparisonOpen(true)}
                  className="px-3.5 py-2 text-xs font-bold text-[#0F172A] bg-white border border-[#e2e8f0] hover:bg-[#eff4ff] hover:border-[#cbd5e1] rounded-xl flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Comparar las 3 opciones</span>
                </button>
              </div>
            </div>

            {/* 3-Column Rescue Plans Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESCUE_PLANS.map((plan) => (
                <PlanRescueCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedPlanId === plan.id}
                  onSelect={(id) => {
                    handleSelectPlan(id);
                    setCurrentTab('pass');
                  }}
                  onViewDetails={(p) => setDetailPlan(p)}
                />
              ))}
            </div>

            {/* Reassurance & Rights Section */}
            <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] text-[#059669] flex items-center justify-center shrink-0 border border-[#d3e4fe]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Protección al Turista & Garantía de Calidad
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5 max-w-xl leading-relaxed">
                    Operación respaldada por la Capitanía de Puerto de Cartagena, Cotelco Bolívar y Seguro Todo Riesgo Colasistencia. Tu bienestar y satisfacción están completamente garantizados.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setGuaranteeOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1e293b] whitespace-nowrap transition-colors"
              >
                Conocer políticas y derechos
              </button>
            </div>
          </div>
        )}

        {/* Screen 2: Active Digital Pass & Assigned Van */}
        {currentTab === 'pass' && (
          <ActivePassView
            plan={selectedPlan || RESCUE_PLANS[0]}
            guest={GUEST_DATA}
            driver={DRIVER_DATA}
            onChangePlan={() => setCurrentTab('rescue')}
            onOpenChat={() => setChatOpen(true)}
          />
        )}

        {/* Screen 3: Maritime Monitoring & Weather Buoys */}
        {currentTab === 'maritime' && <MaritimeMonitoringView />}

        {/* Screen 4: 100% Satisfaction Guarantee */}
        {currentTab === 'guarantee' && (
          <div className="space-y-6">
            <div className="bg-[#002114] text-white p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#85f8c4]">
                <ShieldCheck className="w-4 h-4" />
                Compromiso Oficial de Hospitalidad Colombiana
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Garantía Plan B Proactivo: Satisfacción al 100%
              </h1>
              <p className="text-xs sm:text-sm text-[#bec6e0] leading-relaxed max-w-3xl">
                Sabemos que un cambio de planes genera incertidumbre. Por eso, nuestro protocolo de rescate no solo te ofrece una alternativa de igual o mayor valor comercial, sino que asegura que no asumas ningún sobrecosto, mantengas tu transporte privado y tengas total libertad para decidir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-3">
                <span className="w-8 h-8 rounded-xl bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Cero Costo Adicional Garantizado
                </h3>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Cualquier diferencia entre el valor de tu tour náutico original y los planes de rescate (Castillo San Felipe o Day Pass en Claustro 5 Estrellas) es asumida al 100% por nuestra agencia.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-3">
                <span className="w-8 h-8 rounded-xl bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Transporte Privado Ininterrumpido
                </h3>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Carlos Mendoza y la van Mercedes-Benz ejecutiva permanecen asignados a tu familia durante todo el día para evitar cualquier espera bajo el sol o estrés de movilidad en Cartagena.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-3">
                <span className="w-8 h-8 rounded-xl bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Derecho a Devolución Inmediata
                </h3>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Si prefieres no tomar ningún tour terrestre alternativo, puedes solicitar el reembolso del 100% a tu tarjeta sin penalidades ni trámites burocráticos.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-3">
                <span className="w-8 h-8 rounded-xl bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Póliza Integral Colasistencia
                </h3>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Cobertura médica de hasta $50.000.000 COP por pasajero, asistencia farmacéutica y traslado de urgencia incluidos durante toda la duración del Plan B.
                </p>
              </div>
            </div>

            <div className="bg-[#eff4ff] p-6 rounded-3xl border border-[#d3e4fe] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  ¿Tienes alguna pregunta especial sobre tu garantía?
                </h4>
                <p className="text-xs text-[#64748B]">
                  Valentina Gómez está disponible para coordinar cualquier solicitud o gestionar reembolso directo.
                </p>
              </div>

              <button
                onClick={() => setChatOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1e293b] whitespace-nowrap transition-colors"
              >
                Chatear con Valentina
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Pinned Reassurance Dock at Bottom */}
      <StickyReassuranceDock
        selectedPlan={selectedPlan}
        driver={DRIVER_DATA}
        onOpenChat={() => setChatOpen(true)}
        onOpenPass={() => setCurrentTab('pass')}
        onOpenGuarantee={() => setGuaranteeOpen(true)}
      />

      {/* Modals */}
      <PlanComparisonModal
        isOpen={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
        onSelectPlan={(id) => {
          handleSelectPlan(id);
          setCurrentTab('pass');
        }}
        selectedPlanId={selectedPlanId}
      />

      <PlanDetailModal
        plan={detailPlan}
        onClose={() => setDetailPlan(null)}
        onSelectPlan={(id) => {
          handleSelectPlan(id);
          setCurrentTab('pass');
        }}
        isSelected={detailPlan?.id === selectedPlanId}
      />

      <ConciergeChatModal
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onCallConcierge={handleStartCall}
      />

      <GuaranteeModal
        isOpen={guaranteeOpen}
        onClose={() => setGuaranteeOpen(false)}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Simulated VIP Phone Call Dialog */}
      {callActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0F172A] text-white rounded-3xl max-w-sm w-full p-6 text-center space-y-5 border border-slate-700 shadow-2xl">
            <div className="relative mx-auto w-24 h-24">
              <img
                src={CONCIERGE_DATA.avatar}
                alt={CONCIERGE_DATA.name}
                className="w-full h-full rounded-full object-cover border-4 border-[#85f8c4] animate-pulse"
              />
              <span className="absolute bottom-1 right-1 w-5 h-5 bg-[#10B981] border-2 border-[#0F172A] rounded-full flex items-center justify-center">
                <Phone className="w-2.5 h-2.5 text-white" />
              </span>
            </div>

            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-[#85f8c4]">
                Llamada Directa Concierge
              </p>
              <h3 className="text-xl font-extrabold text-white mt-1">
                {CONCIERGE_DATA.name}
              </h3>
              <p className="text-xs text-[#bec6e0] mt-0.5">
                Conectando con tu familia Restrepo...
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 text-xs text-[#bec6e0] leading-relaxed">
              "¡Hola Camilo! Qué gusto saludarte. Tengo la confirmación del transporte y las reservas listas. ¿En qué te puedo colaborar?"
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setCallActive(false)}
                className="w-14 h-14 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-white flex items-center justify-center transition-colors shadow-lg active:scale-95"
                title="Finalizar llamada"
              >
                <PhoneOff className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
