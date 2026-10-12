import React from 'react';

interface TrustBarProps {
  onCaseStudyClick: (company: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onCaseStudyClick }) => {
  return (
    <section className="w-full bg-[#F4F1EA] border-b border-[#E5E7EB] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Pill / Separator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-[#E5E7EB]" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#43474c]">
            Trusted by India's Foremost Enterprises
          </span>
          <span className="h-px w-8 bg-[#E5E7EB]" />
        </div>

        {/* Monochrome Clean Client Logos */}
        <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 opacity-80 hover:opacity-100 transition-opacity">
          <button
            onClick={() => onCaseStudyClick('axis')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            title="View Axis Bank Leadership Summit Case Study"
          >
            <span className="text-[1.5rem] font-bold tracking-tighter text-[#0F283D] uppercase group-hover:text-[#D97706] transition-colors">
              AXIS BANK
            </span>
          </button>

          <button
            onClick={() => onCaseStudyClick('kelloggs')}
            className="flex items-center gap-1 group cursor-pointer focus:outline-none"
            title="View Kellogg's Offsite Portfolio"
          >
            <span className="text-[1.5rem] font-serif italic tracking-tight text-[#0F283D] group-hover:text-[#D97706] transition-colors">
              Kellogg's
            </span>
          </button>

          <button
            onClick={() => onCaseStudyClick('kotak')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            title="View Kotak Wealth Conclave Case Study"
          >
            <span className="text-[1.5rem] font-semibold tracking-tight text-[#0F283D] uppercase group-hover:text-[#D97706] transition-colors">
              kotak
            </span>
            <span className="text-[0.6875rem] uppercase text-[#43474c] group-hover:text-[#D97706] transition-colors">
              Mahindra Bank
            </span>
          </button>

          <button
            onClick={() => onCaseStudyClick('vip')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            title="View VIP Industries Mega Dealer Meet Case Study"
          >
            <span className="text-[1.5rem] font-black tracking-widest text-[#0F283D] group-hover:text-[#D97706] transition-colors">
              VIP
            </span>
            <span className="text-[0.6875rem] tracking-widest text-[#43474c] uppercase group-hover:text-[#D97706] transition-colors">
              Industries
            </span>
          </button>

          <button
            onClick={() => onCaseStudyClick('tata')}
            className="flex items-center gap-1 group cursor-pointer focus:outline-none"
            title="View Tata Communications Global Tech Forum Case Study"
          >
            <span className="text-[0.6875rem] tracking-widest text-[#43474c] uppercase group-hover:text-[#D97706] transition-colors">
              TATA
            </span>
            <span className="text-[1.5rem] font-medium tracking-tight text-[#0F283D] group-hover:text-[#D97706] transition-colors">
              Communications
            </span>
          </button>
        </div>

        {/* Credibility Accent */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[0.6875rem] font-semibold text-[#43474c] tracking-wider uppercase">
          <span className="inline-flex items-center gap-1.5 text-[#0F283D]">
            <span className="material-symbols-outlined text-[16px] text-[#D97706] font-filled">
              star
            </span>
            4.9★ Rated on Google
          </span>
          <span className="hidden sm:inline text-[#E5E7EB]">•</span>
          <span>18+ Years Operational Mastery</span>
          <span className="hidden sm:inline text-[#E5E7EB]">•</span>
          <span className="text-[#0F283D]">1,000+ High-Profile Gatherings Executed</span>
        </div>
      </div>
    </section>
  );
};
