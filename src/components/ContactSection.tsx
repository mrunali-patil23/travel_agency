import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
import { InquiryFormData, InquiryRecord } from '../types';

interface ContactSectionProps {
  onInquirySubmitted: (record: InquiryRecord) => void;
  prefillPartner?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onInquirySubmitted,
  prefillPartner
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    journeyType: 'corporate',
    scope: prefillPartner ? `Attention: ${prefillPartner} - ` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    const newRefId = `ADW-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(newRefId);

    const record: InquiryRecord = {
      ...formData,
      id: newRefId,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Received'
    };

    onInquirySubmitted(record);
    setSubmitted(true);
  };

  const handleFillDemo = (type: 'corporate' | 'leisure') => {
    if (type === 'corporate') {
      setFormData({
        fullName: 'Vikramaditya Singhania',
        organization: 'Kotak Wealth & Capital',
        email: 'v.singhania@kotak.com',
        phone: '+91 98200 48200',
        journeyType: 'corporate',
        scope: '140-person executive leadership conclave in October. Prefer Tuscany or Interlaken. Require chartered transit and keynote stage.'
      });
    } else {
      setFormData({
        fullName: 'Rohit & Radhika Singhi',
        organization: 'Private Family Office',
        email: 'r.singhi@familyoffice.in',
        phone: '+91 98201 12345',
        journeyType: 'leisure',
        scope: 'Private multi-generational 12-guest retreat in Santorini and Crete. Private catamaran and secluded cliffside estate buyout.'
      });
    }
    setSubmitted(false);
  };

  return (
    <section className="w-full bg-[#F4F1EA] py-24 lg:py-28 border-t border-[#E5E7EB]" id="inquiry">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#E5E7EB]">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] block mb-2">
            Private Consultation
          </span>
          <h2 className="text-[2.25rem] md:text-[3rem] font-normal leading-tight text-[#0F283D] tracking-tight mb-3">
            Begin the Conversation
          </h2>
          <p className="text-[1.125rem] leading-[1.875rem] text-[#43474c] font-light">
            Tell us about your upcoming retreat or personal voyage. Our senior partners respond within 4 business hours.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Direct Desks & Office Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Office Address Card */}
              <div className="p-8 rounded-xl bg-[#FAFAF9] border border-[#E5E7EB]">
                <span className="text-[0.6875rem] font-semibold text-[#D97706] uppercase tracking-widest block mb-2">
                  Registered Headquarters
                </span>
                <h4 className="text-[1.5rem] font-semibold text-[#0F283D] mb-3">
                  Mumbai Experience Desk
                </h4>
                <address className="not-italic text-[0.875rem] leading-[1.375rem] text-[#43474c] font-light">
                  Ujagar Chambers, Deonar,<br />
                  Chembur, Mumbai, Maharashtra 400088<br />
                  India
                </address>

                <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-[#0F283D] font-medium">
                  <span className="material-symbols-outlined text-[18px] text-[#D97706]">call</span>
                  <a href="tel:+912225504900" className="text-[0.875rem] hover:text-[#D97706] transition-colors">
                    +91 (22) 2550 4900
                  </a>
                  <span className="text-[#E5E7EB]">/</span>
                  <a href="tel:+919820048200" className="text-[0.875rem] hover:text-[#D97706] transition-colors">
                    +91 98200 48200
                  </a>
                </div>

                <div className="mt-2 flex items-center gap-2 text-[#43474c] text-[0.875rem]">
                  <span className="material-symbols-outlined text-[18px] text-[#D97706]">mail</span>
                  <a href="mailto:concierge@arounddworld.com" className="hover:text-[#0F283D] transition-colors">
                    concierge@arounddworld.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Instant Action */}
              <div className="p-8 rounded-xl bg-[#FAFAF9] border border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-1">
                    Direct Senior Partner Hotline
                  </span>
                  <h5 className="text-[1.125rem] text-[#0F283D] font-medium">
                    Prefer an instant dialogue?
                  </h5>
                  <p className="text-[0.875rem] text-[#43474c] font-light">
                    Direct encrypted channel with our desk.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0F283D] text-white text-[0.6875rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-colors shrink-0 shadow-sm cursor-pointer"
                  href="https://wa.me/919820048200?text=Hello%20Dinesh%20%26%20Puneet%2C%20I%20would%20like%20to%20discuss%20a%20tailored%20brief."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#D97706]">chat</span>
                  WhatsApp Desk
                </a>
              </div>

              {/* Location Map Embed Card */}
              <div
                className="w-full h-44 rounded-xl bg-cover bg-center border border-[#E5E7EB] relative overflow-hidden group shadow-xs"
                style={{ backgroundImage: `url("${ASSETS.map}")` }}
              >
                <div className="absolute inset-0 bg-[#0F283D]/30 group-hover:bg-[#0F283D]/10 transition-colors" />
                <div className="absolute bottom-3 left-3 bg-[#FAFAF9]/90 backdrop-blur-md px-3 py-1.5 rounded text-[#0F283D] text-[0.6875rem] font-medium flex items-center gap-1.5 border border-[#E5E7EB]">
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">location_on</span>
                  Deonar, Chembur (HQ)
                </div>
                <a
                  href="https://maps.google.com/?q=Ujagar+Chambers+Deonar+Chembur+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-[#0F283D]/80 hover:bg-[#0F283D] text-white text-[0.625rem] px-2.5 py-1 rounded uppercase tracking-wider transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Elegant Inquiry Card */}
          <div className="lg:col-span-7">
            <div className="p-8 lg:p-12 rounded-xl bg-[#FAFAF9] border border-[#E5E7EB] shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-[1.75rem] md:text-[2rem] font-medium text-[#0F283D]">
                  Initiate Planning
                </h3>

                {/* Quick Presets for easy testing */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[0.625rem] uppercase text-[#64748B]">Fill:</span>
                  <button
                    type="button"
                    onClick={() => handleFillDemo('corporate')}
                    className="text-[0.625rem] px-2 py-1 bg-[#F4F1EA] hover:bg-[#e5e2db] text-[#0F283D] rounded border border-[#E5E7EB] transition-colors cursor-pointer"
                  >
                    MICE Sample
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFillDemo('leisure')}
                    className="text-[0.625rem] px-2 py-1 bg-[#F4F1EA] hover:bg-[#e5e2db] text-[#0F283D] rounded border border-[#E5E7EB] transition-colors cursor-pointer"
                  >
                    Family Luxury
                  </button>
                </div>
              </div>

              <p className="text-[0.875rem] text-[#43474c] mb-8 font-light">
                Complete this brief outline. Our principals personally review every corporate and private brief.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#F4F1EA] border border-[#D97706]/40 flex flex-col items-start gap-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[32px] text-[#D97706]">
                      check_circle
                    </span>
                    <div>
                      <h4 className="text-[1.25rem] font-semibold text-[#0F283D]">
                        Inquiry Received &amp; Logged
                      </h4>
                      <p className="text-[0.8125rem] text-[#43474c]">
                        Reference: <span className="font-semibold text-[#0F283D]">{referenceId}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-[0.875rem] leading-relaxed text-[#43474c]">
                    Thank you, <span className="font-semibold text-[#0F283D]">{formData.fullName}</span>. Dinesh Seth and Puneet Bhagchandani have received your preliminary specifications and will review airline seat allocations and destination permits before connecting with you within 4 business hours.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/919820048200?text=Hi%20Around%20D%20World%2C%20following%20up%20on%20Inquiry%20${referenceId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F283D] text-white text-[0.6875rem] font-semibold uppercase tracking-wider"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#D97706]">chat</span>
                      Instant WhatsApp Follow-up
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-full border border-[#E5E7EB] text-[#43474c] hover:text-[#0F283D] text-[0.6875rem] font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Field 1: Full Name / Org */}
                  <div>
                    <label
                      className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2"
                      htmlFor="contact-name"
                    >
                      Full Name • Organization
                    </label>
                    <input
                      className="w-full px-4 py-3.5 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[#1a1c1c] text-[1rem] focus:outline-none focus:border-[#0F283D] transition-colors placeholder:text-[#64748B]/60"
                      id="contact-name"
                      placeholder="e.g. Vikramaditya Singhania • Kotak Group"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  {/* Field 2: Corporate Email / Phone */}
                  <div>
                    <label
                      className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2"
                      htmlFor="contact-email"
                    >
                      Corporate Email • Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3.5 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[#1a1c1c] text-[1rem] focus:outline-none focus:border-[#0F283D] transition-colors placeholder:text-[#64748B]/60"
                      id="contact-email"
                      placeholder="e.g. v.singhania@kotak.com • +91 98200 00000"
                      required
                      type="text"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Field 3: Inquiry Classification */}
                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2">
                      Journey Classification
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="journeyOptions">
                      <label
                        className={`relative flex items-center p-3.5 rounded bg-[#F4F1EA] cursor-pointer transition-colors ${
                          formData.journeyType === 'corporate'
                            ? 'border-2 border-[#0F283D]'
                            : 'border border-[#E5E7EB] hover:border-[#0F283D]'
                        }`}
                      >
                        <input
                          checked={formData.journeyType === 'corporate'}
                          className="w-4 h-4 text-[#0F283D] border-[#E5E7EB] focus:ring-0 cursor-pointer"
                          name="journeyType"
                          type="radio"
                          value="corporate"
                          onChange={() => setFormData({ ...formData, journeyType: 'corporate' })}
                        />
                        <span className="ml-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D]">
                          Corporate Retreat / MICE
                        </span>
                      </label>

                      <label
                        className={`relative flex items-center p-3.5 rounded bg-[#F4F1EA] cursor-pointer transition-colors ${
                          formData.journeyType === 'leisure'
                            ? 'border-2 border-[#0F283D]'
                            : 'border border-[#E5E7EB] hover:border-[#0F283D]'
                        }`}
                      >
                        <input
                          checked={formData.journeyType === 'leisure'}
                          className="w-4 h-4 text-[#0F283D] border-[#E5E7EB] focus:ring-0 cursor-pointer"
                          name="journeyType"
                          type="radio"
                          value="leisure"
                          onChange={() => setFormData({ ...formData, journeyType: 'leisure' })}
                        />
                        <span className="ml-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D]">
                          Personal Bespoke Holiday
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Field 4: Scope & Requirements */}
                  <div>
                    <label
                      className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2"
                      htmlFor="contact-scope"
                    >
                      Estimated Dates, Pax &amp; Desired Experience
                    </label>
                    <textarea
                      className="w-full px-4 py-3.5 rounded bg-[#F4F1EA] border border-[#E5E7EB] text-[#1a1c1c] text-[1rem] focus:outline-none focus:border-[#0F283D] transition-colors placeholder:text-[#64748B]/60 resize-none font-light"
                      id="contact-scope"
                      placeholder="e.g. 120-person leadership offsite in November (Vietnam or Greece), or private family villa in Tuscany for 8 guests."
                      rows={3}
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      className="w-full py-4 px-8 rounded bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-all relative group overflow-hidden shadow-md flex items-center justify-center gap-3 cursor-pointer"
                      type="submit"
                    >
                      <span>Request Tailored Proposal</span>
                      <span className="material-symbols-outlined text-[18px] text-[#D97706] group-hover:translate-x-1 transition-transform">
                        east
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </button>
                  </div>

                  {/* Privacy Statement */}
                  <div className="pt-2 flex items-center justify-between text-[#43474c] text-[0.6875rem] font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-[#D97706]">lock</span>
                      Confidentiality Guaranteed
                    </span>
                    <span className="text-[#64748B] font-normal">
                      Direct Principal Attention • No Spam
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
