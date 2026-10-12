import React from 'react';
import { ASSETS } from '../data/mockData';

interface FooterProps {
  onNavClick: (screen: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="w-full bg-[#F4F1EA] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <button
              onClick={() => onNavClick('overview')}
              className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            >
              <img
                alt="Around D World Luxury Emblem"
                className="h-7 w-auto object-contain opacity-90"
                src={ASSETS.emblem}
              />
              <span className="text-[1.5rem] font-medium tracking-tight text-[#0F283D]">
                Around D World
              </span>
            </button>
            <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] max-w-sm font-light">
              Curators of bespoke corporate retreats, executive summits, and transformative private travel journeys. 18+ years of quiet excellence and global mastery.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="material-symbols-outlined text-[#D97706] text-[18px]">verified</span>
              <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-[#43474c]">
                IATA Accredited Agency #14300000
              </span>
            </div>
          </div>

          {/* Registered Office */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D]">
              Registered Office
            </h4>
            <address className="not-italic text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light">
              Ujagar Chambers, Deonar,<br />
              Chembur, Mumbai, Maharashtra 400088<br />
              India
            </address>
            <div className="pt-2">
              <span className="text-[0.6875rem] font-semibold text-[#64748B] uppercase tracking-wider">
                Direct Concierge:
              </span>
              <p className="text-[0.875rem] text-[#0F283D] font-medium mt-0.5">
                +91 (22) 2550 4900 • concierge@arounddworld.com
              </p>
            </div>
          </div>

          {/* Portfolio & Trust Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D]">
              Portfolio &amp; Trust
            </h4>
            <div className="flex flex-col gap-2 text-[0.875rem] text-[#43474c]">
              <button
                onClick={() => onNavClick('corporate-offsites')}
                className="text-left hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Executive Retreats &amp; MICE
              </button>
              <button
                onClick={() => onNavClick('custom-holidays')}
                className="text-left hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Private Itineraries
              </button>
              <button
                onClick={() => onNavClick('client-stories')}
                className="text-left hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Fortune 500 Case Studies
              </button>
              <button
                onClick={onOpenPrivacy}
                className="text-left hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Privacy Policy &amp; NDA
              </button>
              <button
                onClick={onOpenTerms}
                className="text-left hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.6875rem] font-semibold text-[#43474c] tracking-wider uppercase">
            © 2025 Around D World Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[0.6875rem] font-semibold text-[#64748B] tracking-widest uppercase">
              Mumbai • Dubai • London
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
