import React from 'react';
import { Github, ArrowRight, GraduationCap, BrainCircuit } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  const aboutPhoto = (typeof window !== 'undefined' && localStorage.getItem('aarush_portfolio_about_photo_v2')) || PERSONAL_INFO.aboutImage;
  const heroPhoto = (typeof window !== 'undefined' && localStorage.getItem('aarush_portfolio_hero_photo_v2')) || PERSONAL_INFO.heroImage;

  return (
    <section id="about" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div>
        <p className="font-mono text-xs text-[#7c6ef7] tracking-widest uppercase mb-2">
          // 01. about
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e8f0] mb-3">
          Who I Am
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-transparent rounded mb-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Photo Column - Professional Portrait Aspect Ratio (4:5) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-2xl bg-[#12121a] border border-[#2a2a3d] p-3 sm:p-4 shadow-2xl relative group transition-all duration-300 hover:border-[#7c6ef7]/50">
            {/* Aspect Ratio Container for Profile Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#1a1a26] border border-[#2a2a3d]/60">
              <img
                src={aboutPhoto}
                alt={`${PERSONAL_INFO.name} - Profile Photo`}
                id="about-profile-photo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback safely if image is not yet on server
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src !== PERSONAL_INFO.fallbackAboutImage) {
                    img.src = PERSONAL_INFO.fallbackAboutImage;
                  } else {
                    img.src = PERSONAL_INFO.fallbackHeroImage;
                  }
                }}
              />
              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121a]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Status Tag Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a0a0f]/85 backdrop-blur-md border border-[#2a2a3d] text-[11px] font-mono text-[#a89cf7]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>BCA AI/ML</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#888899] bg-[#0a0a0f]/85 backdrop-blur-md border border-[#2a2a3d]">
                  3rd Year
                </span>
              </div>
            </div>

            {/* Profile Caption Details */}
            <div className="pt-4 pb-1 px-1 text-center">
              <h3 className="text-xl font-bold text-[#e8e8f0] mb-0.5">{PERSONAL_INFO.name}</h3>
              <p className="text-xs font-mono text-[#a89cf7] font-semibold">
                BCA (AI / ML) · Alliance University
              </p>
              <p className="text-xs text-[#888899] mt-1">
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bio Text Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-[#888899] text-base sm:text-lg leading-relaxed">
          {/* Highlight Specialization Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#7c6ef7]/10 via-[#7c6ef7]/5 to-transparent border border-[#7c6ef7]/30 flex items-start gap-3">
            <BrainCircuit className="w-5 h-5 text-[#7c6ef7] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#a89cf7] font-semibold">
                Major Specialization
              </div>
              <div className="text-sm font-semibold text-[#e8e8f0]">
                Bachelor of Computer Applications in Artificial Intelligence & Machine Learning (BCA AI/ML)
              </div>
              <div className="text-xs text-[#888899] mt-0.5">
                Alliance University Bangalore · 3rd Year (5th Semester)
              </div>
            </div>
          </div>

          <p>
            I'm <strong className="text-[#e8e8f0] font-semibold">{PERSONAL_INFO.name}</strong>, a Computer Science student pursuing my{' '}
            <strong className="text-[#a89cf7] font-semibold">BCA specializing in Artificial Intelligence & Machine Learning (AI/ML)</strong> at{' '}
            <strong className="text-[#e8e8f0] font-semibold">Alliance University, Bangalore</strong> (currently in 3rd Year, 5th Sem).
          </p>

          <p>
            My coursework and practical projects focus on building intelligent software systems — from training machine learning models and evaluating network security datasets in Jupyter, to designing scalable business analytics dashboards and modern full-stack web applications.
          </p>

          <p>
            I am driven by turning real-world datasets into high-performance models and clean, production-ready code.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="about-github-button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold font-mono text-[#a89cf7] bg-transparent border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              View all {PERSONAL_INFO.totalRepos} repos
              <ArrowRight className="w-4 h-4 text-[#888899]" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#888899] hover:text-[#a89cf7] transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-[#7c6ef7]" />
              Academic Background
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#12121a] border border-[#2a2a3d] hover:border-[#7c6ef7] transition-all group text-center"
              >
                <div className="text-2xl font-extrabold text-[#a89cf7] tracking-tight group-hover:text-white transition-colors">
                  {stat.number}
                </div>
                <div className="text-[11px] text-[#888899] mt-0.5 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
