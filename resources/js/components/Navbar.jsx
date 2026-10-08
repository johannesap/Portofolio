import React, { useState, useEffect } from 'react';

export default function Navbar({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'home',
        'about-me',
        'experience',
        'projects',
        'education',
        'skills',
        'certifications',
        'contact'
      ];

      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', id: 'home', label: 'Beranda' },
    { href: '#about-me', id: 'about-me', label: 'Tentang' },
    { href: '#experience', id: 'experience', label: 'Pengalaman' },
    { href: '#projects', id: 'projects', label: 'Proyek & HAKI' },
    { href: '#education', id: 'education', label: 'Pendidikan' },
    { href: '#skills', id: 'skills', label: 'Keahlian' },
    { href: '#certifications', id: 'certifications', label: 'Sertifikasi' },
    { href: '#contact', id: 'contact', label: 'Kontak' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/90 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-[#0d1117]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 xl:gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/image/logo.png"
              alt="Johannes Anugrah Prawira"
              className="h-9 sm:h-10 w-auto rounded transition-transform group-hover:scale-105"
            />
            <span className="font-mono text-base sm:text-lg font-bold text-white whitespace-nowrap">
              <span className="text-[#22d3ee]">&lt;</span>JAP<span className="text-[#4ade80]">.dev</span>
              <span className="text-[#22d3ee]"> /&gt;</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                className={`inline-flex items-center justify-center px-2 xl:px-2.5 py-1.5 xl:py-2 font-mono text-xs xl:text-[13px] font-medium whitespace-nowrap rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-[#4ade80] bg-[#4ade80]/15 font-semibold ring-1 ring-[#4ade80]/30'
                    : 'text-slate-300 hover:text-[#4ade80] hover:bg-white/5'
                }`}
              >
                <span className="hidden 2xl:inline text-[#4ade80] text-[10px] mr-1">0{idx + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
              download
              className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#04130a] font-mono tracking-wide font-semibold px-3.5 xl:px-4 py-2 xl:py-2.5 rounded-lg shadow-md hover:shadow-[#4ade80]/20 transition-all transform hover:-translate-y-0.5 text-xs xl:text-sm whitespace-nowrap"
            >
              <i className="fa-solid fa-download"></i>
              <span>cv.pdf</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#4ade80] p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark text-2xl' : 'fa-bars text-xl'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d1117] border-b border-white/10 px-4 pt-2 pb-6 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md font-mono text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'text-[#4ade80] bg-[#4ade80]/15 font-semibold'
                  : 'text-slate-300 hover:text-[#4ade80] hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
              download
              className="w-full text-center bg-[#4ade80] hover:bg-[#22c55e] text-[#04130a] font-mono font-semibold py-2.5 rounded-md text-sm tracking-wide uppercase"
            >
              <i className="fa-solid fa-download mr-2"></i>
              Unduh CV Lengkap
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
