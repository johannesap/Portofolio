import React, { useState } from 'react';

export default function Experience({ experiences }) {
  const [activeTab, setActiveTab] = useState('work');

  const currentList = activeTab === 'work' ? experiences?.work || [] : experiences?.organization || [];

  return (
    <section id="experience" className="bg-[#1e2229] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-2">
            Pengalaman <span className="text-[#f8be14]">Profesional</span>
          </h2>
          <div className="w-16 h-1 bg-[#f8be14] mx-auto mb-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Rekam jejak pengalaman kerja, pengajaran, serta kepemimpinan organisasi
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-md font-['Oswald'] text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-[#f8be14] text-slate-950 shadow-lg shadow-[#f8be14]/20 scale-105'
                : 'bg-[#252b36] text-slate-300 hover:text-white hover:bg-[#2f3644] border border-white/5'
            }`}
          >
            <i className="fa-solid fa-briefcase"></i>
            <span>Pengalaman Kerja & Mengajar</span>
          </button>

          <button
            onClick={() => setActiveTab('organization')}
            className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-md font-['Oswald'] text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeTab === 'organization'
                ? 'bg-[#f8be14] text-slate-950 shadow-lg shadow-[#f8be14]/20 scale-105'
                : 'bg-[#252b36] text-slate-300 hover:text-white hover:bg-[#2f3644] border border-white/5'
            }`}
          >
            <i className="fa-solid fa-users-gear"></i>
            <span>Pengalaman Organisasi</span>
          </button>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="bg-[#252b36] border border-white/5 hover:border-[#f8be14]/40 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#f8be14]/40 group-hover:bg-[#f8be14] transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pl-3">
                <div>
                  <h3 className="font-['Oswald'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {item.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-[#f8be14] font-medium flex items-center gap-1.5 mt-0.5">
                    <i className="fa-solid fa-building-columns text-xs"></i>
                    <span>{item.institution} — {item.location}</span>
                  </h4>
                </div>
                <span className="self-start sm:self-auto bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.period}
                </span>
              </div>

              {/* Tasks bullet list */}
              <ul className="space-y-2.5 mb-6 pl-3">
                {(item.points || []).map((point, pIdx) => (
                  <li key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-2">
                    <span className="text-[#f8be14] mt-1 font-bold">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 pl-3">
                {(item.skills || []).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-2.5 py-1 rounded text-xs font-medium transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
