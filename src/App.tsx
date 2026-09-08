import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { CertificateItem, ProjectItem } from './types';

export const App: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0e131f] text-[#dde2f3] selection:bg-[#00f0ff] selection:text-[#00363a] overflow-x-hidden">
      {/* Background Cyber Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Top Atmospheric Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#00f0ff]/10 via-[#0566d9]/5 to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onConnectClick={scrollToContact} />

        <main className="flex-1 flex flex-col pt-16">
          <HeroSection
            onResumeClick={() => setIsResumeOpen(true)}
            onConnectClick={scrollToContact}
            onProjectsClick={scrollToProjects}
          />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          <EducationSection />

          <CertificationsSection
            onSelectCertificate={(cert) => setSelectedCertificate(cert)}
          />

          <AchievementsSection />

          <BeyondCodeSection />

          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <CertificateModal
        cert={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
