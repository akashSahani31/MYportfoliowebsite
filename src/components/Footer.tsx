import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#080e1a]/80 border-t border-[#242a36] backdrop-blur-xl mt-24 shadow-[0_-1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-headline text-base font-semibold text-[#dde2f3] tracking-tight">
              © 2026 Akash Sahani
            </span>
            <p className="font-code text-xs text-[#b9cacb]">
              Built with curiosity, creativity & code.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/akashSahani31"
              target="_blank"
              rel="noreferrer"
              className="font-code text-xs text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-code text-xs text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:akashsahani.dev@gmail.com"
              className="font-code text-xs text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+918000000000"
              className="font-code text-xs text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
            >
              Phone
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#242a36] border border-[#3b494b]/50 text-[#b9cacb] hover:text-[#00f0ff] hover:bg-[#2f3542] transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
