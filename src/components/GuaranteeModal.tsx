import React from 'react';
import { ShieldCheck, CheckCircle2, Award, HeartHandshake, PhoneCall, FileText, X } from 'lucide-react';

interface GuaranteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChat: () => void;
}

export const GuaranteeModal: React.FC<GuaranteeModalProps> = ({
  isOpen,
  onClose,
  onOpenChat,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#002114] text-white flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#069669] text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#85f8c4]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#85f8c4]">
                Compromiso de Hospitalidad Colombiana
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Garantía Plan B al 100%
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 text-[#0F172A]">
          <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
            Las restricciones climáticas emitidas por la Capitanía de Puerto son medidas oficiales de seguridad fuera de nuestro control, pero <strong className="text-[#0F172A]">la felicidad y tranquilidad de tu familia sí está 100% bajo nuestra responsabilidad.</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#e2e8f0] space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Cero Sobrecostos Imprevistos
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Asumimos el 100% de la diferencia de valor entre tu tour original y el Plan B de rescate elegido. Nunca pagarás un peso adicional.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#e2e8f0] space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Transporte Privado Intacto
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                La van Mercedes-Benz ejecutiva y el chofer Carlos Mendoza permanecen a tu entera disposición para todo el itinerario alternativo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#e2e8f0] space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Derecho a Devolución Total
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Si prefieres quedarte descansando por tu cuenta sin tour, recibes el reembolso del 100% de tu dinero inmediatamente sin cartas ni trabas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#e2e8f0] space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#85f8c4]/30 text-[#059669] flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="text-sm font-bold text-[#0F172A]">
                Seguro Médico Colasistencia
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Póliza Todo Riesgo de asistencia médica integral y traslados de urgencia activa para los 4 pasajeros durante todo el día.
              </p>
            </div>
          </div>

          <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#d3e4fe] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#0F172A] block">¿Prefieres gestionar el reembolso inmediato del 100%?</span>
              <span className="text-[#64748B]">Valentina lo ejecuta en 3 minutos directo a tu método de pago original.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenChat();
              }}
              className="px-3.5 py-2 rounded-xl bg-[#0F172A] text-white font-bold hover:bg-[#1e293b] whitespace-nowrap self-start sm:self-center transition-colors"
            >
              Hablar con Valentina
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
