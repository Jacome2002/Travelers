import React from 'react';
import { PlanOption } from '../types';
import { X, Check, Clock, Car, Baby, ShieldCheck, Sparkles, Utensils } from 'lucide-react';

interface PlanDetailModalProps {
  plan: PlanOption | null;
  onClose: () => void;
  onSelectPlan: (planId: PlanOption['id']) => void;
  isSelected: boolean;
}

export const PlanDetailModal: React.FC<PlanDetailModalProps> = ({
  plan,
  onClose,
  onSelectPlan,
  isSelected,
}) => {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Media */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 bg-slate-900">
          <img
            src={plan.image}
            alt={plan.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${plan.badgeColor}`}>
              {plan.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              {plan.title}
            </h3>
            <p className="text-xs text-amber-200">
              {plan.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Schedule & Logistics */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-[#f8f9ff] p-3.5 rounded-2xl border border-[#e2e8f0]">
            <div>
              <span className="text-[#64748B] block font-medium">Horario sugerido</span>
              <strong className="text-[#0F172A]">{plan.schedule}</strong>
            </div>
            <div>
              <span className="text-[#64748B] block font-medium">Logística</span>
              <strong className="text-[#059669]">{plan.logisticsText}</strong>
            </div>
          </div>

          {/* Kids Note */}
          <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-3.5 rounded-2xl border border-[#FDE68A] text-xs text-[#78350F]">
            <Baby className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Pensado para Sofía y Mateo: </span>
              <span>{plan.kidsFriendlyNote}</span>
            </div>
          </div>

          {/* Secondary image if available */}
          {plan.secondaryImage && (
            <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] relative h-40">
              <img
                src={plan.secondaryImage}
                alt="Gastronomía y experiencia"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
                <Utensils className="w-3 h-3 text-[#EA580C]" />
                Almuerzo de 3 tiempos en restaurante patrimonial
              </div>
            </div>
          )}

          {/* What's Included */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Detalle de inclusiones para los 4 pasajeros
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
              {plan.includedList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Guarantee */}
          <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#d3e4fe] flex items-center justify-between text-xs">
            <div>
              <span className="text-[#64748B] block">Valor comercial cubierto</span>
              <strong className="text-base font-extrabold text-[#059669]">
                {plan.realValueCOP} — Cobro de hoy: $0 COP
              </strong>
            </div>
            <span className="text-[11px] font-bold text-[#EA580C] bg-white px-2 py-1 rounded shadow-xs">
              Garantía 100% Activa
            </span>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-[#e2e8f0] bg-white">
          <button
            onClick={() => {
              onSelectPlan(plan.id);
              onClose();
            }}
            className={`w-full h-12 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
              isSelected
                ? 'bg-[#059669] text-white hover:bg-[#047857]'
                : 'bg-[#0F172A] text-white hover:bg-[#1e293b]'
            }`}
          >
            {isSelected ? (
              <>
                <ShieldCheck className="w-5 h-5 text-[#85f8c4]" />
                <span>Confirmar y Ver Pase Digital</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Elegir {plan.title} en 1 toque</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
