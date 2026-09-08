import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface CertificationsSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onSelectCertificate,
}) => {
  return (
    <section id="certifications" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-3">
          <span className="font-code text-xs font-semibold text-[#00dbe9] uppercase tracking-widest">
            05 // CREDENTIALS
          </span>
          <span className="h-[1px] w-12 bg-[#3b494b]/60" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
          Certifications & Accreditations
        </h2>
        <p className="font-body text-sm text-[#b9cacb]">
          Formal programs completed with verified competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="p-6 sm:p-7 rounded-xl bg-[#1a202c]/70 border border-[#242a36] backdrop-blur-md flex flex-col justify-between gap-5 shadow-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/30 hover:bg-[#242a36]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#2f3542] text-[#7df4ff] border border-[#3b494b]/50">
                  <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                </span>
                <span className="font-code text-[11px] font-semibold text-[#b9cacb] uppercase">
                  {cert.tag}
                </span>
              </div>

              <h3 className="font-headline text-lg sm:text-xl font-semibold text-[#dde2f3] mt-1">
                {cert.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#b9cacb] leading-relaxed">
                {cert.description}
              </p>
            </div>

            <button
              onClick={() => onSelectCertificate(cert)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#080e1a] hover:bg-[#00f0ff] hover:text-[#00363a] text-[#dde2f3] border border-[#242a36] font-code text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>View Certificate</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
