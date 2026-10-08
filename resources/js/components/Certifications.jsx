import React from 'react';
import SectionHeader from './SectionHeader';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="bg-[#161b22] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          title="Sertifikasi &"
          highlight="Pelatihan"
          subtitle="Kredensial sertifikasi resmi di bidang pemrograman, database, bahasa, dan psikometri analitis"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(certifications || []).map((cert, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-white/5 hover:border-[#4ade80]/40 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl flex flex-col group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#4ade80] group-hover:text-[#04130a] transition-colors">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4ade80] tracking-wide block">
                    {cert.period}
                  </span>
                  <h3 className="font-mono text-lg font-bold text-white leading-snug mt-0.5">
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
                <span className="inline-block bg-white/5 border border-white/10 text-[#4ade80] text-xs font-semibold px-3 py-1 rounded-full">
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
