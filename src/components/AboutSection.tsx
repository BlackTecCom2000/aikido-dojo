import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { AikidoLogo } from './AikidoLogo';
import { Mail, Award } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = translations[currentLang].about;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="relative z-10 bg-[#F5EFE6] rounded-t-[32px] py-20 md:py-32 px-6 overflow-hidden text-[#2C221E]"
    >
      {/* Top Area (Master's Message & Quote) */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EBE3D7]/80 border border-[#D4C3A3] shadow-sm mb-8 relative">
          <p className="text-[#2C221E] text-base md:text-xl font-serif italic leading-relaxed mb-4">
            {t.quote}
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs sm:text-sm font-bold text-red-800 font-sans tracking-wide">
              {t.quoteAuthor}
            </span>
            {/* Japanese Hanko Master Seal */}
            <div className="w-8 h-8 rounded-md bg-red-700 text-white font-kanji font-bold text-xs flex items-center justify-center border border-red-900 shadow-inner select-none">
              印
            </div>
          </div>
        </div>

        {/* Two Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAuth}
            className="group flex items-center gap-3 bg-[#2C221E] hover:bg-[#1A1310] text-[#FFFDF9] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all transform hover:scale-105 shadow-md"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#2C221E] flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Mail className="w-4 h-4 text-red-700" />
            </span>
            <span>{t.btnSayHello}</span>
          </button>

          <button
            onClick={() => scrollToSection('sensei')}
            className="group flex items-center gap-3 bg-[#D4C3A3] hover:bg-[#C5AF89] text-[#2C221E] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all transform hover:scale-105 shadow-sm"
          >
            <span className="w-7 h-7 rounded-full bg-white text-[#2C221E] flex items-center justify-center group-hover:rotate-45 transition-transform">
              <Award className="w-4 h-4 text-amber-700" />
            </span>
            <span>{t.btnStayInformed}</span>
          </button>
        </div>
      </div>

      {/* Decorative Enso Divider */}
      <div className="max-w-5xl mx-auto my-14 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4C3A3]" />
        <div className="flex-1 h-[2px] bg-[#D4C3A3]/60" />
        
        {/* Custom Zen Enso Brush Circle SVG */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#EBE3D7] rounded-full border border-[#D4C3A3]/80">
          <svg className="w-6 h-6 text-red-700" viewBox="0 0 100 100" fill="none">
            <path 
              d="M 50,10 A 40,40 0 1,1 15,50" 
              stroke="currentColor" 
              strokeWidth="10" 
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-kanji font-bold text-[#2C221E]">
            {t.ensoCaption}
          </span>
        </div>

        <div className="flex-1 h-[2px] bg-[#D4C3A3]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4C3A3]" />
      </div>

      {/* Bottom Area (Logo + Main Text Statement + 4 Pillars) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left Column: Logo & Tagline */}
        <div className="flex md:flex-col items-center md:items-start gap-4 shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-[#2C221E] text-[#FFFDF9] flex items-center justify-center p-2 shadow-lg">
            <AikidoLogo size={36} fill="#F5EFE6" />
          </div>
          <div className="text-xs uppercase tracking-widest font-bold text-[#2C221E]/80 leading-tight">
            <span>{t.tagline.split('/')[0]}</span>
            <br />
            <span className="text-red-700">{t.tagline.split('/')[1]}</span>
          </div>
        </div>

        {/* Right Column: Large Paragraph */}
        <div className="flex-1">
          <p className="text-lg sm:text-2xl md:text-3xl leading-[1.35] font-normal text-[#2C221E] font-sans mb-8">
            {t.mainParagraph}
          </p>

          <p className="text-sm sm:text-base font-serif italic text-red-900 mb-12 bg-red-900/5 p-4 rounded-2xl border-l-4 border-red-700">
            {t.senseiWelcome}
          </p>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#D4C3A3]">
            {t.pillars.map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#EBE3D7]/70 border border-[#D4C3A3]/50 hover:bg-[#FFFDF9] transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-kanji font-bold text-red-700">
                    {pillar.kanji}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#2C221E]/40">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#2C221E] mb-2 font-sans">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#2C221E]/75 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
