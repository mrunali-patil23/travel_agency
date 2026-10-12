import React from 'react';
import { FEATURED_DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';

interface CuratedDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenDirectory: () => void;
  onInquireClick: () => void;
}

export const CuratedDestinations: React.FC<CuratedDestinationsProps> = ({
  onSelectDestination,
  onOpenDirectory,
  onInquireClick
}) => {
  const topThree = FEATURED_DESTINATIONS.slice(0, 3);

  return (
    <section className="w-full bg-[#F4F1EA] py-24 lg:py-28 border-t border-[#E5E7EB]" id="destinations">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E7EB]">
          <div>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
              Signature Itineraries
            </span>
            <h2 className="text-[2.25rem] md:text-[3rem] font-normal leading-tight text-[#0F283D] tracking-tight">
              Curated Destinations
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[1rem] leading-[1.625rem] text-[#43474c] max-w-sm font-light">
              Handcrafted global journeys defined by character, seclusion, and refined hospitality.
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThree.map((dest) => (
            <article
              key={dest.id}
              className="group bg-[#FAFAF9] rounded-xl overflow-hidden border border-[#E5E7EB] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
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
                </div>

                <div className="p-8">
                  <span className="text-[0.6875rem] font-semibold text-[#D97706] uppercase tracking-widest block mb-2">
                    {dest.category}
                  </span>
                  <h3 className="text-[1.5rem] font-semibold leading-snug text-[#0F283D] mb-3 group-hover:text-[#D97706] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light">
                    {dest.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <button
                  onClick={() => onSelectDestination(dest)}
                  className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D] group-hover:text-[#D97706] transition-colors cursor-pointer"
                >
                  View Experience
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note on Global Reach */}
        <div className="mt-16 text-center">
          <p className="text-[0.875rem] leading-[1.375rem] text-[#43474c]">
            Seeking a bespoke destination not listed here? We service custom itineraries across{' '}
            <button
              onClick={onOpenDirectory}
              className="font-semibold text-[#0F283D] underline underline-offset-2 hover:text-[#D97706] transition-colors cursor-pointer"
            >
              68 countries
            </button>
            .{' '}
            <button
              onClick={onInquireClick}
              className="text-[#D97706] underline underline-offset-4 ml-1 hover:text-[#0F283D] transition-colors cursor-pointer font-medium"
            >
              Inquire with our travel desk
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
