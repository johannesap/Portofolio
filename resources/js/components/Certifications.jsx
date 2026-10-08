import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Certifications({ certifications }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="bg-[#161b22] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          title="Sertifikasi &"
          highlight="Pelatihan"
          subtitle="Kredensial sertifikasi resmi di bidang pemrograman C#, web engineering, database, UI/UX, bahasa, dan psikometri"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(certifications || []).map((cert, index) => (
            <div
              key={cert.id || index}
              className="bg-[#1c2128] border border-white/10 hover:border-[#4ade80]/40 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl flex flex-col group"
            >
              {/* Certificate Image Thumbnail (if available) */}
              {cert.image && (
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950/60 border-b border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() =>
                      setSelectedImage({
                        src: cert.image,
                        title: cert.title,
                        file: cert.file,
                        id: cert.credential_id
                      })
                    }
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c2128] via-transparent to-black/30 pointer-events-none" />

                  {/* Certificate ID Badge */}
                  {cert.credential_id && (
                    <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-white/10 text-[#4ade80] text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow">
                      {cert.credential_id}
                    </div>
                  )}

                  {/* Expand Preview Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        src: cert.image,
                        title: cert.title,
                        file: cert.file,
                        id: cert.credential_id
                      })
                    }
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-[#4ade80] text-white hover:text-black w-8 h-8 rounded-lg flex items-center justify-center text-xs backdrop-blur-sm transition-colors shadow"
                    title="Pratinjau Sertifikat"
                  >
                    <i className="fa-solid fa-expand"></i>
                  </button>
                </div>
              )}

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Header for cards with image */}
                {cert.image ? (
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                      <span className="text-[#4ade80] font-semibold">{cert.period}</span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[180px]">
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#4ade80] transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                ) : (
                  /* Header for cards without image */
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#4ade80] group-hover:text-[#04130a] transition-colors">
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#4ade80] tracking-wide block">
                        {cert.period}
                      </span>
                      <h3 className="font-mono text-base sm:text-lg font-bold text-white leading-snug mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                )}

                {!cert.image && (
                  <h4 className="text-xs font-semibold text-slate-400 mb-3">
                    {cert.issuer}
                  </h4>
                )}

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                {/* Subject / Skills Tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-block text-[11px] font-medium bg-white/5 border border-white/5 text-slate-300 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer with Badge & Action */}
                <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <span className="inline-block bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full truncate">
                    {cert.badge}
                  </span>

                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#4ade80] font-medium transition-colors"
                      title="Lihat / Unduh Dokumen Resmi (PDF)"
                    >
                      <i className="fa-solid fa-file-pdf text-red-400"></i>
                      <span>PDF</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-[#1c2128] border border-white/10 rounded-2xl max-w-2xl w-full p-4 overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="pr-4 truncate">
                <h4 className="font-mono text-sm sm:text-base font-bold text-white truncate">
                  {selectedImage.title}
                </h4>
                {selectedImage.id && (
                  <span className="text-xs text-[#4ade80] font-mono">
                    {selectedImage.id}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg text-lg transition-colors hover:bg-white/5"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-auto rounded-lg bg-black/40 flex justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-contain max-h-[68vh]"
              />
            </div>
            {selectedImage.file && (
              <div className="pt-3 mt-3 border-t border-white/10 flex justify-end gap-2">
                <a
                  href={selectedImage.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Buka di Tab Baru</span>
                </a>
                <a
                  href={selectedImage.file}
                  download
                  className="inline-flex items-center gap-2 bg-[#f8be14] hover:bg-[#e5ac07] text-slate-950 font-semibold px-4 py-2 rounded-lg text-xs transition-colors shadow"
                >
                  <i className="fa-solid fa-download"></i>
                  <span>Unduh Sertifikat (PDF)</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
