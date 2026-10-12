import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';

interface ClientStoriesViewProps {
  onOpenPlanModal: () => void;
  selectedCaseStudyId?: string | null;
}

export const ClientStoriesView: React.FC<ClientStoriesViewProps> = ({
  onOpenPlanModal,
  selectedCaseStudyId
}) => {
  const [activeId, setActiveId] = useState<string>(selectedCaseStudyId || CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find(c => c.id === activeId) || CASE_STUDIES[0];

  return (
    <div className="w-full bg-[#FAFAF9] pt-24 pb-28 animate-in fade-in duration-300">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E7EB] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-[#0F283D]">
            Track Record of Excellence
          </span>
        </div>
        <h1 className="text-[2.75rem] md:text-[4rem] font-light text-[#0F283D] tracking-tight leading-tight mb-6">
          Client Stories.<br />
          <span className="italic font-light text-[#43474c]">Proven Execution Under High Stakes.</span>
        </h1>
        <p className="text-[1.125rem] leading-[1.875rem] text-[#43474c] max-w-3xl font-light">
          When India's most demanding enterprises convene their boards, key clients, and distributor ecosystems across the globe, they place their trust in Around D World. Explore detailed logistical case studies from recent conclaves.
        </p>

        {/* Client selector tabs */}
        <div className="flex flex-wrap gap-2 mt-8 pb-6 border-b border-[#E5E7EB]">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveId(cs.id)}
              className={`px-5 py-2.5 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeId === cs.id
                  ? 'bg-[#0F283D] text-white shadow-xs'
                  : 'bg-[#F4F1EA] text-[#43474c] hover:bg-[#e5e2db] border border-[#E5E7EB]'
              }`}
            >
              {cs.client}
            </button>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="p-8 lg:p-12 rounded-2xl bg-[#F4F1EA] border border-[#E5E7EB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] mb-3">
                <span>{activeCase.location}</span>
                <span>•</span>
                <span>{activeCase.pax} Delegates</span>
              </div>

              <h2 className="text-[1.75rem] md:text-[2.25rem] font-medium text-[#0F283D] leading-tight mb-4">
                {activeCase.title}
              </h2>

              {/* Quote */}
              <div className="p-6 rounded-xl bg-white border border-[#E5E7EB] mb-8">
                <span className="text-[2rem] leading-none text-[#D97706] block mb-2 select-none">“</span>
                <p className="text-[1rem] leading-relaxed text-[#0F283D] italic font-light mb-4">
                  "{activeCase.quote}"
                </p>
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <p className="text-[0.875rem] font-semibold text-[#0F283D]">
                    {activeCase.executive}
                  </p>
                  <p className="text-[0.75rem] text-[#64748B]">
                    {activeCase.role}, {activeCase.client}
                  </p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    The Logistical Challenge
                  </h4>
                  <p className="text-[0.875rem] leading-[1.625rem] text-[#43474c] font-light">
                    {activeCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#0F283D] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    The Around D World Solution
                  </h4>
                  <p className="text-[0.875rem] leading-[1.625rem] text-[#43474c] font-light">
                    {activeCase.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Highlights Card */}
            <div className="lg:col-span-5 p-8 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#D97706] block mb-2">
                Audit &amp; Impact Summary
              </span>
              <h3 className="text-[1.25rem] font-semibold text-[#0F283D] mb-6">
                Key Performance Metrics
              </h3>

              <div className="space-y-4 mb-8">
                {activeCase.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#FAFAF9] border border-[#E5E7EB]">
                    <span className="material-symbols-outlined text-[18px] text-[#D97706]">verified</span>
                    <span className="text-[0.8125rem] font-medium text-[#0F283D]">{metric}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E5E7EB]">
                <button
                  onClick={onOpenPlanModal}
                  className="w-full py-3.5 rounded bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Similar Conclave Blueprint</span>
                  <span className="material-symbols-outlined text-[16px] text-[#D97706]">east</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
