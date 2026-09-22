import React from 'react';
import { Github, ExternalLink, BarChart3, ShieldCheck, Globe, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  // SVG vector icons ONLY - absolutely no emojis!
  const getProjectSvgIcon = (iconType: string) => {
    switch (iconType) {
      case 'analytics':
        return <BarChart3 className="w-5 h-5 text-[#a89cf7]" />;
      case 'security':
        return <ShieldCheck className="w-5 h-5 text-[#a89cf7]" />;
      case 'fullstack':
        return <Globe className="w-5 h-5 text-[#a89cf7]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#a89cf7]" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div>
        <p className="font-mono text-xs text-[#7c6ef7] tracking-widest uppercase mb-2">
          // 03. projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e8e8f0] mb-3">
          Things I've Built
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-transparent rounded mb-10" />
      </div>

      {/* Grid of 3 selected projects without emojis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group relative p-7 rounded-xl bg-[#12121a] border border-[#2a2a3d] hover:border-[#7c6ef7] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(124,110,247,0.12)] overflow-hidden"
          >
            {/* Subtle top accent gradient line on hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7c6ef7] to-[#a89cf7] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header with Clean SVG Vector Icon (No Emojis) and GitHub Links */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div
                  className="w-11 h-11 rounded-lg bg-[#1e1e2e] border border-[#2a2a3d] group-hover:border-[#7c6ef7]/50 flex items-center justify-center transition-colors"
                  title={project.title}
                >
                  {getProjectSvgIcon(project.iconType)}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[#2a2a3d] bg-[#1a1a26]/70 flex items-center justify-center text-[#888899] hover:text-[#a89cf7] hover:border-[#7c6ef7] hover:bg-[#7c6ef7]/15 transition-all"
                    title="View Source on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-[#2a2a3d] bg-[#1a1a26]/70 flex items-center justify-center text-[#888899] hover:text-white hover:border-[#7c6ef7] hover:bg-[#7c6ef7]/15 transition-all"
                    title="Open Project"
                    aria-label={`Open ${project.title} link`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#e8e8f0] tracking-tight group-hover:text-white transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-[#888899] leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            {/* Tags & Action Link */}
            <div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1a1a26] mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#a89cf7] bg-[#1e1e2e] border border-[#2a2a3d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#888899] group-hover:text-[#a89cf7] transition-colors"
              >
                <span>github.com/AarushCS777/{project.id}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
