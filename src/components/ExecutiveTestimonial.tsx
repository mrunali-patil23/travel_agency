import React from 'react';

interface ExecutiveTestimonialProps {
  onViewCaseStudy: (id: string) => void;
}

export const ExecutiveTestimonial: React.FC<ExecutiveTestimonialProps> = ({ onViewCaseStudy }) => {
  return (
    <section className="w-full bg-[#0F283D] text-white py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle Architectural Watermark Shape */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Minimalist Editorial Quote Mark */}
        <div className="text-[3rem] leading-none text-[#D97706] opacity-90 select-none mb-6">
          “
        </div>

        {/* Core Quote Statement */}
        <blockquote className="text-[1.75rem] md:text-[2.5rem] font-light leading-relaxed tracking-tight text-white mb-12 max-w-4xl">
          Around D World transformed our annual leadership summit into an effortless masterclass in hospitality. From chartered transit to seamless on-ground protocols in Singapore, their 18 years of operational mastery was evident at every turn.
        </blockquote>

        {/* Minimal Divider Line */}
        <div className="w-12 h-px bg-[#D97706]/50 mb-8" />

        {/* Attribution Details */}
        <div className="flex flex-col items-center">
          <cite className="not-italic text-[1.25rem] md:text-[1.5rem] font-medium text-white tracking-normal mb-1">
            Sunil Raghavan
          </cite>
          <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#e8e8e7] mb-1">
            VP Human Resources &amp; Executive Operations
          </span>
          <span className="text-[0.875rem] text-[#f3f4f3]/70 font-light">
            Fullerton India • 250-Delegate Annual Leadership Conclave
          </span>

          <button
            onClick={() => onViewCaseStudy('fullerton')}
            className="mt-6 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-widest text-[#D97706] hover:text-white transition-colors cursor-pointer"
          >
            <span>Read Conclave Case Study</span>
            <span className="material-symbols-outlined text-[15px]">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </section>
  );
};
