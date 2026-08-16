import React, { useState } from 'react';
import type { Language, StudentRegistration } from '../types';
import { translations } from '../i18n/translations';
import { AikidoLogo } from './AikidoLogo';
import { UserPlus, UserCheck, Globe, ChevronDown, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAuth: () => void;
  student: StudentRegistration | null;
  onOpenBadge: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenAuth,
  student,
  onOpenBadge,
  onOpenAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = translations[currentLang].nav;

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'РУС', flag: '🇷🇺' },
    { code: 'en', label: 'ENG', flag: '🇬🇧' },
    { code: 'tg', label: 'ТОҶ', flag: '🇹🇯' },
  ];

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex flex-col items-center">
      {/* Floating Pill Container */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 shadow-2xl flex items-center justify-between border border-white/20 transition-all duration-300">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#2C221E] text-white flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-200">
            <AikidoLogo size={20} fill="#F5EFE6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-kanji font-bold text-red-700 leading-none">
                {t.kanji}
              </span>
              <span className="text-sm sm:text-base font-bold tracking-tight text-black leading-none font-sans">
                {t.brandName}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Admin CRM Button */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 border border-amber-500/30 text-xs font-semibold transition-colors"
            title="Панель Администратора Додзё"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden md:inline">CRM Учеников</span>
          </button>

          {/* Language Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-600" />
              <span>{languages.find((l) => l.code === currentLang)?.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 p-1 min-w-[110px] animate-fade-in-down z-50"
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentLang === lang.code
                        ? 'bg-red-50 text-red-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{lang.flag} {lang.label}</span>
                    {currentLang === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Student Status or Register Button */}
          {student ? (
            <button
              onClick={onOpenBadge}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.myAccount}</span>
              <span className="sm:hidden">{student.fullName.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
            >
              <UserPlus className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.register}</span>
            </button>
          )}

          {/* Animated Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1 rounded-full hover:bg-slate-100 transition-colors relative"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-5 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                isOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                isOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Nav Dropdown Container */}
      <div
        className={`w-full max-w-md mt-3 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-100/50 transition-all duration-300 transform origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1 font-medium">
          <button
            onClick={() => scrollToSection('about')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.philosophy}</span>
            <span className="text-xs font-kanji text-slate-400">和</span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.techniques}</span>
            <span className="text-xs font-kanji text-slate-400">技</span>
          </button>
          <button
            onClick={() => scrollToSection('sensei')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.sensei}</span>
            <span className="text-xs font-kanji text-slate-400">師</span>
          </button>
          <button
            onClick={() => scrollToSection('belts')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.belts}</span>
            <span className="text-xs font-kanji text-slate-400">段</span>
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.schedule}</span>
            <span className="text-xs font-kanji text-slate-400">時</span>
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.reviews}</span>
            <span className="text-xs font-kanji text-slate-400">評</span>
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="py-2 px-3 rounded-xl text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors text-xs sm:text-sm font-semibold flex items-center justify-between"
          >
            <span>{t.faq}</span>
            <span className="text-xs font-kanji text-slate-400">問</span>
          </button>
          
          <div className="h-[1px] bg-slate-100 my-1" />

          {/* Admin CRM Entry in Mobile Menu */}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenAdmin();
            }}
            className="py-2 px-3 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 transition-colors text-xs sm:text-sm font-bold flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Панель Администратора (CRM)</span>
            </div>
            <span className="text-[10px] font-mono bg-amber-200/80 px-2 py-0.5 rounded-full">ADMIN</span>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenAuth();
            }}
            className="py-2.5 px-4 rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mt-1"
          >
            <UserPlus className="w-4 h-4 text-amber-400" />
            <span>{t.register}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
