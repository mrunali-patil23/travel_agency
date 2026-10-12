import React from 'react';
import { ASSETS } from '../data/mockData';

interface CorePracticesProps {
  onRequestCorporateDeck: () => void;
  onExploreDestinations: () => void;
}

export const CorePractices: React.FC<CorePracticesProps> = ({
  onRequestCorporateDeck,
  onExploreDestinations
}) => {
  return (
    <section className="w-full bg-[#FAFAF9] py-24 lg:py-28" id="practices">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E7EB]">
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
              Our Two Core Practices
            </span>
            <h2 className="text-[2.25rem] md:text-[3rem] font-normal leading-tight text-[#0F283D] tracking-tight">
              Tailored to Scale
            </h2>
          </div>
          <p className="text-[1rem] leading-[1.625rem] text-[#43474c] max-w-md font-light">
            Whether orchestrating high-consequence executive conclaves or private, multigenerational escapes with complete confidentiality.
          </p>
        </div>

        {/* Split Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Corporate Events */}
          <div className="group relative rounded-xl bg-[#F4F1EA] p-8 lg:p-12 border border-[#E5E7EB] flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-8 border border-[#E5E7EB] bg-[#eeeeed]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${ASSETS.corporateOffsites}")` }}
                />
                <div className="absolute top-4 left-4 bg-[#0F283D]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[0.6875rem] font-semibold uppercase tracking-widest">
                  Enterprise &amp; MICE
                </div>
              </div>

              <h3 className="text-[1.75rem] md:text-[2rem] font-medium text-[#0F283D] mb-4 tracking-tight">
                Corporate Events &amp; Offsites
              </h3>
              <p className="text-[1rem] leading-[1.625rem] text-[#43474c] mb-6 font-light">
                High-impact leadership retreats, annual sales conventions, and global incentive programs engineered with precision logistics, charter aviation, and experiential programming.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Executive Retreats
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Incentive Trips
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Annual Conclaves
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Dealer Meets
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <button
                onClick={onRequestCorporateDeck}
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] group-hover:text-[#D97706] transition-colors cursor-pointer"
              >
                Request Corporate Deck
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </button>
              <span className="text-[0.6875rem] font-semibold text-[#64748B] uppercase tracking-wider">
                50 – 1,000+ Pax Capacity
              </span>
            </div>
          </div>

          {/* Card 2: Leisure Holidays */}
          <div className="group relative rounded-xl bg-[#F4F1EA] p-8 lg:p-12 border border-[#E5E7EB] flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-8 border border-[#E5E7EB] bg-[#eeeeed]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${ASSETS.leisureHolidays}")` }}
                />
                <div className="absolute top-4 left-4 bg-[#0F283D]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[0.6875rem] font-semibold uppercase tracking-widest">
                  Private Journeys
                </div>
              </div>

              <h3 className="text-[1.75rem] md:text-[2rem] font-medium text-[#0F283D] mb-4 tracking-tight">
                Personalized Leisure Holidays
              </h3>
              <p className="text-[1rem] leading-[1.625rem] text-[#43474c] mb-6 font-light">
                Unrivaled private getaways, multi-generational family journeys, and bespoke itineraries tailored to your personal cadence with dedicated round-the-clock concierge support.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Tailor-Made Itineraries
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Private Villa Buyouts
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Visa &amp; VIP Expedited
                </span>
                <span className="px-3 py-1 rounded bg-[#FAFAF9] border border-[#E5E7EB] text-[0.6875rem] font-semibold text-[#0F283D] uppercase">
                  Charter Flights
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <button
                onClick={onExploreDestinations}
                className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] group-hover:text-[#D97706] transition-colors cursor-pointer"
              >
                Explore Destinations
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </button>
              <span className="text-[0.6875rem] font-semibold text-[#64748B] uppercase tracking-wider">
                100% Bespoke Craft
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
