import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'General Private Consultation',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: defaultInterest,
    location: 'Geneva / French Riviera',
    timeframe: 'Immediate (1-3 Months)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B133C]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FEFEFE] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/80">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1B133C]/10 flex items-center justify-between bg-white/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Discreet Inquiry
            </span>
            <h2 className="text-2xl font-serif-instrument text-[#1B133C]">
              Private Access Request
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

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif-instrument text-[#1B133C]">
              Request Received
            </h3>
            <p className="text-xs text-[#1B133C]/70 leading-relaxed max-w-sm mx-auto">
              A Senior FINABIT Managing Director will contact you discreetly within 2 hours to coordinate your consultation.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#1B133C] text-white text-xs font-semibold hover:bg-[#1B133C]/90 transition-all cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[#1B133C]/80">
              <Lock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Guaranteed full non-disclosure privacy. Your information is never shared.
              </span>
            </div>

            <div>
              <label className="block font-medium text-[#1B133C] mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Lord Alexander Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white focus:outline-none focus:border-[#1B133C] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-[#1B133C] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="vance@privateoffice.ch"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white focus:outline-none focus:border-[#1B133C] transition-colors"
                />
              </div>

              <div>
                <label className="block font-medium text-[#1B133C] mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+41 22 819 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white focus:outline-none focus:border-[#1B133C] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-[#1B133C] mb-1">Area of Interest</label>
              <input
                type="text"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white focus:outline-none focus:border-[#1B133C] transition-colors"
              />
            </div>

            <div>
              <label className="block font-medium text-[#1B133C] mb-1">Specific Requirements / Notes</label>
              <textarea
                rows={3}
                placeholder="Specify preferred regions, waterfront desires, or security preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white focus:outline-none focus:border-[#1B133C] transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-[#1B133C]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>FINABIT Private Advisory</span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#1B133C] text-white font-semibold hover:bg-[#1B133C]/90 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
