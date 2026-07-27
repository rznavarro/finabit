import React from 'react';
import { ActiveModal } from '../types';

interface NavbarProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="w-full flex justify-center pt-4 md:pt-6 px-4 relative z-20">
      <nav className="bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm flex items-center justify-between gap-6 md:gap-10 border border-white/50">
        {/* Brand & Custom SVG Logo */}
        <button
          onClick={() => onOpenModal('about')}
          className="flex items-center gap-2.5 cursor-pointer group focus:outline-none"
          aria-label="FINABIT Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transform group-hover:scale-105 transition-transform duration-200"
          >
            <path
              d="M 256 256 L 128 256 L 0 128 L 128 128 Z"
              fill="#1B133C"
            />
            <path
              d="M 256 128 L 128 128 L 0 0 L 128 0 Z"
              fill="#1B133C"
            />
          </svg>
          <span className="font-semibold text-sm tracking-widest text-[#1B133C] uppercase font-['Inter']">
            FINABIT
          </span>
        </button>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          <button
            onClick={() => onOpenModal('residences')}
            className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors duration-200 cursor-pointer"
          >
            Residences
          </button>
          <button
            onClick={() => onOpenModal('concierge')}
            className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors duration-200 cursor-pointer"
          >
            Concierge
          </button>
          <button
            onClick={() => onOpenModal('portfolio')}
            className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors duration-200 cursor-pointer"
          >
            Private Portfolio
          </button>
          <button
            onClick={() => onOpenModal('about')}
            className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
        </div>

        {/* Mobile quick action CTA indicator */}
        <div className="sm:hidden">
          <button
            onClick={() => onOpenModal('consultation')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1B133C] text-white hover:bg-[#1B133C]/90 transition-all"
          >
            Consult
          </button>
        </div>
      </nav>
    </header>
  );
};
