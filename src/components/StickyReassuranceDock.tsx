import React from 'react';
import { PlanOption, DriverInfo } from '../types';
import { CONCIERGE_DATA } from '../data/mockData';
import { Car, MessageCircle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface StickyReassuranceDockProps {
  selectedPlan: PlanOption | undefined;
  driver: DriverInfo;
  onOpenChat: () => void;
  onOpenPass: () => void;
  onOpenGuarantee: () => void;
}

export const StickyReassuranceDock: React.FC<StickyReassuranceDockProps> = ({
  selectedPlan,
  driver,
  onOpenChat,
  onOpenPass,
  onOpenGuarantee,
}) => {
  return (
    <aside
      aria-label="Barra de asistencia rápida"
      className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#e2e8f0] shadow-[0_-8px_24px_-4px_rgba(15,23,42,0.08)] py-2.5 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Dispatch and Driver status */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-8 h-8 rounded-xl bg-[#eff4ff] text-[#059669] flex items-center justify-center shrink-0 border border-[#d3e4fe]">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-[#0F172A] leading-tight">
                <span>Van asignada: Placas {driver.plate}</span>
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              </div>
              <p className="text-[11px] text-[#64748B] leading-none mt-0.5">
                Conductor: {driver.name} · A {driver.estimatedArrivalMinutes} min del hotel
              </p>
            </div>
          </div>

          {/* Guarantee Trust Tag */}
          <button
            onClick={onOpenGuarantee}
            className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-[#005137] bg-[#85f8c4]/30 px-2.5 py-1 rounded-full border border-[#069669]/20 hover:bg-[#85f8c4]/50 transition-colors shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>Garantía 100% Sin Costo</span>
          </button>
        </div>

        {/* Right Actions: WhatsApp / Chat & View Selected Plan Pass */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <a
            href={CONCIERGE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Concierge</span>
          </a>

          {selectedPlan ? (
            <button
              onClick={onOpenPass}
              className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1e293b] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm whitespace-nowrap"
            >
              <span>Ver Pase {selectedPlan.title.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
            </button>
          ) : (
            <button
              onClick={onOpenChat}
              className="flex-1 sm:flex-initial h-10 px-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1e293b] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Ayuda para elegir</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
