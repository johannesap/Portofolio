import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Experience({ experiences }) {
  const [activeTab, setActiveTab] = useState('work');

  const currentList = activeTab === 'work' ? experiences?.work || [] : experiences?.organization || [];

  return (
    <section id="experience" className="bg-transparent py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          title="Pengalaman"
          highlight="Profesional"
          subtitle="Rekam jejak pengalaman kerja, pengajaran, serta kepemimpinan organisasi"
          className="mb-14"
        />

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-md font-mono text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-[#4ade80] text-[#04130a] shadow-lg shadow-[#4ade80]/20 scale-105'
                : 'bg-[#161b22] text-slate-300 hover:text-white hover:bg-[#1c2430] border border-white/5'
            }`}
          >
            <i className="fa-solid fa-briefcase"></i>
            <span>Pengalaman Kerja & Mengajar</span>
          </button>

          <button
            onClick={() => setActiveTab('organization')}
            className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-md font-mono text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeTab === 'organization'
                ? 'bg-[#4ade80] text-[#04130a] shadow-lg shadow-[#4ade80]/20 scale-105'
                : 'bg-[#161b22] text-slate-300 hover:text-white hover:bg-[#1c2430] border border-white/5'
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
              className="bg-[#161b22] border border-white/5 hover:border-[#4ade80]/40 rounded-xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4ade80]/40 group-hover:bg-[#4ade80] transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pl-3">
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {item.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-[#4ade80] font-medium flex items-center gap-1.5 mt-0.5">
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
                    <span className="text-[#4ade80] mt-1 font-bold">▸</span>
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
