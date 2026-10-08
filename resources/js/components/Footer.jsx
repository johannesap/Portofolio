import React from 'react';

export default function Footer({ profile }) {
  return (
    <footer className="bg-[#090c10] border-t border-white/5 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/image/logo.png"
                alt="Johannes Anugrah Prawira"
                className="h-10 w-auto rounded"
              />
              <span className="font-mono text-xl font-bold text-white">
                <span className="text-[#22d3ee]">&lt;</span>JAP<span className="text-[#4ade80]">.dev</span>
                <span className="text-[#22d3ee]"> /&gt;</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-slate-400">
              Portofolio profesional resmi Johannes Anugrah Prawira, S1 Teknik Informatika Universitas Gunadarma. Dibangun menggunakan teknologi modern React, Tailwind CSS, dan Laravel backend.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-lg font-bold text-white uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#4ade80] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about-me" className="hover:text-[#4ade80] transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#4ade80] transition-colors">
                  Pengalaman Kerja
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#4ade80] transition-colors">
                  Proyek & HAKI
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#4ade80] transition-colors">
                  Keahlian Teknis
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4ade80] transition-colors">
                  Hubungi Saya
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-lg font-bold text-white uppercase tracking-wider mb-4">
              Koneksi Sosial
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={profile?.socials?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-linkedin text-blue-400"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={profile?.socials?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-github text-white"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile?.email}`}
                  className="hover:text-[#4ade80] transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-envelope text-red-400"></i>
                  <span>Email Langsung</span>
                </a>
              </li>
              <li>
                <a
                  href={profile?.socials?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center font-mono text-xs text-slate-500">
          <p>© 2026 Johannes Anugrah Prawira. All rights reserved. Powered by Laravel + React + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
