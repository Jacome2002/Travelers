import React, { useState } from 'react';
import { PlanOption, GuestInfo, DriverInfo } from '../types';
import { QrCode, Car, Phone, MapPin, Clock, CheckCircle2, Utensils, ShieldCheck, Download, Share2, Sparkles, Navigation } from 'lucide-react';

interface ActivePassViewProps {
  plan: PlanOption;
  guest: GuestInfo;
  driver: DriverInfo;
  onChangePlan: () => void;
  onOpenChat: () => void;
}

export const ActivePassView: React.FC<ActivePassViewProps> = ({
  plan,
  guest,
  driver,
  onChangePlan,
  onOpenChat,
}) => {
  const [voucherRedeemed, setVoucherRedeemed] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(guest.reservationId);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Confirmation Ribbon */}
      <div className="bg-[#002114] text-white p-4 sm:p-5 rounded-3xl border border-[#069669]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#069669] text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[#85f8c4]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85f8c4]">
                Plan B Confirmado & En Ejecución
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white font-mono">
                {guest.reservationId}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              {plan.title}
            </h2>
          </div>
        </div>

        <button
          onClick={onChangePlan}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#85f8c4] border border-[#069669]/50 transition-colors whitespace-nowrap self-start sm:self-center"
        >
          Cambiar a otra opción
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Digital Boarding Pass & QR */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-md relative overflow-hidden">
            {/* Top Pass Details */}
            <div className="flex items-start justify-between gap-4 border-b border-[#e2e8f0] pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
                  Pase Digital Familiar VIP
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A] mt-0.5">
                  {guest.name}
                </h3>
                <p className="text-xs text-[#64748B]">
                  {guest.party} · {guest.partyDetails}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-medium text-[#64748B]">Hotel de salida</span>
                <p className="text-xs font-bold text-[#0F172A]">
                  Las Américas Casa de Playa
                </p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-[#059669] bg-[#eff4ff] px-2 py-0.5 rounded">
                  Lobby Principal
                </span>
              </div>
            </div>

            {/* Pass QR and Code */}
            <div className="my-6 p-5 rounded-2xl bg-[#f8f9ff] border border-[#e2e8f0] flex flex-col sm:flex-row items-center gap-6">
              {/* Simulated crisp SVG QR code */}
              <div className="p-3 bg-white rounded-2xl border border-[#cbd5e1] shadow-sm shrink-0">
                <div className="w-36 h-36 relative flex items-center justify-center bg-slate-950 p-2 rounded-xl">
                  {/* Decorative QR pattern representation */}
                  <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full bg-white p-2 rounded-lg">
                    <div className="bg-slate-950 col-span-2 row-span-2 rounded-sm" />
                    <div className="bg-slate-950 col-start-5 col-span-2 row-span-2 rounded-sm" />
                    <div className="bg-slate-950 row-start-5 col-span-2 row-span-2 rounded-sm" />
                    <div className="bg-slate-950 col-start-3 row-start-2 w-2 h-2" />
                    <div className="bg-slate-950 col-start-4 row-start-3 w-2 h-2" />
                    <div className="bg-slate-950 col-start-3 row-start-4 w-3 h-3" />
                    <div className="bg-slate-950 col-start-4 row-start-5 w-2 h-2" />
                    <div className="bg-slate-950 col-start-5 row-start-4 w-2 h-2" />
                    <div className="bg-[#EA580C] col-start-3 col-span-2 row-start-3 row-span-2 rounded flex items-center justify-center text-[8px] font-bold text-white">
                      VIP
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#85f8c4]/30 text-[#005137] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Válido para los 4 pasajeros
                </div>
                <h4 className="text-base font-bold text-[#0F172A]">
                  Código: {guest.reservationId}-PB
                </h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Presenta este código al conductor Carlos y en la taquilla preferencial del tour. No requiere impresión física.
                </p>
                <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#cbd5e1] hover:bg-slate-50 text-[#0F172A] transition-colors"
                  >
                    {copiedCode ? '¡Copiado!' : 'Copiar código'}
                  </button>
                  <button
                    onClick={() => alert('Pase digital guardado en tu dispositivo.')}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#1e293b] flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Descargar Pase
                  </button>
                </div>
              </div>
            </div>

            {/* Included Schedule & Milestones */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Cronograma de tu experiencia
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 border border-[#d3e4fe]">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">09:15 AM — Recogida en Lobby Hotel</p>
                    <p className="text-xs text-[#64748B]">Van ejecutiva climatizada esperándote con conductor privado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 border border-[#d3e4fe]">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">10:00 AM — Experiencia VIP</p>
                    <p className="text-xs text-[#64748B]">Acceso Fast-Track sin filas con guía bilingüe y kit para niños</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 border border-[#d3e4fe]">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">01:00 PM — Almuerzo Gourmet Incluido</p>
                    <p className="text-xs text-[#64748B]">Mesa reservada preferencial con menú especial caribeño</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#0F172A] font-bold text-xs flex items-center justify-center shrink-0 border border-[#d3e4fe]">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A]">03:30 PM — Retorno seguro al hotel</p>
                    <p className="text-xs text-[#64748B]">Traslado puerta a puerta directo a Hotel Las Américas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Meal Voucher Section */}
          <div className="bg-white rounded-3xl p-5 border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#ffdbce] text-[#7f2b00] flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Bono Gastronómico Colonial (4 Comensales)
                  </h4>
                  <p className="text-[11px] text-[#64748B]">
                    El Boliche Cebichería & Restaurante Casa San Agustín
                  </p>
                </div>
              </div>

              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                voucherRedeemed ? 'bg-slate-100 text-slate-500' : 'bg-[#85f8c4]/40 text-[#005137]'
              }`}>
                {voucherRedeemed ? 'Canjeado en mesa' : 'Activo'}
              </span>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#45464d]">
              <div>
                <p><strong>Menú Adultos:</strong> Entrada de patacón caribeño + Pescado a la brasa con arroz con coco + Postre de coco.</p>
                <p className="mt-1"><strong>Menú Infantil (Sofía & Mateo):</strong> Mini filete de pollo o pescado crocante + jugos naturales + helado.</p>
              </div>

              <button
                onClick={() => setVoucherRedeemed(!voucherRedeemed)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  voucherRedeemed
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-[#EA580C] text-white hover:bg-[#c2410c]'
                }`}
              >
                {voucherRedeemed ? 'Revertir estado' : 'Canjear en restaurante'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Driver Live Tracking & Concierge Hotline */}
        <div className="lg:col-span-5 space-y-6">
          {/* Driver Card */}
          <div className="bg-white rounded-3xl p-5 border border-[#e2e8f0] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                Transporte Privado Asignado
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-[#059669] bg-[#eff4ff] px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                En camino
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-lg text-slate-700 shrink-0 border border-slate-200">
                CM
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold text-[#0F172A] leading-tight">
                  {driver.name}
                </h4>
                <p className="text-xs text-[#64748B] flex items-center gap-1 mt-0.5">
                  ★ <strong className="text-[#0F172A]">{driver.rating}</strong> (Más de 600 traslados VIP)
                </p>
                <p className="text-xs font-semibold text-[#0F172A] mt-1">
                  {driver.vehicle} · Placas <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">{driver.plate}</span>
                </p>
              </div>
            </div>

            {/* Live ETA Box */}
            <div className="bg-[#eff4ff] p-3.5 rounded-2xl border border-[#d3e4fe] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shadow-xs">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#45464d]">Llegada estimada a tu hotel</p>
                  <p className="text-base font-extrabold text-[#0F172A]">
                    {driver.estimatedArrivalMinutes} minutos
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-medium text-[#64748B]">Ubicación actual</span>
                <p className="text-xs font-bold text-[#0F172A]">Avenida Santander</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${driver.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0F172A] hover:bg-[#1e293b] text-white text-xs font-bold transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#85f8c4]" />
                <span>Llamar al chofer</span>
              </a>

              <button
                onClick={onOpenChat}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#f8f9ff] hover:bg-[#eff4ff] text-[#0F172A] text-xs font-semibold transition-all border border-[#e2e8f0]"
              >
                <span>Avisar al Concierge</span>
              </button>
            </div>
          </div>

          {/* Safety & Comfort Guarantee reminder */}
          <div className="bg-gradient-to-br from-[#0F172A] to-[#131b2e] text-white p-5 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#85f8c4] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Seguridad & Asistencia Garantizada
            </div>
            <p className="text-xs text-[#bec6e0] leading-relaxed">
              Tu seguro médico y de asistencia integral Colasistencia está activo durante toda la jornada. Si requieres botiquín, sillas infantiles homologadas o refrigerios especiales, indícaselo a Carlos o Valentina.
            </p>
            <div className="pt-1 text-[11px] text-[#7c839b] flex items-center justify-between border-t border-white/10">
              <span>Póliza: COL-CT-8924001</span>
              <span>Cobertura médica: $50.000.000 COP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
