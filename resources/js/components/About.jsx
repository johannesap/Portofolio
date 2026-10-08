import React from 'react';
import SectionHeader from './SectionHeader';

export default function About({ profile }) {
  return (
    <section id="about-me" className="bg-transparent text-slate-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          title="Tentang"
          highlight="Saya"
          subtitle="Mengenal latar belakang, visi, dan kompetensi profesional saya"
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Photo & Quick CV Box */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-[6px] border-[#161b22] ring-1 ring-[#4ade80]/35 bg-[#161b22] group mb-6">
              <img
                src={profile?.photo || '/image/profile-web.png'}
                alt={profile?.name}
                className="w-full aspect-square object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0d1117]/90 text-[#4ade80] border border-[#4ade80]/40 px-4 py-1.5 rounded-full text-xs font-mono shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check"></i>
                <span>Siap Berkontribusi</span>
              </div>
            </div>

            {/* Quick CV Download Box */}
            <div className="w-full max-w-[320px] bg-[#161b22] p-5 rounded-xl border border-white/10 text-center">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Dokumen Curriculum Vitae:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-md font-mono text-slate-300 border border-white/15 hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  <i className="fa-solid fa-file-pdf text-red-400"></i>
                  <span>CV Lengkap</span>
                </a>
                <a
                  href={profile?.cv_files?.ats || '/CV_ATS_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-md font-mono text-slate-300 border border-white/15 hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  <i className="fa-solid fa-file-lines text-sky-400"></i>
                  <span>CV ATS Format</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Quick Facts */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-[#e6edf3] leading-snug mb-4">
              Fresh Graduate Teknik Informatika dengan Minat Kuat di Data Science & IT Training
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-4">
              Lulusan S1 Teknik Informatika Universitas Gunadarma dengan fondasi praktis di bidang{' '}
              <strong className="text-[#4ade80] font-semibold">
                Data Science, Machine Learning (Python), dan Web Development (PHP, MySQL, Streamlit)
              </strong>.
            </p>

            {(profile?.about_detailed || []).map((paragraph, index) => (
              <p key={index} className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">Pendidikan</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">{profile?.degree}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">Domisili</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">{profile?.location}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">Email</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">{profile?.email}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">WhatsApp</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">{profile?.phone}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-language"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">Bahasa</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">Indonesia (Aktif), Inggris (Grade A)</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-[#161b22] rounded-xl border border-white/10 hover:border-[#4ade80]/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <small className="block text-xs font-mono text-[#22d3ee] lowercase">Hak Cipta</small>
                  <strong className="text-sm font-semibold text-[#e6edf3]">HAKI Kemenkumham RI ({profile?.haki_number})</strong>
                </div>
              </div>
            </div>

            {/* Social Connection buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <span className="text-xs sm:text-sm font-mono text-slate-500 mr-2">Terhubung dengan saya:</span>
              <a
                href={profile?.socials?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#161b22] text-slate-300 border border-white/10 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              >
                <i className="fa-brands fa-linkedin-in text-[#4f9cf9]"></i> LinkedIn
              </a>
              <a
                href={profile?.socials?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#161b22] text-slate-300 border border-white/10 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href={profile?.socials?.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#161b22] text-slate-300 border border-white/10 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-[#25d366]"></i> WhatsApp
              </a>
              <a
                href={profile?.socials?.email}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#161b22] text-slate-300 border border-white/10 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors"
              >
                <i className="fa-solid fa-envelope text-red-400"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
