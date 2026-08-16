import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Sparkles, ShieldCheck, Award } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = translations[currentLang].hero;

  return (
    <section className="relative h-screen w-full overflow-hidden mb-[-25px]">
      {/* Background Aikido Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-105"
        poster="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Semi-transparent dark overlay with sumi ink gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/35 backdrop-blur-[1px]" />

      {/* Dynamic Ambient Ki Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Japanese Traditional Kanji Watermark */}
      <div className="absolute top-1/4 right-8 md:right-16 text-white/5 text-8xl md:text-9xl font-kanji font-bold pointer-events-none select-none">
        合氣道
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-14 md:pb-18 text-center items-center">
        {/* Chief Shihan & Academy Badge */}
        <div className="flex flex-col items-center gap-2 mb-4 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            <span className="text-amber-400 font-kanji font-bold">合氣道</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>{t.badge}</span>
          </div>

          <div className="px-4 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-amber-300 text-[11px] sm:text-xs font-medium backdrop-blur-sm">
            🥋 {t.chiefSenseiBadge}
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal text-white leading-[1.1] tracking-tight max-w-5xl mb-4 font-sans">
          <span>{t.headingLine1} </span>
          <br className="hidden sm:inline" />
          <em 
            className="not-italic text-amber-100 drop-shadow-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
          >
            {t.headingLine2Italic}
          </em>
          {t.headingLine2Suffix && <span> {t.headingLine2Suffix}</span>}
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
          {t.subtitle}
        </p>

        {/* Floating CTA Bar */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/15 rounded-2xl p-1.5 sm:pl-6 sm:pr-1.5 flex flex-col sm:flex-row items-center gap-3 shadow-2xl max-w-2xl w-full">
          <div className="text-white text-xs sm:text-sm font-medium text-center sm:text-left flex-1 py-1 sm:py-0">
            <span className="hidden sm:inline">{t.ctaDesktop}</span>
            <span className="sm:hidden">{t.ctaMobile}</span>
          </div>

          <button
            onClick={onOpenAuth}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t.ctaButton}</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-white/75 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.stats.dojoYears}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.stats.activeStudents}</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="flex items-center gap-1.5">
            <span className="font-kanji text-red-400 font-bold">段</span>
            <span>{t.stats.blackBelts}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
