import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitted, setIsTransmitted] = useState(false);
  const [transmittedName, setTransmittedName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setTransmittedName(formData.name);
    setIsTransmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16">
      <div className="p-8 sm:p-12 md:p-14 rounded-2xl bg-gradient-to-b from-[#1a202c] to-[#080e1a] border border-[#242a36] shadow-[0_0_50px_rgba(0,240,255,0.08)] flex flex-col items-center text-center gap-8 sm:gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 max-w-[700px]">
          <span className="font-code text-xs font-semibold text-[#7df4ff] uppercase tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#dde2f3] tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="font-body text-base text-[#b9cacb]">
            Have an idea, internship opportunity, hackathon collaboration, or simply want to talk AI and tech? Feel free to reach out.
          </p>
        </div>

        {/* Interactive Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[900px]">
          {/* Email Action Card */}
          <div className="p-6 rounded-xl bg-[#161c28]/80 border border-[#242a36] flex flex-col items-center gap-2 hover:bg-[#242a36] hover:border-[#00f0ff]/30 transition-all">
            <span className="material-symbols-outlined text-[#7df4ff] text-3xl mb-1">
              mail
            </span>
            <span className="font-headline text-[16px] font-semibold text-[#dde2f3]">
              Direct Email
            </span>
            <span className="font-code text-xs text-[#b9cacb] break-all">
              akashsahani.dev@gmail.com
            </span>
            <a
              href="mailto:akashsahani.dev@gmail.com"
              className="mt-2 px-4 py-1.5 rounded-full bg-[#00f0ff] text-[#00363a] font-code text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-105 transition-transform"
            >
              Send Email
            </a>
          </div>

          {/* GitHub Action Card */}
          <div className="p-6 rounded-xl bg-[#161c28]/80 border border-[#242a36] flex flex-col items-center gap-2 hover:bg-[#242a36] hover:border-[#00f0ff]/30 transition-all">
            <span className="material-symbols-outlined text-[#7df4ff] text-3xl mb-1">
              terminal
            </span>
            <span className="font-headline text-[16px] font-semibold text-[#dde2f3]">
              GitHub Profile
            </span>
            <span className="font-code text-xs text-[#b9cacb]">
              github.com/akashSahani31
            </span>
            <a
              href="https://github.com/akashSahani31"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-1.5 rounded-full bg-[#2f3542] text-[#dde2f3] hover:text-[#00f0ff] font-code text-xs font-semibold border border-[#3b494b]/50 hover:scale-105 transition-all"
            >
              Open GitHub
            </a>
          </div>

          {/* LinkedIn Action Card */}
          <div className="p-6 rounded-xl bg-[#161c28]/80 border border-[#242a36] flex flex-col items-center gap-2 hover:bg-[#242a36] hover:border-[#00f0ff]/30 transition-all">
            <span className="material-symbols-outlined text-[#7df4ff] text-3xl mb-1">
              share
            </span>
            <span className="font-headline text-[16px] font-semibold text-[#dde2f3]">
              Professional Network
            </span>
            <span className="font-code text-xs text-[#b9cacb]">
              LinkedIn Connect
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-4 py-1.5 rounded-full bg-[#2f3542] text-[#dde2f3] hover:text-[#00f0ff] font-code text-xs font-semibold border border-[#3b494b]/50 hover:scale-105 transition-all"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Quick Message Form Sandbox */}
        <div className="w-full max-w-[650px] p-6 rounded-xl bg-[#080e1a]/60 border border-[#242a36] backdrop-blur-md flex flex-col gap-4 text-left">
          <span className="font-code text-xs font-semibold text-[#7df4ff] flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">send</span> Send a Quick Note to Akash
          </span>

          {isTransmitted ? (
            <div className="p-4 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex flex-col gap-2 animate-fade-in">
              <div className="flex items-center gap-2 text-[#7df4ff]">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                <span className="font-headline text-sm font-semibold">Transmission Dispatched</span>
              </div>
              <p className="font-body text-xs text-[#dde2f3] leading-relaxed">
                Thank you, <strong className="text-[#00f0ff]">{transmittedName}</strong>! Your transmission has been queued for Akash Sahani. He will review your message and get back to you shortly.
              </p>
              <button
                onClick={() => setIsTransmitted(false)}
                className="self-start mt-2 px-3 py-1 rounded bg-[#242a36] hover:bg-[#2f3542] text-[#dde2f3] font-code text-xs cursor-pointer transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-[#242a36] border border-[#3b494b]/50 text-[#dde2f3] placeholder:text-[#849495] font-body text-xs focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-[#242a36] border border-[#3b494b]/50 text-[#dde2f3] placeholder:text-[#849495] font-body text-xs focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="Message / Project scope / Greeting..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-[#242a36] border border-[#3b494b]/50 text-[#dde2f3] placeholder:text-[#849495] font-body text-xs focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] resize-none transition-all"
              />
              <button
                type="submit"
                className="self-end px-6 py-2 rounded-full bg-[#00f0ff] text-[#00363a] font-headline text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-[1.02] cursor-pointer transition-transform"
              >
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
