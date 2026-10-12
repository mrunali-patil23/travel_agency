import React, { useState } from 'react';
import { InquiryRecord } from '../types';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquiryCreated: (record: InquiryRecord) => void;
  initialDestination?: string;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({
  isOpen,
  onClose,
  onInquiryCreated,
  initialDestination
}) => {
  const [step, setStep] = useState<number>(1);
  const [journeyType, setJourneyType] = useState<'corporate' | 'leisure'>('corporate');
  const [paxCount, setPaxCount] = useState<string>('50-100');
  const [preferredRegion, setPreferredRegion] = useState<string>(initialDestination || 'Europe & Mediterranean');
  const [targetDates, setTargetDates] = useState<string>('Q4 2026');
  const [fullName, setFullName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [scope, setScope] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!fullName || !email) return;
      const ref = `ADW-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);

      const record: InquiryRecord = {
        id: ref,
        fullName,
        organization: organization || (journeyType === 'corporate' ? 'Confidential Corporate' : 'Private Family'),
        email,
        phone,
        journeyType,
        paxCount,
        preferredRegion,
        targetDates,
        scope: `${scope} [Region: ${preferredRegion}, Pax: ${paxCount}, Target: ${targetDates}]`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Received'
      };

      onInquiryCreated(record);
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFullName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setScope('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] my-8 flex flex-col">
        {/* Header Bar */}
        <div className="p-6 bg-[#0F283D] text-white flex items-center justify-between">
          <div>
            <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
              Bespoke Consultation Desk
            </span>
            <h3 className="text-[1.25rem] sm:text-[1.5rem] font-medium leading-tight">
              {step === 4 ? 'Brief Registered' : 'Plan Your Bespoke Experience'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Progress indicator */}
        {step < 4 && (
          <div className="h-1 w-full bg-[#E5E7EB] flex">
            <div
              className="bg-[#D97706] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex-1">
          {/* STEP 1: Type Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
                  Step 1 of 3
                </span>
                <h4 className="text-[1.25rem] font-semibold text-[#0F283D]">
                  Select Journey Classification
                </h4>
                <p className="text-[0.875rem] text-[#43474c] font-light mt-1">
                  Our practices are bifurcated into specialized enterprise MICE logistics and bespoke leisure travel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setJourneyType('corporate')}
                  className={`p-6 text-left rounded-xl transition-all border cursor-pointer ${
                    journeyType === 'corporate'
                      ? 'border-2 border-[#0F283D] bg-[#F4F1EA] shadow-xs'
                      : 'border-[#E5E7EB] bg-white hover:border-[#0F283D]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F283D] text-white flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <h5 className="text-[1rem] font-semibold text-[#0F283D] mb-1">
                    Corporate Retreat / MICE
                  </h5>
                  <p className="text-[0.75rem] text-[#43474c] font-light leading-relaxed">
                    Leadership summits, dealer conventions, sales incentives, board meetings with flight blocks and staging.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setJourneyType('leisure')}
                  className={`p-6 text-left rounded-xl transition-all border cursor-pointer ${
                    journeyType === 'leisure'
                      ? 'border-2 border-[#0F283D] bg-[#F4F1EA] shadow-xs'
                      : 'border-[#E5E7EB] bg-white hover:border-[#0F283D]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F283D] text-white flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[20px]">villa</span>
                  </div>
                  <h5 className="text-[1rem] font-semibold text-[#0F283D] mb-1">
                    Personal Bespoke Holiday
                  </h5>
                  <p className="text-[0.75rem] text-[#43474c] font-light leading-relaxed">
                    Multigenerational family escapes, private island buyouts, wildlife safaris, and romantic luxury getaways.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Scope & Logistics */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
                  Step 2 of 3
                </span>
                <h4 className="text-[1.25rem] font-semibold text-[#0F283D]">
                  Scope &amp; Destination Preferences
                </h4>
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                  Estimated Party Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['2 - 8 Pax', '15 - 40 Pax', '50 - 150 Pax', '200 - 500+ Pax'].map((pax) => (
                    <button
                      key={pax}
                      type="button"
                      onClick={() => setPaxCount(pax)}
                      className={`py-2.5 px-3 rounded text-[0.75rem] font-medium border transition-colors cursor-pointer ${
                        paxCount === pax
                          ? 'border-[#0F283D] bg-[#0F283D] text-white'
                          : 'border-[#E5E7EB] bg-[#F4F1EA] text-[#43474c] hover:border-[#0F283D]'
                      }`}
                    >
                      {pax}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                  Preferred Region or Destination
                </label>
                <select
                  value={preferredRegion}
                  onChange={(e) => setPreferredRegion(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[#0F283D] text-[0.875rem] focus:outline-none focus:border-[#0F283D]"
                >
                  <option value="Europe & Mediterranean (Greece, Italy, Switzerland)">Europe &amp; Mediterranean (Greece, Italy, Switzerland)</option>
                  <option value="Southern Africa & Safari (Botswana, Kenya, South Africa)">Southern Africa &amp; Safari (Botswana, Kenya, South Africa)</option>
                  <option value="Nordic & Arctic (Iceland, Norway, Finland)">Nordic &amp; Arctic (Iceland, Norway, Finland)</option>
                  <option value="Southeast Asia (Singapore, Vietnam, Thailand, Bali)">Southeast Asia (Singapore, Vietnam, Thailand, Bali)</option>
                  <option value="Middle East & GCC (Dubai, Oman, Saudi Arabia)">Middle East &amp; GCC (Dubai, Oman, Saudi Arabia)</option>
                  <option value="Japan & East Asia (Kyoto, Tokyo, Hokkaido)">Japan &amp; East Asia (Kyoto, Tokyo, Hokkaido)</option>
                  <option value="Americas & Polar (Patagonia, US, Antarctica)">Americas &amp; Polar (Patagonia, US, Antarctica)</option>
                  <option value="India Luxury (Udaipur, Goa, Himalayas, Coorg)">India Luxury (Udaipur, Goa, Himalayas, Coorg)</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                  Target Travel Window
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Within 60 Days', 'Q3 - Q4 2026', '2027 Calendar'].map((win) => (
                    <button
                      key={win}
                      type="button"
                      onClick={() => setTargetDates(win)}
                      className={`py-2 px-3 rounded text-[0.75rem] font-medium border transition-colors cursor-pointer ${
                        targetDates === win
                          ? 'border-[#0F283D] bg-[#0F283D] text-white'
                          : 'border-[#E5E7EB] bg-[#F4F1EA] text-[#43474c] hover:border-[#0F283D]'
                      }`}
                    >
                      {win}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Notes */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-1">
                  Step 3 of 3
                </span>
                <h4 className="text-[1.25rem] font-semibold text-[#0F283D]">
                  Principal Contact Details
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anand Mahindra"
                    className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[0.875rem] focus:outline-none focus:border-[#0F283D]"
                  />
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
                    Organization / Family Office
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Mahindra Group / Private"
                    className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[0.875rem] focus:outline-none focus:border-[#0F283D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. anand@mahindra.com"
                    className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[0.875rem] focus:outline-none focus:border-[#0F283D]"
                  />
                </div>

                <div>
                  <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98200 48200"
                    className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[0.875rem] focus:outline-none focus:border-[#0F283D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-1">
                  Specific Requirements or Desired Experiences
                </label>
                <textarea
                  rows={2}
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  placeholder="e.g. Require pure vegetarian chefs, private jet charter from Mumbai, and complete villa privatization."
                  className="w-full px-4 py-3 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[0.875rem] focus:outline-none focus:border-[#0F283D] resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Success Confirmed */}
          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F4F1EA] border-2 border-[#D97706] text-[#D97706] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[36px]">check</span>
              </div>
              <h4 className="text-[1.5rem] font-semibold text-[#0F283D]">
                Consultation Brief Received
              </h4>
              <p className="text-[0.875rem] text-[#43474c] font-light max-w-md mx-auto leading-relaxed">
                Your dossier has been assigned to <strong className="text-[#0F283D]">Dinesh Seth &amp; Puneet Bhagchandani</strong> under Reference <span className="font-semibold text-[#D97706]">{referenceId}</span>. Our desk will contact you within 4 hours.
              </p>

              <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E7EB] max-w-md mx-auto text-left text-[0.8125rem] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Classification:</span>
                  <span className="font-medium text-[#0F283D]">
                    {journeyType === 'corporate' ? 'Corporate Retreat / MICE' : 'Personal Bespoke Holiday'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Party Size:</span>
                  <span className="font-medium text-[#0F283D]">{paxCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Region:</span>
                  <span className="font-medium text-[#0F283D]">{preferredRegion}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/919820048200?text=Hi%20Around%20D%20World%2C%20following%20up%20on%20my%20brief%20${referenceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-wider flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">chat</span>
                  Direct WhatsApp Follow-up
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-[#E5E7EB] text-[#43474c] hover:text-[#0F283D] text-[0.75rem] font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="p-6 bg-[#F4F1EA] border-t border-[#E5E7EB] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-full border border-[#E5E7EB] text-[#43474c] text-[0.75rem] font-semibold uppercase tracking-wider hover:text-[#0F283D] cursor-pointer"
              >
                Back
              </button>
            ) : (
              <span className="text-[0.6875rem] text-[#64748B] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#D97706]">verified</span>
                Direct Partner Desk
              </span>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={step === 3 && (!fullName || !email)}
              className="px-6 py-2.5 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] disabled:opacity-50 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>{step === 3 ? 'Submit Tailored Brief' : 'Continue'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#D97706]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
