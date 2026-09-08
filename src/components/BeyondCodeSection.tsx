import React from 'react';
import { BEYOND_CODE } from '../data/portfolioData';

export const BeyondCodeSection: React.FC = () => {
  return (
    <section id="beyond-code" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            07 // THE CREATIVE 30%
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Beyond Code
        </h2>
        <p className="font-body text-sm text-[#b9cacb]">
          Artistic sensibilities, vocal performance, and curiosity across disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BEYOND_CODE.map((item) => (
          <div
            key={item.title}
            className="p-5 sm:p-6 rounded-xl bg-[#161c28]/70 border border-[#242a36] backdrop-blur-md flex flex-col gap-3 group hover:bg-[#1a202c] hover:border-[#00f0ff]/30 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-[#7df4ff] text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-code text-xs text-[#b9cacb]">
                {item.tag}
              </span>
            </div>
            <h3 className="font-headline text-base sm:text-lg font-semibold text-[#dde2f3]">
              {item.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#b9cacb] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
