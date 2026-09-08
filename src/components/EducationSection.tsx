import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            04 // ACADEMIC RIGOR
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Education & Academics
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 flex flex-col gap-8 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#242a36]">
        {EDUCATION.map((item, idx) => (
          <div key={item.title} className="relative flex flex-col gap-3">
            {/* Timeline indicator node */}
            <div
              className={`absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-[#080e1a] border-2 ${
                item.isCurrent
                  ? 'border-[#00f0ff] shadow-[0_0_12px_#00f0ff]'
                  : 'border-[#0566d9]'
              }`}
            />

            <div
              className={`p-6 sm:p-7 rounded-xl border backdrop-blur-md shadow-sm flex flex-col gap-4 ${
                item.isCurrent
                  ? 'bg-[#1a202c]/60 border-[#242a36]'
                  : 'bg-[#1a202c]/40 border-[#242a36]/60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span
                    className={`font-code text-xs font-semibold uppercase tracking-wider ${
                      item.isCurrent ? 'text-[#7df4ff]' : 'text-[#adc6ff]'
                    }`}
                  >
                    {item.level}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#dde2f3] mt-1">
                    {item.title}
                  </h3>
                  <p className="font-headline text-sm sm:text-base text-[#b9cacb] font-normal">
                    {item.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242a36] border border-[#3b494b]/50 self-start sm:self-center">
                  {item.isCurrent && (
                    <span className="material-symbols-outlined text-[16px] text-[#7df4ff]">
                      calendar_today
                    </span>
                  )}
                  <span className="font-code text-xs text-[#dde2f3]">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.coursework && item.coursework.length > 0 && (
                <div className="flex flex-col gap-2 mt-1">
                  <span className="font-code text-xs text-[#00dbe9] uppercase">
                    Core Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full bg-[#080e1a] border border-[#242a36] text-[#dde2f3] font-body text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
