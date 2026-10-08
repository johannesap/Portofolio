import React from 'react';

export default function SectionHeader({ index, title, highlight, subtitle, className = 'mb-16' }) {
  return (
    <div className={`text-center ${className}`}>
      <span className="block font-mono text-xs sm:text-sm text-slate-500 tracking-wider mb-3">
        // {index}.
      </span>
      <h2 className="font-mono text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#e6edf3] mb-4">
        <span className="text-[#22d3ee]">&lt;</span>
        {title} <span className="text-[#4ade80]">{highlight}</span>
        <span className="text-[#22d3ee]"> /&gt;</span>
      </h2>
      <div className="w-24 h-[3px] bg-gradient-to-r from-[#4ade80] to-[#22d3ee] mx-auto mb-4 rounded-full" />
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
        <span className="font-mono text-slate-600">/* </span>
        {subtitle}
        <span className="font-mono text-slate-600"> */</span>
      </p>
    </div>
  );
}
