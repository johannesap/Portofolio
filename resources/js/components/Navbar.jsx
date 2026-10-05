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
          ? 'bg-[#1e2229]/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-[#1e2229] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/image/logo.png"
              alt="Johannes Anugrah Prawira"
              className="h-10 w-auto rounded transition-transform group-hover:scale-105"
            />
            <span className="font-['Oswald'] text-xl tracking-wider font-bold text-white">
              JAP<span className="text-[#f8be14]">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-[#f8be14] bg-[#f8be14]/10 font-semibold'
                    : 'text-slate-300 hover:text-[#f8be14] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
              download
              className="inline-flex items-center gap-2 bg-[#f8be14] hover:bg-[#e5ac07] text-slate-950 font-['Oswald'] tracking-wide font-semibold px-4 py-2 rounded-md shadow-md hover:shadow-[#f8be14]/20 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <i className="fa-solid fa-download"></i>
              <span>Unduh CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#f8be14] p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark text-2xl' : 'fa-bars text-xl'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1e24] border-b border-white/10 px-4 pt-2 pb-6 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-all ${
                activeSection === link.id
                  ? 'text-[#f8be14] bg-[#f8be14]/10 font-semibold'
                  : 'text-slate-300 hover:text-[#f8be14] hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
              download
              className="w-full text-center bg-[#f8be14] hover:bg-[#e5ac07] text-slate-950 font-['Oswald'] font-semibold py-2.5 rounded-md text-sm tracking-wide"
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
