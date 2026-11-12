import React from 'react';
import { MaritimeBulletin } from '../types';
import { Waves, Wind, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

interface WeatherAlertBannerProps {
  bulletin: MaritimeBulletin;
  onViewMaritimeDetails: () => void;
}

export const WeatherAlertBanner: React.FC<WeatherAlertBannerProps> = ({
  bulletin,
  onViewMaritimeDetails,
}) => {
  return (
    <div className="relative rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] p-4 sm:p-5 shadow-sm overflow-hidden">
      {/* Decorative subtle ambient warm glow */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#F59E0B]" />

      <div className="pl-2 sm:pl-3">
        {/* Header line with institutional trust stamp */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-[#FDE68A]/60">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#059669] text-white">
              <ShieldAlert className="w-3.5 h-3.5" />
              Verificado Capitanía de Puerto / DIMAR
            </span>
            <span className="text-[#78350F] font-medium">
              Aviso oficial {bulletin.code} · {bulletin.time}
            </span>
          </div>

          <button
            onClick={onViewMaritimeDetails}
            className="text-xs font-semibold text-[#B45309] hover:text-[#78350F] flex items-center gap-1 transition-colors group"
          >
            <span>Ver telemetría y boyas</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Empathetic & authoritative alert message */}
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-8">
            <h3 className="text-base sm:text-lg font-bold text-[#78350F] leading-snug">
              Alerta marítima preventiva: Cuidamos la seguridad de tu viaje
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#92400E] leading-relaxed">
              Por disposición de Capitanía de Puerto, los zarpes turísticos hacia las Islas del Rosario están suspendidos hoy debido a fuerte oleaje en mar abierto (2.8m).
              <strong className="font-semibold text-[#78350F]"> Tu día no se pierde:</strong> tu familia ya cuenta con transporte privado y 3 planes de rescate exclusivos 100% cubiertos.
            </p>
          </div>

          {/* Quick telemetry indicators */}
          <div className="lg:col-span-4 flex items-center justify-between sm:justify-start lg:justify-end gap-3 text-xs bg-white/70 p-2.5 rounded-xl border border-[#FDE68A]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                <Waves className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-[#78350F] font-medium uppercase tracking-wider">Oleaje Bahía</p>
                <p className="text-sm font-bold text-[#0F172A] tabular-nums">2.8 metros</p>
              </div>
            </div>

            <div className="w-px h-8 bg-[#FDE68A]" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-[#78350F] font-medium uppercase tracking-wider">Viento NE</p>
                <p className="text-sm font-bold text-[#0F172A] tabular-nums">26 nudos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
