/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveModal } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResidencesModal } from './components/ResidencesModal';
import { ConciergeModal } from './components/ConciergeModal';
import { ConsultationModal } from './components/ConsultationModal';
import { PrivatePortfolioModal } from './components/PrivatePortfolioModal';
import { AboutModal } from './components/AboutModal';
import { Volume2, VolumeX, ShieldCheck, MapPin } from 'lucide-react';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [consultationInterest, setConsultationInterest] = useState<string>(
    'General Private Consultation'
  );
  const [isMuted, setIsMuted] = useState(true);

  const handleOpenConsultation = (interestName?: string) => {
    if (interestName) {
      setConsultationInterest(interestName);
    }
    setActiveModal('consultation');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between bg-slate-100 font-['Inter'] text-[#1B133C] select-none">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-[130%] object-cover object-top filter brightness-[0.98] contrast-[1.02]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
        />
        {/* Subtle radial vignette overlay for readability */}
        <div className="absolute inset-0 bg-radial from-transparent via-white/10 to-white/30 pointer-events-none" />
      </div>

      {/* Main Overlay Content */}
      <div className="relative z-10 flex flex-col h-full justify-between pb-6 md:pb-8">
        {/* Navigation Bar */}
        <Navbar onOpenModal={(modal) => setActiveModal(modal)} />

        {/* Hero Section */}
        <Hero onOpenModal={(modal) => setActiveModal(modal)} />

        {/* Bottom Minimalist Bar */}
        <footer className="w-full px-6 md:px-12 flex items-center justify-between text-xs font-medium text-[#1B133C]/70">
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/40 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Geneva • Monaco • New York • Miami</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/40 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Swiss Bank Grade Privacy</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/50 text-[#1B133C] hover:bg-white transition-all cursor-pointer shadow-2xs"
              aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#1B133C]/60" />
                  <span className="text-[11px]">Audio Off</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] font-semibold text-emerald-800">Audio On</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-[#1B133C]/60 font-semibold uppercase tracking-wider">
              FINABIT © 2026
            </span>
          </div>
        </footer>
      </div>

      {/* Interactive Modals */}
      <ResidencesModal
        isOpen={activeModal === 'residences'}
        onClose={() => setActiveModal(null)}
        onBookConsultation={handleOpenConsultation}
      />

      <ConciergeModal
        isOpen={activeModal === 'concierge'}
        onClose={() => setActiveModal(null)}
        onBookConsultation={handleOpenConsultation}
      />

      <PrivatePortfolioModal
        isOpen={activeModal === 'portfolio'}
        onClose={() => setActiveModal(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={() => setActiveModal(null)}
        onOpenConsultation={() => handleOpenConsultation('Executive Board Inquiry')}
      />

      <ConsultationModal
        isOpen={activeModal === 'consultation'}
        onClose={() => setActiveModal(null)}
        defaultInterest={consultationInterest}
      />
    </div>
  );
}
