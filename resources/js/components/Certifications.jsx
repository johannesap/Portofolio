import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="bg-[#1e2229] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-2">
            Sertifikasi & <span className="text-[#f8be14]">Pelatihan</span>
          </h2>
          <div className="w-16 h-1 bg-[#f8be14] mx-auto mb-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Kredensial sertifikasi resmi di bidang pemrograman, database, bahasa, dan psikometri analitis
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(certifications || []).map((cert, index) => (
            <div
              key={index}
              className="bg-[#252b36] border border-white/5 hover:border-[#f8be14]/40 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl flex flex-col group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f8be14]/10 text-[#f8be14] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#f8be14] group-hover:text-slate-950 transition-colors">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#f8be14] tracking-wide block">
                    {cert.period}
                  </span>
                  <h3 className="font-['Oswald'] text-lg font-bold text-white leading-snug mt-0.5">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-xs font-semibold text-slate-400 mb-3">
                {cert.issuer}
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                {cert.description}
              </p>

              <div className="mt-auto pt-3 border-t border-white/10">
                <span className="inline-block bg-white/5 border border-white/10 text-[#f8be14] text-xs font-semibold px-3 py-1 rounded-full">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
