import React from 'react';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1a]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-[550px] rounded-2xl bg-[#1a202c] border border-[#242a36] p-6 sm:p-7 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col gap-4 animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#dde2f3] p-1 rounded-lg hover:bg-[#242a36] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-2 text-[#7df4ff]">
          <span className="material-symbols-outlined text-2xl">verified</span>
          <span className="font-code text-xs font-semibold uppercase tracking-wider">
            ACADEMIC CREDENTIAL PREVIEW
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#dde2f3]">
            {cert.title}
          </h3>
          <span className="font-code text-xs text-[#00dbe9]">
            {cert.organization}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#080e1a]/80 border border-[#242a36] flex flex-col gap-2">
          <span className="font-code text-[11px] font-semibold text-[#849495] uppercase">
            PROGRAM SCOPE & COMPETENCIES
          </span>
          <p className="font-body text-xs sm:text-sm text-[#dde2f3] leading-relaxed">
            {cert.detailedScope}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="font-code text-[11px] text-[#849495] uppercase">
              VERIFICATION CODE
            </span>
            <span className="font-code text-xs font-bold text-[#7df4ff]">
              {cert.verificationCode}
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
