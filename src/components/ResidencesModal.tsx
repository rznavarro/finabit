import React, { useState } from 'react';
import { Property } from '../types';
import { LUXURY_PROPERTIES } from '../data/mockData';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface ResidencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (propertyTitle?: string) => void;
}

export const ResidencesModal: React.FC<ResidencesModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B133C]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FEFEFE] w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white/80">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1B133C]/10 flex items-center justify-between bg-white/80 backdrop-blur-xs sticky top-0 z-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              FINABIT Curated Collection
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-instrument text-[#1B133C]">
              Featured Luxury Residences
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-[#1B133C]/70 max-w-3xl">
            Each residence in the FINABIT portfolio is selected for its exceptional architectural heritage, prime positioning, and uncompromising privacy standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LUXURY_PROPERTIES.map((prop) => (
              <div
                key={prop.id}
                className="group rounded-2xl border border-[#1B133C]/10 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B133C]/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                    {prop.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#1B133C] text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {prop.price}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#1B133C]/60 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{prop.location}</span>
                    </div>
                    <h3 className="text-xl font-serif-instrument text-[#1B133C] font-semibold">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#1B133C]/70 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1B133C]/5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-medium text-[#1B133C]/80">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#1B133C]/50" /> {prop.specs.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-[#1B133C]/50" /> {prop.specs.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#1B133C]/50" /> {prop.specs.sqft} sqft
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onBookConsultation(prop.title);
                      }}
                      className="text-xs font-semibold text-[#1B133C] hover:text-amber-700 underline underline-offset-4 cursor-pointer"
                    >
                      Private Inquiry →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#1B133C]/5 border-t border-[#1B133C]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1B133C]/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>All inquiries verified with full non-disclosure confidentiality.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1B133C] text-white font-medium hover:bg-[#1B133C]/90 transition-all cursor-pointer"
          >
            Request Full Estate Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
