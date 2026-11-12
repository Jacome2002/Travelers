import React from 'react';
import { ScreenTab } from '../types';
import { ShieldCheck, Anchor, Compass, MessageCircle, Award, Phone } from 'lucide-react';

interface NavbarProps {
  currentTab: ScreenTab;
  onSelectTab: (tab: ScreenTab) => void;
  onOpenChat: () => void;
  selectedPlanTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenChat,
  selectedPlanTitle,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('rescue')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-[#1e293b] transition-colors shrink-0">
            PB
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap leading-tight">
              Modo Plan B
            </span>
            <span className="text-[11px] font-semibold text-[#EA580C] uppercase tracking-wider leading-none">
              Concierge Cartagena
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#45464d]">
          <button
            onClick={() => onSelectTab('rescue')}
            className={`whitespace-nowrap pb-1 border-b-2 transition-all flex items-center gap-1.5 ${
              currentTab === 'rescue'
                ? 'border-[#EA580C] text-[#0F172A] font-semibold'
                : 'border-transparent text-[#45464d] hover:text-[#0F172A]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#EA580C]" />
            Planes de Rescate
          </button>

          <button
            onClick={() => onSelectTab('pass')}
            className={`whitespace-nowrap pb-1 border-b-2 transition-all flex items-center gap-1.5 ${
              currentTab === 'pass'
                ? 'border-[#EA580C] text-[#0F172A] font-semibold'
                : 'border-transparent text-[#45464d] hover:text-[#0F172A]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            Pase Digital & Van
            {selectedPlanTitle && (
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
            )}
          </button>

          <button
            onClick={() => onSelectTab('maritime')}
            className={`whitespace-nowrap pb-1 border-b-2 transition-all flex items-center gap-1.5 ${
              currentTab === 'maritime'
                ? 'border-[#EA580C] text-[#0F172A] font-semibold'
                : 'border-transparent text-[#45464d] hover:text-[#0F172A]'
            }`}
          >
            <Anchor className="w-4 h-4 text-[#1e293b]" />
            Capitanía & Clima
          </button>

          <button
            onClick={() => onSelectTab('guarantee')}
            className={`whitespace-nowrap pb-1 border-b-2 transition-all flex items-center gap-1.5 ${
              currentTab === 'guarantee'
                ? 'border-[#EA580C] text-[#0F172A] font-semibold'
                : 'border-transparent text-[#45464d] hover:text-[#0F172A]'
            }`}
          >
            <Award className="w-4 h-4 text-[#059669]" />
            Garantía 100%
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1e293b] active:scale-[0.98] rounded-xl transition-all shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#85f8c4]" />
            <span>Hablar con Valentina</span>
          </button>
        </div>
      </div>

      {/* Mobile Subnav for Easy One-Thumb Switching */}
      <div className="md:hidden flex items-center justify-around px-2 py-2 border-t border-[#e2e8f0]/80 bg-[#f8f9ff]">
        <button
          onClick={() => onSelectTab('rescue')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            currentTab === 'rescue'
              ? 'bg-[#0F172A] text-white'
              : 'text-[#45464d] hover:text-[#0F172A]'
          }`}
        >
          Planes B
        </button>
        <button
          onClick={() => onSelectTab('pass')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
            currentTab === 'pass'
              ? 'bg-[#0F172A] text-white'
              : 'text-[#45464d] hover:text-[#0F172A]'
          }`}
        >
          Pase & Van
          {selectedPlanTitle && <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />}
        </button>
        <button
          onClick={() => onSelectTab('maritime')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            currentTab === 'maritime'
              ? 'bg-[#0F172A] text-white'
              : 'text-[#45464d] hover:text-[#0F172A]'
          }`}
        >
          Capitanía
        </button>
        <button
          onClick={() => onSelectTab('guarantee')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            currentTab === 'guarantee'
              ? 'bg-[#0F172A] text-white'
              : 'text-[#45464d] hover:text-[#0F172A]'
          }`}
        >
          Garantía
        </button>
      </div>
    </header>
  );
};
