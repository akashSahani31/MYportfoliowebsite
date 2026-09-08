import React, { useState } from 'react';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'all', label: 'ALL' },
    { key: 'programming', label: 'PROGRAMMING' },
    { key: 'data-ai', label: 'DATA & AI' },
    { key: 'database', label: 'DATABASE' },
    { key: 'tools', label: 'DEV & TOOLS' },
  ];

  const showProgramming = activeCategory === 'all' || activeCategory === 'programming';
  const showDataAi = activeCategory === 'all' || activeCategory === 'data-ai';
  const showDatabase = activeCategory === 'all' || activeCategory === 'database';
  const showTools = activeCategory === 'all' || activeCategory === 'tools';

  return (
    <section id="skills" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
              02 // TECHNICAL ARSENAL
            </span>
            <span className="h-[1px] w-12 bg-[#3b494b]/60" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
            Skills Ecosystem
          </h2>
          <p className="font-body text-sm text-[#b9cacb]">
            Validated competencies and practical technologies deployed in projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1 p-1 rounded-full bg-[#161c28]/90 border border-[#242a36] self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full font-code text-[11px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#242a36] text-[#7df4ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                  : 'text-[#b9cacb] hover:text-[#dde2f3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category: Programming */}
        {showProgramming && (
          <div className="p-5 sm:p-6 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md flex flex-col justify-between gap-4 shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/30 hover:bg-[#242a36]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-wider">
                  PROGRAMMING
                </span>
                <span className="material-symbols-outlined text-[#7df4ff] text-xl">
                  code
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="p-3 rounded-lg bg-[#080e1a]/60 border border-[#242a36] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#00f0ff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" />
                    </svg>
                    <span className="font-headline text-[15px] font-semibold text-[#dde2f3]">
                      Python
                    </span>
                  </div>
                  <span className="font-code text-[11px] font-semibold text-[#7df4ff] px-2 py-0.5 rounded bg-[#2f3542] border border-[#3b494b]/50">
                    Primary
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#080e1a]/60 border border-[#242a36] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#7df4ff] text-lg">
                      memory
                    </span>
                    <span className="font-headline text-[15px] font-semibold text-[#dde2f3]">
                      C Language
                    </span>
                  </div>
                  <span className="font-code text-[11px] font-semibold text-[#adc6ff] px-2 py-0.5 rounded bg-[#2f3542] border border-[#3b494b]/50">
                    Low-Level
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#242a36]">
              <p className="font-body text-xs text-[#b9cacb] leading-relaxed">
                Core algorithms, systems programming, and rapid computational script development.
              </p>
            </div>
          </div>
        )}

        {/* Category: Data & AI */}
        {showDataAi && (
          <div
            className={`p-5 sm:p-6 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md flex flex-col justify-between gap-4 shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/30 hover:bg-[#242a36] ${
              activeCategory === 'all' ? 'md:col-span-2' : 'md:col-span-2 lg:col-span-3'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-wider">
                  DATA & ARTIFICIAL INTELLIGENCE
                </span>
                <span className="material-symbols-outlined text-[#7df4ff] text-xl">
                  psychology
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { name: 'NumPy', sub: 'Numerical Computing' },
                  { name: 'Pandas', sub: 'Data Wrangling' },
                  { name: 'Matplotlib', sub: 'Data Visualization' },
                  { name: 'Data Analysis', sub: 'Exploratory EDA' },
                  { name: 'Artificial Intelligence', sub: 'Core Models' },
                  { name: 'Data Science', sub: 'Statistical Modeling' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-lg bg-[#080e1a]/60 border border-[#242a36] flex flex-col gap-0.5"
                  >
                    <span className="font-headline text-[14px] font-semibold text-[#dde2f3]">
                      {item.name}
                    </span>
                    <span className="font-code text-[11px] text-[#b9cacb]">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#242a36] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7df4ff] text-[18px]">
                insights
              </span>
              <span className="font-body text-xs text-[#b9cacb]">
                Focusing on high-dimensional analysis, algorithmic pipelines, and visual telemetry.
              </span>
            </div>
          </div>
        )}

        {/* Category: Database */}
        {showDatabase && (
          <div className="p-5 sm:p-6 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md flex flex-col justify-between gap-4 shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/30 hover:bg-[#242a36]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-wider">
                  DATABASE SYSTEMS
                </span>
                <span className="material-symbols-outlined text-[#7df4ff] text-xl">
                  database
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="p-3 rounded-lg bg-[#080e1a]/60 border border-[#242a36] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#7df4ff] text-lg">
                      storage
                    </span>
                    <span className="font-headline text-[15px] font-semibold text-[#dde2f3]">
                      SQL
                    </span>
                  </div>
                  <span className="font-code text-[11px] font-semibold text-[#7df4ff] px-2 py-0.5 rounded bg-[#2f3542] border border-[#3b494b]/50">
                    Relational
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#242a36]">
              <p className="font-body text-xs text-[#b9cacb] leading-relaxed">
                Relational queries, schema design, sub-queries, joins, and data normalization.
              </p>
            </div>
          </div>
        )}

        {/* Category: Dev & Tools */}
        {showTools && (
          <div
            className={`p-5 sm:p-6 rounded-xl bg-[#1a202c]/60 border border-[#242a36] backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm ${
              activeCategory === 'all' ? 'lg:col-span-4' : 'md:col-span-2 lg:col-span-4'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#7df4ff] shrink-0">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-[16px] font-semibold text-[#dde2f3]">
                  Development & Engineering Tools
                </span>
                <span className="font-body text-xs text-[#b9cacb]">
                  Daily workflow tools maintaining continuous versioning and efficient builds.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Git', icon: 'commit' },
                { name: 'GitHub', icon: 'hub' },
                { name: 'VS Code', icon: 'code_blocks' },
              ].map((tool) => (
                <span
                  key={tool.name}
                  className="px-4 py-1.5 rounded-full bg-[#080e1a]/80 border border-[#242a36] text-[#dde2f3] font-code text-xs flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#7df4ff]">
                    {tool.icon}
                  </span>{' '}
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
