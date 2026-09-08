import React from 'react';
import { PORTRAIT_IMAGE, IDENTITY_CHIPS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            01 // PROFILE & IDENTITY
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Curious Builder. Computational Explorer.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait & Quick Stats Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative group rounded-xl overflow-hidden bg-[#161c28] border border-[#242a36] shadow-[0_0_35px_rgba(0,240,255,0.08)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]">
            {/* Ambient gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e131f] via-[#0e131f]/40 to-transparent opacity-90" />

            <img
              src={PORTRAIT_IMAGE}
              alt="Akash Sahani portrait"
              className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 inset-x-0 z-20 p-5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-headline text-lg font-semibold text-[#dde2f3]">
                  Akash Sahani
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2f3542]/80 text-[#7df4ff] font-code text-[11px] font-semibold border border-[#3b494b]/50">
                  2nd Year B.Tech
                </span>
              </div>

              <p className="font-body text-xs text-[#b9cacb] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#00dbe9]">
                  school
                </span>
                REVA University, Bangalore
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                <span className="font-code text-xs text-[#7df4ff]">
                  Active Researcher & Developer
                </span>
              </div>
            </div>
          </div>

          {/* Metric Tile Mini-hud */}
          <div className="p-4 rounded-xl bg-[#161c28]/70 border border-[#242a36] backdrop-blur-md flex flex-col gap-1.5 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-code text-xs text-[#b9cacb] uppercase tracking-wide">
                Current Focus
              </span>
              <span className="font-code text-[11px] font-semibold text-[#00dbe9]">
                + SYSTEM ACTIVE
              </span>
            </div>
            <p className="font-body text-xs text-[#dde2f3] leading-relaxed">
              Machine Learning Fundamentals, Applied Data Analytics, and Computer Graphics Systems in C.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative Story & Feature Chips */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 sm:p-7 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md shadow-sm flex flex-col gap-4">
            <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#dde2f3] tracking-tight">
              Turning algorithmic concepts into clean digital reality.
            </h3>
            <p className="font-body text-sm sm:text-[15px] text-[#b9cacb] leading-relaxed">
              I am a 2nd-year B.Tech student in Artificial Intelligence and Data Science at REVA University in Bangalore. My journey sits at the nexus of quantitative rigor and software engineering — experimenting constantly with data manipulation, deep learning theory, and responsive web technologies.
            </p>
            <p className="font-body text-sm sm:text-[15px] text-[#b9cacb] leading-relaxed">
              I don't just study algorithms; I build around them. Whether implementing custom rasterization algorithms in low-level C or designing student gig exchange frameworks like <span className="text-[#7df4ff] font-medium">UniHustle</span>, I treat software engineering as a canvas for high-utility creativity.
            </p>
            <p className="font-body text-sm sm:text-[15px] text-[#b9cacb] leading-relaxed">
              Beyond the keyboard, I channel expression into singing and vocal music — finding that rhythm and melody bring the same discipline, patience, and creative balance that complex problem solving requires.
            </p>
          </div>

          {/* Information Badge Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {IDENTITY_CHIPS.map((chip) => (
              <div
                key={chip.title}
                className={`p-3.5 rounded-xl bg-[#161c28]/80 border border-[#242a36] hover:bg-[#242a36] hover:border-[#00f0ff]/30 transition-all duration-200 flex items-center gap-3 shadow-sm group ${
                  chip.fullSpan ? 'col-span-2 sm:col-span-2' : ''
                }`}
              >
                <span className="material-symbols-outlined text-[#7df4ff] text-2xl group-hover:scale-110 transition-transform">
                  {chip.icon}
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-[14px] font-semibold text-[#dde2f3] leading-tight">
                    {chip.title}
                  </span>
                  <span className="font-code text-[11px] text-[#b9cacb] mt-0.5">
                    {chip.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
