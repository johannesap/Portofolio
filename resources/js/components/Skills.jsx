import React from 'react';
import SectionHeader from './SectionHeader';

export default function Skills({ skills }) {
  const getCategoryIcon = (icon) => {
    switch (icon) {
      case 'BrainCircuit':
        return <i className="fa-solid fa-chart-line text-[#4ade80] text-xl"></i>;
      case 'Code2':
        return <i className="fa-solid fa-code text-[#4ade80] text-xl"></i>;
      case 'Database':
        return <i className="fa-solid fa-database text-[#4ade80] text-xl"></i>;
      case 'GraduationCap':
      default:
        return <i className="fa-solid fa-users-rays text-[#4ade80] text-xl"></i>;
    }
  };

  return (
    <section id="skills" className="bg-[#111820]/70 py-20 lg:py-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          title="Keahlian &"
          highlight="Kompetensi"
          subtitle="Kombinasi kemampuan teknis data science, web development, tools rekayasa, dan soft skills"
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(skills || []).map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#161b22] border border-white/10 hover:border-[#4ade80]/40 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-mono text-xl font-bold text-white tracking-wide">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {(cat.skills || []).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-[#4ade80]/15 hover:text-[#4ade80] border border-white/10 hover:border-[#4ade80]/30 text-slate-300 transition-all cursor-default"
                  >
                    <span>{skill}</span>
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
