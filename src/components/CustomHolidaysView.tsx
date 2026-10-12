import React, { useState } from 'react';
import { FEATURED_DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';

interface CustomHolidaysViewProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenPlanModal: () => void;
  onOpenDirectory: () => void;
}

export const CustomHolidaysView: React.FC<CustomHolidaysViewProps> = ({
  onSelectDestination,
  onOpenPlanModal,
  onOpenDirectory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Wilderness & Conservation',
    'Mediterranean Haven',
    'Arctic Wonder',
    'Heritage & Culinary',
    'Zen & Cultural Mastery'
  ];

  const filtered = selectedCategory === 'All'
    ? FEATURED_DESTINATIONS
    : FEATURED_DESTINATIONS.filter(d => d.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAFAF9] pt-24 pb-28 animate-in fade-in duration-300">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E7EB] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D]">
            Private Leisure &amp; Multigenerational Travel
          </span>
        </div>
        <h1 className="text-[2.75rem] md:text-[4rem] font-light text-[#0F283D] tracking-tight leading-tight mb-6">
          Personalized Leisure Holidays.<br />
          <span className="italic font-light text-[#43474c]">Crafted Without Compromise.</span>
        </h1>
        <p className="text-[1.125rem] leading-[1.875rem] text-[#43474c] max-w-3xl font-light">
          No standardized packages, no crowds. Each private voyage is built from a blank slate with our senior partners—securing ultra-private villa buyouts, personal aviation charters, after-hours museum entries, and 24/7 dedicated concierge coverage.
        </p>

        {/* Category Filter Controls (Accessible interactive buttons) */}
        <div className="flex flex-wrap gap-2 mt-10 pb-6 border-b border-[#E5E7EB]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0F283D] text-white shadow-xs'
                  : 'bg-[#F4F1EA] text-[#43474c] hover:bg-[#e5e2db] border border-[#E5E7EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <article
              key={dest.id}
              className="group bg-[#FAFAF9] rounded-xl overflow-hidden border border-[#E5E7EB] flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#eeeeed]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${dest.imageUrl}")` }}
                  />
                  <div className="absolute bottom-4 left-4 bg-[#FAFAF9]/90 backdrop-blur-md px-3 py-1 rounded text-[#0F283D] text-[0.6875rem] font-semibold uppercase tracking-wider border border-[#E5E7EB]">
                    {dest.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#0F283D]/90 backdrop-blur-md px-2.5 py-1 rounded text-white text-[0.625rem] uppercase tracking-wider font-medium">
                    {dest.region}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-[0.6875rem] font-semibold text-[#D97706] uppercase tracking-widest block mb-2">
                    {dest.category}
                  </span>
                  <h3 className="text-[1.5rem] font-semibold leading-snug text-[#0F283D] mb-3 group-hover:text-[#D97706] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light mb-6">
                    {dest.subtitle}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-4 border-t border-[#E5E7EB]">
                    {dest.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[0.75rem] text-[#43474c]">
                        <span className="material-symbols-outlined text-[14px] text-[#D97706] shrink-0 mt-0.5">
                          check
                        </span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-[#E5E7EB]/50">
                <button
                  onClick={() => onSelectDestination(dest)}
                  className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D] group-hover:text-[#D97706] transition-colors cursor-pointer"
                >
                  Explore Full Itinerary
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_right_alt
                  </span>
                </button>
                <span className="text-[0.625rem] text-[#64748B] uppercase">Bespoke Only</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Global Concierge Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="p-8 lg:p-12 rounded-2xl bg-[#0F283D] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
              Worldwide Reach
            </span>
            <h3 className="text-[1.75rem] md:text-[2.25rem] font-light">
              Looking for Patagonia, New Zealand, or French Polynesia?
            </h3>
            <p className="text-[0.875rem] text-[#e8e8e7] font-light mt-2">
              Our travel desk curates private villas, private train journeys, and super-yacht charters across 68 sovereign nations with direct local partner presence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={onOpenDirectory}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[0.75rem] font-semibold uppercase tracking-wider border border-white/20 transition-colors cursor-pointer"
            >
              Browse 68 Countries
            </button>
            <button
              onClick={onOpenPlanModal}
              className="px-6 py-3.5 rounded-full bg-[#D97706] hover:bg-[#b86202] text-white text-[0.75rem] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
