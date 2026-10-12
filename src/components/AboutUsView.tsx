import React from 'react';
import { ASSETS } from '../data/mockData';

interface AboutUsViewProps {
  onDirectDeskClick: (partnerName: string) => void;
  onOpenPlanModal: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({
  onDirectDeskClick,
  onOpenPlanModal
}) => {
  return (
    <div className="w-full bg-[#FAFAF9] pt-24 pb-28 animate-in fade-in duration-300">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E7EB] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D]">
            Heritage &amp; Leadership Manifesto
          </span>
        </div>
        <h1 className="text-[2.75rem] md:text-[4rem] font-light text-[#0F283D] tracking-tight leading-tight mb-6">
          Eighteen Years of Craft.<br />
          <span className="italic font-light text-[#43474c]">Rooted in Mumbai, Respected Globally.</span>
        </h1>
        <p className="text-[1.125rem] leading-[1.875rem] text-[#43474c] max-w-3xl font-light">
          Founded in Chembur, Mumbai in 2007, Around D World was born out of a refusal to accept algorithmic, cookie-cutter travel agencies. We operate as personal counsel to business leaders, boardrooms, and discerning families—delivering unmatched operational discipline, bespoke access, and quiet luxury.
        </p>
      </div>

      {/* Leadership Bios In-Depth */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="border-b border-[#E5E7EB] pb-6 mb-12">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
            The Principals
          </span>
          <h2 className="text-[2rem] font-normal text-[#0F283D]">
            Direct Partner Involvement on Every Brief
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Dinesh Seth */}
          <div className="p-8 lg:p-10 rounded-2xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden border border-[#E5E7EB] shrink-0 bg-[#eeeeed]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${ASSETS.dineshSeth}")` }}
                  />
                </div>
                <div>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706]">
                    Founder &amp; Director
                  </span>
                  <h3 className="text-[1.75rem] font-medium text-[#0F283D]">Dinesh Seth</h3>
                  <p className="text-[0.8125rem] text-[#64748B]">18+ Years Corporate Advisory</p>
                </div>
              </div>
              <p className="text-[0.875rem] leading-[1.625rem] text-[#43474c] font-light mb-6">
                Over nearly two decades, Dinesh has cultivated an unparalleled global network of luxury hospitality partners, airline desks, and destination consulates. He personally oversees corporate MICE strategies, aircraft charters, and high-stakes stakeholder movements for India's leading financial institutions and conglomerates.
              </p>
              <blockquote className="p-4 rounded-lg bg-white border border-[#E5E7EB] text-[0.8125rem] italic text-[#0F283D] mb-6">
                "In high-consequence corporate travel, there is zero tolerance for error. Our clients have our personal mobile numbers, not an anonymous ticketing helpline."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#0F283D]">
                Chembur Headquarters Desk
              </span>
              <button
                onClick={() => onDirectDeskClick('Dinesh Seth')}
                className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Connect with Dinesh &rarr;
              </button>
            </div>
          </div>

          {/* Puneet Bhagchandani */}
          <div className="p-8 lg:p-10 rounded-2xl bg-[#F4F1EA] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden border border-[#E5E7EB] shrink-0 bg-[#eeeeed]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${ASSETS.puneetBhagchandani}")` }}
                  />
                </div>
                <div>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706]">
                    Business Partner
                  </span>
                  <h3 className="text-[1.75rem] font-medium text-[#0F283D]">Puneet Bhagchandani</h3>
                  <p className="text-[0.8125rem] text-[#64748B]">Global Operations &amp; Concierge</p>
                </div>
              </div>
              <p className="text-[0.875rem] leading-[1.625rem] text-[#43474c] font-light mb-6">
                Championing bespoke itinerary design and high-touch concierge operations, Puneet ensures every corporate summit and private voyage is executed with rigorous logistical discipline and zero friction. His team liaises directly with ground hosts in over 68 countries.
              </p>
              <blockquote className="p-4 rounded-lg bg-white border border-[#E5E7EB] text-[0.8125rem] italic text-[#0F283D] mb-6">
                "True luxury in travel is not merely thread count or gold leaf—it is seamless velocity, peace of mind, and the mastery of invisible logistics."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#0F283D]">
                Operations &amp; Concierge Desk
              </span>
              <button
                onClick={() => onDirectDeskClick('Puneet Bhagchandani')}
                className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                Connect with Puneet &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Operational Standards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="border-b border-[#E5E7EB] pb-6 mb-12">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
            Why Discerning Clients Stay With Us
          </span>
          <h2 className="text-[2rem] font-normal text-[#0F283D]">
            Our Four Operational Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="text-[2rem] font-light text-[#D97706] block mb-2">01</span>
            <h4 className="text-[1.125rem] font-semibold text-[#0F283D] mb-2">Direct Partner Lead</h4>
            <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
              Every inquiry is assessed by Dinesh Seth or Puneet Bhagchandani. No entry-level junior associates drafting your crucial corporate briefs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="text-[2rem] font-light text-[#D97706] block mb-2">02</span>
            <h4 className="text-[1.125rem] font-semibold text-[#0F283D] mb-2">IATA Accredited #14300000</h4>
            <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
              Direct global ticketing and billing integration with 290+ international airlines. 100% compliant with financial audits and corporate GST filings.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="text-[2rem] font-light text-[#D97706] block mb-2">03</span>
            <h4 className="text-[1.125rem] font-semibold text-[#0F283D] mb-2">&lt; 4 Hour SLA</h4>
            <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
              Rapid response protocols for urgent visa assistance, aircraft schedule variations, and destination advisories. We solve problems before delegates notice them.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E5E7EB]">
            <span className="text-[2rem] font-light text-[#D97706] block mb-2">04</span>
            <h4 className="text-[1.125rem] font-semibold text-[#0F283D] mb-2">Complete Confidentiality</h4>
            <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
              Standard non-disclosure agreements for all MICE movements, board retreat rosters, and private family office itineraries.
            </p>
          </div>
        </div>
      </div>

      {/* Global Presence Map & Offices */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-8 lg:p-12 rounded-2xl bg-[#F4F1EA] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-1">
                Headquarters
              </span>
              <h4 className="text-[1.25rem] font-semibold text-[#0F283D] mb-2">Mumbai Experience Desk</h4>
              <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
                Ujagar Chambers, Deonar, Chembur, Mumbai 400088.<br />
                Direct phone: +91 (22) 2550 4900 / +91 98200 48200
              </p>
            </div>
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-1">
                Middle East Partner Desk
              </span>
              <h4 className="text-[1.25rem] font-semibold text-[#0F283D] mb-2">Dubai DIFC Liaison</h4>
              <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
                Dedicated regional logistics desk for GCC offsites, desert conservation camps, and Emirates charter coordination.
              </p>
            </div>
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-1">
                Europe Partner Desk
              </span>
              <h4 className="text-[1.25rem] font-semibold text-[#0F283D] mb-2">London Mayfair Liaison</h4>
              <p className="text-[0.8125rem] text-[#43474c] font-light leading-relaxed">
                Curating privatized European castles, Mediterranean super-yachts, and Nordic Arctic permits with vetted local partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
