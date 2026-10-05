import React from 'react';

export default function Skills({ skills }) {
  const getCategoryIcon = (icon) => {
    switch (icon) {
      case 'BrainCircuit':
        return <i className="fa-solid fa-chart-line text-[#f8be14] text-xl"></i>;
      case 'Code2':
        return <i className="fa-solid fa-code text-[#f8be14] text-xl"></i>;
      case 'Database':
        return <i className="fa-solid fa-database text-[#f8be14] text-xl"></i>;
      case 'GraduationCap':
      default:
        return <i className="fa-solid fa-users-rays text-[#f8be14] text-xl"></i>;
    }
  };

  return (
    <section id="skills" className="bg-[#252b36] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-2">
            Keahlian & <span className="text-[#f8be14]">Kompetensi</span>
          </h2>
          <div className="w-16 h-1 bg-[#f8be14] mx-auto mb-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Kombinasi kemampuan teknis data science, web development, tools rekayasa, dan soft skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(skills || []).map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#1e2229] border border-white/10 hover:border-[#f8be14]/40 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#f8be14]/10 flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-['Oswald'] text-xl font-bold text-white tracking-wide">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {(cat.skills || []).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-[#f8be14]/15 hover:text-[#f8be14] border border-white/10 hover:border-[#f8be14]/30 text-slate-300 transition-all cursor-default"
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
