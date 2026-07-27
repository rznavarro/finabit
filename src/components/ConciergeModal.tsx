import React from 'react';
import { CONCIERGE_SERVICES } from '../data/mockData';
import { X, Plane, Shield, Utensils, Palette, Check, Sparkles } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (serviceName?: string) => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  if (!isOpen) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-amber-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B133C]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FEFEFE] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/80">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1B133C]/10 flex items-center justify-between bg-white/80 backdrop-blur-xs sticky top-0 z-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              White-Glove Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-instrument text-[#1B133C]">
              FINABIT Bespoke Concierge
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-[#1B133C]/70 max-w-2xl leading-relaxed">
            Beyond property acquisition, FINABIT integrates 24/7 dedicated lifestyle managers, private aviation liaisons, and property staff to ensure your day-to-day residence management is completely frictionless.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONCIERGE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-5 rounded-xl border border-[#1B133C]/10 bg-white/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      {renderIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B133C]/50">
                        {service.category}
                      </span>
                      <h3 className="text-lg font-serif-instrument font-semibold text-[#1B133C]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#1B133C]/70 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#1B133C]/80">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation(`Concierge: ${service.title}`);
                  }}
                  className="w-full py-2 px-3 text-xs font-semibold text-[#1B133C] bg-[#1B133C]/5 hover:bg-[#1B133C] hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  Request Service Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#1B133C]/5 border-t border-[#1B133C]/10 flex justify-end">
          <button
            onClick={() => {
              onClose();
              onBookConsultation('Full Concierge Package');
            }}
            className="px-6 py-2.5 rounded-xl bg-[#1B133C] text-white text-xs font-medium hover:bg-[#1B133C]/90 transition-all cursor-pointer"
          >
            Assign Dedicated Concierge Manager
          </button>
        </div>
      </div>
    </div>
  );
};
