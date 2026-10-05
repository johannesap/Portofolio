import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#f8be14] hover:bg-[#e5ac07] text-slate-950 flex items-center justify-center text-lg shadow-xl shadow-black/40 hover:scale-110 transition-all z-50 cursor-pointer"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
