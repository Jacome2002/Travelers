import React from 'react';
import { MaritimeBulletin, MaritimeStation } from '../types';
import { MARITIME_BULLETIN, MARITIME_STATIONS, HOURLY_FORECAST } from '../data/mockData';
import { Anchor, Waves, Wind, Compass, AlertTriangle, ShieldCheck, CheckCircle2, Clock, MapPin, ExternalLink } from 'lucide-react';

export const MaritimeMonitoringView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Banner with Maritime Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-slate-800">
        <div className="relative h-64 sm:h-72 w-full">
          <img
            src="/src/assets/images/cartagena_bay_weather_1794496843714.jpg"
            alt="Monitoreo Marítimo Bahía de Cartagena"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-[#EA580C] text-white font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Alerta Naranja Marítima Vigente
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-200 font-mono">
              Capitanía de Puerto de Cartagena · DIMAR
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
            Centro de Monitoreo Marítimo & Condiciones Hidrográficas
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Datos oficiales transmitidos en directo por el CIOH (Centro de Investigaciones Oceanográficas e Hidrográficas del Caribe) e IDEAM para la Bahía de Cartagena y el Archipiélago de Nuestra Señora del Rosario.
          </p>
        </div>
      </div>

      {/* Official Bulletin Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shrink-0">
              <Anchor className="w-5 h-5 text-[#85f8c4]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
                Boletín Oficial de Seguridad Naviera
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                {MARITIME_BULLETIN.code} · {MARITIME_BULLETIN.date}
              </h3>
            </div>
          </div>

          <div className="text-xs text-[#64748B]">
            Emisión: <span className="font-semibold text-[#0F172A]">{MARITIME_BULLETIN.time}</span>
          </div>
        </div>

        <div className="bg-[#FFFBEB] p-4 rounded-2xl border border-[#FDE68A] text-xs sm:text-sm text-[#78350F] leading-relaxed space-y-2">
          <p className="font-bold">
            {MARITIME_BULLETIN.headline}
          </p>
          <p className="text-xs text-[#92400E]">
            {MARITIME_BULLETIN.summary}
          </p>
          <p className="text-xs text-[#92400E] border-t border-[#FDE68A] pt-2">
            <strong>Disposición:</strong> {MARITIME_BULLETIN.advisoryText}
          </p>
        </div>
      </div>

      {/* Buoy Stations Telemetry Grid */}
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
          Estado por Estaciones Hidrometeorológicas y Pasos Insulares
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MARITIME_STATIONS.map((station, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-medium text-[#64748B] uppercase tracking-wide">
                    {station.area}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] leading-snug">
                    {station.name}
                  </h4>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    station.status === 'Cerrado'
                      ? 'bg-[#ffdad6] text-[#93000a]'
                      : station.status === 'Restringido'
                      ? 'bg-[#ffdbce] text-[#7f2b00]'
                      : 'bg-[#85f8c4]/40 text-[#005137]'
                  }`}
                >
                  {station.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-[#f8f9ff] p-2.5 rounded-xl border border-[#e2e8f0] text-center">
                <div>
                  <span className="text-[10px] text-[#64748B] block">Oleaje</span>
                  <span className="text-sm font-extrabold text-[#0F172A] tabular-nums">
                    {station.swellMeters} m
                  </span>
                </div>
                <div className="border-x border-[#e2e8f0]">
                  <span className="text-[10px] text-[#64748B] block">Viento</span>
                  <span className="text-sm font-extrabold text-[#0F172A] tabular-nums">
                    {station.windKnots} kts
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] block">Dirección</span>
                  <span className="text-xs font-bold text-[#0F172A]">
                    {station.windDirection.split(' ')[0]}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#45464d] leading-relaxed">
                {station.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Swell Forecast & Reopening Projection */}
      <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Pronóstico de Oleaje y Proyección de Reapertura
            </h3>
            <p className="text-xs text-[#64748B]">
              Modelo numérico WAVEWATCH III calibrado para costas de Bolívar
            </p>
          </div>
          <span className="text-xs font-semibold text-[#059669] bg-[#eff4ff] px-2.5 py-1 rounded-lg">
            Reapertura esperada: Mañana 06:00 AM
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left">
            <thead>
              <tr className="border-b border-[#e2e8f0] text-[#64748B] font-bold">
                <th className="py-2.5 pr-4">Horario</th>
                <th className="py-2.5 px-4">Altura de Ola</th>
                <th className="py-2.5 px-4">Vientos</th>
                <th className="py-2.5 pl-4">Estado de Puerto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]/60 text-[#0F172A]">
              {HOURLY_FORECAST.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 pr-4 font-semibold">{item.time}</td>
                  <td className="py-3 px-4 tabular-nums font-bold">
                    <span className={item.swell > 2.0 ? 'text-[#EA580C]' : 'text-[#059669]'}>
                      {item.swell} m
                    </span>
                  </td>
                  <td className="py-3 px-4 tabular-nums">{item.wind} nudos</td>
                  <td className="py-3 pl-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                      item.status.includes('Favorable')
                        ? 'bg-[#85f8c4]/40 text-[#005137]'
                        : item.status.includes('Restringido')
                        ? 'bg-[#ffdad6] text-[#93000a]'
                        : 'bg-[#eff4ff] text-[#0F172A]'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
