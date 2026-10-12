import React, { useState } from 'react';

interface CorporateDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const CorporateDeckModal: React.FC<CorporateDeckModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/deck-preview');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0F283D] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#D97706]">description</span>
            <div>
              <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-[#D97706] block">
                Executive Document
              </span>
              <h3 className="text-[1.25rem] font-medium">Around D World Corporate MICE Prospectus</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] flex items-center justify-between">
            <div>
              <h4 className="text-[1rem] font-semibold text-[#0F283D]">
                Around_D_World_Enterprise_MICE_2026.pdf
              </h4>
              <p className="text-[0.75rem] text-[#64748B]">
                24 Pages • High Resolution Executive Brief • 18-Year Audit Portfolio
              </p>
            </div>
            <span className="text-[0.6875rem] uppercase font-semibold text-[#D97706] px-2.5 py-1 bg-white rounded border border-[#E5E7EB]">
              Confidential
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D]">
              Deck Sections Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[0.8125rem]">
              <div className="p-3 rounded-lg bg-white border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block mb-1">1. Global Air Charter Matrix</strong>
                <p className="text-[#43474c] font-light text-[0.75rem]">
                  Boeing 737 / Airbus A320 privatizations from Mumbai, Delhi, Bangalore &amp; Tier-2 hubs.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block mb-1">2. Venue Privatization Roster</strong>
                <p className="text-[#43474c] font-light text-[0.75rem]">
                  Direct buyout contracts across 34 luxury resort and castle partners in Europe &amp; Asia.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block mb-1">3. Protocol &amp; Security Protocols</strong>
                <p className="text-[#43474c] font-light text-[0.75rem]">
                  Tarmac transfers, police escorts, encrypted telecom infrastructure, medical emergency response.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block mb-1">4. Culinary Standards &amp; Maharaj Desks</strong>
                <p className="text-[#43474c] font-light text-[0.75rem]">
                  Dedicated vegetarian, vegan, and strict Jain kitchen logistics deployed globally.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E7EB]">
            <h5 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
              Direct Senior Partner Distribution
            </h5>
            <p className="text-[0.8125rem] text-[#43474c] font-light">
              Per strict compliance standards for India's foremost banking and telecom groups, our detailed rate card and customized NDA brief are issued under the seal of Dinesh Seth and Puneet Bhagchandani.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F4F1EA] border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 text-[0.75rem] font-medium text-[#0F283D] hover:text-[#D97706] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">link</span>
            <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Shareable Link'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#E5E7EB] text-[#43474c] text-[0.75rem] font-semibold uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanTrip();
              }}
              className="px-6 py-2.5 rounded-full bg-[#0F283D] text-white hover:bg-[#001323] text-[0.75rem] font-semibold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
            >
              <span>Request Tailored RFP</span>
              <span className="material-symbols-outlined text-[16px] text-[#D97706]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
