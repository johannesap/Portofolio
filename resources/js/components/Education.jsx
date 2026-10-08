import React from 'react';
import SectionHeader from './SectionHeader';

export default function Education({ education }) {
  return (
    <section id="education" className="bg-transparent py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          title="Jejak"
          highlight="Pendidikan"
          subtitle="Riwayat akademik formal dari jenjang pendidikan dasar hingga gelar sarjana"
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(education || []).map((edu, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl border ${
                index === 0
                  ? 'bg-[#161b22] border-[#4ade80]/40 shadow-lg'
                  : 'bg-[#161b22]/60 border-white/5 hover:border-[#4ade80]/30'
              }`}
            >
              {/* Institution Logo */}
              <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center mb-5 shadow-sm">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <span className="text-xs font-bold text-[#4ade80] uppercase tracking-wider mb-1">
                {edu.period}
              </span>

              <h3 className="font-mono text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                {edu.school}
              </h3>

              <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-3">
                {edu.degree}
              </h4>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                {edu.description}
              </p>

              {/* Score Box */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400 flex items-center gap-1 font-medium">
                  <i className="fa-solid fa-star text-amber-400 text-xs"></i>
                  {edu.score_label}:
                </span>
                <strong className="text-[#4ade80] font-bold text-sm sm:text-base">
                  {edu.score}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
