import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { METRICS } from '../data/portfolioData';

interface HeroSectionProps {
  onResumeClick: () => void;
  onConnectClick: () => void;
  onProjectsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onResumeClick,
  onConnectClick,
  onProjectsClick,
}) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden px-4 lg:px-6 py-16"
    >
      {/* Interactive Neural Canvas */}
      <HeroCanvas />

      {/* Ambient Radial Energy Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00f0ff]/10 blur-[130px] pointer-events-none -top-24 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1000px] mx-auto text-center flex flex-col items-center gap-6">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#242a36]/70 border border-[#3b494b]/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
          </span>
          <span className="font-code text-[11px] font-semibold uppercase tracking-wider text-[#7df4ff]">
            Open to Internships, Hackathons & Research Opportunities
          </span>
        </div>

        {/* Hero Title */}
        <div className="flex flex-col items-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#dde2f3] drop-shadow-[0_0_35px_rgba(0,240,255,0.25)] select-none">
            AKASH SAHANI
          </h1>
          <p className="font-headline text-lg sm:text-xl font-medium text-[#00dbe9] mt-2 tracking-wide">
            Artificial Intelligence & Data Science Student{' '}
            <span className="text-[#b9cacb] font-normal">| REVA University, 2nd Year</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="font-body text-base sm:text-lg text-[#b9cacb] max-w-[650px] mx-auto">
          Building ideas. Exploring technology. Creating things that make an impact.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            onClick={onProjectsClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-sm font-semibold shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>View My Work</span>
          </button>

          <button
            onClick={onConnectClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#242a36]/80 text-[#dde2f3] hover:text-[#00f0ff] hover:bg-[#2f3542] transition-all duration-200 shadow-sm border border-[#3b494b]/50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Let's Connect</span>
          </button>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080e1a]/80 hover:bg-[#161c28] text-[#b9cacb] hover:text-[#dde2f3] border border-[#242a36] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
            <span className="font-code text-xs">Resume.pdf</span>
          </button>
        </div>

        {/* Quick Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[800px] mt-8 pt-6 border-t border-[#2f3542]/60">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center p-3 rounded-xl bg-[#080e1a]/50 border border-[#242a36]/60 backdrop-blur-sm shadow-sm"
            >
              <span className="font-display text-2xl font-bold text-[#7df4ff]">
                {metric.value}
              </span>
              <span className="font-code text-[11px] font-semibold text-[#b9cacb] uppercase mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
