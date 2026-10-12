import React from 'react';
import { InquiryRecord } from '../types';

interface ClientDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: InquiryRecord[];
  onNewBrief: () => void;
}

export const ClientDeskModal: React.FC<ClientDeskModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  onNewBrief
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0F283D] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-[#D97706]">person</span>
            </div>
            <div>
              <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-[#D97706] block">
                Executive Portal
              </span>
              <h3 className="text-[1.25rem] font-medium">Executive Client Desk</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Active Inquiries Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D]">
                Your Active Dossiers &amp; Inquiries ({inquiries.length})
              </h4>
              <button
                onClick={() => {
                  onClose();
                  onNewBrief();
                }}
                className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F283D] transition-colors cursor-pointer"
              >
                + New Brief
              </button>
            </div>

            {inquiries.length === 0 ? (
              <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] text-center space-y-3">
                <span className="material-symbols-outlined text-[32px] text-[#64748B]">
                  assignment_late
                </span>
                <p className="text-[0.875rem] text-[#43474c] font-light">
                  No active brief logged in this session yet. Submit your corporate or private holiday requirements to monitor status here.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNewBrief();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Initiate Brief Now
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-[0.875rem] text-[#0F283D]">
                          Ref: {inq.id}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[0.625rem] font-semibold uppercase bg-[#F4F1EA] text-[#D97706] border border-[#D97706]/30">
                          {inq.status}
                        </span>
                      </div>
                      <p className="text-[0.8125rem] text-[#43474c] font-light">
                        {inq.fullName} • {inq.organization}
                      </p>
                      <p className="text-[0.75rem] text-[#64748B] mt-0.5">
                        {inq.journeyType === 'corporate' ? 'Corporate Retreat / MICE' : 'Personal Bespoke Holiday'} • Logged at {inq.timestamp}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/919820048200?text=Hi%20Around%20D%20World%2C%20following%20up%20on%20my%20brief%20${inq.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-[#F4F1EA] hover:bg-[#0F283D] hover:text-white text-[#0F283D] text-[0.6875rem] font-semibold uppercase tracking-wider border border-[#E5E7EB] transition-colors flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span className="material-symbols-outlined text-[15px] text-[#D97706]">chat</span>
                      Live Desk Status
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Direct Partner Contacts Box */}
          <div className="p-6 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] space-y-4">
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D]">
              Direct Senior Partner Contacts (Mumbai HQ)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[0.8125rem]">
              <div className="p-3 bg-white rounded-lg border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block">Dinesh Seth</strong>
                <span className="text-[0.6875rem] text-[#64748B] block mb-2">Founder &amp; Director</span>
                <a
                  href="tel:+919820048200"
                  className="text-[#0F283D] hover:text-[#D97706] flex items-center gap-1.5 font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#D97706]">call</span>
                  +91 98200 48200
                </a>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E5E7EB]">
                <strong className="text-[#0F283D] block">Puneet Bhagchandani</strong>
                <span className="text-[0.6875rem] text-[#64748B] block mb-2">Business Partner</span>
                <a
                  href="tel:+912225504900"
                  className="text-[#0F283D] hover:text-[#D97706] flex items-center gap-1.5 font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#D97706]">call</span>
                  +91 (22) 2550 4900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F1EA] border-t border-[#E5E7EB] flex items-center justify-between">
          <span className="text-[0.6875rem] text-[#64748B]">
            IATA Registered Agency #14300000 • Chembur, Mumbai
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#0F283D] text-white text-[0.6875rem] font-semibold uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
