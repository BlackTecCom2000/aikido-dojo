import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface BeltProgressionSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const BeltProgressionSection: React.FC<BeltProgressionSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = translations[currentLang].belts;
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const activeBelt = t.items[selectedIdx];

  return (
    <section id="belts" className="relative bg-[#0F172A] py-24 md:py-36 px-6 text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="font-kanji font-bold">段位</span>
            <span>•</span>
            <span>Belt Grades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-4">
            {t.subtitle}
          </p>
          <p className="text-xs text-amber-300 font-mono">
            {t.gradingInfo}
          </p>
        </div>

        {/* Belt Visual Bar Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {t.items.map((belt, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center group ${
                  isSelected
                    ? 'bg-slate-800 border-amber-400 shadow-xl scale-105'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-600'
                }`}
              >
                {/* Belt Preview Stripe */}
                <div className={`w-full h-4 rounded-full mb-3 shadow-inner ${belt.beltColorClass}`} />
                <span className="text-sm font-bold text-white mb-0.5">{belt.kyu}</span>
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-full">{belt.color}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Belt Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950/40 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-sans">
                  {activeBelt.kyu} ({activeBelt.color})
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white font-sans">
                {activeBelt.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-amber-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Рекомендуемый срок: {activeBelt.duration}</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-4 font-bold">
              Ключевые требования к аттестации:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {activeBelt.skills.map((skill, sIdx) => (
                <div key={sIdx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium font-sans">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Готовы начать свой путь от белого пояса до мастера?
              </span>
              <button
                onClick={onOpenAuth}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Записаться на первую тренировку</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
