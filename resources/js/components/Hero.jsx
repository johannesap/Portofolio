import React, { useEffect, useMemo, useState } from 'react';

const DEFAULT_ROLES = [
  'Informatics Engineering Graduate',
  'Data Science & ML',
  'IT Trainer & Web Developer'
];

// Cycles through roles with a typewriter effect
function useTypewriter(words) {
  const [text, setText] = useState(words[0] || '');

  useEffect(() => {
    if (!words.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] || '');
      return undefined;
    }

    let wordIdx = 0;
    let charIdx = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const word = words[wordIdx];
      charIdx += deleting ? -1 : 1;
      setText(word.slice(0, charIdx));

      let delay = deleting ? 35 : 70;
      if (!deleting && charIdx === word.length) {
        deleting = true;
        delay = 2200;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2500);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function BinaryRain() {
  const text = useMemo(() => {
    let out = '';
    for (let r = 0; r < 40; r++) {
      for (let c = 0; c < 160; c++) {
        out += Math.random() > 0.5 ? '1' : '0';
        if (c % 8 === 7) out += ' ';
      }
      out += '\n';
    }
    return out;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden whitespace-pre font-mono text-[13px] leading-relaxed text-[#4ade80]/[0.06] [mask-image:linear-gradient(180deg,transparent,#000_25%,#000_70%,transparent)]"
    >
      {text}
    </div>
  );
}

function CodeWindow({ profile }) {
  const gpa = (profile?.gpa || '3.79').split('/')[0].trim();
  const lines = [
    <><span className="text-[#ff7b72]">class</span> <span className="text-[#ffa657]">InformaticsEngineer</span>:</>,
    <>    <span className="text-[#6e7681] italic"># S1 Teknik Informatika, {profile?.university || 'Universitas Gunadarma'}</span></>,
    <>    <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">__init__</span>(<span className="text-[#22d3ee]">self</span>):</>,
    <>        <span className="text-[#22d3ee]">self</span>.name   = <span className="text-[#a5d6ff]">"{profile?.name || 'Johannes Anugrah Prawira'}"</span></>,
    <>        <span className="text-[#22d3ee]">self</span>.degree = <span className="text-[#a5d6ff]">"S.Kom"</span></>,
    <>        <span className="text-[#22d3ee]">self</span>.gpa    = <span className="text-[#79c0ff]">{gpa}</span></>,
    <>        <span className="text-[#22d3ee]">self</span>.stack  = [<span className="text-[#a5d6ff]">"Python"</span>, <span className="text-[#a5d6ff]">"PHP"</span>, <span className="text-[#a5d6ff]">"MySQL"</span>,</>,
    <>                       <span className="text-[#a5d6ff]">"Streamlit"</span>, <span className="text-[#a5d6ff]">"Scikit-Learn"</span>]</>,
    <>        <span className="text-[#22d3ee]">self</span>.focus  = [<span className="text-[#a5d6ff]">"Data Science"</span>, <span className="text-[#a5d6ff]">"ML"</span>, <span className="text-[#a5d6ff]">"Web Dev"</span>]</>,
    <></>,
    <>    <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">contribute</span>(<span className="text-[#22d3ee]">self</span>, team):</>,
    <>        <span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">f"Siap berkontribusi untuk </span>{'{team}'}<span className="text-[#a5d6ff]">!"</span></>,
    <></>,
    <><span className="text-[#6e7681]">&gt;&gt;&gt; </span>InformaticsEngineer().<span className="text-[#d2a8ff]">contribute</span>(<span className="text-[#a5d6ff]">"Anda"</span>)</>,
    <><span className="text-[#4ade80]">'Siap berkontribusi untuk Anda!'</span></>
  ];

  return (
    <div
      className="min-w-0 bg-[#161b22] border border-white/10 rounded-xl overflow-hidden font-mono shadow-2xl shadow-black/50"
      aria-label="Profil dalam bentuk kode Python"
    >
      <div className="flex items-center gap-2 px-3.5 py-3 bg-[#0b0f14] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2.5 text-xs text-slate-400">~/portfolio/profile.py</span>
      </div>
      <pre className="p-4 sm:p-5 text-[11px] sm:text-[13px] leading-7 text-[#c9d1d9] overflow-x-auto">
        <code>
          {lines.map((line, idx) => (
            <span key={idx} className="block whitespace-pre">
              <span className="inline-block w-[2ch] mr-4 text-right text-[#484f58] select-none">{idx + 1}</span>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default function Hero({ profile }) {
  const roles = profile?.specializations?.length ? profile.specializations : DEFAULT_ROLES;
  const typed = useTypewriter(roles);
  const [firstName, ...restName] = (profile?.name || 'Johannes Anugrah Prawira').split(' ');

  const socialClass =
    'w-11 h-11 rounded-md bg-[#161b22] text-slate-300 hover:text-[#4ade80] flex items-center justify-center border border-white/10 hover:border-[#4ade80] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(74,222,128,0.28)]';

  return (
    <header
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden py-20 bg-[radial-gradient(ellipse_60%_50%_at_15%_20%,rgba(74,222,128,0.12),transparent_70%),radial-gradient(ellipse_50%_50%_at_90%_80%,rgba(34,211,238,0.1),transparent_70%)]"
    >
      <BinaryRain />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        {/* Intro */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2.5 bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] px-4 py-1.5 rounded-full font-mono text-xs sm:text-sm mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#4ade80] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#4ade80]" />
            </span>
            <span>open_to_work = True</span>
          </div>

          <p className="font-mono text-sm sm:text-base text-slate-400 mb-2">
            <span className="text-[#4ade80]">guest@jap.dev</span>:<span className="text-[#22d3ee]">~</span>$ whoami
          </p>

          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e6edf3] mb-4 leading-[1.1]">
            {firstName}{' '}
            <span className="bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent">
              {restName.join(' ')}
            </span>
          </h1>

          <div
            className="flex items-center gap-2.5 min-h-[1.8em] font-mono text-[#22d3ee] text-base sm:text-lg font-medium mb-6"
            aria-label={roles.join(', ')}
          >
            <span className="text-[#4ade80]">&gt;</span>
            <span aria-hidden="true">{typed}</span>
            <span aria-hidden="true" className="inline-block w-2.5 h-[1.15em] bg-[#4ade80] animate-pulse" />
          </div>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-9">
            {profile?.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-9">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#4ade80] hover:bg-[#22c55e] text-[#04130a] font-mono font-semibold px-5 py-3 rounded-md transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(74,222,128,0.28)] text-sm sm:text-base"
            >
              <i className="fa-solid fa-terminal"></i>
              <span>./hubungi-saya</span>
            </a>

            <a
              href={profile?.cv_files?.full || '/CV_Johannes_Anugrah_Prawira.pdf'}
              download
              className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#4ade80]/10 text-white hover:text-[#4ade80] border border-white/30 hover:border-[#4ade80] font-mono font-semibold px-5 py-3 rounded-md transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>cv.pdf</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-mono font-semibold px-5 py-3 rounded-md transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <i className="fa-solid fa-code-branch"></i>
              <span>lihat_proyek()</span>
            </a>
          </div>

          {/* Social Bar */}
          <div className="flex items-center gap-3">
            <a
              href={profile?.socials?.linkedin || 'https://www.linkedin.com/in/johannes-anugrah-prawira/'}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-lg"></i>
            </a>
            <a
              href={profile?.socials?.github || 'https://github.com/johannesap'}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              title="GitHub"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a
              href={profile?.socials?.email || 'mailto:johannespraira@gmail.com'}
              className={socialClass}
              title="Email"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
            </a>
            <a
              href={profile?.socials?.whatsapp || 'https://wa.me/6281350535029'}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>
          </div>
        </div>

        {/* Code editor window */}
        <CodeWindow profile={profile} />
      </div>
    </header>
  );
}
