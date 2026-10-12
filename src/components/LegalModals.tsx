import React from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0F283D] text-white flex items-center justify-between">
          <div>
            <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
              Governance &amp; Compliance
            </span>
            <h3 className="text-[1.25rem] font-medium">
              {type === 'privacy' ? 'Privacy Policy & Non-Disclosure (NDA)' : 'Terms of Service & Engagement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-[0.875rem] leading-relaxed text-[#43474c] font-light">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Around D World Pvt. Ltd.</strong> operates under strict executive non-disclosure standards for all corporate offsite movements, board attendee manifests, and private high-net-worth client itineraries.
              </p>
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-[#0F283D] pt-2">
                1. Passenger &amp; Manifest Data Protection
              </h4>
              <p>
                Passenger passport details, VIP security requirements, and flight manifests transmitted to our desk are encrypted in transit and stored exclusively for civil aviation and hotel check-in compliance. No client data is ever sold or shared with third-party advertisers.
              </p>
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-[#0F283D] pt-2">
                2. Corporate Confidentiality &amp; NDA Execution
              </h4>
              <p>
                For leadership conclaves and strategic board summits, our direct partners execute bilateral NDAs guaranteeing zero disclosure of meeting agendas, attendee lists, or venue locations.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Around D World Pvt. Ltd.</strong> is an accredited travel management entity under IATA Agency Code #14300000, headquartered at Chembur, Mumbai, Maharashtra.
              </p>
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-[#0F283D] pt-2">
                1. Charter &amp; Group Booking Terms
              </h4>
              <p>
                Group airline allocations, dedicated aircraft charters, and private resort buyouts are subject to the specific cancellation and force majeure schedules delineated in your tailored proposal contract.
              </p>
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-[#0F283D] pt-2">
                2. Direct Partner Accountability
              </h4>
              <p>
                All operations are supervised under the direction of our senior management desk in Mumbai with full GST and corporate billing reconciliation.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F1EA] border-t border-[#E5E7EB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-wider cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
