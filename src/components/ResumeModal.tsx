import React, { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('akashsahani.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1a]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-[600px] rounded-2xl bg-[#1a202c] border border-[#242a36] p-6 sm:p-7 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#dde2f3] p-1 rounded-lg hover:bg-[#242a36] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-2 text-[#7df4ff]">
          <span className="material-symbols-outlined text-2xl">description</span>
          <span className="font-code text-xs font-semibold uppercase tracking-wider">
            CURRICULUM VITAE & DOSSIER
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-headline text-2xl font-bold text-[#dde2f3]">
            Akash Sahani
          </h3>
          <p className="font-code text-xs text-[#00dbe9]">
            Artificial Intelligence & Data Science Student | REVA University, Bangalore
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080e1a]/80 border border-[#242a36] flex flex-col gap-3 text-xs leading-relaxed text-[#dde2f3]">
          <div>
            <span className="font-code text-[11px] font-semibold text-[#849495] uppercase block mb-1">
              ACADEMIC BACKGROUND
            </span>
            <p className="text-[#dde2f3] font-medium">
              B.Tech in Artificial Intelligence & Data Science (2023 - 2027, 2nd Year)
            </p>
            <p className="text-[#b9cacb]">REVA University, Bangalore, Karnataka, India</p>
          </div>

          <div className="pt-2 border-t border-[#242a36]">
            <span className="font-code text-[11px] font-semibold text-[#849495] uppercase block mb-1">
              CORE SPECIALIZATIONS
            </span>
            <p className="text-[#b9cacb]">
              Python, C Programming, Relational SQL, NumPy, Pandas, Matplotlib, Data Structures & Algorithms, Object-Oriented Programming (OOP), Computer Graphics, Machine Learning Fundamentals.
            </p>
          </div>

          <div className="pt-2 border-t border-[#242a36]">
            <span className="font-code text-[11px] font-semibold text-[#849495] uppercase block mb-1">
              KEY BUILDS
            </span>
            <ul className="list-disc list-inside text-[#b9cacb] space-y-1">
              <li>2D Graphics Editor (C, Bresenham rasterization, frame buffers)</li>
              <li>UniHustle (Campus student gig platform, Web Application)</li>
              <li>Personal Portfolio (Reactive UI, Neural Canvas, Tailwind)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242a36] hover:bg-[#2f3542] text-[#dde2f3] font-code text-xs cursor-pointer border border-[#3b494b]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Email Copied!' : 'Copy Contact Email'}</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href="mailto:akashsahani.dev@gmail.com?subject=Akash%20Sahani%20Resume%20Inquiry"
              className="px-4 py-2 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform"
            >
              Request Full PDF
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#2f3542] text-[#dde2f3] font-headline text-xs hover:bg-[#343946] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
