import React from 'react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1a]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-[620px] rounded-2xl bg-[#1a202c] border border-[#242a36] p-6 sm:p-7 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#dde2f3] p-1 rounded-lg hover:bg-[#242a36] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="font-code text-xs font-semibold text-[#7df4ff] px-2.5 py-0.5 rounded bg-[#2f3542] border border-[#3b494b]/40">
            {project.category}
          </span>
          <span className="font-code text-xs text-[#849495]">
            #{project.number}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-headline text-2xl font-semibold text-[#dde2f3]">
            {project.title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#b9cacb] leading-relaxed">
            {project.details?.overview || project.description}
          </p>
        </div>

        {project.details?.highlights && (
          <div className="p-4 rounded-xl bg-[#080e1a]/80 border border-[#242a36] flex flex-col gap-2">
            <span className="font-code text-[11px] font-semibold text-[#7df4ff] uppercase">
              ENGINEERING HIGHLIGHTS
            </span>
            <ul className="flex flex-col gap-2">
              {project.details.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#dde2f3]">
                  <span className="material-symbols-outlined text-[#00f0ff] text-[16px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.details?.techStack && (
          <div className="flex flex-col gap-1.5">
            <span className="font-code text-[11px] text-[#849495] uppercase">
              TECHNICAL STACK & ARCHITECTURE
            </span>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md font-code text-xs bg-[#242a36] text-[#adc6ff] border border-[#3b494b]/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-[#242a36]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242a36] hover:bg-[#2f3542] text-[#dde2f3] hover:text-[#00f0ff] font-code text-xs font-semibold border border-[#3b494b]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
