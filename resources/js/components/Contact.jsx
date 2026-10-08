import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: data.message || 'Pesan Anda telah berhasil dikirim dan tersimpan di database backend!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Validation errors
        const errorMsg = data.errors
          ? Object.values(data.errors).flat().join(', ')
          : data.message || 'Terjadi kesalahan saat mengirim pesan.';
        setStatus({
          submitting: false,
          success: false,
          message: errorMsg
        });
      }
    } catch (err) {
      // Fallback
      setStatus({
        submitting: false,
        success: false,
        message: 'Gagal menghubungi server backend. Anda juga dapat mengirimkan email langsung ke ' + profile?.email
      });
    }
  };

  return (
    <section id="contact" className="bg-[#111820]/70 py-20 lg:py-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          title="Hubungi"
          highlight="Saya"
          subtitle="Terbuka untuk peluang karir profesional, konsultasi IT training, maupun kolaborasi proyek data science & web"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-3">
                Mari Terhubung!
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Jangan ragu untuk menghubungi saya melalui kontak di bawah ini. Saya akan dengan senang hati merespons pesan Anda sesegera mungkin.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${profile?.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-[#4ade80]/50 transition-all transform hover:translate-x-1"
                >
                  <div className="w-11 h-11 rounded-full bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-slate-400 uppercase">Email Langsung</small>
                    <strong className="text-sm sm:text-base font-semibold text-white">{profile?.email}</strong>
                  </div>
                </a>

                <a
                  href={profile?.socials?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-[#4ade80]/50 transition-all transform hover:translate-x-1"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-slate-400 uppercase">WhatsApp / Telepon</small>
                    <strong className="text-sm sm:text-base font-semibold text-white">{profile?.phone}</strong>
                  </div>
                </a>

                <a
                  href={profile?.socials?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-[#4ade80]/50 transition-all transform hover:translate-x-1"
                >
                  <div className="w-11 h-11 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-slate-400 uppercase">LinkedIn Profile</small>
                    <strong className="text-sm sm:text-base font-semibold text-white">johannes-anugrah-prawira</strong>
                  </div>
                </a>

                <a
                  href={profile?.socials?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-[#4ade80]/50 transition-all transform hover:translate-x-1"
                >
                  <div className="w-11 h-11 rounded-full bg-slate-500/10 text-slate-300 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-slate-400 uppercase">GitHub Portfolio</small>
                    <strong className="text-sm sm:text-base font-semibold text-white">github.com/johannesap</strong>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5">
                  <div className="w-11 h-11 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <small className="block text-xs font-semibold text-slate-400 uppercase">Lokasi Domisili</small>
                    <strong className="text-sm sm:text-base font-semibold text-white">{profile?.location}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CV Download Card */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6">
              <h4 className="font-mono text-lg font-bold text-[#4ade80] mb-2 flex items-center gap-2">
                <i className="fa-solid fa-file-arrow-down"></i>
                <span>Unduh Berkas Curriculum Vitae</span>
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Pilih format dokumen resmi untuk pertimbangan rekrutmen perusahaan Anda:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#04130a] font-mono font-semibold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                  <span>Unduh CV Utama</span>
                </a>
                <a
                  href={profile?.cv_files?.ats || '/CV_ATS_Johannes_Anugrah_Prawira.pdf'}
                  download
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 font-mono font-semibold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
                >
                  <i className="fa-solid fa-file-lines"></i>
                  <span>Unduh CV ATS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
              <h3 className="font-mono text-2xl font-bold text-white mb-2">
                Kirim Pesan Langsung (Laravel Backend API)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Formulir ini divalidasi dan disimpan langsung oleh sistem backend Laravel Database.
              </p>

              {status.message && (
                <div
                  className={`p-4 rounded-xl text-sm mb-6 flex items-start gap-3 ${
                    status.success
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/60 border border-red-500/40 text-red-300'
                  }`}
                >
                  <i
                    className={`fa-solid mt-0.5 ${
                      status.success ? 'fa-circle-check text-emerald-400' : 'fa-circle-exclamation text-red-400'
                    }`}
                  ></i>
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nama Lengkap <span className="text-[#4ade80]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Alamat Email <span className="text-[#4ade80]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Subjek Pesan
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Peluang Kerja / Kolaborasi / Konsultasi"
                    className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Pesan <span className="text-[#4ade80]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tuliskan pesan atau detail penawaran Anda di sini..."
                    className="w-full px-4 py-3 bg-[#161b22] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition-all text-sm resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#4ade80] hover:bg-[#22c55e] text-[#04130a] font-mono font-bold text-base uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#4ade80]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status.submitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Mengirim ke Server Laravel...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
