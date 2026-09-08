import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            06 // TRACK RECORD
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Achievements & Activities
        </h2>
        <p className="font-body text-sm text-[#b9cacb]">
          Hackathon experiences, collaborative sprints, and academic demonstrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md flex flex-col gap-3 shadow-sm hover:border-[#00f0ff]/30 hover:bg-[#242a36] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#7df4ff] mb-1">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <span className="font-code text-[11px] font-semibold text-[#7df4ff] uppercase tracking-wider">
              {item.tag}
            </span>
            <h3 className="font-headline text-lg font-semibold text-[#dde2f3]">
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
