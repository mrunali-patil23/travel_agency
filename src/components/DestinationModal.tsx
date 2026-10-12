import React from 'react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onInquire: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onInquire
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 max-h-[90vh] flex flex-col">
        {/* Header Image & Close */}
        <div className="relative w-full h-72 sm:h-96 shrink-0 bg-[#eeeeed]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${destination.imageUrl}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001323] via-[#001323]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Title & Metadata over Image */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] mb-2">
              <span>{destination.category}</span>
              <span>•</span>
              <span>{destination.duration}</span>
            </div>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-medium leading-tight">
              {destination.name}
            </h2>
            <p className="text-[0.875rem] text-[#f3f4f3] mt-1 max-w-2xl font-light line-clamp-2">
              {destination.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] text-[0.8125rem]">
            <div>
              <span className="text-[0.625rem] uppercase font-semibold text-[#64748B] block">Region</span>
              <span className="font-medium text-[#0F283D]">{destination.region}</span>
            </div>
            <div>
              <span className="text-[0.625rem] uppercase font-semibold text-[#64748B] block">Duration</span>
              <span className="font-medium text-[#0F283D]">{destination.duration}</span>
            </div>
            <div>
              <span className="text-[0.625rem] uppercase font-semibold text-[#64748B] block">Best Season</span>
              <span className="font-medium text-[#0F283D]">{destination.bestSeason || 'Year-round'}</span>
            </div>
            <div>
              <span className="text-[0.625rem] uppercase font-semibold text-[#64748B] block">Service Type</span>
              <span className="font-medium text-[#0F283D]">100% Private Concierge</span>
            </div>
          </div>

          {/* Editorial Overview */}
          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
              The Journey Experience
            </h3>
            <p className="text-[0.9375rem] leading-[1.625rem] text-[#43474c] font-light">
              {destination.description}
            </p>
          </div>

          {/* Curated Highlights */}
          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-3">
              Curated Highlights &amp; Exclusive Privileges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F4F1EA] border border-[#E5E7EB]">
                  <span className="material-symbols-outlined text-[16px] text-[#D97706] shrink-0 mt-0.5">
                    star
                  </span>
                  <span className="text-[0.8125rem] text-[#0F283D] font-normal leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Timeline */}
          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-4">
              Indicative Itinerary Outline
            </h3>
            <div className="space-y-4 border-l border-[#D97706]/40 pl-6 ml-2">
              {destination.itinerary.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#0F283D] border-2 border-[#D97706]" />
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706]">
                    {item.day}
                  </span>
                  <h4 className="text-[1rem] font-medium text-[#0F283D] mt-0.5 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[0.8125rem] leading-relaxed text-[#43474c] font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#F4F1EA] border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[0.75rem] text-[#43474c]">
            <span className="material-symbols-outlined text-[18px] text-[#D97706]">lock</span>
            <span>Personalized per guest • Direct Partner oversight</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#E5E7EB] text-[#43474c] hover:text-[#0F283D] text-[0.75rem] font-semibold uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(destination);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#0F283D] text-white hover:bg-[#001323] text-[0.75rem] font-semibold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
            >
              <span>Inquire for This Itinerary</span>
              <span className="material-symbols-outlined text-[16px] text-[#D97706]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
