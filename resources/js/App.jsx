import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { defaultPortfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(defaultPortfolioData);

  useEffect(() => {
    // Fetch dynamic portfolio data from Laravel API endpoint
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((apiData) => {
        if (apiData && apiData.profile) {
          setData(apiData);
        }
      })
      .catch((err) => {
        console.info('Menggunakan initial portfolio data:', err.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#1e2229] text-white selection:bg-[#f8be14] selection:text-black font-sans">
      <Navbar profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <Stats statistics={data.statistics} />
        <About profile={data.profile} />
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Certifications certifications={data.certifications} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
      <BackToTop />
    </div>
  );
}
