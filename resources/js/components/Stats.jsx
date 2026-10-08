import React from 'react';

export default function Stats({ statistics }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
        return <i className="fa-solid fa-award text-2xl text-[#4ade80]"></i>;
      case 'Users':
        return <i className="fa-solid fa-chalkboard-user text-2xl text-[#4ade80]"></i>;
      case 'ShieldCheck':
        return <i className="fa-solid fa-certificate text-2xl text-[#4ade80]"></i>;
      case 'Code':
      default:
        return <i className="fa-solid fa-laptop-code text-2xl text-[#4ade80]"></i>;
    }
  };

  return (
    <section id="statistic" className="bg-[#111820]/85 border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(statistics || []).map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#4ade80]/30 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4ade80]/10 mb-3 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <p className="font-mono text-3xl sm:text-4xl font-bold text-white leading-none mb-1">
                {item.value}
                <span className="text-base sm:text-lg text-[#4ade80] ml-1 font-semibold">{item.suffix}</span>
              </p>
              <small className="block text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
                {item.label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
