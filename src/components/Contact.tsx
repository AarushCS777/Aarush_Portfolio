import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center">
      <div>
        <p className="font-mono text-xs text-[#7c6ef7] tracking-widest uppercase mb-2">
          // 05. contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e8f0] mb-3">
          Get In Touch
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-transparent rounded mx-auto mb-10" />
      </div>

      <div className="p-8 sm:p-12 rounded-2xl bg-[#12121a] border border-[#2a2a3d] relative overflow-hidden shadow-2xl">
        {/* Glow effect at top of card */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,110,247,0.18), transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-lg mx-auto">
          <p className="text-[#888899] text-base sm:text-lg mb-8 leading-relaxed">
            I'm currently seeking internship opportunities, collaborative software engineering projects, and data analytics work. Feel free to reach out anytime!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="contact-say-hello-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#7c6ef7] hover:bg-[#a89cf7] shadow-[0_0_24px_rgba(124,110,247,0.25)] hover:shadow-[0_6px_32px_rgba(124,110,247,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </a>

            <button
              onClick={handleCopyEmail}
              id="contact-copy-email-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-medium text-[#a89cf7] bg-[#1e1e2e] border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-white transition-all transform hover:-translate-y-0.5"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{PERSONAL_INFO.displayEmail}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#1a1a26]">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#888899] border border-[#2a2a3d] bg-[#1a1a26]/40 hover:border-[#7c6ef7] hover:text-white hover:bg-[#7c6ef7]/15 transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5 text-[#a89cf7]" />
              GitHub
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#888899] border border-[#2a2a3d] bg-[#1a1a26]/40 hover:border-[#7c6ef7] hover:text-white hover:bg-[#7c6ef7]/15 transition-all transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#a89cf7]" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
