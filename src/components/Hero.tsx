import React from 'react';
import { ASSETS } from '../data/mockData';

interface HeroProps {
  onCorporateClick: () => void;
  onExploreClick: () => void;
  onOpenDirectory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCorporateClick,
  onExploreClick,
  onOpenDirectory
}) => {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-[#001323] min-h-[92vh] flex items-center justify-center">
      {/* Atmospheric Visual Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url("${ASSETS.hero}")` }}
      />

      {/* Architectural Radial & Linear Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001323] via-[#001323]/70 to-[#001323]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001323]/80 via-transparent to-[#001323]/80" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-36 pb-24 flex flex-col items-center text-center">
        {/* Editorial Heritage Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F4F1EA]/10 backdrop-blur-md border border-white/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#FAFAF9]">
            18+ Years Curating Extraordinary Experiences
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="text-[2.75rem] md:text-[4.5rem] leading-[3.25rem] md:leading-[5rem] tracking-tight font-light text-white max-w-5xl mb-8">
          Exceptional Journeys.<br className="hidden md:inline" />{' '}
          <span className="font-light italic text-[#e8e8e7]">
            Flawless Corporate Experiences.
          </span>
        </h1>

        {/* Refined Subhead */}
        <p className="text-[1.125rem] leading-[1.875rem] text-[#f3f4f3]/90 max-w-2xl font-light mb-12">
          Curating bespoke corporate retreats, dealer meets, and luxury vacations across the globe for over 18 years from Mumbai.
        </p>

        {/* Minimal Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onCorporateClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest border border-white/20 hover:border-[#D97706] transition-all relative group shadow-xl cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Corporate Inquiries
              <span className="material-symbols-outlined text-[16px] text-[#D97706] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAFAF9]/10 backdrop-blur-md text-white text-[0.75rem] font-semibold uppercase tracking-widest border border-white/20 hover:bg-[#FAFAF9]/20 hover:border-white/40 transition-all text-center cursor-pointer"
          >
            Explore Holidays
          </button>
        </div>

        {/* Discreet Key Metadata Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left w-full max-w-4xl">
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#eeeeed]">
              Headquarters
            </span>
            <p className="text-[0.875rem] text-white mt-1 font-medium">Chembur, Mumbai</p>
          </div>
          <button
            onClick={onOpenDirectory}
            className="text-left group cursor-pointer focus:outline-none"
            title="Click to view 68+ countries network"
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#eeeeed] group-hover:text-[#D97706] transition-colors flex items-center gap-1">
              Global Network
              <span className="material-symbols-outlined text-[13px] opacity-70">open_in_new</span>
            </span>
            <p className="text-[0.875rem] text-white group-hover:text-[#D97706] transition-colors mt-1 font-medium">
              68+ Destinations
            </p>
          </button>
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#eeeeed]">
              Accreditation
            </span>
            <p className="text-[0.875rem] text-white mt-1 font-medium">IATA Certified #14300000</p>
          </div>
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#eeeeed]">
              Service Standard
            </span>
            <p className="text-[0.875rem] text-white mt-1 font-medium">Direct Partner Desk</p>
          </div>
        </div>
      </div>
    </section>
  );
};
