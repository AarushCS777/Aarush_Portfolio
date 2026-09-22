import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { LEARNING_PATH } from '../data/portfolioData';

export const LearningPath: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div>
        <p className="font-mono text-xs text-[#7c6ef7] tracking-widest uppercase mb-2">
          // 04. journey
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e8f0] mb-3">
          My Learning Path
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-transparent rounded mb-10" />
      </div>

      <div className="relative pl-6 sm:pl-10">
        {/* Continuous gradient timeline stem */}
        <div className="absolute left-2.5 sm:left-4 top-3 bottom-6 w-0.5 bg-gradient-to-b from-[#7c6ef7] via-[#a89cf7]/50 to-transparent" />

        <div className="flex flex-col gap-10">
          {LEARNING_PATH.map((item) => (
            <div
              key={item.id}
              id={`timeline-${item.id}`}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#7c6ef7] border-4 border-[#0a0a0f] shadow-[0_0_14px_rgba(124,110,247,0.7)] group-hover:scale-125 transition-transform" />

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#12121a] border border-[#2a2a3d] group-hover:border-[#7c6ef7] transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Header row with Level and Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#7c6ef7] font-semibold">
                      {item.level}
                    </span>
                    <span className="text-[#888899] text-xs">·</span>
                    <span className="font-mono text-xs text-[#888899] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#7c6ef7]" />
                      {item.period}
                    </span>
                  </div>

                  {/* Status or Score badge */}
                  {item.statusBadge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#7c6ef7] bg-[#7c6ef7]/15 border border-[#7c6ef7]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6ef7] animate-pulse" />
                      {item.statusBadge}
                    </span>
                  )}
                  {item.score && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                      <Award className="w-3 h-3" />
                      Score: {item.score}
                    </span>
                  )}
                </div>

                {/* Title & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#e8e8f0] tracking-tight group-hover:text-white transition-colors mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#a89cf7] mb-3">
                  <GraduationCap className="w-4 h-4 text-[#7c6ef7]" />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#888899] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
