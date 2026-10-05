import React from 'react';

export default function About({ profile }) {
  return (
    <section id="about-me" className="bg-[#f8fafc] text-slate-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-slate-900 mb-2">
            Tentang <span className="text-[#d97706]">Saya</span>
          </h2>
          <div className="w-16 h-1 bg-[#d97706] mx-auto mb-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Mengenal latar belakang, visi, dan kompetensi profesional saya
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Photo & Quick CV Box */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 group mb-6">
              <img
                src={profile?.photo || '/image/profile-web.png'}
                alt={profile?.name}
                className="w-full aspect-square object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600/95 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check"></i>
                <span>Siap Berkontribusi</span>
              </div>
            </div>

            {/* Quick CV Download Box */}
            <div className="w-full max-w-[320px] bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Dokumen Curriculum Vitae:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-md border border-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-file-pdf text-red-600"></i>
                  <span>CV Lengkap</span>
                </a>
                <a
                  href={profile?.cv_files?.ats || '/CV_ATS_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-md border border-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-file-lines text-blue-600"></i>
                  <span>CV ATS Format</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Quick Facts */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
              Fresh Graduate Teknik Informatika dengan Minat Kuat di Data Science & IT Training
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium mb-4">
              Lulusan S1 Teknik Informatika Universitas Gunadarma dengan fondasi praktis di bidang{' '}
              <strong className="text-slate-900 font-semibold">
                Data Science, Machine Learning (Python), dan Web Development (PHP, MySQL, Streamlit)
              </strong>.
            </p>

            {(profile?.about_detailed || []).map((paragraph, index) => (
              <p key={index} className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">Pendidikan</small>
                  <strong className="text-sm font-semibold text-slate-900">{profile?.degree}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">Domisili</small>
                  <strong className="text-sm font-semibold text-slate-900">{profile?.location}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">Email</small>
                  <strong className="text-sm font-semibold text-slate-900">{profile?.email}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">WhatsApp</small>
                  <strong className="text-sm font-semibold text-slate-900">{profile?.phone}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-language"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">Bahasa</small>
                  <strong className="text-sm font-semibold text-slate-900">Indonesia (Aktif), Inggris (Grade A)</strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <small className="block text-xs font-bold text-slate-500 uppercase">Hak Cipta</small>
                  <strong className="text-sm font-semibold text-slate-900">HAKI Kemenkumham RI ({profile?.haki_number})</strong>
                </div>
              </div>
            </div>

            {/* Social Connection buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <span className="text-xs sm:text-sm font-semibold text-slate-600 mr-2">Terhubung dengan saya:</span>
              <a
                href={profile?.socials?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0a66c2] text-white hover:opacity-90 transition-opacity"
              >
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn
              </a>
              <a
                href={profile?.socials?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#24292e] text-white hover:opacity-90 transition-opacity"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href={profile?.socials?.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25d366] text-white hover:opacity-90 transition-opacity"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
              <a
                href={profile?.socials?.email}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#ea4335] text-white hover:opacity-90 transition-opacity"
              >
                <i className="fa-solid fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
