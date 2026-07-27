import React from 'react';
import { X, Building2, Globe2, Shield, Award, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B133C]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FEFEFE] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/80 max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1B133C]/10 flex items-center justify-between bg-white/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Legacy & Integrity
            </span>
            <h2 className="text-2xl font-serif-instrument text-[#1B133C]">
              About FINABIT
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1B133C]/60 hover:text-[#1B133C] hover:bg-[#1B133C]/5 rounded-xl transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#1B133C]/80 leading-relaxed">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Sparkles className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-serif-instrument font-semibold text-[#1B133C]">
                Redefining Luxury Real Estate & Concierge
              </h3>
              <p className="mt-1">
                FINABIT was established to unify ultra-prime property brokerage with institutional-grade concierge management. We advise family offices, royal houses, and industry pioneers across global gateway markets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-[#1B133C]/10 bg-white space-y-1.5">
              <Building2 className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-semibold text-sm text-[#1B133C]">Geneva HQ</h4>
              <p className="text-[#1B133C]/60">Rue du Rhône 42, 1204 Genève, Switzerland</p>
            </div>

            <div className="p-4 rounded-xl border border-[#1B133C]/10 bg-white space-y-1.5">
              <Globe2 className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-semibold text-sm text-[#1B133C]">Monaco Advisory</h4>
              <p className="text-[#1B133C]/60">Avenue de Monte-Carlo, 98000 Monaco</p>
            </div>

            <div className="p-4 rounded-xl border border-[#1B133C]/10 bg-white space-y-1.5">
              <Award className="w-5 h-5 text-amber-600 mb-1" />
              <h4 className="font-semibold text-sm text-[#1B133C]">New York & Miami</h4>
              <p className="text-[#1B133C]/60">5th Avenue & Brickell Key Private Hubs</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1B133C] text-white space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-sm">Uncompromising Confidentiality</span>
            </div>
            <p className="text-white/80 leading-relaxed text-xs">
              Every client interaction at FINABIT is governed by strict Swiss bank-grade encryption protocols and binding non-disclosure agreements. Your identity and estate assets remain entirely private.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#1B133C]/5 border-t border-[#1B133C]/10 flex items-center justify-between">
          <span className="text-xs text-[#1B133C]/60">FINABIT Global Advisory Group © 2026</span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2 rounded-xl bg-[#1B133C] text-white text-xs font-semibold hover:bg-[#1B133C]/90 transition-all cursor-pointer"
          >
            Connect With Advisory Board
          </button>
        </div>
      </div>
    </div>
  );
};
