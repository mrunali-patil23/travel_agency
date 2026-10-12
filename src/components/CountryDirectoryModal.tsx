import React, { useState } from 'react';
import { GLOBAL_COUNTRIES } from '../data/mockData';

interface CountryDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (country: string) => void;
}

export const CountryDirectoryModal: React.FC<CountryDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectCountry
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredRegions = GLOBAL_COUNTRIES.map((regionGroup) => {
    const matchedCountries = regionGroup.countries.filter((c) =>
      c.toLowerCase().includes(search.toLowerCase())
    );
    return {
      region: regionGroup.region,
      countries: matchedCountries
    };
  }).filter((group) => group.countries.length > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0F283D] text-white flex items-center justify-between">
          <div>
            <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
              Global Ground Operations
            </span>
            <h3 className="text-[1.25rem] sm:text-[1.5rem] font-medium">
              Around D World Network: 68 Countries
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 bg-[#F4F1EA] border-b border-[#E5E7EB]">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-3 text-[18px] text-[#64748B]">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destination country (e.g. Iceland, Greece, Botswana, Japan)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E5E7EB] text-[0.875rem] text-[#0F283D] focus:outline-none focus:border-[#0F283D]"
            />
          </div>
        </div>

        {/* Countries list */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {filteredRegions.length === 0 ? (
            <div className="text-center py-8 text-[#64748B] text-[0.875rem]">
              No countries found matching "{search}". Contact our concierge desk for unlisted territories.
            </div>
          ) : (
            filteredRegions.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#D97706] border-b border-[#E5E7EB] pb-1">
                  {group.region}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        onSelectCountry(country);
                        onClose();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#F4F1EA] hover:bg-[#0F283D] hover:text-white border border-[#E5E7EB] text-[0.8125rem] text-[#0F283D] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{country}</span>
                      <span className="material-symbols-outlined text-[12px] opacity-60">east</span>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F1EA] border-t border-[#E5E7EB] flex items-center justify-between text-[0.75rem] text-[#43474c]">
          <span>Direct diplomatic &amp; DMC partner relationships in all 68 regions</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#E5E7EB] text-[#43474c] hover:text-[#0F283D] font-semibold uppercase tracking-wider text-[0.6875rem] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
