import React from 'react';
import { PlanOption } from '../types';
import { Check, Clock, HeartHandshake, ShieldCheck, Sparkles, ArrowRight, Utensils, Baby, Car } from 'lucide-react';

interface PlanRescueCardProps {
  plan: PlanOption;
  isSelected: boolean;
  onSelect: (planId: PlanOption['id']) => void;
  onViewDetails: (plan: PlanOption) => void;
}

export const PlanRescueCard: React.FC<PlanRescueCardProps> = ({
  plan,
  isSelected,
  onSelect,
  onViewDetails,
}) => {
  return (
    <div
      className={`group relative rounded-3xl bg-white border transition-all duration-200 overflow-hidden ${
        isSelected
          ? 'border-[#EA580C] ring-2 ring-[#EA580C]/20 shadow-[0_16px_32px_-8px_rgba(234,88,12,0.18)]'
          : 'border-[#e2e8f0] hover:border-[#cbd5e1] shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.10)]'
      }`}
    >
      {/* Top Banner & Category Badge */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={plan.image}
          alt={plan.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${plan.badgeColor}`}>
            {plan.badge}
          </span>

          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0F172A] shadow-sm flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#EA580C]" />
            {plan.duration}
          </span>
        </div>

        {/* Overlay Title & Value in image bottom */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-[11px] font-medium text-amber-200 tracking-wide uppercase">
            {plan.tagline}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight mt-0.5">
            {plan.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Logistics & Timings Row */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#45464d] bg-[#f8f9ff] p-3 rounded-2xl border border-[#e2e8f0]">
          <div className="flex items-center gap-1.5 font-medium text-[#0F172A]">
            <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>{plan.schedule}</span>
          </div>
          <span className="text-slate-300">·</span>
          <div className="flex items-center gap-1.5 font-medium text-[#059669]">
            <Car className="w-3.5 h-3.5" />
            <span>{plan.logisticsText}</span>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-2">
          <p className="text-xs font-bold tracking-wider text-[#64748B] uppercase">
            Lo que incluye para los 4:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
            {plan.highlights.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-snug">
                <div className="w-4 h-4 rounded-full bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kids Friendly Specific Note */}
        <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-3 rounded-2xl border border-[#FDE68A]/80 text-xs text-[#92400E]">
          <Baby className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#78350F]">Especial para Sofía y Mateo: </span>
            <span>{plan.kidsFriendlyNote}</span>
          </div>
        </div>

        {/* Cost & Reassurance Block */}
        <div className="pt-2 border-t border-[#e2e8f0] flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#059669]">
                {plan.costLabel}
              </span>
              <span className="text-xs text-[#64748B] line-through">
                {plan.realValueCOP}
              </span>
            </div>
            <p className="text-[11px] font-semibold text-[#EA580C]">
              {plan.savingsCOP}
            </p>
          </div>

          <button
            onClick={() => onViewDetails(plan)}
            className="text-xs font-semibold text-[#0F172A] hover:text-[#EA580C] underline decoration-[#cbd5e1] hover:decoration-[#EA580C] underline-offset-4 transition-colors"
          >
            Ver itinerario completo
          </button>
        </div>

        {/* 1-Touch Action CTA */}
        <button
          onClick={() => onSelect(plan.id)}
          className={`w-full h-12 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
            isSelected
              ? 'bg-[#059669] text-white hover:bg-[#047857]'
              : 'bg-[#0F172A] text-white hover:bg-[#1e293b]'
          }`}
        >
          {isSelected ? (
            <>
              <ShieldCheck className="w-5 h-5 text-[#85f8c4]" />
              <span>Plan Confirmado · Ver Pase Digital</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-[#EA580C]" />
              <span>Elegir este plan en 1 toque</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
