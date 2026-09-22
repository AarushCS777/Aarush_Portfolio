import React from 'react';
import { ArrowDown, Github, FolderCode, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroPhoto from '../imggg.jpeg';

export const Hero: React.FC = () => {
 

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center flex-col text-center px-6 sm:px-12 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Animated gradient mesh & dot grid */}
      <div
        className="absolute inset-0 pointer-events-none animate-mesh opacity-70"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 20% 40%, rgba(124,110,247,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(168,156,247,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 60% 80%, rgba(100,80,220,0.08) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,110,247,0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 80%)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Section 1 Image: Hero Profile Photo - Enlarged */}
        <div className="relative mb-8 group">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#7c6ef7] via-[#a89cf7] to-[#7c6ef7] shadow-[0_0_40px_rgba(124,110,247,0.45)] transition-transform duration-300 group-hover:scale-105">
            <img
              src={heroPhoto}
              alt={PERSONAL_INFO.name}
              id="hero-profile-photo"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover object-top bg-[#12121a]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://avatars.githubusercontent.com/u/180328627?v=4';
              }}
            />
          </div>

          {/* Active status pill */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12121a] border border-[#7c6ef7]/50 text-xs font-mono text-[#a89cf7] shadow-[0_4px_16px_rgba(0,0,0,0.6)] whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wide">BCA AI/ML</span>
          </div>
        </div>

        {/* Clear BCA AI/ML Specialization Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7c6ef7]/15 border border-[#7c6ef7]/30 text-xs font-mono font-medium text-[#a89cf7] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#7c6ef7]" />
          <span>BCA in Artificial Intelligence & Machine Learning (AI/ML)</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none mb-4 bg-gradient-to-r from-white via-[#a89cf7] to-[#7c6ef7] bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </h1>

        <p className="text-base sm:text-xl text-[#888899] font-normal my-2 sm:my-3">
          <strong className="text-[#a89cf7] font-semibold">BCA (AI/ML) Student</strong> &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Data & ML Enthusiast
        </p>

        <p className="text-sm sm:text-base text-[#888899] max-w-lg mb-8 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            id="hero-cta-projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#7c6ef7] hover:bg-[#a89cf7] shadow-[0_0_24px_rgba(124,110,247,0.25)] hover:shadow-[0_6px_32px_rgba(124,110,247,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <FolderCode className="w-4 h-4" />
            View Projects
          </a>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-github"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#a89cf7] bg-transparent border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="#contact"
            id="hero-cta-contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#888899] bg-transparent border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        id="hero-scroll-cue"
        aria-label="Scroll down to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#888899] hover:text-[#a89cf7] animate-cue transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
