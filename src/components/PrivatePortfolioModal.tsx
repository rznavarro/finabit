import React, { useState } from 'react';
import { X, Lock, KeyRound, Eye, ArrowRight } from 'lucide-react';

interface PrivatePortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: (interestName?: string) => void;
}

export const PrivatePortfolioModal: React.FC<PrivatePortfolioModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [accessCode, setAccessCode] = useState('');
  const [codeValid, setCodeValid] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim().length > 0) {
      setCodeValid(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B133C]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FEFEFE] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/80">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1B133C]/10 flex items-center justify-between bg-white/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              Confidential Off-Market Registry
            </span>
            <h2 className="text-2xl font-serif-instrument text-[#1B133C]">
              FINABIT Private Portfolio
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
        <div className="p-6 space-y-6">
          <p className="text-xs sm:text-sm text-[#1B133C]/70 leading-relaxed">
            Over 60% of FINABIT’s prime European and North American transactions occur off-market. Access to these ultra-high net worth estates requires an authenticated access code or verified accreditation.
          </p>

          {!codeValid ? (
            <div className="p-6 rounded-2xl bg-[#1B133C]/5 border border-[#1B133C]/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-700">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1B133C]">
                    Enter Institutional or Private Passcode
                  </h3>
                  <p className="text-xs text-[#1B133C]/60">
                    Provided by your FINABIT Senior Relationship Director
                  </p>
                </div>
              </div>

              <form onSubmit={handleVerify} className="flex gap-2">
                <input
                  type="password"
                  placeholder="e.g. FINABIT-GENEVA-2026"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#1B133C]/15 bg-white text-xs focus:outline-none focus:border-[#1B133C]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#1B133C] text-white text-xs font-semibold hover:bg-[#1B133C]/90 transition-all cursor-pointer"
                >
                  Verify Access
                </button>
              </form>

              <div className="pt-2 border-t border-[#1B133C]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#1B133C]/60">Don't have an access code?</span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation('Off-Market Portfolio Access Passcode');
                  }}
                  className="text-xs font-semibold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Request NDA Access Credential <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-800 text-xs flex items-center justify-between">
                <span className="font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  Off-Market Vault Unlocked: 14 Private Listings Active
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold">Confidential</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#1B133C]/10 bg-white space-y-2">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Monaco Harbor Front
                  </span>
                  <h4 className="font-serif-instrument text-base font-semibold text-[#1B133C]">
                    Le Jardin Secret Estate
                  </h4>
                  <p className="text-xs text-[#1B133C]/60">
                    Private 1,200 sqm waterfront estate with subterranean submarine dock.
                  </p>
                  <p className="text-xs font-bold text-[#1B133C]">$85,000,000</p>
                </div>

                <div className="p-4 rounded-xl border border-[#1B133C]/10 bg-white space-y-2">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Aspen Mountain Crest
                  </span>
                  <h4 className="font-serif-instrument text-base font-semibold text-[#1B133C]">
                    The Summit Glass Chalet
                  </h4>
                  <p className="text-xs text-[#1B133C]/60">
                    Ski-in/ski-out private compound with heated helipad and indoor spa.
                  </p>
                  <p className="text-xs font-bold text-[#1B133C]">$62,000,000</p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation('Off-Market Portfolio Full dossier request');
                }}
                className="w-full py-3 rounded-xl bg-[#1B133C] text-white text-xs font-semibold hover:bg-[#1B133C]/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Request Full Dossiers Under NDA</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
