import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { AikidoLogo } from './AikidoLogo';
import { MapPin, Phone, Shield } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang].footer;

  return (
    <footer className="bg-neutral-950 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand & Chief Master */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center p-1">
              <AikidoLogo size={20} fill="#FFFDF9" />
            </div>
            <span className="font-bold text-lg tracking-tight font-sans">
              ТЭНСИН АЙКИДО
            </span>
            <span className="font-kanji text-amber-400 text-sm font-bold">合氣道</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            {t.tagline}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-medium">
            <Shield className="w-3.5 h-3.5 text-red-500" />
            <span>{t.chiefMaster}</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{t.location}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{t.contacts}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};
