import React from 'react';
import { ActiveModal } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-16 z-10 max-w-5xl mx-auto">
      {/* Badge */}
      <button
        onClick={() => onOpenModal('portfolio')}
        className="mb-6 inline-flex items-center gap-2.5 rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#1B133C] hover:bg-white/90 hover:shadow-sm transition-all cursor-pointer group"
      >
        <span className="bg-orange-500 rounded w-5 h-5 flex items-center justify-center font-bold text-xs text-white shadow-xs group-hover:scale-105 transition-transform">
          F
        </span>
        <span>FINABIT — Curated Luxury Real Estate</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-600 ml-0.5 opacity-80" />
      </button>

      {/* Heading */}
      <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl text-center font-normal">
        <span className="block">Sophisticated residences</span>
        <span className="block italic text-[#1B133C]">for mundane workflows</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/80 text-center font-normal">
        Eliminate your tedious property search and 10x your lifestyle experience. Put intelligent concierge agents on every routine process so you acquire fine estates faster and enjoy seamless living for your family — effortlessly.
      </p>

      {/* CTA Button */}
      <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => onOpenModal('consultation')}
          className="rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer flex items-center gap-2.5 group"
        >
          <span>Get Early Access</span>
          <ArrowRight className="w-4 h-4 text-[#1B133C] transform group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onOpenModal('residences')}
          className="px-5 py-3 text-sm font-medium text-[#1B133C] hover:text-[#1B133C]/80 backdrop-blur-xs rounded-xl hover:bg-white/40 transition-all cursor-pointer"
        >
          Explore Private Residences
        </button>
      </div>
    </div>
  );
};
