import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_IMAGE, PORTRAIT_IMAGE } from '../data/portfolioData';

interface NavbarProps {
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e131f]/85 backdrop-blur-xl border-b border-[#242a36]/50">
      <div className="h-16 max-w-[1200px] mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_IMAGE}
            alt="Akash Sahani AI Monogram Logo"
            className="h-8 w-auto object-contain"
          />
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col text-left group"
          >
            <span className="font-headline text-[17px] font-semibold text-[#dde2f3] tracking-tight leading-none group-hover:text-[#00f0ff] transition-colors">
              Akash Sahani
            </span>
            <span className="font-code text-[11px] font-semibold text-[#00dbe9] uppercase tracking-widest mt-1">
              AI & Data Science
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[#080e1a]/60 border border-[#242a36]/40">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 text-xs font-medium ${
                  isActive
                    ? 'bg-[#242a36] text-[#7df4ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-[#b9cacb] hover:text-[#dde2f3] hover:bg-[#161c28]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onConnectClick}
            className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_28px_0_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            Let's Connect
          </button>

          <img
            src={PORTRAIT_IMAGE}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full object-cover border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-lg bg-[#1a202c] text-[#dde2f3] hover:text-[#00f0ff] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e131f]/95 border-b border-[#242a36] px-4 py-4 flex flex-col gap-1 backdrop-blur-xl">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#242a36] text-[#7df4ff]'
                    : 'text-[#b9cacb] hover:text-[#dde2f3] hover:bg-[#161c28]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
