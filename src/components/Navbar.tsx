import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroPhoto = (typeof window !== 'undefined' && localStorage.getItem('aarush_portfolio_hero_photo_v2')) || PERSONAL_INFO.heroImage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning Path', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 h-16 flex items-center justify-between border-b ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-[#2a2a3d]'
          : 'bg-[#0a0a0f]/80 backdrop-blur-md border-[#2a2a3d]/70'
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href="#hero"
          id="nav-photo-link"
          title={`${PERSONAL_INFO.name} - Back to top`}
          className="relative p-0.5 rounded-full border border-[#7c6ef7]/50 hover:border-[#7c6ef7] transition-all hover:scale-105"
        >
          <img
            src={heroPhoto}
            alt={PERSONAL_INFO.name}
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-full object-cover object-top"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://avatars.githubusercontent.com/u/180328627?v=4';
            }}
          />
        </a>

        <a
          href="#hero"
          id="nav-logo"
          className="font-mono text-base font-semibold text-[#a89cf7] tracking-wider hover:text-white transition-colors flex items-center gap-2"
        >
          <span>
            <span className="text-[#7c6ef7]">&lt;</span>
            {PERSONAL_INFO.name}
            <span className="text-[#7c6ef7]">/&gt;</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#7c6ef7]/15 border border-[#7c6ef7]/30 text-[#a89cf7] font-mono">
            BCA AI/ML
          </span>
        </a>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-[#888899] hover:text-[#e8e8f0] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium font-mono text-[#a89cf7] bg-[#1e1e2e] border border-[#2a2a3d] hover:border-[#7c6ef7] hover:text-white transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
            <ArrowUpRight className="w-3 h-3 text-[#888899]" />
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#e8e8f0] p-1.5 rounded-lg border border-[#2a2a3d] bg-[#12121a] hover:border-[#7c6ef7] transition-colors"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed top-16 left-0 right-0 bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-[#2a2a3d] px-6 py-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#888899] hover:text-white transition-colors py-2 border-b border-[#1a1a26]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg text-sm font-mono text-[#e8e8f0] bg-[#1e1e2e] border border-[#2a2a3d]"
          >
            <Github className="w-4 h-4 text-[#a89cf7]" />
            GitHub Profile
          </a>
        </div>
      )}
    </nav>
  );
};
