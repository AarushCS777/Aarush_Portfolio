import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div>
        <p className="font-mono text-xs text-[#7c6ef7] tracking-widest uppercase mb-2">
          // 02. skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e8f0] mb-3">
          Tools & Technologies
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-transparent rounded mb-10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#12121a] border border-[#2a2a3d] hover:border-[#7c6ef7] transition-all transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#7c6ef7] mb-3.5 font-mono">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-[#888899] bg-[#1e1e2e] border border-[#2a2a3d] hover:border-[#7c6ef7] hover:bg-[#7c6ef7]/15 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
