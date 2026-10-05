import React from 'react';

export default function Hero({ profile }) {
  return (
    <header id="home" className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden py-20" style={{ backgroundImage: "url('/image/bg-header.jpeg')" }}>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#161a21]/95 via-[#1e2229]/90 to-[#14181e]/95 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f8be14]/15 border border-[#f8be14]/30 text-[#f8be14] px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
          <i className="fa-solid fa-hand-wave"></i>
          <span>HALO! SAYA</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-['Oswald'] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          {profile?.name || 'Johannes Anugrah Prawira'}
        </h1>

        {/* Subtitle / Roles */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[#f8be14] font-semibold text-sm sm:text-lg mb-6">
          {(profile?.specializations || [
            'Informatics Engineering Graduate',
            'Data Science & ML',
            'IT Trainer & Web Developer'
          ]).map((item, idx, arr) => (
            <React.Fragment key={idx}>
              <span className="tracking-wide">{item}</span>
              {idx < arr.length - 1 && <span className="text-slate-500">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Elevator pitch */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          {profile?.summary}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#f8be14] hover:bg-[#e5ac07] text-slate-950 font-['Oswald'] font-semibold px-6 py-3.5 rounded-md shadow-lg shadow-[#f8be14]/20 hover:shadow-[#f8be14]/30 transition-all transform hover:-translate-y-0.5 text-base tracking-wide"
          >
            <i className="fa-solid fa-envelope"></i>
            <span>HUBUNGI SAYA</span>
          </a>

          <a
            href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
            download
            className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/10 text-white hover:text-[#f8be14] border border-white/30 hover:border-[#f8be14] font-['Oswald'] font-semibold px-6 py-3.5 rounded-md transition-all transform hover:-translate-y-0.5 text-base tracking-wide"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>UNDUH CV (PDF)</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-['Oswald'] font-semibold px-6 py-3.5 rounded-md transition-all transform hover:-translate-y-0.5 text-base tracking-wide backdrop-blur-sm"
          >
            <i className="fa-solid fa-layer-group"></i>
            <span>LIHAT PORTOFOLIO</span>
          </a>
        </div>

        {/* Social Bar */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={profile?.socials?.linkedin || 'https://www.linkedin.com/in/johannes-anugrah-prawira/'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f8be14] text-white hover:text-slate-950 flex items-center justify-center border border-white/15 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-[#f8be14]/20"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-lg"></i>
          </a>
          <a
            href={profile?.socials?.github || 'https://github.com/johannesap'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f8be14] text-white hover:text-slate-950 flex items-center justify-center border border-white/15 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-[#f8be14]/20"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>
          <a
            href={profile?.socials?.email || 'mailto:johannespraira@gmail.com'}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f8be14] text-white hover:text-slate-950 flex items-center justify-center border border-white/15 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-[#f8be14]/20"
            title="Email"
          >
            <i className="fa-solid fa-envelope text-lg"></i>
          </a>
          <a
            href={profile?.socials?.whatsapp || 'https://wa.me/6281350535029'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f8be14] text-white hover:text-slate-950 flex items-center justify-center border border-white/15 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-[#f8be14]/20"
            title="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
