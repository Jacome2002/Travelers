import React from 'react';
import { GuestInfo } from '../types';
import { CONCIERGE_DATA } from '../data/mockData';
import { Users, Car, Phone, MessageSquare, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface PersonalizedHeaderProps {
  guest: GuestInfo;
  onOpenChat: () => void;
  onCallConcierge: () => void;
}

export const PersonalizedHeader: React.FC<PersonalizedHeaderProps> = ({
  guest,
  onOpenChat,
  onCallConcierge,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#e2e8f0] shadow-[0_2px_12px_-3px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left column: Personalized greeting and family travel context */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] border border-[#d3e4fe] text-xs font-semibold text-[#0F172A]">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            <span>Asistencia activa en tiempo real</span>
            <span className="text-[#64748B]">·</span>
            <span>Ref: {guest.reservationId}</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Hola Camilo, cuidamos el día de tu familia
            </h1>
            <p className="mt-1 text-sm sm:text-base text-[#45464d] leading-relaxed max-w-2xl">
              Sabemos lo importante que es este día para ti, Andrea, Sofía y Mateo. Hemos activado de inmediato el protocolo de satisfacción total para garantizar una experiencia memorable.
            </p>
          </div>

          {/* Micro-status pills & badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-medium text-[#0F172A]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <Users className="w-3.5 h-3.5 text-[#EA580C]" />
              <span className="font-semibold">{guest.party}</span>
              <span className="text-[#64748B]">({guest.partyDetails})</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] text-[#0F172A]">
              <Car className="w-3.5 h-3.5 text-[#059669]" />
              <span className="font-semibold">Transporte privado Mercedes incluido</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <MapPin className="w-3.5 h-3.5 text-[#45464d]" />
              <span>{guest.hotel}</span>
            </div>
          </div>
        </div>

        {/* Right column: Dedicated VIP Concierge Card */}
        <div className="shrink-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-4 sm:p-5 rounded-2xl shadow-md lg:w-80">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={CONCIERGE_DATA.avatar}
                alt={CONCIERGE_DATA.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#85f8c4] shadow-sm"
              />
              <span
                className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-[#0F172A] rounded-full"
                title="En línea"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wider text-[#85f8c4] uppercase">
                Concierge VIP Asignada
              </p>
              <h4 className="text-base font-bold text-white leading-snug">
                {CONCIERGE_DATA.name}
              </h4>
              <p className="text-xs text-[#bec6e0] flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                {CONCIERGE_DATA.status}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-[#bec6e0] leading-relaxed border-t border-white/10 pt-2.5">
            "Estoy coordinando el transporte y los accesos para que no esperen ni un minuto."
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={onOpenChat}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white text-[#0F172A] text-xs font-bold hover:bg-[#f8f9ff] active:scale-[0.98] transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Chat directo</span>
            </button>

            <button
              onClick={onCallConcierge}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold active:scale-[0.98] transition-all border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#85f8c4]" />
              <span>Llamada VIP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
