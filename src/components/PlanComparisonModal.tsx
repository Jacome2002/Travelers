import React from 'react';
import { PlanOption } from '../types';
import { RESCUE_PLANS } from '../data/mockData';
import { X, Check, Sparkles, ArrowRight } from 'lucide-react';

interface PlanComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planId: PlanOption['id']) => void;
  selectedPlanId?: PlanOption['id'];
}

export const PlanComparisonModal: React.FC<PlanComparisonModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
  selectedPlanId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#e2e8f0] flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Comparativa Detallada
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Compara tus 3 Alternativas VIP de Rescate
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Todas las opciones incluyen transporte privado y garantía 100% sin cobro adicional.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table / Cards */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {RESCUE_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between border transition-all ${
                    isSelected
                      ? 'border-[#EA580C] bg-[#fffaf5] ring-2 ring-[#EA580C]/20 shadow-md'
                      : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                  }`}
                >
                  <div className="space-y-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>

                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight">
                      {plan.title}
                    </h4>

                    <div className="text-xs space-y-2 py-2 border-y border-[#e2e8f0]">
                      <div>
                        <strong className="text-[#0F172A] block">Duración:</strong>
                        <span className="text-[#64748B]">{plan.duration}</span>
                      </div>

                      <div>
                        <strong className="text-[#0F172A] block">Para niños (Sofía y Mateo):</strong>
                        <span className="text-[#64748B]">{plan.kidsFriendlyNote}</span>
                      </div>

                      <div>
                        <strong className="text-[#0F172A] block">Logística:</strong>
                        <span className="text-[#059669] font-medium">{plan.logisticsText}</span>
                      </div>

                      <div>
                        <strong className="text-[#0F172A] block">Valor comercial real:</strong>
                        <span className="text-[#64748B]">{plan.realValueCOP} (Hoy $0 COP)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        onSelectPlan(plan.id);
                        onClose();
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-[#059669] text-white'
                          : 'bg-[#0F172A] text-white hover:bg-[#1e293b]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Seleccionado</span>
                        </>
                      ) : (
                        <>
                          <span>Elegir {plan.title.split(' ')[0]} {plan.title.split(' ')[1]}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
