import React, { useState } from 'react';
import { ASSETS, CASE_STUDIES } from '../data/mockData';

interface CorporateOffsitesViewProps {
  onOpenPlanModal: () => void;
  onRequestDeck: () => void;
  onViewCaseStudy: (id: string) => void;
}

export const CorporateOffsitesView: React.FC<CorporateOffsitesViewProps> = ({
  onOpenPlanModal,
  onRequestDeck,
  onViewCaseStudy
}) => {
  const [delegates, setDelegates] = useState<number>(120);
  const [regionTier, setRegionTier] = useState<'domestic' | 'asian' | 'europe'>('asian');
  const [aviationType, setAviationType] = useState<'commercial' | 'charter'>('commercial');

  const regionMultiplier = regionTier === 'domestic' ? 1.0 : regionTier === 'asian' ? 2.4 : 4.8;
  const aviationMultiplier = aviationType === 'charter' ? 1.6 : 1.0;
  const leadTimeDays = regionTier === 'domestic' ? 30 : regionTier === 'asian' ? 60 : 90;
  const conciergeStaff = Math.max(2, Math.round(delegates / 15));

  return (
    <div className="w-full bg-[#FAFAF9] pt-24 pb-28 animate-in fade-in duration-300">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E7EB] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D]">
            MICE &amp; Executive Conclave Practice
          </span>
        </div>
        <h1 className="text-[2.75rem] md:text-[4rem] font-light text-[#0F283D] tracking-tight leading-tight mb-6">
          Corporate Offsites.<br />
          <span className="italic font-light text-[#43474c]">Engineered for Flawless Precision.</span>
        </h1>
        <p className="text-[1.125rem] leading-[1.875rem] text-[#43474c] max-w-3xl font-light">
          From confidential board retreats in private European hamlets to high-voltage 500-delegate national dealer conventions in Southeast Asia, Around D World manages aviation, venue privatizations, protocol security, and stagecraft under direct senior partner supervision.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <button
            onClick={onOpenPlanModal}
            className="px-8 py-3.5 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-all shadow-md cursor-pointer"
          >
            Initiate Corporate Brief
          </button>
          <button
            onClick={onRequestDeck}
            className="px-8 py-3.5 rounded-full border border-[#0F283D] text-[#0F283D] text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#F4F1EA] transition-all cursor-pointer"
          >
            Download Capabilities Deck
          </button>
        </div>
      </div>

      {/* Hero Visual Collage */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#eeeeed]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${ASSETS.corporateOffsites}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001323]/80 via-transparent to-transparent flex items-end p-8 md:p-12">
            <div className="text-white max-w-xl">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
                Recent Execution
              </span>
              <h3 className="text-[1.5rem] md:text-[1.75rem] font-light leading-snug">
                Executive Leadership Summit at a Tuscan Vineyard Borgo
              </h3>
              <p className="text-[0.875rem] text-[#e8e8e7] mt-1 font-light">
                Private aviation into Florence, 100% estate privatization, Michelin-starred gala, and dedicated encrypted AV infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="border-b border-[#E5E7EB] pb-6 mb-12">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
            Core Service Architectures
          </span>
          <h2 className="text-[2rem] font-normal text-[#0F283D]">
            Structured for Diverse Corporate Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-2">
                25 – 60 Pax
              </span>
              <h3 className="text-[1.25rem] font-semibold text-[#0F283D] mb-3">
                Executive Leadership Conclaves
              </h3>
              <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light mb-6">
                Secluded boutique estates and private island resorts reserved for strategic alignment, board meetings, and high-consequence corporate decision-making.
              </p>
            </div>
            <ul className="text-[0.75rem] space-y-2 text-[#0F283D] pt-4 border-t border-[#E5E7EB]">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                NDAs &amp; Complete Discretion
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Private Boardroom AV &amp; Translation
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Curated Executive Downtime
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-2">
                50 – 200 Pax
              </span>
              <h3 className="text-[1.25rem] font-semibold text-[#0F283D] mb-3">
                Global Incentive Expeditions
              </h3>
              <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light mb-6">
                Rewarding top performers with bucket-list journeys. From Arctic Northern Lights glass-domes to private catamaran regattas in Greece.
              </p>
            </div>
            <ul className="text-[0.75rem] space-y-2 text-[#0F283D] pt-4 border-t border-[#E5E7EB]">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                VIP Fast-Track Customs &amp; Visas
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Signature Black-Tie Awards Galas
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Spouse &amp; Partner Parallel Itineraries
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-2">
                150 – 600+ Pax
              </span>
              <h3 className="text-[1.25rem] font-semibold text-[#0F283D] mb-3">
                Dealer &amp; Distributor Meets
              </h3>
              <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light mb-6">
                High-scale trade partner assemblies requiring synchronized international transit, customized pure vegetarian culinary setups, and grand stagecraft.
              </p>
            </div>
            <ul className="text-[0.75rem] space-y-2 text-[#0F283D] pt-4 border-t border-[#E5E7EB]">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Charter Flights from Tier-1 &amp; Tier-2 Cities
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Indian Maharaj Kitchen Supervision
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Massive Stage, LED &amp; Celebrity Artists
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-2">
                100 – 400 Pax
              </span>
              <h3 className="text-[1.25rem] font-semibold text-[#0F283D] mb-3">
                Annual Strategy Summits
              </h3>
              <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light mb-6">
                Company-wide milestone summits balancing keynotes, breakout ideation workshops, team cohesion exercises, and cultural celebration.
              </p>
            </div>
            <ul className="text-[0.75rem] space-y-2 text-[#0F283D] pt-4 border-t border-[#E5E7EB]">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Hotel Buyout or Dedicated Wing
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                Carbon-Neutral Certification Available
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">check</span>
                GST &amp; Centralized Corporate Billing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Offsite Scope & Feasibility Estimator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="p-8 lg:p-12 rounded-2xl bg-[#F4F1EA] border border-[#E5E7EB]">
          <div className="max-w-2xl mb-8">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
              Interactive Planning Tool
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-medium text-[#0F283D] tracking-tight">
              Corporate Offsite Feasibility &amp; Logistics Estimator
            </h2>
            <p className="text-[0.875rem] text-[#43474c] font-light mt-1">
              Test logistical scenarios for your upcoming retreat. Our algorithms reflect real 2025/2026 airline block allocations and resort contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Delegate count */}
              <div>
                <div className="flex justify-between text-[0.875rem] text-[#0F283D] font-medium mb-2">
                  <span>Number of Delegates: <strong className="text-[#D97706]">{delegates} Pax</strong></span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={delegates}
                  onChange={(e) => setDelegates(Number(e.target.value))}
                  className="w-full accent-[#0F283D] cursor-pointer"
                />
                <div className="flex justify-between text-[0.6875rem] text-[#64748B] mt-1">
                  <span>20 (Board Level)</span>
                  <span>150 (Mid-Size Offsite)</span>
                  <span>500+ (Convention)</span>
                </div>
              </div>

              {/* Destination Tier */}
              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                  Destination Geometry
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'domestic', label: 'Domestic Luxury', sub: 'Goa / Udaipur / Coorg' },
                    { id: 'asian', label: 'Asian Hubs', sub: 'Singapore / Vietnam / Dubai' },
                    { id: 'europe', label: 'Europe & Long Haul', sub: 'Tuscany / Swiss / Spain' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setRegionTier(tier.id as any)}
                      className={`p-3 text-left rounded-lg transition-all border cursor-pointer ${
                        regionTier === tier.id
                          ? 'border-[#0F283D] bg-white shadow-xs'
                          : 'border-[#E5E7EB] bg-[#FAFAF9] hover:border-[#0F283D]'
                      }`}
                    >
                      <span className="block text-[0.75rem] font-semibold text-[#0F283D]">{tier.label}</span>
                      <span className="block text-[0.625rem] text-[#64748B] mt-0.5">{tier.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Transit Method */}
              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                  Flight Transit Architecture
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAviationType('commercial')}
                    className={`p-3 text-left rounded-lg transition-all border cursor-pointer ${
                      aviationType === 'commercial'
                        ? 'border-[#0F283D] bg-white shadow-xs'
                        : 'border-[#E5E7EB] bg-[#FAFAF9] hover:border-[#0F283D]'
                    }`}
                  >
                    <span className="block text-[0.75rem] font-semibold text-[#0F283D]">Scheduled Airlines</span>
                    <span className="block text-[0.625rem] text-[#64748B] mt-0.5">IATA group block bookings &amp; flexible names</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAviationType('charter')}
                    className={`p-3 text-left rounded-lg transition-all border cursor-pointer ${
                      aviationType === 'charter'
                        ? 'border-[#0F283D] bg-white shadow-xs'
                        : 'border-[#E5E7EB] bg-[#FAFAF9] hover:border-[#0F283D]'
                    }`}
                  >
                    <span className="block text-[0.75rem] font-semibold text-[#0F283D]">Dedicated Aircraft Charter</span>
                    <span className="block text-[0.625rem] text-[#64748B] mt-0.5">Single manifest, branded cabin, bespoke timings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Logistics Output Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white border border-[#E5E7EB] shadow-sm">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-1">
                Logistical Blueprint
              </span>
              <h4 className="text-[1.25rem] font-medium text-[#0F283D] mb-4">
                Recommended Execution Plan
              </h4>

              <div className="space-y-4 text-[0.8125rem]">
                <div className="flex justify-between pb-2 border-b border-[#E5E7EB]">
                  <span className="text-[#64748B]">Venue Strategy:</span>
                  <span className="font-semibold text-[#0F283D]">
                    {delegates >= 200 ? 'Exclusive Resort Buyout' : 'Private Wing & Banquet Hall'}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E5E7EB]">
                  <span className="text-[#64748B]">Recommended Lead-Time:</span>
                  <span className="font-semibold text-[#0F283D]">{leadTimeDays} Days Minimum</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E5E7EB]">
                  <span className="text-[#64748B]">On-Ground Partner Concierge:</span>
                  <span className="font-semibold text-[#0F283D]">{conciergeStaff} Stationed Senior Liaisons</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E5E7EB]">
                  <span className="text-[#64748B]">Visa Facilitation:</span>
                  <span className="font-semibold text-[#0F283D]">
                    {regionTier === 'domestic' ? 'Not Applicable' : 'Expedited Corporate Group Desk'}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E5E7EB]">
                  <span className="text-[#64748B]">Culinary Customization:</span>
                  <span className="font-semibold text-[#0F283D]">Jain / Vegetarian / Global Dietary Covered</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <button
                  onClick={onOpenPlanModal}
                  className="w-full py-3.5 rounded bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom RFP for this Spec</span>
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Corporate Case Studies */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end border-b border-[#E5E7EB] pb-6 mb-12">
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
              Proven Delivery
            </span>
            <h2 className="text-[2rem] font-normal text-[#0F283D]">
              Recent Corporate Conclaves
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="p-8 rounded-xl bg-white border border-[#E5E7EB] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[1.25rem] font-bold text-[#0F283D]">{cs.client}</span>
                  <span className="text-[0.6875rem] font-semibold uppercase px-2.5 py-1 rounded bg-[#F4F1EA] text-[#0F283D]">
                    {cs.pax} Delegates
                  </span>
                </div>
                <h4 className="text-[1.125rem] font-medium text-[#0F283D] mb-2">{cs.title}</h4>
                <p className="text-[0.8125rem] text-[#64748B] mb-4">{cs.location}</p>
                <p className="text-[0.875rem] text-[#43474c] italic font-light mb-6">
                  "{cs.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[0.75rem] font-medium text-[#0F283D]">
                  {cs.executive} • {cs.role}
                </span>
                <button
                  onClick={() => onViewCaseStudy(cs.id)}
                  className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F283D] transition-colors cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
