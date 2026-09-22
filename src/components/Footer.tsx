import React from 'react';
import { ArrowUp, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const Footer: React.FC = () => {
  const { openOwnerModal } = usePhotos();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2a2a3d] py-10 px-6 text-center text-xs font-mono text-[#888899] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          Built with <span className="text-[#7c6ef7]">♥</span> by {PERSONAL_INFO.name} · BCA (AI/ML) 3rd Year @ Alliance University Bangalore
        </p>

        <div className="flex items-center gap-3">
          {/* Discreet Owner photo update trigger - not intrusive to public viewers */}
          <button
            onClick={openOwnerModal}
            id="owner-manage-photos-btn"
            title="Update Portfolio Photos (Alt + P)"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#2a2a3d]/50 hover:border-[#7c6ef7]/50 text-[11px] text-[#555566] hover:text-[#a89cf7] transition-colors cursor-pointer"
          >
            <Camera className="w-3 h-3 text-[#7c6ef7]" />
            <span>Update Photos</span>
          </button>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-[#a89cf7] text-[#888899] transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
