import React from 'react';
import { ASSETS } from '../data/mockData';

interface LeadershipSectionProps {
  onDirectDeskClick: (partnerName: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onDirectDeskClick }) => {
  return (
    <section className="w-full bg-[#FAFAF9] py-24 lg:py-28" id="leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 pb-6 border-b border-[#E5E7EB]">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
            Our Foundation
          </span>
          <h2 className="text-[2.25rem] md:text-[3rem] font-normal leading-tight text-[#0F283D] tracking-tight mb-4">
            Eighteen Years of Craft
          </h2>
          <p className="text-[1rem] leading-[1.625rem] text-[#43474c] font-light">
            The visionary leadership behind Mumbai’s premier bespoke travel and corporate offsite firm. Direct partner involvement on every assignment.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Dinesh Seth */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#eeeeed]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${ASSETS.dineshSeth}")` }}
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706]">
                  Founder &amp; Director
                </span>
                <h3 className="text-[1.5rem] font-semibold text-[#0F283D] mt-1 mb-3">
                  Dinesh Seth
                </h3>
                <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light">
                  Over nearly two decades, Dinesh has cultivated an unparalleled global network of luxury hospitality partners, airline desks, and destination consulates, delivering flawless offsites for India's leading enterprises.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0F283D]">
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">verified</span>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#43474c]">
                    Strategic Corporate Advisory
                  </span>
                </div>
                <button
                  onClick={() => onDirectDeskClick('Dinesh Seth')}
                  className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D] hover:text-[#D97706] transition-colors cursor-pointer"
                  title="Direct partner inquiry"
                >
                  Direct Desk &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Puneet Bhagchandani */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#eeeeed]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${ASSETS.puneetBhagchandani}")` }}
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706]">
                  Business Partner
                </span>
                <h3 className="text-[1.5rem] font-semibold text-[#0F283D] mt-1 mb-3">
                  Puneet Bhagchandani
                </h3>
                <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light">
                  Championing bespoke itinerary design and high-touch concierge operations, Puneet ensures every corporate summit and private voyage is executed with rigorous logistical discipline and zero friction.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0F283D]">
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">verified</span>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#43474c]">
                    Global Operations &amp; Concierge
                  </span>
                </div>
                <button
                  onClick={() => onDirectDeskClick('Puneet Bhagchandani')}
                  className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D] hover:text-[#D97706] transition-colors cursor-pointer"
                  title="Direct partner inquiry"
                >
                  Direct Desk &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Pillars / Statistics Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB]">
          <div className="flex flex-col">
            <span className="text-[2rem] font-light text-[#0F283D] leading-none">18+</span>
            <span className="text-[0.6875rem] font-semibold text-[#43474c] uppercase tracking-wider mt-2">
              Years of Continuity
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[2rem] font-light text-[#0F283D] leading-none">1,000+</span>
            <span className="text-[0.6875rem] font-semibold text-[#43474c] uppercase tracking-wider mt-2">
              Conclaves Curated
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[2rem] font-light text-[#0F283D] leading-none">100%</span>
            <span className="text-[0.6875rem] font-semibold text-[#43474c] uppercase tracking-wider mt-2">
              IATA Regulated (#14300000)
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[2rem] font-light text-[#0F283D] leading-none">&lt; 4 Hrs</span>
            <span className="text-[0.6875rem] font-semibold text-[#43474c] uppercase tracking-wider mt-2">
              Response Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
