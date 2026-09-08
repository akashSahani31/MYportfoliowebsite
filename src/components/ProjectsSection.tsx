import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            03 // SELECTED BUILDS
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Engineered Projects
        </h2>
        <p className="font-body text-sm text-[#b9cacb]">
          Low-level systems, digital ecosystems, and frontend architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl bg-[#1a202c]/70 border border-[#242a36] backdrop-blur-md p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-[#00f0ff]/40 hover:-translate-y-1"
          >
            {/* Ambient accent top bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-transparent opacity-50 group-hover:opacity-100 transition-opacity rounded-t-xl" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-code text-[11px] font-semibold text-[#7df4ff] px-2.5 py-0.5 rounded bg-[#2f3542] border border-[#3b494b]/40">
                  {project.category}
                </span>
                <span className="font-code text-xs font-medium text-[#849495]">
                  {project.number}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-headline text-xl font-semibold text-[#dde2f3] group-hover:text-[#7df4ff] transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#b9cacb] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded font-code text-[11px] font-medium bg-[#080e1a] text-[#adc6ff] border border-[#242a36]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-5 mt-5 border-t border-[#2f3542]/60">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#dde2f3] hover:text-[#00f0ff] font-code text-xs transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub</span>
              </a>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  className="inline-flex items-center gap-1.5 text-[#7df4ff] hover:text-[#00f0ff] font-code text-xs transition-colors"
                >
                  <span>Live Demo</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              ) : (
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-[#7df4ff] hover:text-[#00f0ff] font-code text-xs cursor-pointer transition-colors"
                >
                  <span>
                    {project.id === 'unihustle' ? 'View Concept' : 'View Details'}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
