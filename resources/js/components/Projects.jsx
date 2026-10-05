import React from 'react';

export default function Projects({ projects }) {
  const getBadgeClass = (type) => {
    switch (type) {
      case 'haki':
        return 'bg-red-600 text-white';
      case 'thesis':
        return 'bg-blue-600 text-white';
      case 'tech':
      default:
        return 'bg-emerald-600 text-white';
    }
  };

  return (
    <section id="projects" className="bg-[#252b36] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-2">
            Proyek & <span className="text-[#f8be14]">Hak Cipta (HAKI)</span>
          </h2>
          <div className="w-16 h-1 bg-[#f8be14] mx-auto mb-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Karya teknologi, penelitian kecerdasan artifisial, dan karya cipta terdaftar resmi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects || []).map((project) => (
            <div
              key={project.id}
              className="bg-[#1e2229] border border-white/10 hover:border-[#f8be14]/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Badge Overlay */}
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-md ${getBadgeClass(
                    project.badge_type
                  )}`}
                >
                  <i className="fa-solid fa-certificate mr-1.5"></i>
                  {project.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span className="text-[#f8be14] font-bold">{project.year}</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="font-['Oswald'] text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#f8be14] transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-normal">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto">
                  {(project.tags || []).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#f8be14]/10 border border-[#f8be14]/20 text-[#f8be14] px-2.5 py-0.5 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
